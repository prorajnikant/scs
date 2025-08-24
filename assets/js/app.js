// SCS Sails App - Client-side JavaScript

$(document).ready(function() {
  
  // Add some basic interactivity
  console.log('SCS Sails App loaded successfully!');
  
  // Example: Add click handlers for API endpoints
  $('.api-endpoint').on('click', function(e) {
    e.preventDefault();
    const endpoint = $(this).data('endpoint');
    
    $.get(endpoint)
      .done(function(data) {
        console.log('API Response:', data);
        alert('API call successful! Check console for details.');
      })
      .fail(function(xhr, status, error) {
        console.error('API Error:', error);
        alert('API call failed: ' + error);
      });
  });
  
  // Add timestamp update
  function updateTimestamp() {
    const now = new Date();
    $('.timestamp').text(now.toLocaleString());
  }
  
  // Update timestamp every second
  setInterval(updateTimestamp, 1000);
  updateTimestamp(); // Initial update
  
});
