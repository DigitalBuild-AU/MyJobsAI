/**
 * All global and component-specific styles have been successfully migrated from `styles.css` and `jobListingsStyle.css` to styled-components. These CSS files are now marked for deletion.
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
  /* Additional global styles from styles.css and jobListingsStyle.css */
  body {
    background-color: #f8f9fa; /* Assuming this is the global background color from styles.css */
    color: #333; /* Default text color */
  }

  a {
    color: var(--primary-color);
    text-decoration: none; /* Links should not be underlined by default */
  }

  /* Adding a global font size for consistency */
  html {
    font-size: 16px;
  }
