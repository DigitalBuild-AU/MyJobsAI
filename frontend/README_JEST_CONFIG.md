# Jest Configuration Overview

This document provides an overview of the Jest configuration for the MyJobsAI frontend.

- `jest.config.js`: Configures Jest for frontend tests, including the test environment, transformations, and module name mappings. It specifies `jsdom` as the test environment, uses `babel-jest` to transform JS and JSX files, and maps module names for CSS, LESS, SCSS, and image files to ensure tests can import and use these files correctly.

- `jest.setup.js`: Sets up the Jest testing environment for the frontend, including mocking global functions like fetch. This is crucial for tests that involve API calls, as it allows simulating network responses without actual network requests, ensuring tests are fast and reliable.

- `package.json`: Contains scripts and dependencies for running Jest tests in the frontend part of the project. It includes a test script to run Jest with the project's specific configuration and lists all necessary Jest-related packages as dependencies, ensuring the testing environment is correctly set up and integrated with the rest of the project's tooling.
