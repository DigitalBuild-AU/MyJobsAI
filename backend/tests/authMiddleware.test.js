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

    const result = authMiddleware.__get__('verifyToken')(testToken);
    expect(jwt.verify).toHaveBeenCalledWith(testToken, process.env.JWT_SECRET);
    expect(result).toEqual(decodedToken);
  });

  it('throws an error for an invalid or expired token', () => {
    const testToken = 'invalid.token.here';
    jwt.verify.mockImplementation(() => {
      throw new Error('jwt malformed');
    });

    expect(() => {
      authMiddleware.__get__('verifyToken')(testToken);
    }).toThrow('Invalid or expired token.');
  });
});
