// Sample Data for Chart.js examples

// Line Chart: Monthly Sales Trend
export const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Sales ($)',
      data: [6500, 5900, 8000, 8100, 5600, 5500, 7000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

// Bar Chart: Sales by Product Category
export const barChartData = {
  labels: ['Electronics', 'Apparel', 'Groceries', 'Home Goods', 'Toys'],
  datasets: [
    {
      label: 'Sales Revenue ($)',
      data: [12000, 9500, 15000, 7500, 4000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Pie Chart: Sales Distribution by Region
export const pieChartData = {
  labels: ['North', 'South', 'East', 'West', 'Central'],
  datasets: [
    {
      label: 'Sales Distribution (%)',
      data: [30, 20, 15, 25, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
      ],
      hoverOffset: 4,
    },
  ],
};
