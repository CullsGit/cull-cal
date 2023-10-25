import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment/moment";
import {
  getActivitiesFromLocalStorage,
  saveActivitiesToLocalStorage,
} from "../helpers/localStorageHelper";

const localizer = momentLocalizer(moment);

const addActivityToEntireMonth = (startDate, endDate, title) => ({
  title: title,
  start: startDate.toDate(),
  end: endDate.toDate(),
  id: Math.floor(Math.random() * 16777215).toString(16),
  completed: false,
});

const Calendar = () => {
  const today = moment();
  const year = today.year();
  const month = today.month() + 1;

  const [activities, setActivities] = useState(getActivitiesFromLocalStorage());
  const [newActivityTitle, setNewActivityTitle] = useState("");

  useEffect(() => {
    saveActivitiesToLocalStorage(activities);
  }, [activities]);

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
          value={newActivityTitle}
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
