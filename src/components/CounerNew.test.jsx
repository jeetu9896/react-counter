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

test("initial State is 0", () => {
  render(<CounterNew />);
  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 0");
});

test("reset button enable", async () => {
  render(<CounterNew />);

  const incBtn = screen.getByText("+");
  const resetBtn = screen.getByText("reset");

  await fireEvent.click(incBtn);
  await fireEvent.click(resetBtn);

  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 0");
});

test("multiple increment and decrement", async () => {
  render(<CounterNew />);
  const incBtn = screen.getByText("+");
  const decBtn = screen.getByText("-");

  await fireEvent.click(incBtn);
  await fireEvent.click(incBtn);
  await fireEvent.click(incBtn);
  await fireEvent.click(incBtn);

  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 4");

  await fireEvent.click(decBtn);
  await fireEvent.click(decBtn);
  await fireEvent.click(decBtn);

  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 1");
});

