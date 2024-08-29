import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UpvoteList from '../components/upVoteList';
import '@testing-library/jest-dom'; 

describe('UpvoteList component', () => {
  it('should toggle upvote state on click', () => {
    render(<UpvoteList storageKey="upvoteList1" />);
    
    const upvoteButtons = screen.getAllByTestId('upvote-button');
    fireEvent.click(upvoteButtons[0]);
    
    expect(upvoteButtons[0]).toHaveClass('selected');
  });

  it('should add a new upvote with majority state on add button click', () => {
    render(<UpvoteList storageKey="upvoteList1" />);
    
    const initialUpvotes = screen.getAllByTestId('upvote-button').length;
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.click(addButton);
    
    const newUpvotes = screen.getAllByTestId('upvote-button');
    expect(newUpvotes.length).toBe(initialUpvotes + 1);
  });
});
