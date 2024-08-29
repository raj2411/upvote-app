import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
import '@testing-library/jest-dom'; 

describe('App component', () => {
  it('should render the App component with three UpvoteLists', () => {
    render(<App />);
    
    const titleElement = screen.getByText(/Upvote Lists/i);
    expect(titleElement).toBeInTheDocument(); 
    
    const upvoteLists = screen.getAllByTestId('upvote-list');
    expect(upvoteLists.length).toBe(3);
  });
});
