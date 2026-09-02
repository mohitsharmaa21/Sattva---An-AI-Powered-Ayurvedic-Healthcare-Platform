/**
 * Indian Standard Time (IST) Background Utility
 * Accurately computes IST timezone (Asia/Kolkata) date, time, and dynamic greetings.
 */

export function getISTDetails() {
  const now = new Date();

  // Robust IST hour calculation (0-23)
  const istDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const hour = istDate.getHours();

  let greeting = "Good morning";
  let doshaPeriod = "Kapha Phase (Calm & Grounding)";

  if (hour >= 4 && hour < 12) {
    // 04:00 AM - 11:59 AM
    greeting = "Good morning";
    doshaPeriod = "Kapha/Pitta Morning Phase · Vitality & Agni Awakening";
  } else if (hour >= 12 && hour < 17) {
    // 12:00 PM - 04:59 PM
    greeting = "Good afternoon";
    doshaPeriod = "Pitta Afternoon Phase · Peak Metabolic Transformation";
  } else if (hour >= 17 && hour < 22) {
    // 05:00 PM - 09:59 PM
    greeting = "Good evening";
    doshaPeriod = "Vata/Kapha Twilight Phase · Relaxation & Winding Down";
  } else {
    // 10:00 PM - 03:59 AM (Includes midnight 12:00 AM - 03:59 AM)
    greeting = "Good night";
    doshaPeriod = "Ratri Rest Phase · Cellular Healing & Ojas Recovery";
  }

  const dateString = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now).toUpperCase();

  const timeString = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  return {
    hour,
    greeting,
    doshaPeriod,
    dateString,
    timeString: `${timeString} IST`,
  };
}
