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
  
      let data;
      try {
        data = await response.json(); // Try to parse JSON response
      } catch (err) {
        data = await response.text(); // Fallback to plain text response
        console.error('Error parsing JSON:', err);
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
  