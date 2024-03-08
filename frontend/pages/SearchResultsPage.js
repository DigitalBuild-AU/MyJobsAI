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
        <div>
            <h2>Search Results for "{query}"</h2>
            <div>
                <h3>Jobs</h3>
                {results.jobs.length > 0 ? (
                    results.jobs.map((job) => <JobListingCard key={job.id} listing={job} />)
                ) : (
                    <p>No job listings found.</p>
                )}
            </div>
            <div>
                <h3>Contacts</h3>
                {results.contacts.length > 0 ? (
                    results.contacts.map((contact) => (
                        <div key={contact.id}>{contact.name}</div>
                    ))
                ) : (
                    <p>No contacts found.</p>
                )}
            </div>
            <div>
                <h3>Tasks</h3>
                {results.tasks.length > 0 ? (
                    results.tasks.map((task) => (
                        <div key={task.id}>{task.title}</div>
                    ))
                ) : (
                    <p>No tasks found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
