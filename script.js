document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  console.log('submit-btn');

        window.location.href="https://www.clicky.pk/";
    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    let errorMessage = '';
    
    // Basic validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      errorMessage = 'All fields are required.';
    } else if (password !== confirmPassword) {
      errorMessage = 'Passwords do not match.';
    } else if (password.length < 6) {
      errorMessage = 'Password should be at least 6 characters long.';
    }
    
    // Display error message if any
    const errorElement = document.getElementById('error-message');
    if (errorMessage !== '') {
      errorElement.textContent = errorMessage;
    } else {
      errorElement.textContent = '';
      alert('Form submitted successfully!');

      
  
      // Here, you can handle the actual form submission (e.g., via an API call)
    }
  });