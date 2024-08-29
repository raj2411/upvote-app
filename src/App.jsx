import React from 'react';
import './App.css';
import UpvoteList from './components/upVoteList';

function App() {
  return (
    <div className="App">
      <h1>Upvote Lists</h1>
      <div className="upvote-lists-container">
        <UpvoteList storageKey="upvoteList1" />
        <UpvoteList storageKey="upvoteList2" />
        <UpvoteList storageKey="upvoteList3" />

      </div>
    </div>
  );
}

export default App;