import request from 'supertest';
import { app } from '../server'; // Assuming app is exported from server.js
import { handleCvCustomization } from '../utils/gptRequestHandlers';

jest.mock('../utils/gptRequestHandlers');

describe('/cv_customization route', () => {
/**
 * Test suite for GPT routes.
 * 
 * This file contains tests for the GPT-related routes, ensuring that CV customization requests are handled correctly, including success and error scenarios.
 */
  test('successfully handles a CV customization request', async () => {
    const mockResponse = {
      choices: [{
        message: {
          content: 'Your CV customization suggestions.'
        }
      }]
    };
    handleCvCustomization.mockResolvedValue({ analysisResults: 'Your CV customization suggestions.' });

    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Software Engineer role requiring extensive experience in full-stack development.',
        userCV: 'Experienced full-stack developer with a strong background in JavaScript and Python.'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('analysisResults', 'Your CV customization suggestions.');
    expect(handleCvCustomization).toHaveBeenCalledWith('Software Engineer role requiring extensive experience in full-stack development.', 'Experienced full-stack developer with a strong background in JavaScript and Python.');
  });

  test('handles errors during CV customization request', async () => {
    handleCvCustomization.mockRejectedValue(new Error('Failed to generate CV customization suggestions.'));

    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Software Engineer role requiring extensive experience in full-stack development.',
        userCV: 'Experienced full-stack developer with a strong background in JavaScript and Python.'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate CV customization suggestions.');
    expect(handleCvCustomization).toHaveBeenCalledWith('Software Engineer role requiring extensive experience in full-stack development.', 'Experienced full-stack developer with a strong background in JavaScript and Python.');
  // Tests successful handling of a CV customization request.
  });
});
  // Tests error handling for a CV customization request.
