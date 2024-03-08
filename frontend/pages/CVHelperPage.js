import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CVHelperPage = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [userCV, setUserCV] = useState('');
  const [cvSuggestions, setCvSuggestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/cv/suggestions', { jobDescription, userCV })
      .then(response => {
        setCvSuggestions(response.data.suggestions);
      })
      .catch(error => {
        console.error('Failed to fetch CV suggestions:', error);
        setCvSuggestions('Error fetching CV suggestions.');
      });
  };

  return (

    useEffect(() => {
        fetchNavbarContent();
        handleBootstrapScript();
            if (scriptTags[i].src.includes('bootstrap.bundle.min.js')) {
                scriptTags[i].remove();
                break;
            }
        }

        const newBootstrapScript = document.createElement('script');
        newBootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(newBootstrapScript);
    }, []);
      <div id="cvAssistant">
        <textarea id="jobDescriptionInput" placeholder="Paste the job description here..." className="form-control mb-2" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}></textarea>
        <textarea id="userCVInput" placeholder="Paste your CV here..." className="form-control mb-2" value={userCV} onChange={(e) => setUserCV(e.target.value)}></textarea>
        <button onClick={handleSubmit} className="btn btn-primary">Get CV Suggestions</button>
      </div>

      {cvSuggestions && (
        <div>
          <h2>CV Suggestions</h2>
          <p>{cvSuggestions}</p>
    // Fetches the navbar content and sets it using setNavbarContent
    const fetchNavbarContent = () => {
        axios.get('navbar.html')
            .then(response => {
                setNavbarContent(response.data);
                console.log('Navbar dynamically added.'); // gpt_pilot_debugging_log
            })
            .catch(error => {
                console.error('Failed to load navbar:', error); // gpt_pilot_debugging_log
            });
    };
        </div>
      )}
    </div>
};

export default CVHelperPage;
    // Handles the removal of existing bootstrap script tag and appends a new one
    const handleBootstrapScript = () => {
        const scriptTags = document.getElementsByTagName('script');
        for (let i = 0; i < scriptTags.length; i++) {
            if (scriptTags[i].src.includes('bootstrap.bundle.min.js')) {
                scriptTags[i].remove();
                break;
            }
        }

        const newBootstrapScript = document.createElement('script');
        newBootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(newBootstrapScript);
    };
