import React from "react";
import moment from "moment/moment";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Calendar from "./Calendar";

const today = moment();

it("renders Calendar component correctly", () => {
  render(<Calendar />);
  const expectedMonthYear = today.format("MMMM YYYY");

  const inputElement = screen.getByPlaceholderText("Enter Activity");
  const addButton = screen.getByText("Add");
  const monthHeader = screen.getByText(expectedMonthYear);

  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(monthHeader).toBeInTheDocument();
});

it("successfully adds an activity to every day of the month after user input", () => {
  render(<Calendar />);

  const daysInCurrentMonth = today.daysInMonth();

  const inputElement = screen.getByPlaceholderText("Enter Activity");
  const addButton = screen.getByText("Add");

  fireEvent.change(inputElement, { target: { value: "Read" } });
  fireEvent.click(addButton);

  const addedActivities = screen.getAllByText("Read");

  expect(addedActivities.length).toBe(daysInCurrentMonth);
});
