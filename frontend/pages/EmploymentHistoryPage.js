import React, { useState, useEffect } from 'react';
import { postEmploymentHistory } from '../utils/apiHelpers';
import './EmploymentHistoryPage.css';

const EmploymentHistoryPage = () => {
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [notableAchievements, setNotableAchievements] = useState('');

  useEffect(() => {
    const fetchEmploymentHistory = async () => {
      const response = await axios.get('/api/employmentHistory');
      setEmploymentHistory(response.data);
    };
    fetchEmploymentHistory();
  }, []);

  const addNewRole = () => {
    const newRole = { position, company, startDate, endDate, responsibilities, notableAchievements };
    setEmploymentHistory([...employmentHistory, newRole]);
    setPosition('');
    setCompany('');
    setStartDate('');
    setEndDate('');
    setResponsibilities('');
    setNotableAchievements('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postEmploymentHistory(employmentHistory);
      alert('Employment history saved successfully!');
    } catch (error) {
      console.error('Failed to save employment history', error.message);
    }
  };

  return (
    <div className="employment-history-page">
      <form onSubmit={handleSubmit}>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
        <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} placeholder="Responsibilities"></textarea>
        <textarea value={notableAchievements} onChange={(e) => setNotableAchievements(e.target.value)} placeholder="Notable Achievements"></textarea>
        <button type="button" onClick={addNewRole}>Add New Role</button>
        <button type="submit">Save Employment History</button>
      </form>
    </div>
  );
};

export default EmploymentHistoryPage;
