import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useHistory } from 'react-router-dom';
import GlobalSearchBar from './GlobalSearchBar';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

describe('GlobalSearchBar Component', () => {
  test('updates input field value when user types', () => {
    render(<GlobalSearchBar />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'React' } });
    expect(input.value).toBe('React');
  });

  test('redirects user to SearchResultsPage with correct query parameter on search button click', () => {
    const mockHistoryPush = jest.fn();
    useHistory.mockReturnValue({ push: mockHistoryPush });

    render(<GlobalSearchBar />);
    const input = screen.getByPlaceholderText('Search...');
    const button = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(input, { target: { value: 'React' } });
    fireEvent.click(button);

    expect(mockHistoryPush).toHaveBeenCalledWith('/search/React');
  });
});
