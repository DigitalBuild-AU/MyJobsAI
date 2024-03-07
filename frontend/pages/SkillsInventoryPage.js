import React, { useState, useEffect } from 'react';
import { postSkills } from '../utils/apiHelpers';
import './SkillsInventoryPage.css';

const SkillsInventoryPage = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Failed to fetch skills', error);
      }
    };
    fetchSkills();
  }, []);

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postSkills(skills);
      alert('Skills saved successfully!');
    } catch (error) {
      console.error('Failed to save skills', error.message);
    }
  };

  return (
    <div className="skills-inventory-page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a new skill"
        />
        <button type="button" onClick={addSkill}>Add Skill</button>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <button type="submit">Save Skills</button>
      </form>
    </div>
  );
};

export default SkillsInventoryPage;
