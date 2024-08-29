import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpvoteButton from './upVoteButton';

test('should toggle selection state on click', () => {
    const handleClick = jest.fn();
    render(<UpvoteButton selected={false} onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});
