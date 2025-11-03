import fs from "fs";
import path from "path";

const filePath = path.resolve("src/data/events.json");

// Load current events
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

// Map of weekly events
const eventSchedule = [
  { day: "Monday", time: "6:00 PM WAT", dayIndex: 1 },
  { day: "Thursday", time: "6:00 PM WAT", dayIndex: 4 },
  { day: "Friday", time: "7:00 PM WAT", dayIndex: 5 },
  { day: "Saturday", time: "8:00 PM WAT", dayIndex: 6 },
];

// Get next date for a given day
function getNextDate(dayIndex) {
  const today = new Date();
  const next = new Date(today);
  next.setDate(today.getDate() + ((7 + dayIndex - today.getDay()) % 7 || 7));
  return next.toDateString();
}

// Update each event
data.events = eventSchedule.map((schedule, i) => ({
  ...data.events[i],
  date: `${schedule.day}, ${getNextDate(schedule.dayIndex)}`,
  time: schedule.time,
}));

// Save back to file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log("✅ events.json updated with new dates and times!");
