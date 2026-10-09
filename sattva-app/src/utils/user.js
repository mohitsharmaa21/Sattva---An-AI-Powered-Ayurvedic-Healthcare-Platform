export const PATIENT_NAMES = [
  "Mohit Sharma",
  "Dhwani"
];

export const DOCTOR_NAMES = [
  "Dr. Ananya Sharma",
  "Dr. Rohan Mehta",
  "Dr. Kavita Iyer",
  "Dr. Arjun Patel",
  "Dr. Meera Joshi",
  "Dr. Sanjay Verma"
];

export const randomizeUser = (role = "patient") => {
  let name = "";
  if (role === "doctor") {
    name = DOCTOR_NAMES[Math.floor(Math.random() * DOCTOR_NAMES.length)];
  } else {
    // 3:2 ratio -> 60% probability for Mohit Sharma, 40% for Dhwani
    name = Math.random() < 0.6 ? "Mohit Sharma" : "Dhwani";
  }
  localStorage.setItem("sattva_user", name);
  return name;
};

export const getActiveUser = (role = "patient") => {
  let name = localStorage.getItem("sattva_user");
  if (role === "doctor") {
    if (!name || !name.startsWith("Dr.")) {
      name = randomizeUser("doctor");
    }
  } else {
    // Strictly restrict patient name to "Mohit Sharma" or "Dhwani" with 3:2 ratio
    if (!name || (name !== "Mohit Sharma" && name !== "Dhwani")) {
      name = randomizeUser("patient");
    }
  }
  return name;
};

export const getUserInitials = (name) => {
  if (!name) return "";
  const cleanName = name.replace(/^Dr\.\s*/i, "");
  const parts = cleanName.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return cleanName.slice(0, 2).toUpperCase();
};

export const setActiveUser = (name) => {
  if (name) {
    localStorage.setItem("sattva_user", name);
  }
  return name;
};
