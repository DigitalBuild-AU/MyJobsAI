/**
 * Renders the Employment History page, allowing users to add, edit, and submit their employment history.
 */

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
    /**
     * Fetches and sets the user's employment history from the server.
     */
    const fetchEmploymentHistory = async () => {
      const response = await axios.get('/api/employmentHistory');
      setEmploymentHistory(response.data);
    };
    fetchEmploymentHistory();
  }, []);

  /**
   * Adds a new role to the local employment history state based on user input.
   */
  const addNewRole = () => {
    const newRole = { position, company, startDate, endDate, location, description, highlights: notableAchievements };
    setEmploymentHistory([...employmentHistory, newRole]);
    setPosition('');
    setCompany('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setDescription('');
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
        <button type="button" className="btn-primary" onClick={addNewRole}>Add New Role</button>
        <button type="submit" className="btn-primary">Save Employment History</button>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
        <textarea value={notableAchievements} onChange={(e) => setNotableAchievements(e.target.value)} placeholder="Highlights"></textarea>
      </form>
    </div>
  );
};

export default EmploymentHistoryPage;
/**
 * Adds a new role to the local employment history state.
 * @function addNewRole
 * @return {void}
 * Submits the employment history to the server.
 * @async
 * @function handleSubmit
 * @param {Event} e - The event object from the form submission.
 * @throws {Error} When the submission fails.
 * @return {Promise<void>} A promise that resolves when the employment history is successfully submitted.
 */
      <div className="employment-history-list">
        {employmentHistory.map((role, index) => (
          <div key={index} className="employment-history-item">
            <h3>{role.position} at {role.company}</h3>
            <p>{role.startDate} - {role.endDate}</p>
            <p>Location: {role.location}</p>
            <p>Description: {role.description}</p>
            <p>Highlights: {role.highlights}</p>
            <button onClick={() => editRole(index)}>Edit</button>
            <button onClick={() => deleteRole(index)}>Delete</button>
          </div>
        ))}
      </div>
