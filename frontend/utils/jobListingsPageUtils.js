import { fetchListingsFromAPI } from './jobListingsUtils';

export const handleWindowSizeChange = (setView) => {
  if (window.innerWidth < 768) {
    setView('card');
  } else {
    setView('table');
  }
};

export const fetchListings = async (filters, page, setListings, setTotalPages) => {
  console.log(`Fetching listings with filters: ${JSON.stringify(filters)}, page: ${page}`);
  try {
    const response = await fetchListingsFromAPI(filters, page);
    setListings(response.data.listings);
    setTotalPages(response.data.totalPages);
  } catch (err) {
    console.error('Error fetching job listings', err);
  }
};

export const cleanupOnUnmount = (setFilters) => {
  window.removeEventListener('resize', () => handleWindowSizeChange(setFilters));
  setFilters({status: '', company: ''});
};
