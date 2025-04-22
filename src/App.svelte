<script>
  // Import store
  import { authStore } from './authStore.js';

  // Import Login components
  import UserLogin from './lib/UserLogin.svelte';
  import AdminLogin from './lib/AdminLogin.svelte';

  // Import chart components (only needed when logged in)
  import LineChart from './lib/LineChart.svelte';
  import BarChart from './lib/BarChart.svelte';
  import PieChart from './lib/PieChart.svelte';

  // --- DATABASE INTEGRATION Placeholder ---
  // TODO: Replace sample data import with logic to fetch data from MySQL.
  // Import sample data (REMOVE THIS LINE ONCE DB LOGIC IS IMPLEMENTED)
  import { lineChartData, barChartData, pieChartData } from './sampleData.js';
  // --- END DATABASE INTEGRATION Placeholder ---


  // Chart options (only needed when logged in)
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow charts to resize within their container
  };

  // Data for the second set of charts (identical for now - replace with DB logic)
  // TODO: Fetch potentially different data for these charts from the database.
  const lineChartData2 = JSON.parse(JSON.stringify(lineChartData)); // Simple deep clone
  const barChartData2 = JSON.parse(JSON.stringify(barChartData));
  const pieChartData2 = JSON.parse(JSON.stringify(pieChartData));


  // State to toggle between User and Admin login forms
  let showAdminLogin = false;

</script>

<main>
  {#if $authStore.isLoggedIn}
    <!-- Logged-in View: Dashboard -->
    <header class="dashboard-header">
      <h1>Svelte Chart.js Dashboard</h1>
      <div class="user-info">
        <span>Welcome, {$authStore.username} {$authStore.isAdmin ? '(Admin)' : ''}!</span>
        <button class="logout-button" on:click={() => authStore.logout()}>Logout</button>
      </div>
    </header>

    <div class="chart-grid">
      <div class="chart-container">
        <h2>Monthly Sales Trend 1</h2>
        {/* TODO: Replace :data with fetched data from MySQL */}
        <LineChart data={lineChartData} options={chartOptions} />
      </div>
      <div class="chart-container">
        <h2>Monthly Sales Trend 2</h2>
        {/* TODO: Replace :data with fetched data from MySQL */}
        <LineChart data={lineChartData2} options={chartOptions} />
      </div>

      <div class="chart-container">
        <h2>Sales by Category 1</h2>
        {/* TODO: Replace :data with fetched data from MySQL */}
        <BarChart data={barChartData} options={chartOptions} />
      </div>
       <div class="chart-container">
        <h2>Sales by Category 2</h2>
        {/* TODO: Replace :data with fetched data from MySQL */}
        <BarChart data={barChartData2} options={chartOptions} />
      </div>

      <div class="chart-container">
        <h2>Sales Distribution 1</h2>
        {/* TODO: Replace :data with fetched data from MySQL */}
        <PieChart data={pieChartData} options={chartOptions} />
      </div>
       <div class="chart-container">
        <h2>Sales Distribution 2</h2>
        {/* TODO: Replace :data with fetched data from MySQL */}
        <PieChart data={pieChartData2} options={chartOptions} />
      </div>
    </div>

  {:else}
    <!-- Logged-out View: Login Forms -->
    <div class="login-view">
      <h1>Login</h1>
      <div class="login-toggle">
        <button class:active={!showAdminLogin} on:click={() => showAdminLogin = false}>User Login</button>
        <button class:active={showAdminLogin} on:click={() => showAdminLogin = true}>Admin Login</button>
      </div>

      {#if showAdminLogin}
        <AdminLogin />
      {:else}
        <UserLogin />
      {/if}
    </div>
  {/if}
</main>

<style>
  /* Global Styles */
  main {
    max-width: 1200px;
    margin: 0 auto; /* Adjusted margin for potentially full-width header */
    padding: 1rem;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  h1 {
    text-align: center;
    margin-bottom: 1rem; /* Adjusted margin */
  }

  /* Logged-in View Styles */
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .dashboard-header h1 {
     margin-bottom: 0; /* Reset margin for header h1 */
     font-size: 1.8em;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logout-button {
    padding: 0.4rem 0.8rem;
    background-color: #ff3e00;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
  }
  .logout-button:hover {
    background-color: #d93600;
  }

  h2 { /* Chart titles */
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 0.5rem;
  }

  .chart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .chart-container {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .chart-container > div { /* Target the chartjs canvas container */
     width: 100%;
     height: calc(100% - 2em); /* Adjust height considering the h2 title */
  }


  /* Logged-out View Styles */
  .login-view {
    max-width: 400px; /* Center the login section */
    margin: 4rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }

  .login-view h1 {
     margin-bottom: 2rem;
  }

  .login-toggle {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden; /* Keep button edges neat */
  }

  .login-toggle button {
    flex-grow: 1;
    padding: 0.6rem;
    border: none;
    background-color: #eee;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.2s;
  }

  .login-toggle button.active {
    background-color: #646cff;
    color: white;
  }

  .login-toggle button:not(.active):hover {
     background-color: #ddd;
  }

  /* Hide unused default styles */
  .logo, .read-the-docs {
    display: none;
  }
</style>
