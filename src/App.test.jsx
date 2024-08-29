import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('App renders multiple UpvoteLists and they behave independently', () => {
  const { getAllByTestId } = render(<App />);

  // Check if there are 3 add buttons
  const addButtons = getAllByTestId('upvote-add-button');
  expect(addButtons.length).toBe(3);

  // Click the add button in the first list
  fireEvent.click(addButtons[0]);

  // Ensure there are now 10 upvote buttons (initial 3 in each list + 1 added in 1st list)
  const upvoteButtonsAfterFirstAdd = getAllByTestId('upvote-button');
  expect(upvoteButtonsAfterFirstAdd.length).toBe(10);

  // Click the add button in the second list
  fireEvent.click(addButtons[1]);

  // Ensure there are now 5 upvote buttons (10 in total before + 1 added to the second list)
  const upvoteButtonsAfterSecondAdd = getAllByTestId('upvote-button');
  expect(upvoteButtonsAfterSecondAdd.length).toBe(11);
});
