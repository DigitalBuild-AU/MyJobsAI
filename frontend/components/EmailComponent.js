import React, { useState } from 'react';
import axios from 'axios';

const EmailComponent = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [emailResponse, setEmailResponse] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/email/send', { to, subject, body })
      .then(response => {
        setEmailResponse(response.data.message);
      })
      .catch(error => {
        setEmailResponse(`Error sending email: ${error.message}`);
      });
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <div>
          <label>To:</label>
          <input type="email" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button type="submit">Send Email</button>
      </form>
      <div>
        <p>{emailResponse}</p>
      </div>
    </div>
  );
};

export default EmailComponent;
