import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * `SummaryWidget` displays a summary of the user's job application activities.
 * Props:
 * - summary: An object containing the counts of applications sent, interviews scheduled, and offers received.
 */

const SummaryWidget = ({ summary }) => (
  <div className="summary-widget">
    <h2>Summary</h2>
    <p>Applications Sent: {summary.applicationsSent}</p>
    <p>Interviews Scheduled: {summary.interviewsScheduled}</p>
    <p>Offers Received: {summary.offersReceived}</p>
  </div>
);

/**
 * `QuoteWidget` fetches and displays a random quote.
 * Uses state to manage the fetched quote and performs the fetch on component mount.
 */
const QuoteWidget = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('/quotes.json')
      .then(response => {
        const quotes = response.data.quotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)].text;
        setQuote(randomQuote);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="quote-widget">
      <h2>Quote of the Day</h2>
      <p>{quote}</p>
    </div>
  );
};
const EmailForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Email form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <h2>Send an Email</h2>
      <input type="text" placeholder="Recipient's email" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Your message here"></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export { SummaryWidget, QuoteWidget, EmailForm };
