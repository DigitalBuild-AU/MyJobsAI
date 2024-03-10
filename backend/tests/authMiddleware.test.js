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
/**
 * Test suite for verifyToken function - Tests the functionality of the verifyToken function within authMiddleware,
 * ensuring it correctly verifies valid tokens and properly handles and reports invalid or expired tokens.
 */
/**
 * Test case: Successfully verifies a valid token - Ensures that a valid token is correctly verified by the auth middleware,
 * attaching the decoded token information to the request object.
 */
