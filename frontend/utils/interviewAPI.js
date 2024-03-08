import axios from 'axios';

export const submitInterview = async (jobTitle, date, notes, updateInterviewsState) => {
  try {
    const response = await axios.post('/api/interviews', {
      jobTitle,
      date,
      notes
    });
    updateInterviewsState(response.data);
  } catch (error) {
    handleInterviewError(error);
  }
};

export const handleInterviewResponse = (response) => {
  return response.data;
};

export const handleInterviewError = (error) => {
  console.error('Error submitting interview:', error);
};
