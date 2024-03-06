document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generateCoverLetter').addEventListener('click', function() {
    var jobDescription = document.getElementById('jobDescriptionInput').value;
    var userName = document.getElementById('userName').value;
    var userSkills = document.getElementById('userSkills').value;
    var userExperience = document.getElementById('userExperience').value;
    console.log('Cover Letter generation requested.');
    axios.post('/api/cover_letter/generate', { jobDescription: jobDescription, userName: userName, userSkills: userSkills, userExperience: userExperience })
      .then(function(response) {
        document.getElementById('coverLetterOutput').textContent = response.data.coverLetter;
        console.log('Cover Letter generated.');
      })
      .catch(function(error) {
        console.error('Failed to generate Cover Letter:', error);
        document.getElementById('coverLetterOutput').textContent = 'Error generating Cover Letter.';
      });
  });
});