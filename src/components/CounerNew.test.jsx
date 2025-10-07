import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import CounterNew from "./CounterNew";

test("render count and button", () => {
  render(<CounterNew />);
  expect(screen.getByText(/Count:/)).toBeInTheDocument();
  expect(screen.getByText("+")).toBeInTheDocument();
  expect(screen.getByText("-")).toBeInTheDocument();
  expect(screen.getByText("reset")).toBeInTheDocument();
});

test("check Inc, Dec and Reset Button", () => {
  render(<CounterNew />);
  const incButton = screen.getByText("+");
  const decButton = screen.getByText("-");
  const resetButton = screen.getByText("reset");

  const countText = () => screen.getByText(/Count:/);

  fireEvent.click(incButton);
  expect(countText()).toHaveTextContent("Count: 1");

  fireEvent.click(decButton);
  expect(countText()).toHaveTextContent("Count: 0");

  fireEvent.click(resetButton);
  expect(countText()).toHaveTextContent("Count: 0");
});

test("decrement and reset button disabled", () => {
  render(<CounterNew />);

  const decrementBtn = screen.getByText("-");
  const resetBtn = screen.getByText("reset");

  expect(decrementBtn).toBeDisabled();
  expect(resetBtn).toBeDisabled();
});

test("decrement and reset button enabled", () => {
  render(<CounterNew />);

  const incrementBtn = screen.getByText("+");
  const decrementBtn = screen.getByText("-");
  const resetBtn = screen.getByText("reset");

  fireEvent.click(incrementBtn);
  expect(decrementBtn).toBeEnabled();
  expect(resetBtn).toBeEnabled();
});
