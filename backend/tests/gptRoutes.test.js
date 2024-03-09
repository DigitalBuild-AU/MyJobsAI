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

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  /**
   * Test to ensure that the CV customization endpoint correctly handles and responds with a 400 status code
   * when provided with invalid input data, such as empty job descriptions and user CVs.
   */
  /**
   * Test Case: Database Error during CV Customization Request
   * Purpose: Ensures that the CV customization endpoint correctly handles a database error by returning a 500 status code and an appropriate error message.
   * Expected Input: jobDescription: 'Valid Job Description', userCV: 'Valid user CV'
   * Expected Output: HTTP status 500 with error message 'Failed to process CV customization due to a server error.'
   */
  test('handles database error during CV customization request', async () => {
    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: '', // Empty job description
        userCV: '' // Empty user CV
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid input data provided.');
  });
  
  test('handles database error during CV customization request', async () => {
"""
File: gptRoutes.test.js
Description: This file contains unit tests for the GPT-related routes within the MyJobsAI application. It aims to test the functionality of CV customization, CV suggestions, and cover letter generation features. These tests ensure the application's GPT features are reliable and robust, covering a range of scenarios including successful responses and error handling.
"""
  /**
   * Test Case: Invalid Input Data for CV Customization Request
   * Purpose: Verifies that the CV customization endpoint returns a 400 status code and an appropriate error message when provided with empty job descriptions and user CVs.
   * Expected Input: jobDescription: '', userCV: ''
   * Expected Output: HTTP status 400 with error message 'Invalid input data provided.'
   */
   * Tests the handling of a database error during a CV customization request.
   * Expects a 500 status code and an error message indicating a server error.
   */
  test('handles database error during CV customization request', async () => {
    handleCvCustomization.mockRejectedValue(new Error('Database error'));

    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Valid Job Description',
        userCV: 'Valid user CV'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to process CV customization due to a server error.');
  });
/**
 * Test suite for GPT routes.
 * 
 * This file contains tests for the GPT-related routes, ensuring that CV customization requests are handled correctly, including success and error scenarios.
 */
  test('successfully handles a CV customization request', async () => {
   * Tests successful handling of a CV customization request.
   * Expects a 200 status code and the customization suggestions in the response body.
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

  /**
   * Test to verify that the createCompletion method of the OpenAI API is called with the correct parameters
   * when a CV customization request is made. This includes checking the model, prompt, max_tokens, n, stop, and temperature parameters.
   */
  test('verifies createCompletion method call with correct parameters', async () => {
    const mockCreateCompletion = jest.spyOn(openai, 'createCompletion').mockResolvedValue({
      data: {
        choices: [{ text: 'Customized CV content.' }]
      }
    });

    await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Software Engineer role requiring extensive experience in full-stack development.',
        userCV: 'Experienced full-stack developer with a strong background in JavaScript and Python.'
      });

    expect(mockCreateCompletion).toHaveBeenCalledWith({
      model: "gpt-3.5-turbo",
      prompt: expect.stringContaining('Software Engineer role requiring extensive experience in full-stack development.') && expect.stringContaining('Experienced full-stack developer with a strong background in JavaScript and Python.'),
      max_tokens: 1024,
      n: 1,
      stop: null,
      temperature: 0.5,
    });
  });

  test('handles invalid input data for CV customization request', async () => {
    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: '', // Empty job description
        userCV: '' // Empty user CV
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid input data provided.');
  });
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
  /**
   * Test: Error handling for a CV suggestions request.
   * Description: This test checks the error handling capabilities of the CV suggestions endpoint. It simulates a scenario where generating CV suggestions fails, expecting the endpoint to return a 500 status code and an appropriate error message. The `handleCvSuggestions` function is mocked to reject with an error to test this behavior.
   */
  /**
   * Test: Handles errors during CV suggestions request.
   * Description: This test aims to verify the robustness of the CV suggestions endpoint's error handling by simulating a failure scenario. It expects the endpoint to respond with a 500 status code and a specific error message when the `handleCvSuggestions` function encounters an error. The function is mocked to reject with a predefined error for this purpose.
   */
  // Tests error handling for a CV customization request.
describe('/cv_suggestions route', () => {
  /**
   * Tests the handling of invalid input data for CV suggestions request.
   * Expects a 400 status code and an error message in the response.
   */
  test('handles invalid input data for CV suggestions request', async () => {
    const response = await request(app)
      .post('/cv_suggestions')
      .send({
  /**
   * Test to ensure that the CV customization endpoint correctly handles errors and responds with a 500 status code
   * when the OpenAI API call fails. This simulates scenarios where the external API is unavailable or returns an error.
   */
  test('handles error when OpenAI API call fails for CV customization', async () => {
    jest.spyOn(openai, 'createCompletion').mockRejectedValue(new Error('OpenAI API error'));

    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Valid Job Description',
        userCV: 'Valid user CV'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate CV customization suggestions.');
  });
        jobDescription: '', // Empty job description
        userCV: '' // Empty user CV
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid input data provided.');
  });
  
  test('handles database error during CV suggestions request', async () => {
   * Tests the handling of a database error during a CV suggestions request.
   * Expects a 500 status code and an error message indicating a server error.
   */
  test('handles database error during CV suggestions request', async () => {
    handleCvSuggestions.mockRejectedValue(new Error('Database error'));

    const response = await request(app)
      .post('/cv_suggestions')
      .send({
        jobDescription: 'Valid Job Description',
        userCV: 'Valid user CV'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to process CV suggestions due to a server error.');
  });
  test('successfully handles a CV suggestions request', async () => {
   * Tests successful handling of a CV suggestions request with mocked openai call.
   * Expects a 200 status code and CV suggestions in the response body.
   */
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
   * Tests the handling of errors during a CV suggestions request.
   * Expects a 500 status code and an error message indicating failure to generate CV suggestions.
   */
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
   * Tests the handling of invalid input data for a cover letter request.
   * Expects a 400 status code and an error message in the response.
   */
  test('handles invalid input data for cover letter request', async () => {
    const response = await request(app)
      .post('/cover_letter')
      .send({
        jobDescription: '', // Empty job description
        userCV: '' // Empty user CV
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid input data provided.');
  });
  
  test('handles database error during cover letter request', async () => {
   * Tests the handling of a database error during a cover letter request.
   * Expects a 500 status code and an error message indicating a server error.
   */
  test('handles database error during cover letter request', async () => {
    handleCoverLetterRequest.mockRejectedValue(new Error('Database error'));

    const response = await request(app)
      .post('/cover_letter')
      .send({
        jobDescription: 'Valid Job Description',
        userCV: 'Valid user CV'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate cover letter due to a server error.');
  });
  /**
   * Tests successful handling of a cover letter request.
   * 
   * Sends a POST request with a job description and user CV to the '/cover_letter' route and expects a 200 status code with a personalized cover letter in the response body.
   */
  /**
   * Tests successful handling of a cover letter request.
   * Expects a 200 status code and a personalized cover letter in the response body.
   */
  test('successfully handles a cover letter request', async () => {
describe('generateCoverLetter function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  /**
   * Tests successful generation of a cover letter.
   * Expects the function to return a personalized cover letter based on the provided job description and user CV.
   */
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

  /**
   * Tests error handling during cover letter generation.
   * Expects the function to throw an error if the cover letter generation fails.
   */
  test('handles errors during cover letter generation', async () => {
    const error = new Error('Failed to generate cover letter.');
    jest.mocked(openai.createCompletion).mockRejectedValue(error);

    await expect(generateCoverLetter('jobDescription', 'userCV')).rejects.toThrow(error);
  });
});

describe('logCoverLetterGeneration function', () => {
  /**
   * Tests logging of cover letter generation message.
   * Expects a console log indicating successful cover letter analysis and feedback generation.
   */
  test('logs cover letter generation message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    logCoverLetterGeneration();
    expect(consoleSpy).toHaveBeenCalledWith('Cover letter analysis and feedback generated successfully.');
  });
});

describe('handleCoverLetterError function', () => {
  /**
   * Tests handling and logging of cover letter generation error.
   * Expects an error log and a 500 status code response with an appropriate error message.
   */
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
