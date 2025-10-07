import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "./Counter";

test("renders counter and buttons", () => {
  render(<Counter />);
  expect(screen.getByText(/Count:/)).toBeInTheDocument();
  expect(screen.getByText("+")).toBeInTheDocument();
  expect(screen.getByText("-")).toBeInTheDocument();
  expect(screen.getByText("Reset")).toBeInTheDocument();
});

test("increments and decrements count", () => {
  render(<Counter />);
  const incrementBtn = screen.getByText("+");
  const decrementBtn = screen.getByText("-");
  const resetBtn = screen.getByText("Reset");
  const countText = () => screen.getByText(/Count:/);

  fireEvent.click(incrementBtn);
  expect(countText()).toHaveTextContent("Count: 1");

  fireEvent.click(decrementBtn);
  expect(countText()).toHaveTextContent("Count: 0");

  fireEvent.click(resetBtn);
  expect(countText()).toHaveTextContent("Count: 0");
});

test("decrement and reset button is disabled", () => {
  render(<Counter />);
  const decrementBtn = screen.getByText("-");
  const resetBtn = screen.getByText("Reset");

  expect(decrementBtn).toBeDisabled();
  expect(resetBtn).toBeDisabled();
});

test("decrement and reset button is enable", () => {
  render(<Counter />);
  const incrementBtn = screen.getByText("+");
  const decrementBtn = screen.getByText("-");
  const resetBtn = screen.getByText("Reset");

  fireEvent.click(incrementBtn);
  expect(decrementBtn).toBeEnabled();
  expect(resetBtn).toBeEnabled();
});
