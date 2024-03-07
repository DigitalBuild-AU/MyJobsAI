import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import SkillsInventoryPage from '../pages/SkillsInventoryPage';

jest.mock('axios');

const mockSkills = ['React', 'Node.js'];

beforeEach(() => {
  axios.get.mockResolvedValue({ data: mockSkills });
  axios.post.mockResolvedValue({});
});

test('renders without crashing', async () => {
  const { getByPlaceholderText, getByText } = render(&lt;SkillsInventoryPage /&gt;);
  await waitFor(() => expect(getByPlaceholderText('Add a new skill')).toBeInTheDocument());
  expect(getByText('Save Skills')).toBeInTheDocument();
});

test('fetching skills successfully', async () => {
  const { getByText } = render(&lt;SkillsInventoryPage /&gt;);
  await waitFor(() => expect(getByText('React')).toBeInTheDocument());
  expect(getByText('Node.js')).toBeInTheDocument();
});

test('adding a new skill updates the state and displays the new skill', async () => {
  const { getByPlaceholderText, getByText, getByRole } = render(&lt;SkillsInventoryPage /&gt;);
  fireEvent.change(getByPlaceholderText('Add a new skill'), { target: { value: 'Vue.js' } });
  fireEvent.click(getByRole('button', { name: 'Add Skill' }));
  await waitFor(() => expect(getByText('Vue.js')).toBeInTheDocument());
});

test('submitting skills successfully', async () => {
  render(&lt;SkillsInventoryPage /&gt;);
  fireEvent.click(getByText('Save Skills'));
  await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/skills', { skills: mockSkills }));
});

test('handles error fetching skills gracefully', async () => {
  axios.get.mockRejectedValue(new Error('Failed to fetch skills'));
  const { getByText } = render(&lt;SkillsInventoryPage /&gt;);
  await waitFor(() => expect(getByText('Failed to fetch skills')).toBeInTheDocument());
});

test('handles error submitting skills gracefully', async () => {
  axios.post.mockRejectedValue(new Error('Failed to save skills'));
  const { getByText } = render(&lt;SkillsInventoryPage /&gt;);
  fireEvent.click(getByText('Save Skills'));
  await waitFor(() => expect(getByText('Failed to save skills')).toBeInTheDocument());
});
