import axios from 'axios';
import { postCoverLetter, postEmploymentHistory, postResumeCustomization, postSkills } from '../utils/apiHelpers';
jest.mock('axios');

describe('apiHelpers', () => {
  describe('postCoverLetter', () => {
    const mockData = {
      jobDescription: 'Software Engineer',
      userName: 'John Doe',
      userSkills: ['JavaScript', 'React'],
      userExperience: '5 years'
    };
    const mockResponse = { data: 'Cover letter generated successfully.' };

    it('successfully posts cover letter data', async () => {
      axios.post.mockResolvedValue(mockResponse);
      const response = await postCoverLetter(mockData.jobDescription, mockData.userName, mockData.userSkills, mockData.userExperience);
      expect(response).toEqual(mockResponse.data);
      expect(axios.post).toHaveBeenCalledWith('/api/cover_letter', mockData);
    });

    it('handles error on posting cover letter data', async () => {
    });

    it('handles network error on posting cover letter data', async () => {
      axios.post.mockRejectedValue(new Error('Network Error'));
      await expect(postCoverLetter(mockData.jobDescription, mockData.userName, mockData.userSkills, mockData.userExperience)).rejects.toThrow('Network Error');
    });

    it('handles missing parameters for cover letter data', async () => {
      const incompleteData = { jobDescription: '', userName: 'John Doe', userSkills: [], userExperience: '' };
      axios.post.mockResolvedValue({ data: 'Cover letter generated with missing parameters.' });
      const response = await postCoverLetter(incompleteData.jobDescription, incompleteData.userName, incompleteData.userSkills, incompleteData.userExperience);
      expect(response).toEqual('Cover letter generated with missing parameters.');
      expect(axios.post).toHaveBeenCalledWith('/api/cover_letter', incompleteData);
    });
      axios.post.mockRejectedValue(new Error('Failed to post cover letter'));
      await expect(postCoverLetter(mockData.jobDescription, mockData.userName, mockData.userSkills, mockData.userExperience)).rejects.toThrow('Failed to post cover letter');
    });
  });

  describe('postEmploymentHistory', () => {
    const mockHistory = [{ company: 'Tech Inc', position: 'Developer', duration: '2 years' }];
    const mockResponse = { data: 'Employment history saved successfully.' };

    it('successfully posts employment history', async () => {
      axios.post.mockResolvedValue(mockResponse);
      const response = await postEmploymentHistory(mockHistory);
      expect(response).toEqual(mockResponse.data);
      expect(axios.post).toHaveBeenCalledWith('/api/employmentHistory', { employmentHistory: mockHistory });
    });

    it('handles error on posting employment history', async () => {
    });

    it('handles network error on posting employment history', async () => {
      axios.post.mockRejectedValue(new Error('Network Error'));
      await expect(postEmploymentHistory(mockHistory)).rejects.toThrow('Network Error');
    });

    it('handles empty employment history', async () => {
      const emptyHistory = [];
      axios.post.mockResolvedValue({ data: 'No employment history provided.' });
      const response = await postEmploymentHistory(emptyHistory);
      expect(response).toEqual('No employment history provided.');
      expect(axios.post).toHaveBeenCalledWith('/api/employmentHistory', { employmentHistory: emptyHistory });
    });
      axios.post.mockRejectedValue(new Error('Failed to save employment history'));
      await expect(postEmploymentHistory(mockHistory)).rejects.toThrow('Failed to save employment history');
    });
  });

  describe('postResumeCustomization', () => {
    const mockData = { jobDescription: 'Software Engineer', userCV: 'Experienced developer' };
    const mockResponse = { data: 'CV customized successfully.' };

    it('successfully retrieves customization suggestions', async () => {
      axios.post.mockResolvedValue(mockResponse);
      const response = await postResumeCustomization(mockData.jobDescription, mockData.userCV);
      expect(response).toEqual(mockResponse.data);
      expect(axios.post).toHaveBeenCalledWith('/api/cv_customization', mockData);
    });

    it('handles error on customizing CV', async () => {
    });

    it('handles network error on customizing CV', async () => {
      axios.post.mockRejectedValue(new Error('Network Error'));
      await expect(postResumeCustomization(mockData.jobDescription, mockData.userCV)).rejects.toThrow('Network Error');
    });

    it('handles incomplete data for CV customization', async () => {
      const incompleteData = { jobDescription: '', userCV: '' };
      axios.post.mockResolvedValue({ data: 'CV customization with incomplete data.' });
      const response = await postResumeCustomization(incompleteData.jobDescription, incompleteData.userCV);
      expect(response).toEqual('CV customization with incomplete data.');
      expect(axios.post).toHaveBeenCalledWith('/api/cv_customization', incompleteData);
    });
      axios.post.mockRejectedValue(new Error('Failed to customize CV'));
      await expect(postResumeCustomization(mockData.jobDescription, mockData.userCV)).rejects.toThrow('Failed to customize CV');
    });
  });

  describe('postSkills', () => {
    const mockSkills = ['JavaScript', 'React'];
    const mockResponse = { data: 'Skills saved successfully.' };

    it('successfully posts skills', async () => {
      axios.post.mockResolvedValue(mockResponse);
      const response = await postSkills(mockSkills);
      expect(response).toEqual(mockResponse.data);
      expect(axios.post).toHaveBeenCalledWith('/api/skills', { skills: mockSkills });
    });

    it('handles error on posting skills', async () => {
      axios.post.mockRejectedValue(new Error('Failed to save skills'));
      await expect(postSkills(mockSkills)).rejects.toThrow('Failed to save skills');
    });
  });
});
    });

    it('handles network error on posting skills', async () => {
      axios.post.mockRejectedValue(new Error('Network Error'));
      await expect(postSkills(mockSkills)).rejects.toThrow('Network Error');
    });

    it('handles empty skills array', async () => {
      const emptySkills = [];
      axios.post.mockResolvedValue({ data: 'No skills provided.' });
      const response = await postSkills(emptySkills);
      expect(response).toEqual('No skills provided.');
      expect(axios.post).toHaveBeenCalledWith('/api/skills', { skills: emptySkills });
    });
