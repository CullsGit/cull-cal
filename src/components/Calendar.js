import React, { useState } from "react";
import {
  convertDateToDay,
  daysOfWeek,
  firstDayOfMonth,
} from "../helpers/dateConverter";

const Calendar = () => {
  const today = new Date();
  const [currentDay, setCurrentDay] = useState(convertDateToDay(today));
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startingDay = firstDayOfMonth(year, month);

  const dayCells = [];
  for (let day = 1; day <= daysInMonth; day++) {
    dayCells.push(
      <div key={day} className="day-cell">
        {day}
      </div>
    );
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
          <tr>{dayCells}</tr>
        </thead>
      </table>
    </>
  );
};

export default Calendar;
