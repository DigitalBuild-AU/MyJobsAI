import React from 'react';
import PropTypes from 'prop-types';

function InterviewList({ interviews }) {
  return (
    <div className="interview-list">
      {interviews.map((interview, index) => (
        <div key={index} className="interview">
          <h3>{interview.jobTitle}</h3>
          <p>{new Date(interview.date).toLocaleString()}</p>
          <p>{interview.notes}</p>
        </div>
      ))}
    </div>
  );
}

InterviewList.propTypes = {
  interviews: PropTypes.arrayOf(PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    notes: PropTypes.string
  })).isRequired,
};

export default InterviewList;
