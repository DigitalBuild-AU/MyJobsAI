const jest = require('jest');
const { createUser, getUserById, updateUser, deleteUser } = require('../services/userService');
const User = require('../models/User');

jest.mock('../models/User');

describe('userService', () => {
  describe('createUser', () => {
    const newUser = {
      username: 'testUser',
      password: 'password123'
    };

    it('successfully creates a new user', async () => {
      User.create.mockResolvedValue(newUser);
      const result = await createUser(newUser);
      expect(result).toEqual(newUser);
    });

    it('handles error when creating a user with existing username', async () => {
      User.create.mockRejectedValue(new Error('User already exists'));
      await expect(createUser(newUser)).rejects.toThrow('User already exists');
    });
  });

  describe('getUserById', () => {
    const existingUser = {
      id: '1',
      username: 'existingUser',
      password: 'password123'
    };

    it('successfully retrieves a user by ID', async () => {
      User.findById.mockResolvedValue(existingUser);
      const result = await getUserById('1');
      expect(result).toEqual(existingUser);
    });

    it('returns null when user does not exist', async () => {
      User.findById.mockResolvedValue(null);
      const result = await getUserById('2');
      expect(result).toBeNull();
    });
  });

  describe('updateUser', () => {
    const updatedData = {
      username: 'updatedUser'
    };

    it('successfully updates a user', async () => {
      User.findByIdAndUpdate.mockResolvedValue(updatedData);
      const result = await updateUser('1', updatedData);
      expect(result).toEqual(updatedData);
    });

    it('handles error when updating a non-existent user', async () => {
      User.findByIdAndUpdate.mockRejectedValue(new Error('User not found'));
      await expect(updateUser('2', updatedData)).rejects.toThrow('User not found');
    });
  });

  describe('deleteUser', () => {
    it('successfully deletes a user', async () => {
      User.findByIdAndDelete.mockResolvedValue(true);
      const result = await deleteUser('1');
      expect(result).toBeTruthy();
    });

    it('handles error when deleting a non-existent user', async () => {
      User.findByIdAndDelete.mockRejectedValue(new Error('User not found'));
      await expect(deleteUser('2')).rejects.toThrow('User not found');
    });
  });
});
