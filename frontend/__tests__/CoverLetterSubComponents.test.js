import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CoverLetterForm, CoverLetterPreview, DownloadButtons } from '../components/CoverLetterSubComponents';

describe('CoverLetterSubComponents', () => {
  afterEach(cleanup);

  describe('CoverLetterForm', () => {
    it('captures user inputs and triggers generateCoverLetter on button click', () => {
      const mockGenerateCoverLetter = jest.fn();
      const { getByPlaceholderText, getByText } = render(<CoverLetterForm generateCoverLetter={mockGenerateCoverLetter} />);
      
      fireEvent.change(getByPlaceholderText('Your Name'), { target: { value: 'John Doe' } });
      fireEvent.change(getByPlaceholderText('Paste the job description here...'), { target: { value: 'Job Description' } });
      fireEvent.change(getByPlaceholderText('Your Skills...'), { target: { value: 'Skillset' } });
      fireEvent.change(getByPlaceholderText('Your Experience...'), { target: { value: 'Experience Details' } });
      fireEvent.click(getByText('Generate Cover Letter'));

      expect(mockGenerateCoverLetter).toHaveBeenCalled();
    });
  });

  describe('CoverLetterPreview', () => {
    it('conditionally renders the generated cover letter', () => {
      const { getByText, queryByText } = render(<CoverLetterPreview generatedCoverLetter="Generated Cover Letter Content" />);
      expect(getByText('Generated Cover Letter Content')).toBeInTheDocument();

      cleanup();

      const { container } = render(<CoverLetterPreview generatedCoverLetter="" />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('DownloadButtons', () => {
    beforeAll(() => {
      global.URL.createObjectURL = jest.fn();
      document.body.appendChild = jest.fn();
    });

    afterAll(() => {
      global.URL.createObjectURL.mockRestore();
      document.body.appendChild.mockRestore();
    });

    it('downloads the cover letter as PDF', () => {
      const { getByText } = render(<DownloadButtons generatedCoverLetter="Cover Letter Content" />);
      userEvent.click(getByText('Download as PDF'));
      expect(document.body.appendChild).toHaveBeenCalled();
      expect(global.URL.createObjectURL).toHaveBeenCalled();
    });

    it('downloads the cover letter as DOC', () => {
      const { getByText } = render(<DownloadButtons generatedCoverLetter="Cover Letter Content" />);
      userEvent.click(getByText('Download as DOC'));
      expect(document.body.appendChild).toHaveBeenCalled();
      expect(global.URL.createObjectURL).toHaveBeenCalled();
    });

    it('opens and closes the save modal', () => {
      const { getByText, queryByText } = render(<DownloadButtons generatedCoverLetter="Cover Letter Content" />);
      userEvent.click(getByText('Save Cover Letter'));
      expect(getByText('Do you want to save the generated cover letter?')).toBeInTheDocument();

      userEvent.click(getByText('Cancel'));
      expect(queryByText('Do you want to save the generated cover letter?')).not.toBeInTheDocument();
    });
  });
});
