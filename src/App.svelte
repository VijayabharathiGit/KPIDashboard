<script>
  // Import chart components
  import LineChart from './lib/LineChart.svelte';
  import BarChart from './lib/BarChart.svelte';
  import PieChart from './lib/PieChart.svelte';

  // --- DATABASE INTEGRATION Placeholder ---
  // TODO: Replace sample data import with logic to fetch data from MySQL.
  // This will likely involve making an API call to a backend service
  // (e.g., using fetch) which queries the database and returns the data
  // in the required Chart.js format.
  // The fetched data should then be assigned to reactive variables.
  // Example (conceptual):
  // let lineData = $state({});
  // let barData = $state({});
  // let pieData = $state({});
  // onMount(async () => {
  //   const response = await fetch('/api/chart-data');
  //   const dbData = await response.json();
  //   lineData = dbData.line;
  //   barData = dbData.bar;
  //   pieData = dbData.pie;
  // });
  // Import sample data (REMOVE THIS LINE ONCE DB LOGIC IS IMPLEMENTED)
  import { lineChartData, barChartData, pieChartData } from './sampleData.js';
  // --- END DATABASE INTEGRATION Placeholder ---


  // Chart options (can be customized further)
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow charts to resize within their container
  };

  // Data for the second set of charts (identical for now - replace with DB logic)
  // TODO: Fetch potentially different data for these charts from the database.
  const lineChartData2 = JSON.parse(JSON.stringify(lineChartData)); // Simple deep clone
  const barChartData2 = JSON.parse(JSON.stringify(barChartData));
  const pieChartData2 = JSON.parse(JSON.stringify(pieChartData));

  // Optional: Modify data slightly for variation if needed
  // e.g., lineChartData2.datasets[0].label = 'Monthly Sales - Store B';
  // lineChartData2.datasets[0].data = lineChartData2.datasets[0].data.map(d => d * 0.8);

</script>

<main>
  <h1>Svelte Chart.js Dashboard</h1>

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
</main>

<style>
  /* Ensure main takes up space and applies global styles */
  main {
    max-width: 1200px; /* Limit overall width */
    margin: 2rem auto; /* Center the content */
    padding: 1rem;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif; /* Apply base font */
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 0.5rem;
  }

  /* Grid layout for charts */
  .chart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Responsive grid */
    gap: 2rem; /* Space between charts */
  }

  /* Container for each chart to manage size */
  .chart-container {
    border: 1px solid #ccc; /* Optional: Visual border */
    padding: 1rem;
    border-radius: 8px;
    height: 400px; /* Fixed height for chart containers */
    display: flex; /* Use flexbox for centering */
    flex-direction: column; /* Stack title and chart vertically */
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
  }

  /* Ensure the canvas container inside svelte-chartjs components fills the space */
  /* This might need adjustment depending on svelte-chartjs internal structure */
  .chart-container > div {
     width: 100%;
     height: calc(100% - 2em); /* Adjust height considering the h2 title */
  }

  /* Override default logo styles if they exist in global CSS */
  .logo {
    display: none; /* Hide default logos if they were defined elsewhere */
  }
  .read-the-docs {
    display: none; /* Hide default text */
  }
</style>
