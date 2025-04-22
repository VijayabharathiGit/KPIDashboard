<script>
  import { Pie } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';

  // Register Chart.js components
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  // Props for data and options
  export let data = {};
  export let options = {};

</script>

<div>
  <Pie {data} {options} />
</div>
