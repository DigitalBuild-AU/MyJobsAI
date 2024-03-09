# MyJobsAI

MyJobsAI is a job search management application aimed at simplifying the job application process for users by offering a comprehensive suite of features to organize, track, and enhance job search efforts. Designed to operate as a central hub, MyJobsAI facilitates a more streamlined and efficient job search experience.

## Features

- **Job Listings Management**: Add, manage, and track job listings with detailed categorization.
- **Application Tracking**: Monitor application statuses, with features for follow-ups and interview scheduling.
- **Resume and Cover Letter Assistant**: Generate personalized cover letters and receive suggestions for resume enhancements.
- **Dashboard Overview**: A summarized view of your job search progress.
- **Interview Scheduler**: Utilize the `Interviews.js` React component for scheduling and managing interview appointments, offering a dynamic and interactive user experience.
- **Task and Networking Tracker**: Organize tasks and manage professional networking contacts.

## Installation

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in your terminal. If using Material-UI and Sass, ensure they are installed by running `npm install @material-ui/core sass`.
3. Start the application with `npm start`. The app will then be available on `http://localhost:3000/`.

## Usage

Navigate through the application using the menu options to access its various features. Add job listings, track applications, and use the CV and cover letter tools for your job search.

## Development

MyJobsAI leverages a Node.js backend with an Express.js middleware layer for API routing. Data persistence is managed with MongoDB, and the front-end is built with HTML, CSS, and JavaScript.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to suggest features or report bugs.

## License

MyJobsAI is released under the ISC License.
### Frontend Technologies
- **React**: Utilized for building a Single Page Application (SPA) that offers a dynamic user experience.
As part of our continuous effort to improve the application's interactivity and user experience, the adoption of React components for all UI elements allows for more dynamic content updates and state management without the need for page reloads. This approach not only streamlines the development process but also enhances the overall user experience.

Significant changes made during this migration include the integration of state management using React's useState and useEffect hooks for handling interview data, and the enhancement of the user interface for scheduling interviews. These improvements underscore our commitment to leveraging modern web development practices to deliver a superior user experience.
- **Bootstrap**: Employed for responsive design and utilizing a wide range of components for the UI.
- **Styled-Components**: Recommended for styling, offering enhanced CSS capabilities and easier maintenance of styles within JavaScript files.
## Project Structure Update

## Running Tests

To run the test suite with Jest, use the following command:

```bash
npm test
```

This command executes all tests found in the `backend/tests` and `frontend/__tests__` directories. Ensure you have all dependencies installed before running tests.

As part of our ongoing efforts to streamline the development process and adhere to best practices, we have consolidated the `app.js` and `App.js` files into a single `App.js` file. This change was made to eliminate confusion and potential errors arising from having two similarly named entry point files, especially on case-sensitive file systems.

### Reasoning Behind the Change
The presence of both `app.js` and `App.js` in our project structure posed a risk for import errors and confusion regarding the entry point of the application. By consolidating these files into a single `App.js`, we aim to clarify the entry point, thereby enhancing the maintainability and readability of our codebase.

### Implications for the Project Structure
This consolidation simplifies the project structure, making it easier for new developers to understand the entry point of the application. It also reduces the potential for errors related to file naming on different operating systems.

### Necessary Steps for Developers
</section id="D">
<section id="E">

## Structural Changes

As part of our recent project overhaul, we have made significant structural changes to improve the maintainability and functionality of MyJobsAI. Notably, the consolidation of `app.js` and `App.js` into a single file marks a critical step forward in simplifying our application's entry point.

### Consolidation Process
The decision to merge `app.js` and `App.js` was driven by the need to eliminate redundancy and confusion regarding the application's entry point. This move not only makes our project structure more intuitive but also aligns with React best practices by ensuring a single, clear entry point for the application.

### Eliminating Direct DOM Manipulation
In keeping with modern React development practices, we've also taken steps to refactor our utility functions. This involved transitioning away from direct DOM manipulation towards a more state and props-driven approach. Such a shift enhances component reusability and aligns our codebase with React's declarative nature.

### Implications on the Application's Structure
### New Folder Structure Aligned with CRA Standards

In our effort to align with the best practices of modern web development, we have restructured our project's folder layout to mirror that of a Create React App (CRA) standard setup. This change aims to enhance the maintainability and scalability of our application by organizing files into clear, purpose-driven directories.

#### Key Changes Include:
Additionally, our Continuous Integration (CI) pipeline is configured to automatically run tests on push and pull requests to the main branch, as defined in the `.github/workflows/ci.yml` file. Developers can view the results of these tests directly in their pull requests or under the "Actions" tab in the GitHub repository, which aids in diagnosing and resolving failures.
- **`src/components`**: This directory houses all React components, facilitating easier navigation and management of UI elements.
- **`src/assets`**: A dedicated place for static assets such as images, stylesheets, and fonts. This separation ensures that assets are easily accessible and not intermingled with component logic.
- **`src/tests`**: Contains all test files. Aligning with CRA standards, placing tests alongside their corresponding components promotes a more integrated development and testing workflow.

This new structure not only streamlines development but also aligns with industry standards, making it easier for new developers to onboard and contribute to our project.
These structural changes have wide-ranging implications for our application, impacting everything from routing to global styles. By consolidating entry points and refactoring for React best practices, we've made our application easier to maintain and extend. Developers should note these changes, particularly when working on routing or implementing global styles, to ensure consistency and avoid potential issues.

</section id="E">
Developers should now use `App.js` as the sole entry point for the React application. Any references to `app.js` should be updated to `App.js`. This change may require developers to update their local development environments to ensure consistency with the updated project structure.
### Setting Up Environment Variables for Local Development

To securely configure your local development environment without direct access to sensitive information, follow these steps:

1. Navigate to the `backend` directory of the cloned repository.
2. Copy the `backend/.env.example` file to a new file named `.env` in the same directory.
3. Open the `.env` file and fill in the actual values for the keys and secrets as required for the application to function correctly.

This process ensures that sensitive keys and secrets are not hardcoded within the application's codebase, enhancing security and maintainability.