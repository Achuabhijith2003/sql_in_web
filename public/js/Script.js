document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Attempt to parse the response as JSON
      const contentType = response.headers.get('content-type');
      let data;
  
      if (contentType && contentType.includes('application/json')) {
        data = await response.json(); // Parse JSON if available
      } else {
        data = { message: await response.text() }; // Fallback to plain text
      }
  
      if (response.ok) {
        alert('Login successful');
      } else {
        alert(data.message || 'An error occurred during login');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error during login:', error);
    }
  });
  