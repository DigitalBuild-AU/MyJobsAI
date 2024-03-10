// Jest setup file for frontend tests. This file is used to configure global settings and mock
// functions for the Jest testing environment, specifically for the frontend.
module.exports = {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
};
};
