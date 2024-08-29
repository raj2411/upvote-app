Upvote Application
Overview
This project is a simple upvote application that demonstrates the use of React, context hooks, and unit testing with Vitest. The application consists of multiple UpvoteList components, each containing a list of upvote buttons and an "Add" button. Each UpvoteList can add more upvote buttons independently.

Setup
Prerequisites
Node.js (>= 14.0.0)
npm (>= 6.0.0) or yarn (>= 1.0.0)

Installation

Clone the repository:
git clone https://github.com/your-username/upvote-app.git
cd upvote-app

Install dependencies:
npm install

Run the application:
npm start

Testing
To run the unit tests for the application, use:
npm test

Test Files
App.test.jsx: Tests for the App component to ensure multiple UpvoteList components behave independently.
UpvoteList.test.jsx: Tests for the UpvoteList component, verifying initialization and functionality of the upvote list.
Upvote.test.jsx: Tests for the Upvote component, checking the toggle functionality.