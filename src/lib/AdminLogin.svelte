<script>
  import { authStore } from '../authStore.js'; // Correct path to store

  let username = '';
  let password = '';
  let feedbackMessage = ''; // To display login success/failure

  async function handleSubmit() { // Make async if using await for fetch
    feedbackMessage = ''; // Clear previous feedback

    // --- DATABASE/BACKEND INTEGRATION Placeholder ---
    // TODO: Replace this hardcoded check with an API call to the backend.
    // The backend service should receive the username and password,
    // verify them against the database (e.g., MySQL) for an admin user,
    // and return a success/failure response.
    // Example (conceptual):
    // try {
    //   const response = await fetch('/api/login/admin', { // Potentially different endpoint for admin
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    //   });
    //   if (response.ok) {
    //     const adminData = await response.json(); // Assuming backend returns user info
    //     authStore.loginAdmin(adminData.username); // Update store on successful backend validation
    //     feedbackMessage = 'Admin login successful!';
    //   } else {
    //     feedbackMessage = 'Invalid admin username or password.'; // Or get error from response
    //   }
    // } catch (error) {
    //   feedbackMessage = 'Login failed. Please try again later.';
    //   console.error('Admin login error:', error);
    // }
    // --- END DATABASE/BACKEND INTEGRATION Placeholder ---


    // Simulate credential check (REMOVE THIS BLOCK WHEN BACKEND CALL IS IMPLEMENTED)
    if (username === 'admin' && password === 'adminpass') {
      authStore.loginAdmin(username); // Update the store on successful admin login
      feedbackMessage = 'Admin login successful!';
      // Optionally clear fields or redirect after successful login
      // username = '';
      // password = '';
    } else {
      feedbackMessage = 'Invalid admin username or password.';
    }
  }
</script>

<div class="login-container">
  <h2>Admin Login</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="admin-username">Username:</label>
      <input type="text" id="admin-username" bind:value={username} required />
    </div>
    <div class="form-group">
      <label for="admin-password">Password:</label>
      <input type="password" id="admin-password" bind:value={password} required />
    </div>
    {#if feedbackMessage}
      <p class="feedback" class:error={feedbackMessage.includes('Invalid')}>{feedbackMessage}</p>
    {/if}
    <button type="submit">Login</button>
  </form>
</div>

<style>
  /* Styles can be shared or customized */
  .login-container {
    border: 1px solid #ccc;
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 350px;
    margin: 2rem auto; /* Center component */
    background-color: #f8f8f8; /* Slightly different background for admin */
  }
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.4em;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.3rem;
  }
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    padding: 0.7rem;
    background-color: #ff3e00; /* Different button color for admin */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 1rem; /* Add space above button */
  }
  button:hover {
    background-color: #d93600; /* Darker shade for hover */
  }
  .feedback {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem; /* Add space below feedback */
    color: green;
  }
  .feedback.error {
    color: red;
  }
</style>
