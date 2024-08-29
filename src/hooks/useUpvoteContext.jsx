import React, { createContext, useContext, useState, useEffect } from 'react';

// Custom hook to create a new context and provide it
export const useUpvoteContext = (storageKey) => {
  const UpvoteContext = createContext();

  const UpvoteProvider = ({ children }) => {
    const [upvotes, setUpvotes] = useState(() => {
      const storedUpvotes = localStorage.getItem(storageKey);
      return storedUpvotes ? JSON.parse(storedUpvotes) : [false, false, false];
    });

    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(upvotes));
    }, [upvotes]);

    const getMajorityState = (upvotes) => {
      const selectedCount = upvotes.filter(Boolean).length;
      return selectedCount > upvotes.length / 2;
    };

    const toggleUpvote = (index) => {
      setUpvotes((prevUpvotes) =>
        prevUpvotes.map((selected, i) =>
          i === index ? !selected : selected
        )
      );
    };

    const addUpvote = () => {
      const majorityState = getMajorityState(upvotes);
      setUpvotes((prevUpvotes) => [...prevUpvotes, majorityState]);
    };

    return (
      <UpvoteContext.Provider value={{ upvotes, toggleUpvote, addUpvote }}>
        {children}
      </UpvoteContext.Provider>
    );
  };

  const useUpvote = () => {
    const context = useContext(UpvoteContext);
    if (!context) {
      throw new Error('useUpvote must be used within an UpvoteProvider');
    }
    return context;
  };

  return { UpvoteProvider, useUpvote };
};
