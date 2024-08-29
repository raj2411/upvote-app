import React from 'react';
import Upvote from './upVote';
import './upVoteList.css';
import { useUpvoteContext } from '../hooks/useUpvoteContext';

const UpvoteList = ({ storageKey }) => {
  const { UpvoteProvider, useUpvote } = useUpvoteContext(storageKey);

  const UpvoteListContent = () => {
    const { upvotes, toggleUpvote, addUpvote } = useUpvote();

    return (
      <div className="upvote-list">
        {upvotes.map((isSelected, index) => (
          <Upvote
            key={index}
            isSelected={isSelected}
            onClick={() => toggleUpvote(index)}
          />
        ))}
        <button className="add-button" onClick={addUpvote}>
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
