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

export function firstDayOfMonth(year, month) {
  const dayOfWeekNumber = new Date(year, month, 1).getDay();
  const formattedIndex = dayOfWeekNumber === 0 ? 6 : dayOfWeekNumber - 1;
  return daysOfWeek[formattedIndex];
}
