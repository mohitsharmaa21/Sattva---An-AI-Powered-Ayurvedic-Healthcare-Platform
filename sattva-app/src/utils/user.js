export const getActiveUser = () => {
  let name = localStorage.getItem("sattva_user");
  if (!name) {
    const names = ["Mohit Sharma", "Dhwani"];
    name = names[Math.floor(Math.random() * names.length)];
    localStorage.setItem("sattva_user", name);
  }
  return name;
};

export const getUserInitials = (name) => {
  if (!name) return "";
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

export const randomizeUser = () => {
  const names = ["Mohit Sharma", "Dhwani"];
  const name = names[Math.floor(Math.random() * names.length)];
  localStorage.setItem("sattva_user", name);
  return name;
};
