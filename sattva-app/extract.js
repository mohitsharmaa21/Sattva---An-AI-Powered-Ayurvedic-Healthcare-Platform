import fs from "fs";

try {
  const logPath =
    "C:\\Users\\kapni\\.gemini\\antigravity\\brain\\6fc8ffc9-201c-472b-86b7-84359cf08bc6\\.system_generated\\logs\\overview.txt";
  const data = fs.readFileSync(logPath, "utf8");

  const blocks = data.split("TargetFile");
  let bestCss = "";

  for (let block of blocks) {
    if (block.includes("styles.css") && block.includes("CodeContent")) {
      const startIndex = block.indexOf("CodeContent:") + 12;
      const endIndex = block.indexOf(",Description:");
      if (startIndex > 11 && endIndex > startIndex) {
        let css = block.substring(startIndex, endIndex);
        css = css.replace(/^[^v{:.#a-zA-Z]+/, "");
        if (css.length > bestCss.length) {
          bestCss = css;
        }
      }
    }
  }

  fs.writeFileSync("src/styles_recovered.css", bestCss, "utf8");
  console.log("Saved best CSS chunk of length", bestCss.length);
} catch (err) {
  console.error(err);
}
