/**
 * AnalyticsComponent: A component for displaying analytics data related to job applications.
 * This component fetches data from a backend API and displays total applications, interviews scheduled, offers received, and average response time.
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * AnalyticsComponent is a React functional component that fetches and displays analytics data such as total applications, interviews scheduled, offers received, and average response time.
 * It makes a GET request to the backend analytics API and updates its state with the fetched data to display to the user.
 */
const AnalyticsComponent = () => {
  const [totalApplications, setTotalApplications] = useState(0);
  const [interviewsScheduled, setInterviewsScheduled] = useState(0);
  const [offersReceived, setOffersReceived] = useState(0);
  const [avgResponseTime, setAvgResponseTime] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/analytics')
      .then(response => {
        const { totalApplications, interviewsScheduled, offersReceived, avgResponseTime } = response.data;
        setTotalApplications(totalApplications);
        setInterviewsScheduled(interviewsScheduled);
        setOffersReceived(offersReceived);
        setAvgResponseTime(avgResponseTime);
      })
      .catch(error => {
        setError('Unable to load data. Please try again later.');
        console.error(`Error fetching analytics: ${error.message}, Stack: ${error.stack}`);
      });
  }, []);
        console.error(`Error fetching analytics: ${error.message}, Stack: ${error.stack}`);
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>Total Applications: {totalApplications}</p>
          <p>Interviews Scheduled: {interviewsScheduled}</p>
          <p>Offers Received: {offersReceived}</p>
          <p>Average Response Time (days): {avgResponseTime ? avgResponseTime.toFixed(2) : 'No data'}</p>
        </>
      )}
    </div>
  );
};

export default AnalyticsComponent;
