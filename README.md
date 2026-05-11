# MSW Mini Test

A simple JavaScript project demonstrating how to use [MSW (Mock Service Worker)](https://mswjs.io/) to test API requests in a Node.js environment.

## Functionality
The project includes a function `getTemperature(city)` which fetches the current temperature for a city via an HTTP request (mocked in the test environment). Testing is done using [Vitest](https://vitest.dev/) and MSW for mocking API responses.

## File Structure
- `src/weather.js`: Exports the `getTemperature(city)` function
- `src/weather.test.js`: Contains tests to ensure the correct temperature is returned, with MSW mocking the API response
- `package.json`: Configuration and dependencies (msw, vitest)
- `vitest.config.js`: Test environment configuration

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run tests:
   ```sh
   npm test
   ```

## About the Project
This repository contains a minimal test project using MSW (Mock Service Worker) with JavaScript. It demonstrates how to set up and use MSW for mocking API requests in a development or testing environment. The project serves as a simple starting point for integrating MSW into JavaScript applications.
