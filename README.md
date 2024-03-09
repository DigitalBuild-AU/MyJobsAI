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

As part of our ongoing efforts to streamline the development process and adhere to best practices, we have consolidated the `app.js` and `App.js` files into a single `App.js` file. This change was made to eliminate confusion and potential errors arising from having two similarly named entry point files, especially on case-sensitive file systems.

### Reasoning Behind the Change
The presence of both `app.js` and `App.js` in our project structure posed a risk for import errors and confusion regarding the entry point of the application. By consolidating these files into a single `App.js`, we aim to clarify the entry point, thereby enhancing the maintainability and readability of our codebase.

### Implications for the Project Structure
This consolidation simplifies the project structure, making it easier for new developers to understand the entry point of the application. It also reduces the potential for errors related to file naming on different operating systems.

### Necessary Steps for Developers
Developers should now use `App.js` as the sole entry point for the React application. Any references to `app.js` should be updated to `App.js`. This change may require developers to update their local development environments to ensure consistency with the updated project structure.