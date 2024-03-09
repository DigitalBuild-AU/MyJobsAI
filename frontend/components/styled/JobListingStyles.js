/**
 * This file contains styled components for the Job Listings feature of the MyJobsAI application.
 * It defines the visual structure and style for individual job listings and their containers, enhancing the user interface.
 * Main components include:
 * - JobListingsContainer: A container that wraps around all job listings, providing consistent spacing and alignment.
 * - JobListingCard: Styled component for individual job listings, including styling for background, shadow, and spacing.
 * - JobListingTitle: Defines the style for the title of each job listing, utilizing the primary color for emphasis.
 */

import styled from 'styled-components';

export const JobListingsContainer = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
\`;

export const JobListingCard = styled.div\`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  max-width: 600px;
\`;

export const JobListingTitle = styled.h2\`
  color: var(--primary-color);
  margin: 0 0 10px 0;
\`;
