const jest = require('jest');
const { addJobApplication, updateJobApplication, findJobApplicationById, deleteJobApplication } = require('../services/jobApplicationService');
const JobApplication = require('../models/JobApplication');

jest.mock('../models/JobApplication');

describe('jobApplicationService', () => {
  describe('addJobApplication', () => {
    const newApplication = {
      userId: 'user123',
      jobId: 'job456',
      status: 'applied'
    };

    it('successfully adds a job application', async () => {
      JobApplication.create.mockResolvedValue(newApplication);
      const result = await addJobApplication(newApplication);
      expect(result).toEqual(newApplication);
    });

    it('fails to add a job application with incomplete data', async () => {
      JobApplication.create.mockRejectedValue(new Error('Validation failed'));
      await expect(addJobApplication({ userId: 'user123' })).rejects.toThrow('Validation failed');
    });

    it('handles database errors during addition', async () => {
      JobApplication.create.mockRejectedValue(new Error('Database error'));
      await expect(addJobApplication(newApplication)).rejects.toThrow('Database error');
    });
  });

  describe('updateJobApplication', () => {
    const updatedData = {
      status: 'interview'
    };

    it('successfully updates a job application', async () => {
      JobApplication.findByIdAndUpdate.mockResolvedValue(updatedData);
      const result = await updateJobApplication('app123', updatedData);
      expect(result).toEqual(updatedData);
    });

    it('fails to update a non-existent job application', async () => {
      JobApplication.findByIdAndUpdate.mockRejectedValue(new Error('Not found'));
      await expect(updateJobApplication('nonexistent', updatedData)).rejects.toThrow('Not found');
    });

    it('handles database errors during update', async () => {
      JobApplication.findByIdAndUpdate.mockRejectedValue(new Error('Database error'));
      await expect(updateJobApplication('app123', updatedData)).rejects.toThrow('Database error');
    });
  });

  describe('findJobApplicationById', () => {
    const application = {
      id: 'app123',
      userId: 'user123',
      jobId: 'job456',
      status: 'applied'
    };

    it('successfully retrieves a job application by ID', async () => {
      JobApplication.findById.mockResolvedValue(application);
      const result = await findJobApplicationById('app123');
      expect(result).toEqual(application);
    });

    it('returns null for a non-existent job application', async () => {
      JobApplication.findById.mockResolvedValue(null);
      const result = await findJobApplicationById('nonexistent');
      expect(result).toBeNull();
    });
  });

  describe('deleteJobApplication', () => {
    it('successfully deletes a job application', async () => {
      JobApplication.findByIdAndDelete.mockResolvedValue(true);
      const result = await deleteJobApplication('app123');
      expect(result).toBeTruthy();
    });

    it('fails to delete a non-existent job application', async () => {
      JobApplication.findByIdAndDelete.mockRejectedValue(new Error('Not found'));
      await expect(deleteJobApplication('nonexistent')).rejects.toThrow('Not found');
    });

    it('handles database errors during deletion', async () => {
      JobApplication.findByIdAndDelete.mockRejectedValue(new Error('Database error'));
      await expect(deleteJobApplication('app123')).rejects.toThrow('Database error');
    });
  });
});
