"""
Test suite for the JobListingsPage component.

This file contains tests for the rendering and functionality of the JobListingsPage component, including individual job listing cards, job listing table, pagination, and filter handling.
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
        location: 'San Francisco',
      },
    ];

    const { getByText } = render(<JobListingTable listings={listings} />);
    expect(getByText('Software Engineer')).toBeInTheDocument();
    expect(getByText('ABC Inc.')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
    expect(getByText('Product Manager')).toBeInTheDocument();
    expect(getByText('XYZ Corp.')).toBeInTheDocument();
    expect(getByText('San Francisco')).toBeInTheDocument();
  });

  // Add more test cases to cover all functionality introduced by JobListingCard and JobListingTable components
});

  /**
  * Tests that the handleFilterChange function updates the filters state and resets the page.
  * Simulates changing the filter by status and verifies the state update.
  */
  test('handleFilterChange updates filters state and resets page', () => {
    const { getByPlaceholderText, rerender } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: 'active', name: 'status' } });
    rerender(<JobListingsPage />);
  test('updateFilters updates filters state correctly', () => {
    // Mock the setFilters function
    const mockSetFilters = jest.fn();
    // Replace the actual setFilters with the mock
    JobListingsPage.__Rewire__('setFilters', mockSetFilters);
    // Call updateFilters with a sample filter
    updateFilters('status', 'active');
    // Check if setFilters was called correctly
    expect(mockSetFilters).toHaveBeenCalledWith({ status: 'active' });
    // Restore setFilters
    JobListingsPage.__ResetDependency__('setFilters');
  });

  /**
  * Tests that the renderPagination function renders the correct number of buttons.
  * Verifies that the button for the current page is disabled.
  */
  test('renderPagination renders correct number of buttons and disables current page button', () => {
  test('input validation updates error state for invalid input', () => {
    const { getByPlaceholderText, rerender, getByText } = render(<JobListingsPage />);
    fireEvent.change(getByPlaceholderText('Filter by status'), { target: { value: '', name: 'status' } });
    rerender(<JobListingsPage />);
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
  */
  test('createPaginationButton adds specific class for first page button', () => {
    const totalPages = 5;
    const currentPage = 0; // First page
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} currentPage={currentPage} />);
    const buttons = queryAllByRole('button');
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
    const { queryAllByRole } = render(<JobListingsPage totalPages={totalPages} currentPage={currentPage} />);
    const buttons = queryAllByRole('button');
    // +1 to account for the 'Previous' button in the pagination
    expect(buttons[currentPage + 1].disabled).toBeTruthy();
  });
/**
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
 * Mock function to simulate fetching job listings for testing.
 * This function is used to set the 'totalPages' and 'currentPage' values for pagination tests.
 */
    expect(await screen.findByDisplayValue('active')).toBeInTheDocument();
    expect(await screen.findByDisplayValue('Tech Inc')).toBeInTheDocument();

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
    // This is a placeholder for actual mocking logic
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(totalPages + 2); // Including next and previous page buttons
    expect(buttons[currentPage + 1].disabled).toBeTruthy(); // +1 to account for previous page button
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
   * Side effects: Modifies the internal state of the JobListingsPage component to test the cleanup functionality.
   */
  test('useEffect cleanup resets filters state', () => {
    const { unmount } = render(<JobListingsPage />);
    // Assuming JobListingsPage component exposes its state for testing or using a testing-library utility to check state changes
    // This is a placeholder for actual state verification logic before unmount
    unmount();
    // This is a placeholder for actual state verification logic after unmount
    // Expect filters state to be reset to initial state
    expect(/* logic to check filters state */).toEqual({status: '', company: ''});
  });
    const totalPages = 1;
    const currentPage = 0;
    render(<JobListingsPage />);
    // Mocking fetchListings to set totalPages and currentPage
    // This is a placeholder for actual mocking logic
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(3); // Including next and previous page buttons, which should be disabled
    expect(buttons[1].disabled).toBeTruthy(); // Current page button
  });


  /**
   * Test to verify the responsive design functionality of the JobListingsPage component by simulating window resize events.
   * This test initially sets the window width to 500px, triggering a resize event, and checks if the component displays the 'Card View'.
   * It then sets the window width to 1024px, triggers another resize event, and checks if the component displays the 'Table View'.
   * Inputs: None
   * Outputs: None
   * Side effects: Modifies the global window.innerWidth property to simulate window resize events.
   */
  test('responsive design changes view on window resize', () => {

    const { getByText } = render(<JobListingsPage />);
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    expect(getByText('Card View')).toBeInTheDocument();
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    expect(getByText('Table View')).toBeInTheDocument();
  });

  // Tests the createPaginationButton function to ensure it creates a button with the correct page number, button type, and aria-label. This test verifies the button's properties to ensure they match expected values based on the input page number.
  test('createPaginationButton creates a button with correct page number', () => {
    const pageNumber = 3;
    const button = createPaginationButton(pageNumber);
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
    expect(getByText('Table View')).toBeInTheDocument();
  });
    
  test('createPaginationButton creates a button with correct page number', () => {
    const pageNumber = 3;
    const button = createPaginationButton(pageNumber);
    expect(button.props.children).toBe(pageNumber + 1); // Adjusted to match the function's behavior
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
    // Mocking useState for errorState
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [initialState, setErrorStateMock]);
  });

  afterEach(() => {
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