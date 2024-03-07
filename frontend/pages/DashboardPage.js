import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Modal from '../components/Modal';

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
        const fetchSummary = async () => {
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
const [isModalOpen, setIsModalOpen] = useState(false);
const [modalContent, setModalContent] = useState(null);

const handleOpenModal = (content) => {
  setModalContent(content);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setModalContent(null);
};

const renderAddEditModal = () => (
  <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    {modalContent}
  </Modal>
);
                    console.error('Error fetching quote of the day:', error, error.stack); // gpt_pilot_debugging_log
                    setError('Failed to fetch quote of the day. Please try again later.');
                });
        };
        
        fetchSummary();
        fetchQuote();
    }, []);

    return (
        <div className="dashboard">
            <h1>Dashboard Overview</h1>
            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
                <div className="dashboard-content">
                    <Card title="Job Application Summary" className="summary-card">
                        <p>Applications Sent: {summary.applicationsSent}</p>
                        <p>Interviews Scheduled: {summary.interviewsScheduled}</p>
                        <p>Offers Received: {summary.offersReceived}</p>
                        <button onClick={() => handleOpenModal('add')}>Add Entry</button>
                    </Card>
                    <Card title="Quote of the Day" className="quote-card">
                        <blockquote>{quote}</blockquote>
                    </Card>
                    {renderAddEditModal()}
                </div>
            )}
        </div>
    );
}

export default DashboardPage;