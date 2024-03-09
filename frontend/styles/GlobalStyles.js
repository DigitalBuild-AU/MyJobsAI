/**
 * This file defines global styles for the MyJobsAI application using styled-components. It includes styles for body,
 * code elements, and custom CSS variables for consistent theming across the app.
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle\`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Example of defining a variable for colors */
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
  }
\`;

export default GlobalStyle;
