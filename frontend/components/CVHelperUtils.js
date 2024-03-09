import axios from 'axios';

async function sendCVRequest(jobDescription, userCV) {
  const response = await axios.post('http://localhost:3000/api/gpt/cv_suggestions', { jobDescription, userCV });
  return response;
}

function processCVResponse(response, setCvSuggestions, setError) {
  if (response && response.data && response.data.suggestions) {
    setCvSuggestions(response.data.suggestions);
    setError('');
  } else {
    setError('Failed to fetch CV suggestions. Please try again.');
    setCvSuggestions('');
  }
}

export { sendCVRequest, processCVResponse };
"""
This module contains utility functions for handling CV-related requests and responses within the MyJobsAI application. It includes functions to send CV analysis requests to the backend and process the responses for CV suggestions.
"""
import axios from 'axios';
    setError('Failed to fetch CV suggestions. Please try again.');
    setCvSuggestions('');
  }
}

export { sendCVRequest, processCVResponse };
    setError('Failed to fetch CV suggestions. Please try again.');
    setCvSuggestions('');
  }
}

export { sendCVRequest, processCVResponse };
