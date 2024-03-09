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
          <Route path="/"> {/* Home component or redirect can be placed here */} </Route>
          <Route path="/applications" component={Applications} />
          <Route path="/cover-letter" component={CoverLetterComponent} />
          <Route path="/cv-helper" component={CVHelperComponent} />
          <Route path="/interviews" component={Interviews} />
          <Route path="/job-listings" component={JobListings} />
          <Route path="/settings" component={Settings} />
          <Route path="/email" component={EmailComponent} />
          <Route path="/analytics" component={AnalyticsComponent} />
          {/* Integrating pages from section A */}
          <Route path="/applicationsPage" component={ApplicationsPage} />
          <Route path="/cvHelperPage" component={CVHelperPage} />
          <Route path="/coverLet...iews" component={InterviewsPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
