/**
 * Unit Tests for GPT Routes in MyJobsAI Application
 * 
 * This file contains unit tests for the GPT-related routes within the MyJobsAI application. It is designed to test the functionality of CV customization, CV suggestions, and cover letter generation. The tests cover a range of scenarios, including successful responses and error handling, to ensure the reliability and robustness of the application's GPT features.
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
/**
 * Test Suite for '/cv_customization' Route
 * 
 * This suite tests the handling of CV customization requests by the '/cv_customization' route. It verifies that the application can successfully process requests and return appropriate suggestions, as well as handle errors gracefully.
 */

  /**
   * Test: Successfully handles a CV suggestions request.
   * Description: This test ensures that the CV suggestions endpoint properly handles a request, returning a 200 status code and the expected suggestions in the response body. It mocks the `handleCvSuggestions` function to return a predefined response and verifies that the function is called with the specified arguments.
   */
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
  /**
   * Test: Successfully handles a CV customization request.
   * Description: This test verifies that the CV customization endpoint correctly processes a request by returning a 200 status code and the expected response body. It mocks the `handleCvCustomization` function to simulate a successful response and checks that the function is called with the correct arguments.
   */
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
/**
 * Test Suite for '/cv_suggestions' Route
 * 
 * This suite tests the handling of CV suggestions requests by the '/cv_suggestions' route. It aims to ensure that the application can generate meaningful CV suggestions based on the input provided and properly manage any errors that may occur during the process.
 */
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate CV suggestions.');
  });
});
    /**
    * Test Suite for '/cover_letter' Route
    * 
    * This suite evaluates the '/cover_letter' route's capability to generate personalized cover letters. It tests the functionality under various scenarios, ensuring that the application can produce relevant cover letters and handle any errors encountered during the process.
    */

describe('/cover_letter route', () => {
  /**
   * Tests successful handling of a cover letter request.
   * 
   * Sends a POST request with a job description and user CV to the '/cover_letter' route and expects a 200 status code with a personalized cover letter in the response body.
   */
  test('successfully handles a cover letter request', async () => {
describe('generateCoverLetter function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('successfully generates a cover letter', async () => {
    const jobDescription = 'Software Engineer role with a focus on cloud computing.';
    const userCV = 'Cloud computing enthusiast with extensive experience in AWS and Azure.';
    const expectedCoverLetter = 'Your personalized cover letter.';
    jest.mocked(openai.createCompletion).mockResolvedValue({
      data: {
        choices: [{ text: expectedCoverLetter }]
      }
    });

    const coverLetter = await generateCoverLetter(jobDescription, userCV);

    expect(coverLetter).toEqual(expectedCoverLetter);
    expect(openai.createCompletion).toHaveBeenCalledWith(expect.objectContaining({
      prompt: expect.stringContaining(jobDescription) && expect.stringContaining(userCV),
    }));
  });

  test('handles errors during cover letter generation', async () => {
    const error = new Error('Failed to generate cover letter.');
    jest.mocked(openai.createCompletion).mockRejectedValue(error);

    await expect(generateCoverLetter('jobDescription', 'userCV')).rejects.toThrow(error);
  });
});

describe('logCoverLetterGeneration function', () => {
  test('logs cover letter generation message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    logCoverLetterGeneration();
    expect(consoleSpy).toHaveBeenCalledWith('Cover letter analysis and feedback generated successfully.');
  });
});

describe('handleCoverLetterError function', () => {
  test('handles and logs cover letter generation error', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const error = new Error('Test error');

    handleCoverLetterError(error, mockRes);

    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('Error processing cover letter request: Test error'));
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Failed to generate cover letter analysis.' });
  });
});
    const logSpy = jest.spyOn(console, 'log');
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

    expect(logSpy).toHaveBeenCalledWith('Cover letter analysis and feedback generated successfully.');
    const errorSpy = jest.spyOn(console, 'error');
    const statusJsonSpy = jest.fn().mockImplementation(() => ({ status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() }));
    /**
     /**
     * Tests successful handling of a cover letter request.
     * 
     * Sends a POST request with a job description and user CV to the '/cover_letter' route and expects a 200 status code with the personalized cover letter in the response body.
     */
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
    /**
     * Tests error handling during a cover letter request.
     * 
     * Verifies that the server responds with a 500 status code and an appropriate error message when an error occurs while processing a cover letter request.
     */
    expect(errorSpy).toHaveBeenCalled();
    expect(statusJsonSpy).toHaveBeenCalledWith(500);
    expect(statusJsonSpy).toHaveBeenCalledWith({ error: 'Failed to generate cover letter.' });
