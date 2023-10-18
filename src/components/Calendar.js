import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment/moment";

const localizer = momentLocalizer(moment);

const addActivityToEntireMonth = (startDate, endDate, title) => ({
  title: title,
  start: startDate.toDate(),
  end: endDate.toDate(),
});

const Calendar = () => {
  const today = moment();
  const year = today.year();
  const month = today.month() + 1;

  const [activities, setActivities] = useState([]);
  const [newActivityTitle, setNewActivityTitle] = useState("");

  const handleAddActivity = () => {
    if (newActivityTitle.trim() !== "") {
      const numDaysInMonth = moment(`${year}-${month}`, "YYYY-M").daysInMonth();
      const newActivities = [];

      for (let day = 1; day <= numDaysInMonth; day++) {
        const startDate = moment(
          `${year}-${month}-${day} 00:00`,
          "YYYY-M-D HH:mm"
        );
        const endDate = moment(
          `${year}-${month}-${day} 23:59`,
          "YYYY-M-D HH:mm"
        );

        const newActivity = addActivityToEntireMonth(
          startDate,
          endDate,
          newActivityTitle
        );
        newActivity.id = Math.floor(Math.random() * 16777215).toString(16);
        newActivity.completed = false;

        newActivities.push(newActivity);
      }

      setActivities([...activities, ...newActivities]);
      setNewActivityTitle("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(event) => setNewActivityTitle(event.target.value)}
          placeholder="Enter Activity"
        />
        <button onClick={handleAddActivity}>Add</button>
      </div>
      <BigCalendar
        localizer={localizer}
        events={activities}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor: event.completed ? "green" : "red",
            },
          };
        }}
        onSelectEvent={(event) => {
          const updatedActivities = activities.map((a) =>
            a.id === event.id ? { ...a, completed: !a.completed } : a
          );
          setActivities(updatedActivities);
        }}
        style={{ height: 500 }}
      />
    </>
  );
};

export default Calendar;
