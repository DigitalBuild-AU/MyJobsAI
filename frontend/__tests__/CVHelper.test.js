import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CVHelper from '../pages/CVHelper';

describe('CVHelper Component', () => {
  test('renders correctly', () => {
    render(<CVHelper />);
    expect(screen.getByText('Upload your CV')).toBeInTheDocument();
  });

  test('handles CV upload successfully', () => {
    const file = new File(['dummy content'], 'resume.pdf', { type: 'application/pdf' });
    render(<CVHelper />);
    fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [file] } });
    expect(screen.getByText('resume.pdf uploaded successfully')).toBeInTheDocument();
  });

  test('analyzes CV and provides suggestions', async () => {
    render(<CVHelper />);
    fireEvent.click(screen.getByText('Analyze CV'));
    await screen.findByText('Suggestions for improvement');
    expect(screen.getByText('Consider using more action verbs')).toBeInTheDocument();
  });

  test('rejects non-PDF files', () => {
    const file = new File(['dummy content'], 'resume.txt', { type: 'text/plain' });
    render(<CVHelper />);
    fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [file] } });
    expect(screen.getByText('Invalid file type. Please upload a PDF.')).toBeInTheDocument();
  });

  test('handles CV upload error for large files', () => {
    const largeFile = new File([''.padStart(5 * 1024 * 1024, '0')], 'large_resume.pdf', { type: 'application/pdf' });
    render(<CVHelper />);
    fireEvent.change(screen.getByLabelText('Upload CV'), { target: { files: [largeFile] } });
    expect(screen.getByText('File is too large. Please upload a file smaller than 5MB.')).toBeInTheDocument();
  });

  test('attempts to analyze without uploading a CV', () => {
    render(<CVHelper />);
    fireEvent.click(screen.getByText('Analyze CV'));
    expect(screen.getByText('Please upload a CV first.')).toBeInTheDocument();
  });
});
