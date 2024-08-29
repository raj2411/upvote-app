import React from 'react';
import UpvoteButton from './upVote';
import './upVoteList.css';
import { useUpvoteContext } from '../hooks/useUpvoteContext';

const UpvoteList = ({ storageKey }) => {
  const { UpvoteProvider, useUpvote } = useUpvoteContext(storageKey);

  const UpvoteListContent = () => {
    const { upvotes, toggleUpvote, addUpvote } = useUpvote();

    return (
      <div className="upvote-list">
        {upvotes.map((isSelected, index) => (
          <UpvoteButton
            key={index}
            id={`upvote-button-${index}`}  // Use data-testid for each upvote button
            selected={isSelected}
            onClick={() => toggleUpvote(index)}
          />
        ))}
        <button
          data-testid="upvote-add-button"  // Use data-testid for the add button
          className="add-button"
          onClick={addUpvote}
        >
          +
        </button>
      </div>
    );
  };

  return (
    <UpvoteProvider>
      <UpvoteListContent />
    </UpvoteProvider>
  );
};

export default UpvoteList;
