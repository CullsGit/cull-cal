export const getActivitiesFromLocalStorage = () => {
  const storedActivities = localStorage.getItem("activities");
  return storedActivities ? JSON.parse(storedActivities) : [];
};

export const saveActivitiesToLocalStorage = (activities) => {
  localStorage.setItem("activities", JSON.stringify(activities));
};
