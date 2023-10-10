export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function convertDateToDay(date) {
  const dayOfWeekNumber = date.getDay();
  const formattedIndex = dayOfWeekNumber === 0 ? 6 : dayOfWeekNumber - 1;
  return daysOfWeek[formattedIndex];
}
