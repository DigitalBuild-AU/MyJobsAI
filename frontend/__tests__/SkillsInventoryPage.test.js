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

// Tests that the Skills Inventory Page renders without crashing.
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
/**
 * Test suite for the Skills Inventory Page.
 * 
 * This file tests the Skills Inventory feature, including rendering of the page, fetching and displaying skills, adding new skills, and submitting skills, along with error handling.
 */

// Tests handling error fetching skills gracefully.
test('handles error fetching skills gracefully', async () => {
  axios.get.mockRejectedValue(new Error('Failed to fetch skills'));
  const { getByText } = render(&lt;SkillsInventoryPage /&gt;);
  await waitFor(() => expect(getByText('Failed to fetch skills')).toBeInTheDocument());
});

// Tests handling error submitting skills gracefully.
test('handles error submitting skills gracefully', async () => {
  axios.post.mockRejectedValue(new Error('Failed to save skills'));
  const { getByText } = render(&lt;SkillsInventoryPage /&gt;);
  fireEvent.click(getByText('Save Skills'));
  await waitFor(() => expect(getByText('Failed to save skills')).toBeInTheDocument());
test('removing a skill updates the state and removes the skill from the display', async () => {
  const { getByText, queryByText } = render(<SkillsInventoryPage />);
  // Assuming 'React' is already in the list from mockSkills
  fireEvent.click(getByText('Remove React'));
  await waitFor(() => expect(queryByText('React')).not.toBeInTheDocument());
});

test('editing a skill updates the state and displays the updated skill', async () => {
  const { getByText, getByDisplayValue, getByRole } = render(<SkillsInventoryPage />);
  fireEvent.click(getByText('Edit Node.js'));
  fireEvent.change(getByDisplayValue('Node.js'), { target: { value: 'Express.js' } });
  fireEvent.click(getByRole('button', { name: 'Save Skill' }));
  await waitFor(() => expect(getByText('Express.js')).toBeInTheDocument());
});
});
