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

test("initial State is 0", () => {
  render(<Counter />);
  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 0");
});

test("reset button enable", async () => {
  render(<Counter />);

  const incBtn = screen.getByText("+");
  const resetBtn = screen.getByText("Reset");

  await fireEvent.click(incBtn);
  await fireEvent.click(resetBtn);

  expect(screen.getByText(/Count:/)).toHaveTextContent("Count: 0");
});

test("multiple increment and decrement", async () => {
  render(<Counter />);
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

