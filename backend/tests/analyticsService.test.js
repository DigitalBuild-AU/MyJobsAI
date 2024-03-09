const jest = require('jest');
const { calculateAnalytics } = require('../services/analyticsService');
const UserActivity = require('../models/UserActivity');

jest.mock('../models/UserActivity');

describe('calculateAnalytics', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return correct analytics data when successful', async () => {
    UserActivity.countDocuments.mockResolvedValueOnce(20).mockResolvedValueOnce(10).mockResolvedValueOnce(5);
    UserActivity.aggregate.mockResolvedValueOnce([{ avgResponseInDays: 3.5 }]);

    const expected = {
      totalApplications: 20,
      interviewsScheduled: 10,
      offersReceived: 5,
      avgResponseTime: '3.50'
    };

    const result = await calculateAnalytics();
    expect(result).toEqual(expected);
  });

  it('should handle no data scenario correctly', async () => {
    UserActivity.countDocuments.mockResolvedValueOnce(0).mockResolvedValueOnce(0).mockResolvedValueOnce(0);
    UserActivity.aggregate.mockResolvedValueOnce([]);

    const expected = {
      totalApplications: 0,
      interviewsScheduled: 0,
      offersReceived: 0,
      avgResponseTime: null
    };

    const result = await calculateAnalytics();
    expect(result).toEqual(expected);
  });
});
