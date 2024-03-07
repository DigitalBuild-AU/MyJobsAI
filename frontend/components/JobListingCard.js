import React from 'react';

const JobListingCard = ({ listing }) => {
  const { jobTitle, company, location } = listing;

  return (
    <div className="card">
      <h3>{jobTitle}</h3>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  );
};

export default JobListingCard;
