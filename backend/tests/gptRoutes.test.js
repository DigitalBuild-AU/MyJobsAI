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
describe('/cv_suggestions route', () => {
  test('successfully handles a CV suggestions request', async () => {
    const mockResponse = { suggestions: 'Your CV suggestions.' };
    jest.mocked(openai.chat.completions.create).mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/cv_suggestions')
      .send({
        jobDescription: 'Software Engineer role requiring problem-solving skills.',
        userCV: 'Problem solver with a keen interest in software development.'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('suggestions', 'Your CV suggestions.');
  });

  test('handles errors during CV suggestions request', async () => {
    jest.mocked(openai.chat.completions.create).mockRejectedValue(new Error('Failed to generate CV suggestions.'));

    const response = await request(app)
      .post('/cv_suggestions')
      .send({
        jobDescription: 'Software Engineer role requiring problem-solving skills.',
        userCV: 'Problem solver with a keen interest in software development.'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate CV suggestions.');
  });
});

describe('/cover_letter route', () => {
  test('successfully handles a cover letter request', async () => {
    const mockResponse = { analysisResults: 'Your personalized cover letter.' };
    jest.mocked(openai.chat.completions.create).mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/cover_letter')
      .send({
        jobDescription: 'Software Engineer role with a focus on cloud computing.',
        userCV: 'Cloud computing enthusiast with extensive experience in AWS and Azure.'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('analysisResults', 'Your personalized cover letter.');
  });

  test('handles errors during cover letter request', async () => {
    jest.mocked(openai.chat.completions.create).mockRejectedValue(new Error('Failed to generate cover letter.'));

    const response = await request(app)
      .post('/cover_letter')
      .send({
        jobDescription: 'Software Engineer role with a focus on cloud computing.',
        userCV: 'Cloud computing enthusiast with extensive experience in AWS and Azure.'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate cover letter.');
  });
});
