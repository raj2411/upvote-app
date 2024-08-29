import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UpvoteButton from './upVoteButton';
import { vi } from 'vitest';

test('should toggle selection state on click', () => {
  const handleClick = vi.fn();
  render(<UpvoteButton selected={false} onClick={handleClick} />);

  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
