import axios from 'axios';

async function postCoverLetter(jobDescription, userName, userSkills, userExperience) {
  try {
    const response = await axios.post('/api/cover_letter', {
      jobDescription,
      userName,
      userSkills,
      userExperience
    });
    return response.data;
  } catch (error) {
    console.error('Error generating cover letter:', error);
    throw error;
  }
}

async function postEmploymentHistory(employmentHistory) {
  try {
    const response = await axios.post('/api/employmentHistory', { employmentHistory });
    return response.data;
  } catch (error) {
    console.error('Failed to save employment history', error);
    throw error;
  }
}

async function postResumeCustomization(jobDescription, userCV) {
  try {
    const response = await axios.post('/api/cv_customization', {
      jobDescription,
      userCV
    });
    return response.data;
  } catch (error) {
    console.error('Error customizing CV:', error);
    throw error;
  }
}

async function postSkills(skills) {
  try {
    const response = await axios.post('/api/skills', { skills });
    return response.data;
  } catch (error) {
    console.error('Failed to save skills', error);
    throw error;
  }
}

export { postCoverLetter, postEmploymentHistory, postResumeCustomization, postSkills };
