import request from 'supertest';
import app from '../routes/gptRoutes';
jest.mock('openai');

describe('GPT Routes', () => {
  describe('POST /cv_suggestions', () => {
    it('should return suggestions successfully', async () => {
      openai.chat.completions.create.mockResolvedValue({
        choices: [{ message: { content: 'Suggested improvements for your CV.' } }]
      });
      const res = await request(app)
        .post('/cv_suggestions')
        .send({ jobDescription: 'Software Engineer', userCV: 'Experienced Developer' });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ suggestions: 'Suggested improvements for your CV.' });
    });

    it('should handle errors gracefully', async () => {
      openai.chat.completions.create.mockRejectedValue(new Error('Failed to generate CV suggestions.'));
      const res = await request(app)
        .post('/cv_suggestions')
        .send({ jobDescription: 'Software Engineer', userCV: 'Experienced Developer' });
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ error: 'Failed to generate CV suggestions.' });
    });
  });

  describe('POST /cover_letter', () => {
    it('should return analysis and customization suggestions successfully', async () => {
      openai.chat.completions.create.mockResolvedValue({
        choices: [{ message: { content: 'Your cover letter has been customized.' } }]
      });
      const res = await request(app)
        .post('/cover_letter')
        .send({ jobDescription: 'Software Engineer', userCV: 'Experienced Developer' });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ analysisResults: 'Your cover letter has been customized.' });
    });

    it('should handle errors gracefully', async () => {
      openai.chat.completions.create.mockRejectedValue(new Error('Error customizing cover letter.'));
      const res = await request(app)
        .post('/cover_letter')
        .send({ jobDescription: 'Software Engineer', userCV: 'Experienced Developer' });
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ error: 'Error customizing cover letter.' });
    });
  });

  describe('POST /cv_customization', () => {
    it('should return CV customization suggestions successfully', async () => {
      openai.chat.completions.create.mockResolvedValue({
        choices: [{ message: { content: 'Customization suggestions for your CV.' } }]
      });
      const res = await request(app)
        .post('/cv_customization')
        .send({ jobDescription: 'Software Engineer', userCV: 'Experienced Developer' });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ analysisResults: 'Customization suggestions for your CV.' });
    });

    it('should handle errors gracefully', async () => {
      openai.chat.completions.create.mockRejectedValue(new Error('Failed to generate CV customization suggestions.'));
      const res = await request(app)
        .post('/cv_customization')
        .send({ jobDescription: 'Software Engineer', userCV: 'Experienced Developer' });
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({ error: 'Failed to generate CV customization suggestions.' });
    });
  });

  // Tests for '/generate_cv_pdf', '/generate_cv_doc', '/download_cv/pdf', and '/download_cv/doc' can be added similarly.
});
