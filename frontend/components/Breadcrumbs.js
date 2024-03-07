import React from 'react';

const Breadcrumbs = ({ pathElements }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathElements.map((element, index) => (
          <li key={index} className="breadcrumb-item">
            {index < pathElements.length - 1 ? (
              <>
                <a href={element.link}>{element.label}</a> &gt;
              </>
            ) : (
              <span>{element.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
