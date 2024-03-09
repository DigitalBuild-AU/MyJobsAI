import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/DashboardPage';
import JobListingsPage from './pages/JobListingsPage';
import ApplicationsPage from './pages/ApplicationsPage';
import CVHelperPage from './pages/CVHelperPage';
import CoverLetterGenerationPage from './pages/CoverLetterGenerationPage';
import InterviewsPage from './pages/InterviewsPage';
import SettingsPage from './pages/SettingsPage';

/**
 * App function serves as the root component of the React application.
 * It sets up the router and defines the routes for the application's pages.
 * No parameters.
 * Returns the Router component wrapped around the application's routes.
 */
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/jobListings" component={JobListingsPage} />
          <Route path="/applications" component={ApplicationsPage} />
          <Route path="/cvHelper" component={CVHelperPage} />
          <Route path="/coverLetter" component={CoverLetterGenerationPage} />
          <Route path="/interviews" component={InterviewsPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
