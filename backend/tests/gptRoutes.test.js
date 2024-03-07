import request from 'supertest';
import { app } from '../server'; // Assuming app is exported from server.js
import { OpenAI } from 'openai';

jest.mock('openai');

beforeEach(() => {
  OpenAI.mockClear();
});

describe('/cv_customization route', () => {
  test('successfully handles a CV customization request', async () => {
    const mockResponse = {
      choices: [{
        message: {
          content: 'Your CV customization suggestions.'
        }
      }]
    };
    OpenAI.prototype.chat = {
      completions: {
        create: jest.fn().mockResolvedValue(mockResponse)
      }
    };

    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Software Engineer role requiring extensive experience in full-stack development.',
        userCV: 'Experienced full-stack developer with a strong background in JavaScript and Python.'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('analysisResults', 'Your CV customization suggestions.');
    expect(OpenAI.prototype.chat.completions.create).toHaveBeenCalled();
  });

  test('handles errors during CV customization request', async () => {
    OpenAI.prototype.chat = {
      completions: {
        create: jest.fn().mockRejectedValue(new Error('Failed to generate CV customization suggestions.'))
      }
    };

    const response = await request(app)
      .post('/cv_customization')
      .send({
        jobDescription: 'Software Engineer role requiring extensive experience in full-stack development.',
        userCV: 'Experienced full-stack developer with a strong background in JavaScript and Python.'
      });

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error', 'Failed to generate CV customization suggestions.');
    expect(OpenAI.prototype.chat.completions.create).toHaveBeenCalled();
  });
});
