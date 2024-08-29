import { render, screen, fireEvent } from '@testing-library/react';
import Upvote from '../components/upVote';
import { vi } from 'vitest';
import '@testing-library/jest-dom'; 

test('should toggle selection state on click', () => {
  const handleClick = vi.fn();
  const { rerender } = render(<Upvote isSelected={false} onClick={handleClick} />);
  
  const upvoteButton = screen.getByTestId('upvote-button');
  
  // Initially not selected
  expect(upvoteButton).not.toHaveClass('selected');

  // Click to select
  fireEvent.click(upvoteButton);
  expect(handleClick).toHaveBeenCalled();
  
  // Simulate prop update by re-rendering
  rerender(<Upvote isSelected={true} onClick={handleClick} />);
  expect(upvoteButton).toHaveClass('selected');
});
