import React from 'react';

const JobListingTable = ({ listings }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Company</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {listings.map((listing, index) => (
          <tr key={index}>
            <td>{listing.jobTitle}</td>
            <td>{listing.company}</td>
            <td>{listing.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobListingTable;
