export function convertDateToDay(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekNumber = date.getDay();
  return daysOfWeek[dayOfWeekNumber];
}
