/**
 * Renders the Dashboard page, displaying a summary of job applications, interviews, offers, and a random quote.
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
    const [summary, setSummary] = useState({
        applicationsSent: 0,
        interviewsScheduled: 0,
        offersReceived: 0,
    });
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        /**
         * Fetches and sets the summary of job applications, interviews, and offers from the server.
         */
        /**
         * Fetches and sets a random quote from the local quotes.json file.
         */
        const fetchQuote = () => {
            try {
                const response = await axios.get('http://localhost:3000/api/dashboard/summary');
                console.log('Fetching summary data from /api/dashboard/summary'); // gpt_pilot_debugging_log
                setSummary(response.data);
            } catch (err) {
                console.error(`Error fetching summary data: ${err}`, err.stack); // gpt_pilot_debugging_log
                setError('Failed to fetch dashboard summary. Please try again later.');
            }
        };
        
        const fetchQuote = () => {
            axios.get('/quotes.json')
                .then(res => {
                    const quotes = res.data.quotes;
                    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)].text;
                    setQuote(randomQuote);
                    console.log('Quote of the day fetched successfully.'); // gpt_pilot_debugging_log
                })
                .catch(error => {
                    console.error('Error fetching quote of the day:', error, error.stack); // gpt_pilot_debugging_log
                    setError('Failed to fetch quote of the day. Please try again later.');
                });
        };
        
        fetchSummary();
        fetchQuote();
    }, []);

    return (
        <div>
            <h1 style={{ color: 'var(--primary-color)' }}>Dashboard Overview</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'var(--error-color)' }}>{error}</p>
            ) : (
                <div>
                    <div>
                        <h2 style={{ color: 'var(--secondary-color)' }}>Job Application Summary</h2>
                        <ul>
                            <li>Applications Sent: {summary.applicationsSent}</li>
                            <li>Interviews Scheduled: {summary.interviewsScheduled}</li>
                            <li>Offers Received: {summary.offersReceived}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--secondary-color)' }}>Quote of the Day</h3>
                        <blockquote>{quote}</blockquote>
                    </div>
                    <div className="quick-actions">
                        <Link to="/jobListings">View Job Listings</Link>
                        <Link to="/applicationTracking">Track Applications</Link>
                    </div>
                    <div>
                        <h4>Upcoming Features</h4>
                        <ul>
                            <li>Interview Scheduler</li>
                            <li>Task and Networking Tracker</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardPage;