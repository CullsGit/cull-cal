import React from "react";
import moment from "moment/moment";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Calendar from "./Calendar";

it("renders Calendar component correctly", () => {
  render(<Calendar />);
  const today = moment();
  const expectedMonthYear = today.format("MMMM YYYY");

  const inputElement = screen.getByPlaceholderText("Enter Activity");
  const addButton = screen.getByText("Add");
  const monthHeader = screen.getByText(expectedMonthYear);

  expect(inputElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
  expect(monthHeader).toBeInTheDocument();
});
