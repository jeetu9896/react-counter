import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import Counter from './Counter';

test('renders counter and buttons', () => {
  render(<Counter />);
  expect(screen.getByText(/Count:/)).toBeInTheDocument();
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('-')).toBeInTheDocument();
  expect(screen.getByText('Reset')).toBeInTheDocument();
});

test('increments and decrements count', () => {
  render(<Counter />);
  const incrementBtn = screen.getByText('+');
  const decrementBtn = screen.getByText('-');
  const resetBtn = screen.getByText('Reset')
  const countText = () => screen.getByText(/Count:/);

  fireEvent.click(incrementBtn);
  expect(countText()).toHaveTextContent('Count: 1');

  fireEvent.click(decrementBtn);
  expect(countText()).toHaveTextContent('Count: 0');

  fireEvent.click(resetBtn);
  expect(countText()).toHaveTextContent('Count: 0');
});