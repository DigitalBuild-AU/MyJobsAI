const jest = require('jest');
const { fetchDashboardData } = require('../controllers/dashboardController');
const UserActivity = require('../models/UserActivity');

jest.mock('../models/UserActivity');

describe('fetchDashboardData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return correct data structure and values when successful', async () => {
    UserActivity.countDocuments.mockResolvedValueOnce(10).mockResolvedValueOnce(5).mockResolvedValueOnce(2);

    const expected = {
      totalApplications: 10,
      interviewsScheduled: 5,
      offersReceived: 2
    };

    const result = await fetchDashboardData();
    expect(result).toEqual(expected);
  });

  it('should handle errors gracefully when UserActivity.countDocuments throws an error', async () => {
    UserActivity.countDocuments.mockRejectedValue(new Error('Database error'));

    await expect(fetchDashboardData()).rejects.toThrow('Database error');
  });
});
