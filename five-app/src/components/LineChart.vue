<template>
    <div class="chart-container">
      <Line :chart-data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
  
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Uploads',
        data: [10, 25, 40, 70, 90, 120],
        borderColor: '#76c7f5',
        backgroundColor: 'rgba(118, 199, 245, 0.2)',
        tension: 0.4,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  </script>