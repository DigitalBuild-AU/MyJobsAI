import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InterviewsComponent from '../components/InterviewsComponent';

describe('InterviewsComponent', () => {
  afterEach(cleanup);

  it('renders correctly with initial state', () => {
    const { getByLabelText, getByText } = render(<InterviewsComponent />);
    expect(getByLabelText('Job Title')).toBeInTheDocument();
    expect(getByLabelText('Date and Time')).toBeInTheDocument();
    expect(getByLabelText('Notes')).toBeInTheDocument();
    expect(getByText('Schedule Interview')).toBeInTheDocument();
  });

  it('loads Bootstrap script dynamically', () => {
    const appendChildMock = jest.spyOn(document.body, 'appendChild').mockImplementation(() => {});
    const querySelectorMock = jest.spyOn(document, 'querySelector').mockReturnValueOnce(null);
    render(<InterviewsComponent />);
    expect(appendChildMock).toHaveBeenCalled();
    expect(appendChildMock.mock.calls[0][0].src).toContain('bootstrap.bundle.min.js');
    appendChildMock.mockRestore();
    querySelectorMock.mockRestore();
  });

  it('updates jobTitle state on input change', () => {
    const { getByLabelText } = render(<InterviewsComponent />);
    fireEvent.change(getByLabelText('Job Title'), { target: { value: 'Software Engineer' } });
    expect(getByLabelText('Job Title').value).toBe('Software Engineer');
  });

  it('updates interviewDate state on input change', () => {
    const { getByLabelText } = render(<InterviewsComponent />);
    fireEvent.change(getByLabelText('Date and Time'), { target: { value: '2023-04-15T10:00' } });
    expect(getByLabelText('Date and Time').value).toBe('2023-04-15T10:00');
  });

  it('updates notes state on input change', () => {
    const { getByLabelText } = render(<InterviewsComponent />);
    fireEvent.change(getByLabelText('Notes'), { target: { value: 'Preliminary discussion about the role.' } });
    expect(getByLabelText('Notes').value).toBe('Preliminary discussion about the role.');
  });

  it('submits form and logs the state', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { getByText } = render(<InterviewsComponent />);
    fireEvent.click(getByText('Schedule Interview'));
    expect(logSpy).toHaveBeenCalled();
    logSpy.mockRestore();
  });
});
