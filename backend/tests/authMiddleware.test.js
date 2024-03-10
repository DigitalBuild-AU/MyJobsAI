/**
 * Tests for authMiddleware - This file contains tests for the authentication middleware used in the MyJobsAI project.
 * It includes tests for verifying valid tokens and handling invalid or expired tokens.
 */
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const { auth } = authMiddleware;

jest.mock('jsonwebtoken');

describe('verifyToken function in authMiddleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('successfully verifies a valid token', () => {
    const testToken = 'valid.token.here';
    const decodedToken = { userId: '123', iat: 1616599552, exp: 1624191552 };
    jwt.verify.mockImplementation(() => decodedToken);

    const req = { header: jest.fn().mockReturnValue(`Bearer ${testToken}`) };
    const res = {};
    const next = jest.fn();
    await auth(req, res, next);
    expect(req).toHaveProperty('user');
    expect(req.user).toHaveProperty('userId', decodedToken.userId);
    expect(jwt.verify).toHaveBeenCalledWith(testToken, process.env.JWT_SECRET);
  });

  it('throws an error for an invalid or expired token', () => {
    const req = { header: jest.fn().mockReturnValue(`Bearer ${testToken}`) };
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
    const next = jest.fn();
    await auth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: 'Please authenticate.' }));
    expect(jwt.verify).toHaveBeenCalledWith(testToken, process.env.JWT_SECRET);
  });
});
