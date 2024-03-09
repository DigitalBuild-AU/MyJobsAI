# MyJobsAI

MyJobsAI is a job search management application aimed at simplifying the job application process for users by offering a comprehensive suite of features to organize, track, and enhance job search efforts. Designed to operate as a central hub, MyJobsAI facilitates a more streamlined and efficient job search experience.

## Features

- **Job Listings Management**: Add, manage, and track job listings with detailed categorization.
- **Application Tracking**: Monitor application statuses, with features for follow-ups and interview scheduling.
- **Resume and Cover Letter Assistant**: Generate personalized cover letters and receive suggestions for resume enhancements.
- **Dashboard Overview**: A summarized view of your job search progress.
- **Interview Scheduler (Migrated)**: The functionality previously handled by the static `interviews.html` file has been fully migrated to the `Interviews.js` React component. This migration enhances the dynamic and interactive capabilities of scheduling and managing interview appointments.
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
As part of our continuous effort to improve the application's interactivity and user experience, the migration from static HTML files to React components allows for more dynamic content updates and state management without the need for page reloads. This transition to `Interviews.js` not only streamlines the development process but also provides a more seamless user experience.

Significant changes made during this migration include the integration of state management using React's useState and useEffect hooks for handling interview data, and the enhancement of the user interface for scheduling interviews. These improvements underscore our commitment to leveraging modern web development practices to deliver a superior user experience.
- **Bootstrap**: Employed for responsive design and utilizing a wide range of components for the UI.
- **Material-UI (Optional)**: Considered for providing a set of components that implement Google's Material Design for a clean and modern UI.
- **Sass (Optional)**: Proposed for advanced CSS features and easier maintenance of stylesheets.