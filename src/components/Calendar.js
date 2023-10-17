import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment/moment";
import {
  convertDateToDay,
  daysOfWeek,
  firstDayOfMonth,
} from "../helpers/dateConverter";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const today = new Date();
  const [currentDay, setCurrentDay] = useState(convertDateToDay(today));
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startingDay = firstDayOfMonth(year, month);

  return (
    <>
      <BigCalendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
};

export default Calendar;
