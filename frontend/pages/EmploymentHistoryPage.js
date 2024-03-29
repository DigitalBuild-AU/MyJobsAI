/**
 * Renders the Employment History page, allowing users to add, edit, and submit their employment history.
 */

import React, { useState, useEffect } from 'react';
import { postEmploymentHistory } from '../utils/apiHelpers';
import Card from '../components/Card';
import Modal from '../components/Modal';
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

  // Removed the addNewRole function as it will be handled by the modal interaction now.
/**
 * Fetches the user's employment history from the server on component mount.
 * @async
 * @function useEffect
 * @return {Promise<void>} A promise that resolves when the employment history is fetched and set in state.
 */
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
    
    /**
     * Submits the updated employment history to the server and alerts the user upon success or failure.
     */
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
        <button type="button" onClick={addNewRole}>Add New Role</button>
        <button type="submit">Save Employment History</button>
        <button type="submit">Save Employment History</button>
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

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalRole, setModalRole] = useState(null);

const handleOpenModal = (role = null) => {
  setModalRole(role);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setModalRole(null);
};

const saveRole = (role) => {
  if (modalRole) {
    // Edit existing role
    const updatedHistory = employmentHistory.map((item) =>
      item === modalRole ? role : item
    );
    setEmploymentHistory(updatedHistory);
  } else {
    // Add new role
    setEmploymentHistory([...employmentHistory, role]);
  }
  handleCloseModal();
};

const renderModal = () => (
  <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    {/* Modal content for adding or editing a role */}
    <div>
      <h2>{modalRole ? 'Edit Role' : 'Add New Role'}</h2>
      {/* Form inputs and save button */}
      <button onClick={() => saveRole({
        position, company, startDate, endDate, responsibilities, notableAchievements
      })}>
        {modalRole ? 'Save Changes' : 'Add Role'}
      </button>
    </div>
  </Modal>
);

<button onClick={() => handleOpenModal()}>Add New Role</button>
{renderModal()}
