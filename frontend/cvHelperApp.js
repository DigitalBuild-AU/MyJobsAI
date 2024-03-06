document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generateCVSuggestions').addEventListener('click', function() {
    var jobDescription = document.getElementById('jobDescriptionInput').value;
    var userCV = document.getElementById('userCVInput').value;
    console.log('CV Suggestions requested.');
    axios.post('/api/cv/suggestions', { jobDescription: jobDescription, userCV: userCV })
      .then(function(response) {
        document.getElementById('cvSuggestionsOutput').textContent = response.data.suggestions;
        console.log('CV Suggestions received.');
      })
      .catch(function(error) {
        console.error('Failed to fetch CV suggestions:', error);
        document.getElementById('cvSuggestionsOutput').textContent = 'Error fetching CV suggestions.';
      });
  });
});