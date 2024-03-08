/**
 * SearchResultsPage Component
 * This component renders the search results page, displaying job listings, contacts, and tasks based on the user's search query.
 */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import JobListingCard from '../components/JobListingCard';

const SearchResultsPage = () => {
    const { query } = useParams();
    const [results, setResults] = useState({ jobs: [], contacts: [], tasks: [] });

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/search/${query}`);
                setResults(response.data);
            } catch (error) {
                console.error('Failed to fetch search results:', error);
            }
        };

        fetchResults();
    }, [query]);

    return (
/**
 * Renders job listings based on search results.
 * Takes a results object as a parameter and returns JSX elements representing job listings or a message indicating no jobs were found.
 * @param {Object} results - The search results object containing an array of jobs.
/**
 * Renders contacts based on search results.
 * Takes a results object as a parameter and returns JSX elements representing contacts or a message indicating no contacts were found.
 * @param {Object} results - The search results object containing an array of contacts.
 * @returns {JSX.Element} A list of div elements with contact names if contacts are found, otherwise a message indicating no contacts were found.
 */
const renderContacts = (results) => {
    return results.contacts.length > 0 ? (
        results.contacts.map((contact) => (
            <div key={contact.id}>{contact.name}</div>
        ))
    ) : (
        <p>No contacts found.</p>
    );
};
const renderJobs = (results) => {
    return results.jobs.length > 0 ? (
        results.jobs.map((job) => <JobListingCard key={job.id} listing={job} />)
    ) : (
        <p>No job listings found.</p>
    );
};

const renderContacts = (results) => {
    return results.contacts.length > 0 ? (
        results.contacts.map((contact) => (
            <div key={contact.id}>{contact.name}</div>
        ))
    ) : (
        <p>No contacts found.</p>
    );
};

/**
 * Renders tasks based on search results.
 * Takes a results object as a parameter and returns JSX elements representing tasks or a message indicating no tasks were found.
 * @param {Object} results - The search results object containing an array of tasks.
 * @returns {JSX.Element} A list of div elements with task titles if tasks are found, otherwise a message indicating no tasks were found.
 */
const renderTasks = (results) => {
    return results.tasks.length > 0 ? (
        results.tasks.map((task) => (
            <div key={task.id}>{task.title}</div>
        ))
    ) : (
        <p>No tasks found.</p>
    );
};
        <div>
            <h2>Search Results for "{query}"</h2>
            <div>
                <h3>Jobs</h3>
                {renderJobs(results)}
            </div>
            <div>
                <h3>Contacts</h3>
                {renderContacts(results)}
            </div>
/**
 * Renders the search results page.
 * Fetches and displays job listings, contacts, and tasks based on the user's search query.
 */
/**
 * useEffect hook to fetch search results based on the query parameter.
 * It updates the state with the fetched results for jobs, contacts, and tasks.
 */
            <div>
                <h3>Tasks</h3>
                {renderTasks(results)}
/**
 * Renders contact information based on search results.
 * @param {Object} results - The search results object containing an array of contacts.
 * @returns A list of div elements with contact names if contacts are found, otherwise a message indicating no contacts were found.
 */
/**
 * Renders tasks based on search results.
 * @param {Object} results - The search results object containing an array of tasks.
 * @returns A list of div elements with task titles if tasks are found, otherwise a message indicating no tasks were found.
 */
            </div>
        </div>
    );
};

export default SearchResultsPage;
