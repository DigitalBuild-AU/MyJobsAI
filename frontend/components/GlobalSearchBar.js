import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const GlobalSearchBar = () => {
    const [query, setQuery] = useState('');

    const onSearch = async () => {
        try {
            // Redirecting to the SearchResultsPage with the query as a URL parameter
            history.push(`/search/${query}`);
        } catch (error) {
            console.error('Search request failed:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default GlobalSearchBar;
    const history = useHistory();
/**
 * GlobalSearchBar Component
 * This component renders a global search bar that allows users to search for job listings, contacts, and tasks.
 */
};

export default GlobalSearchBar;
    const history = useHistory();
