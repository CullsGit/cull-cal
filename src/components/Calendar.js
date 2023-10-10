import React, { useState } from "react";
import { convertDateToDay, daysOfWeek } from "../helpers/dateConverter";

const Calendar = () => {
  const today = new Date();
  const [currentDay, setCurrentDay] = useState(convertDateToDay(today));
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  return (
    <>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
      </table>
    </>
  );
};

export default Calendar;
