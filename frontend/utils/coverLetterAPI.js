import axios from 'axios';

export const generateCoverLetter = async (jobDescription, userName, userSkills, userExperience) => {
  try {
    const response = await axios.post('/api/coverletter', {
      jobDescription,
      userName,
      userSkills,
      userExperience
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const handleCoverLetterResponse = (response) => {
  return response.data.coverLetter;
};

export const handleCoverLetterError = (error) => {
  console.error('Failed to generate Cover Letter:', error);
};
