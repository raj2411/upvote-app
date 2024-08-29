import React from 'react';
import PlusIcon from '../assets/plus.svg';

const UpvoteButton = ({ selected, onClick, id }) => {
  return (
    <button
      data-testid= "upvote-add-button"   // Use data-testid for easier testing
      onClick={onClick}
      style={{
        backgroundColor: selected ? '#E5E8FD' : '#F4F6F8',
        border: 'none',
        borderRadius: '4px',
        padding: '8px',
        cursor: 'pointer',
      }}
    >
      <img
        src={PlusIcon}
        alt="upvote"
        width="24"
        height="24"
        style={{ fill: selected ? '#253CF2' : '#343A40' }}
      />
    </button>
  );
};

export default UpvoteButton;
