import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import JobListingsPage from '../pages/JobListingsPage';
import ApplicationTrackingPage from '../pages/ApplicationTrackingPage';
import CVHelperPage from '../pages/CVHelperPage';
import CoverLetterPage from '../pages/CoverLetterPage';
import InterviewsPage from '../pages/InterviewsPage';
import SettingsPage from '../pages/SettingsPage';

const DashboardLayout = () => {
  console.log('DashboardLayout rendering'); // gpt_pilot_debugging_log
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>MyJobsAI</Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>Dashboard</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/joblistings'>Job Listings</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/applications'>Applications</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/cvhelper'>CV Helper</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/coverletter'>Cover Letter</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/interviews'>Interviews</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/settings'>Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={DashboardPage} />
            <Route path='/joblistings' component={JobListingsPage} />
            <Route path='/applications' component={ApplicationTrackingPage} />
            <Route path='/cvhelper' component={CVHelperPage} />
            <Route path='/coverletter' component={CoverLetterPage} />
            <Route path='/interviews' component={InterviewsPage} />
            <Route path='/settings' component={SettingsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default DashboardLayout;