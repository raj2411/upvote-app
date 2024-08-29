# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Here's a README file for your project, including instructions on how to get started, test the app, and deploy it. Feel free to adjust the content according to your specific requirements.

Upvote App
Description
The Upvote App allows users to interact with upvote buttons, track upvote states, and add new upvotes with majority rules. It is built with React and uses Vite for development and build tooling.

Features
Multiple Upvote Lists: The app supports multiple lists of upvote buttons.
Upvote Toggle: Users can toggle the selection state of upvote buttons.
Dynamic Upvotes: Users can add new upvotes based on the majority state.

Live Demo
You can view the live demo of the Upvote App at https://upvoteapp-rajpatel.netlify.app.

Getting Started
To get started with the Upvote App, follow these steps:

Prerequisites

Ensure you have the following installed:
Node.js (v16 or higher)
npm (comes with Node.js)

Installation
Clone the repository:
git clone https://github.com/raj2411/upvote-app.git
cd upvote-app

Install dependencies:
npm install

Development
npm run dev
This will start the Vite development server and open the app in your default browser. Any changes you make will be automatically reflected in the browser.

Building
npm run build
The build artifacts will be generated in the dist directory.

Testing
npm test
This command will execute the unit tests using Vitest. Ensure your test files are properly set up before running this command.