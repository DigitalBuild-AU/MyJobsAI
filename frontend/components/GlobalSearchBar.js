import React, { useState } from 'react';
import axios from 'axios';

const GlobalSearchBar = () => {
    const [query, setQuery] = useState('');

    const onSearch = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/search', { query });
            // Handle the search response here. This could involve setting state to display the search results.
            console.log(response.data); // Placeholder for response handling
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
