import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        setError('Failed to fetch analytics.');
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
