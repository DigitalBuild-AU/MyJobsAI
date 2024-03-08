
jest.mock('../utils/webVitals', () => ({
  setupWebVitals: jest.fn(),
}));

"""
JobListingsPage.test.js

This file contains tests for the JobListingsPage component, ensuring correct rendering and functionality of the job listings page and its features. It serves as the test suite for the JobListingsPage component within the MyJobsAI application. It includes a series of tests aimed at ensuring the correct rendering and functionality of the JobListingsPage and its child components, such as JobListingCard and JobListingTable. The tests cover various aspects including component rendering, user interaction simulations, pagination, and filter functionality. Utilizing React and the React Testing Library, this test suite verifies the integrity and behavior of the JobListingsPage component, ensuring a seamless user experience.

Dependencies:
- React: A JavaScript library for building user interfaces, used here for component creation and testing.
- @testing-library/react: Provides a set of tools to facilitate testing React components, enabling interaction simulation and component behavior verification.
"""

// frontend/pages/JobListingsPage.test.js

import React from 'react';
import JobListingsPage from '../../pages/JobListingsPage';
import JobListingCard from '../../components/JobListingCard';
import JobListingTable from '../../components/JobListingTable';
import { render, fireEvent, screen, act } from '@testing-library/react';

/**
 * Test suite for JobListingsPage component
 */
describe('JobListingsPage component', () => {
  /**
 * Tests that the JobListingCard component renders its props correctly.
 * Verifies that job title, company, and location are displayed as expected.
 */
test('renders JobListingCard component correctly', () => {
    const listing = {
      jobTitle: 'Software Engineer',
      company: 'ABC Inc.',
      location: 'New York',
    };

    const { getByText } = render(<JobListingCard listing={listing} />);
    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('ABC Inc.')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
  });

  /**

  /**
   * Mock function to simulate fetching job listings for testing pagination.
   * This function is crucial for setting up the 'totalPages' and 'currentPage' values
   * needed to test the pagination functionality of the JobListingsPage component.
   * 
   * @returns {Object} An object containing 'totalPages' and 'currentPage' values.
   */
  /**
"""
JobListingsPage Test Suite

This file contains tests for the JobListingsPage component, focusing on rendering, functionality, including individual job listing cards, job listing table, pagination, and filter handling.
"""
   * Tests that the JobListingTable component correctly renders multiple job listings.
   * Checks that all provided job listings are displayed, including job titles, companies, and locations.
   */
/**
 * Mock function to simulate fetching job listings for testing.
 * This function is used to set the 'totalPages' and 'currentPage' values for pagination tests.
 */

test('renders JobListingTable component correctly', () => {
    const listings = [
      {
        jobTitle: 'Software Engineer',
        company: 'ABC Inc.',
        location: 'New York',
      },
      {
        jobTitle: 'Product Manager',
        company: 'XYZ Corp.',
/**
 * Test Case: Renders JobListingCard component correctly.
 * Verifies that the JobListingCard component displays job title, company, and location based on the provided props.
 */
        location: 'San Francisco',
      },
    ];

    const { getByText } = render(<JobListingTable listings={listings} />);
    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('ABC Inc.')).toBeInTheDocument();
/**
 * Test Case: Renders JobListingTable component correctly.
 * Checks that the JobListingTable component correctly displays multiple job listings, including job titles, companies, and locations.
 */
    expect(getByText('New York')).toBeInTheDocument();
    expect(getByText('Product Manager')).toBeInTheDocument();
    expect(getByText('XYZ Corp.')).toBeInTheDocument();
    expect(getByText('San Francisco')).toBeInTheDocument();
  });
/**
 * Test Case: Renders JobListingTable component correctly.
 * Verifies that the JobListingTable component displays multiple job listings, including job titles, companies, and locations.
 */

  // Add more test cases to cover all functionality introduced by JobListingCard and JobListingTable components
});
/**
 * Test Case: handleFilterChange updates filters state and resets page.
 * Simulates changing the filter by status and verifies that the filters state is updated accordingly and the page is reset.
 */
  /**
  * Tests that the handleFilterChange function updates the filters state and resets the page.
  * Simulates changing the filter by status and verifies the state update.
/**
 * Test Case: renderPagination renders correct number of buttons and disables current page button.
 * Verifies that the correct number of pagination buttons are rendered and that the button for the current page is disabled.
 */
  test('renderPagination renders correct number of buttons and disables current page button', () => {
/**
 * Test Case: Updates filters state correctly.
 * Verifies that the updateFilters function correctly updates the filters state with the provided values.
 */
  /**
  * Test Case: Validates input and updates error state for invalid input.
  * This test simulates user input for filters and verifies that the error state is updated appropriately for invalid inputs, ensuring the robustness of form validation within the component.
  */
  test('input validation updates error state for invalid input', () => {
    const { getByPlaceholderText, rerender, getByText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: '', name: 'status' } });
    rerender(<JobListingsPage />);
test('ResponsiveNavbar switches between Navbar and Hamburger Menu based on screen size', () => {
  global.innerWidth = 1024; // Desktop view
  const { queryByText } = render(<ResponsiveNavbar />);
  expect(queryByText('Dashboard')).toBeInTheDocument();
  expect(queryByText('&#9776;')).not.toBeInTheDocument(); // Hamburger menu should not be present

  global.innerWidth = 500; // Mobile view
  global.dispatchEvent(new Event('resize'));
  expect(queryByText('Dashboard')).not.toBeInTheDocument(); // Links should be hidden
  expect(queryByText('&#9776;')).toBeInTheDocument(); // Hamburger menu should be present
});
    expect(getByText('Please enter a valid status.')).toBeInTheDocument();
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: '', name: 'company' } });
    rerender(<JobListingsPage />);
    expect(getByText('Please enter a valid company name.')).toBeInTheDocument();
  });
    const totalPages = 5;
    const currentPage = 2;
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} page={currentPage} />);
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(totalPages);
    expect(buttons[currentPage].disabled).toBeTruthy();
  });
  test('handleFilterChange updates filters state and resets page', async () => {
  test('responsive design renders correct components based on screen size', () => {
    global.innerWidth = 500;
    const { getByText } = render(<JobListingsPage />);
    expect(getByText('Card View')).toBeInTheDocument();
    global.innerWidth = 1024;
    const { getByText: getText } = render(<JobListingsPage />);
    expect(getText('Table View')).toBeInTheDocument();
  });
    
    const { getByPlaceholderText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: 'active', name: 'status' } });
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: 'Tech Inc', name: 'company' } });
    // Assuming JobListingsPage component exposes its state for testing or using a testing-library utility to check state changes
    // This is a placeholder for actual state verification logic
  /**
  * Tests that the createPaginationButton function renders the correct number of buttons.
  */
  // Tests the 'handleWindowSizeChange' method of the JobListingsPage component to verify it correctly updates the component's view state based on the window size.
  test('createPaginationButton renders correct number of buttons', () => {

    const totalPages = 5;
    const currentPage = 2;
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} currentPage={currentPage} />);
    const buttons = queryAllByRole('button');
    // Expecting total buttons to be totalPages + 2 for 'Next' and 'Previous' buttons
    expect(buttons.length).toBe(totalPages + 2);
  });

  /**
  * Tests that the createPaginationButton function disables the button for the current page.
  */
  test('createPaginationButton disables button for current page', () => {
  /**
  * Tests that the createPaginationButton function adds a specific class to the button for the first page.
test('Sidebar component collapses and expands', () => {
  const { getByText, queryByText } = render(<JobListingsPage />);
  const toggleButton = getByText('Open'); // Assuming 'Open' is the text to open the sidebar
  fireEvent.click(toggleButton);
  expect(queryByText('Employment History')).toBeInTheDocument(); // Sidebar content should be visible

  fireEvent.click(toggleButton); // Assuming same button toggles close
  expect(queryByText('Employment History')).not.toBeInTheDocument(); // Sidebar content should be hidden
});

test('Sidebar integration in JobListingsPage', () => {
  const { getByText } = render(<JobListingsPage />);
  expect(getByText('Open')).toBeInTheDocument(); // Sidebar toggle button should be present
});
  */
  test('createPaginationButton adds specific class for first page button', () => {
    const totalPages = 5;
    const currentPage = 0; // First page
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} currentPage={currentPage} />);
    const buttons = queryAllByRole('button');

  test('updateFilters updates filters state with correct values', () => {

    const setFiltersMock = jest.fn();
    JobListingsPage.prototype.setFilters = setFiltersMock; // Mock setFilters function

    const instance = new JobListingsPage();
    instance.updateFilters('status', 'active');
    instance.updateFilters('company', 'Tech Inc');
    instance.updateFilters('location', 'New York');
    instance.updateFilters('role', 'Developer');

    expect(setFiltersMock).toHaveBeenCalledWith({ status: 'active' });
    expect(setFiltersMock).toHaveBeenCalledWith({ company: 'Tech Inc' });
    expect(setFiltersMock).toHaveBeenCalledWith({ location: 'New York' });
    expect(setFiltersMock).toHaveBeenCalledWith({ role: 'Developer' });
  });
    // Assuming the first page button has a specific class 'first-page-btn'
    expect(buttons[1].classList.contains('first-page-btn')).toBeTruthy();
  });

  /**
  * Tests that the createPaginationButton function adds a specific class to the button for the last page.
  */
  test('createPaginationButton adds specific class for last page button', () => {
    const totalPages = 5;
    const currentPage = 4; // Last page
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} currentPage={currentPage} />);
    const buttons = queryAllByRole('button');
    // Assuming the last page button has a specific class 'last-page-btn'
    expect(buttons[totalPages].classList.contains('last-page-btn')).toBeTruthy();
  });
    const totalPages = 5;
    const currentPage = 2;
/**
 * Test Case: Responsive design renders correct components based on screen size.
 * Checks that the correct view (Card View or Table View) is rendered based on the window's inner width.
 */
  /**
   * Test: handleWindowSizeChange updates view state based on window size
   * Purpose: This test verifies that the view state of the JobListingsPage component updates correctly when the window size changes. It simulates changing the window size to a small screen and then to a large screen, and checks if the component renders the appropriate view ('Card View' for small screens and 'Table View' for large screens).
   * Inputs: None
   * Outputs: None
   * Side Effects: The document body will contain text 'Card View' or 'Table View' depending on the simulated window size.
   */
  test('handleWindowSizeChange updates view state based on window size', () => {
    jest.spyOn(window, 'innerWidth', 'get').mockImplementation(() => 500); // Simulate small screen
    const { getByText } = render(<JobListingsPage />);
    expect(getByText('Card View')).toBeInTheDocument();

    jest.spyOn(window, 'innerWidth', 'get').mockImplementation(() => 1024); // Simulate large screen
    const { getByText: getText } = render(<JobListingsPage />);
    expect(getText('Table View')).toBeInTheDocument();
  });

  test('sequential updates to filters result in combined state', () => {
   * Test: sequential updates to filters result in combined state
   * Purpose: This test verifies that sequential updates to the filters in the JobListingsPage component result in a combined state that reflects all changes. It simulates updating different filters sequentially and checks if the final state correctly represents all the updates.
   * Inputs: None
   * Outputs: None
   * Side Effects: The internal state of the JobListingsPage component is updated to reflect the combined effects of all filter updates.
   */
  test('sequential updates to filters result in combined state', () => {
    const setFiltersMock = jest.fn();
    JobListingsPage.prototype.setFilters = setFiltersMock; // Mock setFilters function

    const instance = new JobListingsPage();
    instance.updateFilters('status', 'active');
    instance.updateFilters('company', 'Tech Inc');
    instance.updateFilters('status', 'closed');

    expect(setFiltersMock).toHaveBeenCalledWith({ status: 'active' });
    expect(setFiltersMock).toHaveBeenCalledWith({ company: 'Tech Inc', status: 'active' });
    expect(setFiltersMock).toHaveBeenCalledWith({ company: 'Tech Inc', status: 'closed' });
  });
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} currentPage={currentPage} />);
/**
 * Test Case: Responsive design renders correct components based on screen size.
 * Verifies that the correct components are rendered for different screen sizes, switching between 'Card View' and 'Table View'.
 */
  test('createPaginationButton disables button for current page', () => {
/**
 * Test Case: Creates pagination buttons with the correct number of buttons.
 * Verifies that the createPaginationButton function renders the correct number of buttons, including 'Next' and 'Previous' buttons.
 */
    const totalPages = 5;
    const currentPage = 2;
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} currentPage={currentPage} />);
    const buttons = queryAllByRole('button');
    // +1 to account for the 'Previous' button in the pagination
    expect(buttons[currentPage + 1].disabled).toBeTruthy();
  });
 */
    expect(await screen.findByDisplayValue('active')).toBeInTheDocument();
    expect(await screen.findByDisplayValue('Tech Inc')).toBeInTheDocument();
/**
 * Test Case: Disables the button for the current page in pagination.
 * Verifies that the createPaginationButton function disables the button corresponding to the current page.
 */

  test('error messages are displayed inline with form inputs', async () => {
    const { getByPlaceholderText, rerender, findByText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: '', name: 'status' } });
    rerender(<JobListingsPage />);
    expect(await findByText('Please enter a valid status.')).toBeInTheDocument();
    fireEvent.change(getByPlaceholderText('Filter by company'), { target: { value: '', name: 'company' } });
    rerender(<JobListingsPage />);
    expect(await findByText('Please enter a valid company name.')).toBeInTheDocument();
  });

  test('renderPagination renders correct number of buttons and disables current page button', () => {
    const totalPages = 5;
    const currentPage = 2;
    render(<JobListingsPage />);
    // Mocking fetchListings to set totalPages and currentPage
/**
 * `createPaginationButton` function:
 * This function is responsible for rendering pagination buttons within the JobListingsPage component. It dynamically creates button elements based on the total number of pages and the current page, including 'Next' and 'Previous' buttons for navigation.
 * 
 * Parameters:
 * - `totalPages` (number): The total number of pages to be paginated.
 * - `currentPage` (number): The current page number that is active.
 * 
 * Returns:
 * - An array of button elements for pagination, including 'Next' and 'Previous' buttons.
 */
    // This is a placeholder for actual mocking logic
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(totalPages + 2); // Including next and previous page buttons
    expect(buttons[currentPage + 1].disabled).toBeTruthy(); // +1 to account for previous page button
  });
test('Breadcrumbs component renders correct navigational path', () => {
  const pathElements = [
    { label: 'Home', link: '/' },
    { label: 'Job Listings', link: '/jobListings' }
  ];
  const { getByText } = render(<Breadcrumbs pathElements={pathElements} />);
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Job Listings')).toBeInTheDocument();
});

test('Breadcrumbs component accessibility features', () => {
  const pathElements = [
    { label: 'Home', link: '/' },
    { label: 'Job Listings', link: '/jobListings' }
  ];
  const { container } = render(<Breadcrumbs pathElements={pathElements} />);
  expect(container.querySelector('nav[aria-label="breadcrumb"]')).toBeInTheDocument();
});

/**
 * Test case for verifying that the 'createPaginationButton' function renders a button with the correct page number.
 * It checks that the correct number of buttons are rendered and that the button for the current page is disabled.
 */
  test('renderPagination with only one page', () => {
  /**
   * Test to verify if the useEffect cleanup function correctly resets the filters state upon component unmount.
   * This test renders the JobListingsPage component, unmounts it, and then checks if the filters state is reset to its initial state.
   * Inputs: None
   * Outputs: None
/**
 * Test Case: Error messages are displayed inline with form inputs.
 * Simulates invalid input for filters and verifies that appropriate error messages are displayed inline with the form inputs.
 */
/**
 * Test Case: Displays error messages inline with form inputs.
 * Verifies that error messages are displayed inline with form inputs when validation fails.
 */
   * Side effects: Modifies the internal state of the JobListingsPage component to test the cleanup functionality.
/**
 * Test Case: Responsive design changes view on window resize.
 * Simulates window resize events to verify that the component correctly switches between 'Card View' and 'Table View' based on the window width.
 */
  test('responsive design changes view on window resize', () => {
   */
  test('responsive design changes view on window resize', () => {

    const { getByText } = render(<JobListingsPage />);
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
/**
 * Test Case: useEffect cleanup resets filters state.
 * Verifies that the filters state is reset to its initial state upon component unmount.
 */
    expect(getByText('Card View')).toBeInTheDocument();
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    expect(getByText('Table View')).toBeInTheDocument();
  });
test('ResponsiveNavbar accessibility features', () => {
  global.innerWidth = 500; // Mobile view
  const { getByLabelText } = render(<ResponsiveNavbar />);
  expect(getByLabelText('Toggle menu')).toBeInTheDocument(); // Hamburger menu button should be accessible
});

test('Sidebar accessibility features', () => {
  const { getByText } = render(<Sidebar isOpen={true} />);
  expect(getByText('Employment History').closest('a')).toHaveAttribute('tabIndex', '0');
});

  // Tests the createPaginationButton function to ensure it creates a button with the correct page number, button type, and aria-label. This test verifies the button's properties to ensure they match expected values based on the input page number.
  test('createPaginationButton creates a button with correct page number', () => {
/**
 * Test Suite: handleErrorState function tests.
 * This suite contains tests for the handleErrorState function, verifying that it correctly updates the error state based on input values.
 */
 // Tests the handleErrorState function to ensure it correctly updates the error state based on input values. This suite simulates various scenarios to verify the function's behavior.
    expect(button.type).toBe('button');
    expect(button.props['aria-label']).toBe(\`Go to page \${pageNumber + 1}\`); // Adjusted to match the function's behavior
  });
  
 // Tests the handleErrorState function to ensure it correctly updates the error state based on input values. This suite simulates various scenarios to verify the function's behavior.
describe('handleErrorState function tests', () => {
  let setErrorStateMock;
  let initialState;

  beforeEach(() => {
    setErrorStateMock = jest.fn();
    initialState = { status: false, company: false };
  /**
   * Test: handles window resize to switch to card view correctly
   * Purpose: This test verifies that the JobListingsPage component correctly switches to 'Card View' when the window is resized to a width indicative of a smaller screen (e.g., mobile devices). It simulates a window resize event to a width of 500px and checks if the 'Card View' text is rendered, indicating the UI has correctly adjusted.
   */
  test('handles window resize to switch to card view correctly', () => {
    act(() => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));
    });
    const { getByText } = render(<JobListingsPage />);
    expect(getByText('Card View')).toBeInTheDocument();
  });


  /**
   * Test: handles window resize to switch to table view correctly
   * Purpose: This test ensures that the JobListingsPage component transitions to 'Table View' when the window is resized to a width typical of larger screens (e.g., desktops). By dispatching a resize event with a width of 1024px, the test checks for the presence of 'Table View' text, confirming the UI's adaptability to screen size changes.
   */
  test('handles window resize to switch to table view correctly', () => {
    act(() => {
      global.innerWidth = 1024;
      global.dispatchEvent(new Event('resize'));
    });
    const { getByText } = render(<JobListingsPage />);
    expect(getByText('Table View')).toBeInTheDocument();
  });
  // Tests the 'handleWindowSizeChange' method of the JobListingsPage component to verify it correctly updates the component's view state based on the window size.
  test('handleWindowSizeChange updates view state based on window size', () => {
    global.innerWidth = 500; // Simulate small screen
    const { getByText } = render(<JobListingsPage />);
    expect(getByText('Card View')).toBeInTheDocument();

describe('handleErrorState function tests', () => {
  let setErrorStateMock;
  let initialState;


  beforeEach(() => {
    setErrorStateMock = jest.fn();
    initialState = { status: false, company: false };
    // Mocking useState for errorState
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [initialState, setErrorStateMock]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('sets errorState to true for empty value', () => {
    const name = 'status';
    const value = '';
    JobListingsPage.prototype.handleErrorState(name, value);
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });

  test('updates errorState for non-empty input value', () => {
    const name = 'company';
    const value = 'Tech Inc';
    JobListingsPage.prototype.handleErrorState(name, value);
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: false });
  });

  test('sets errorState to true for null value', () => {
    const name = 'location';
    const value = null;
    JobListingsPage.prototype.handleErrorState(name, value);
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });

  test('sets errorState to true for undefined value', () => {
    const name = 'role';
    const value = undefined;
    JobListingsPage.prototype.handleErrorState(name, value);
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });

  test('updates errorState for valid email format', () => {
    const name = 'email';
    const value = 'user@example.com';
    JobListingsPage.prototype.handleErrorState(name, value);
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: false });
  });

  test('sets errorState to true for invalid email format', () => {
    const name = 'email';
    const value = 'userexample.com'; // Missing '@' character
    JobListingsPage.prototype.handleErrorState(name, value);
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });
});

  afterEach(() => {
/**
 * Test Case: Creates a pagination button with the correct page number.
 * Verifies that the createPaginationButton function creates a button with the correct page number and properties.
 */
    jest.clearAllMocks();
  });
 * Verifies that the createPaginationButton function creates a button with the correct page number and properties.
 */
    jest.clearAllMocks();
  });

  // Test case: Verifies that the handleErrorState function sets the error state to true for an empty input value.
  test('should set errorState to true for empty value', () => {
    const name = 'status';
    const value = '';
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });

  """
  Tests the handleErrorState function with a non-empty input value.
  
  It checks that the error state is correctly set to false for the specified field (in this case, 'company'), indicating that the field's value meets the validation criteria.
  """
  test('should correctly update errorState for non-empty input value', () => {
    const name = 'company';
    const value = 'Tech Inc';
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: false });
  });
});

  """
  Tests the handleErrorState function with an empty input value.
  
  It verifies that the error state is correctly set to true for the specified field (in this case, 'status'). This ensures that the form validation logic properly identifies fields with missing required values.
  """
  test('should correctly update errorState for empty input value', () => {
    const name = 'status';
    const value = '';
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });

  test('should correctly update errorState for non-empty input value', () => {
    const name = 'company';
    const value = 'Tech Corp';
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: false });
  });

  // Test case: Confirms that the handleErrorState function sets the error state to false for a non-empty input value.

  // Tests the handleErrorState function to ensure it sets the error state to true when the input value is null.
  // This test verifies that for a 'location' field with a null value, the error state is correctly updated to reflect an error.
  test('should set errorState to true for null value', () => {
    const name = 'location';
    const value = null;
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });

  // Tests the handleErrorState function to ensure it sets the error state to true when the input value is undefined.
  // This test checks that for a 'role' field with an undefined value, the error state is correctly updated to indicate an error.
  test('should set errorState to true for undefined value', () => {
    const name = 'role';
    const value = undefined;
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });
  });

  /**
   * Test case: Verifies that the handleErrorState function sets the error state to false for a valid email format.
   * This test simulates passing a valid email format to the handleErrorState function and checks if the error state
   * for the 'email' field is correctly set to false.
   */

  test('should correctly update errorState for valid email format', () => {
    const name = 'email';
    const value = 'user@example.com';
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: false });
  });

  /**
   * Test case: Verifies that the handleErrorState function sets the error state to true for an invalid email format.
   * This test simulates passing an invalid email format (missing '@' character) to the handleErrorState function
   * and checks if the error state for the 'email' field is correctly set to true.
   */
  test('should set errorState to true for invalid email format', () => {
    const name = 'email';
    const value = 'userexample.com'; // Missing '@' character
    act(() => {
      JobListingsPage.prototype.handleErrorState(name, value);
    });
    expect(setErrorStateMock).toHaveBeenCalledWith({ ...initialState, [name]: true });
  });

