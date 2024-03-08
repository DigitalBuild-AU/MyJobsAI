/**
 * Tests for GPT-related routes in the MyJobsAI application.
 * 
 * This file contains unit tests for the GPT routes, specifically focusing on CV customization, CV suggestions, and cover letter generation functionalities. It includes tests for both successful operations and error handling scenarios.
 */
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

  test('successfully handles a CV suggestions request', async () => {
    const mockResponse = { suggestions: 'Your CV suggestions.' };
    handleCvSuggestions.mockResolvedValue(mockResponse);
  
    const response = await request(app)
      .post('/cv_suggestions')
      .send({
        jobDescription: 'Software Engineer role requiring problem-solving skills.',
        userCV: 'Problem solver with a keen interest in software development.'
      });
  
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockResponse);
    expect(handleCvSuggestions).toHaveBeenCalledWith('Software Engineer role requiring problem-solving skills.', 'Problem solver with a keen interest in software development.');

    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Software Engineer role requiring extensive experience in full-stack development.',
        userCV: 'Experienced full-stack developer with a strong background in JavaScript and Python.'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate CV customization suggestions.');
    expect(handleCvCustomization).toHaveBeenCalledWith('Software Engineer role requiring extensive experience in full-stack development.', 'Experienced full-stack developer with a strong background in JavaScript and Python.');
    /**
     * Tests successful handling of a CV customization request.
     * 
     * Sends a POST request with a job description and user CV to the '/cv_customization' route and expects a 200 status code with the customization suggestions in the response body.
     */
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
    handleCvSuggestions.mockRejectedValue(new Error('Failed to generate CV suggestions.'));
  
    const response = await request(app)
      .post('/cv_suggestions')
      .send({
        jobDescription: 'Software Engineer role requiring problem-solving skills.',
        userCV: 'Problem solver with a keen interest in software development.'
      });
  
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate CV suggestions.');
    expect(handleCvSuggestions).toHaveBeenCalledWith('Software Engineer role requiring problem-solving skills.', 'Problem solver with a keen interest in software development.');

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
    /**
     * Tests error handling during a CV suggestions request.
     * 
     * Verifies that the server responds with a 500 status code and an appropriate error message when an error occurs while processing a CV suggestions request.
     */

describe('/cover_letter route', () => {
  /**
   * Tests successful handling of a cover letter request.
   * 
   * Sends a POST request with a job description and user CV to the '/cover_letter' route and expects a 200 status code with a personalized cover letter in the response body.
   */
  test('successfully handles a cover letter request', async () => {
    const mockResponse = { analysisResults: 'Your personalized cover letter.' };
    jest.mocked(openai.chat.completions.create).mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/cover_letter')
     * 
     * Verifies that the server responds with a 500 status code and an appropriate error message when an error occurs while processing a CV suggestions request.
     */

describe('/cover_letter route', () => {
  /**
   * Tests successful handling of a cover letter request.
   * 
   * Sends a POST request with a job description and user CV to the '/cover_letter' route and expects a 200 status code with a personalized cover letter in the response body.
   */
  test('successfully handles a cover letter request', async () => {
    openai.createCompletion.mockRejectedValue(new Error('Failed to generate cover letter.'));
  
    const response = await request(app)
      .post('/cover_letter')
      .send({
        jobDescription: 'Software Engineer role with a focus on cloud computing.',
        userCV: 'Cloud computing enthusiast with extensive experience in AWS and Azure.'
      });
  
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate cover letter.');

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
    /**
     * Tests error handling during a cover letter request.
     * 
     * Verifies that the server responds with a 500 status code and an appropriate error message when an error occurs while processing a cover letter request.
     */
