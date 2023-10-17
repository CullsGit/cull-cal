import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment/moment";

const localizer = momentLocalizer(moment);

const generateEvents = (month, year) => {
  const numDaysInMonth = moment(`${year}-${month}`, "YYYY-M").daysInMonth();
  const events = [];

  for (let day = 1; day <= numDaysInMonth; day++) {
    const startDate = moment(`${year}-${month}-${day} 00:00`, "YYYY-M-D HH:mm");
    const endDate = moment(`${year}-${month}-${day} 23:59`, "YYYY-M-D HH:mm");

    events.push({
      title: "Running",
      start: startDate.toDate(),
      end: endDate.toDate(),
    });
  }

  return events;
};

const Calendar = () => {
  const today = moment();

  const year = today.year();
  const month = today.month() + 1;

  const events = generateEvents(month, year);
  return (
    <>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
};

export default Calendar;
