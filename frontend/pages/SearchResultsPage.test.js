/**
 * Tests for the SearchResultsPage component.
 * This file includes tests for verifying the correct rendering and functionality of the SearchResultsPage component, based on different sets of search results.
 */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchResultsPage from './SearchResultsPage';
import JobListingCard from '../components/JobListingCard';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

const mockData = {
  jobs: [{ id: '1', jobTitle: 'Software Engineer', company: 'Tech Corp', location: 'Remote' }],
  contacts: [{ id: '2', name: 'John Doe' }],
  tasks: [{ id: '3', title: 'Follow up with HR' }],
};

describe('SearchResultsPage', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ query: 'Engineer' });
    axios.get.mockResolvedValue({ data: mockData });
  });

  // Verifies that the search query is displayed correctly on the page.
  test('displays the search query', async () => {
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText(/Search Results for "Engineer"/)).toBeInTheDocument();
    });
  });

  test('correctly renders job listings when data is returned from the API', async () => {
  // Tests that the search query is correctly displayed on the page.
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('Software Engineer')).toBeInTheDocument();
      expect(screen.getByText('Tech Corp')).toBeInTheDocument();
      expect(screen.getByText('Remote')).toBeInTheDocument();
    });
  });

  test('displays appropriate message when no job listings are found', async () => {
  // Verifies that job listings are rendered correctly when data is returned from the API.
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: mockData.contacts, tasks: mockData.tasks } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No job listings found.')).toBeInTheDocument();
    });
  });

  test('correctly renders contacts when data is returned from the API', async () => {
    render(<SearchResultsPage />);
describe('renderJobs function', () => {
  test('correctly renders job listings with non-empty data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: mockData.jobs, contacts: [], tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    });
  });

  test('displays "No job listings found." message with empty data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: [], tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No job listings found.')).toBeInTheDocument();
    });
  });

  test('displays "No job listings found." message with null data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: null, contacts: [], tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No job listings found.')).toBeInTheDocument();
    });
  });
});

describe('renderContacts function', () => {
  test('correctly renders contacts with non-empty data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: mockData.contacts, tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  test('displays "No contacts found." message with empty data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: [], tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No contacts found.')).toBeInTheDocument();
    });
  });

  test('displays "No contacts found." message with null data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: null, tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No contacts found.')).toBeInTheDocument();
    });
  });
});

describe('renderTasks function', () => {
  test('correctly renders tasks with non-empty data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: [], tasks: mockData.tasks } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('Follow up with HR')).toBeInTheDocument();
    });
  });

  test('displays "No tasks found." message with empty data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: [], tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No tasks found.')).toBeInTheDocument();
    });
  });

  test('displays "No tasks found." message with null data', async () => {
    axios.get.mockResolvedValue({ data: { jobs: [], contacts: [], tasks: null } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No tasks found.')).toBeInTheDocument();
    });
  });
});
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  test('displays appropriate message when no contacts are found', async () => {
  // Checks that an appropriate message is displayed when no job listings are found.
  // Verifies that contacts are rendered correctly when data is returned from the API.
    axios.get.mockResolvedValue({ data: { jobs: mockData.jobs, contacts: [], tasks: mockData.tasks } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No contacts found.')).toBeInTheDocument();
    });
  });

  test('correctly renders tasks when data is returned from the API', async () => {
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('Follow up with HR')).toBeInTheDocument();
    });
  });

  test('displays appropriate message when no tasks are found', async () => {
  // Checks that an appropriate message is displayed when no contacts are found.
  // Verifies that tasks are rendered correctly when data is returned from the API.
    axios.get.mockResolvedValue({ data: { jobs: mockData.jobs, contacts: mockData.contacts, tasks: [] } });
    axios.get.mockResolvedValue({ data: { jobs: mockData.jobs, contacts: mockData.contacts, tasks: [] } });
    render(<SearchResultsPage />);
    await waitFor(() => {
      expect(screen.getByText('No tasks found.')).toBeInTheDocument();
    });
  });
});
  // Checks that an appropriate message is displayed when no tasks are found.
