import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UpvoteButton from './upVote';
import { vi } from 'vitest';

test('Upvote component toggles selection state on click', () => {
  const handleClick = vi.fn();
  const { getByTestId } = render(<UpvoteButton selected={false} onClick={handleClick} id="upvote-button" />);

  const button = getByTestId('upvote-button');

  // Simulate a click
  fireEvent.click(button);

  // Check if the onClick handler was called
  expect(handleClick).toHaveBeenCalled();
});
