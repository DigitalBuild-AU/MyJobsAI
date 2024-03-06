document.addEventListener('DOMContentLoaded', (event) => {
  // Functions to fetch, display, and manage interviews.
  console.log('Interviews page loaded');
});

function fetchAndDisplayInterviews() {
  axios.get('http://localhost:3000/api/interviews')
    .then(function(response) {
      console.log('Interviews fetched successfully.');
      // Logic to display interviews.
    })
    .catch(function(error) {
      console.error('Error fetching interviews:', error); // gpt_pilot_debugging_log
    });
}

fetchAndDisplayInterviews();

document.getElementById('scheduleInterviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const jobTitle = document.getElementById('jobTitleInput').value;
  const date = document.getElementById('interviewDateInput').value;
  const notes = document.getElementById('notesInput').value;

  axios.post('http://localhost:3000/api/interviews', { jobTitle, date, notes })
    .then(function(response) {
      console.log('Interview scheduled successfully.'); // gpt_pilot_debugging_log
      alert('Interview scheduled successfully.');
      fetchAndDisplayInterviews(); // Refresh the interviews list to include the newly scheduled interview.
    })
    .catch(function(error) {
      console.error('Error scheduling interview:', error); // gpt_pilot_debugging_log
      alert('Failed to schedule interview.'); // Provide user feedback on error.
    });
});