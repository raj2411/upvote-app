import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UpvoteList from './upVoteList';
import { useUpvoteContext } from '../hooks/useUpvoteContext';
import { vi } from 'vitest';

vi.mock('../hooks/useUpvoteContext', () => ({
  useUpvoteContext: vi.fn(),
}));

test('UpvoteList initializes with 3 upvotes and adds more', () => {
  const mockContext = {
    upvotes: [false, false, false],
    toggleUpvote: vi.fn(),
    addUpvote: vi.fn(),
  };

  useUpvoteContext.mockReturnValue({
    UpvoteProvider: ({ children }) => <div>{children}</div>,
    useUpvote: () => mockContext,
  });

  const { getByTestId, getAllByTestId } = render(<UpvoteList storageKey="testKey" />);

  // Check initial upvotes
  const upvotes = getAllByTestId('upvote-button');
  expect(upvotes.length).toBe(3);

  // Simulate clicking the add button
  const addButton = getByTestId('upvote-add-button');
  fireEvent.click(addButton);

  // Check if addUpvote was called
  expect(mockContext.addUpvote).toHaveBeenCalled();
});
