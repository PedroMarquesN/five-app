<template>
  <section>
    <div class="grid">
      <div class="card">
        <h2>Photos Uploaded</h2>
        <p>5,432</p>
      </div>
      <div class="card">
        <h2>Pedidos para Aprovar</h2>
        <p>321</p>
      </div>
      <div class="card">
        <h2>Usuários Registrados</h2>
        <p>12,345</p>
      </div>
    </div>

    <div class="chart">
      <h2>Uploads Over Time</h2>
      <canvas id="uploadChart"></canvas>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('uploadChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Uploads',
          data: [200, 400, 600, 800, 1000],
          borderColor: '#ff6347',
          backgroundColor: 'rgba(255, 99, 71, 0.2)',
          pointBackgroundColor: '#ff6347',
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
</script>

<style scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-color: #ff6347;
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ff6347;
}

.card p {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

/* Gráfico */
.chart {
  width: 50%;
  margin: 0 auto;
  height: 200px;
  text-align: center;
}

.chart canvas {
  height: 100%;
  width: 100%;
}

.chart h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ff6347;
}

/* Animação de Fade-In para os Cards */
.card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.9s ease forwards;
}

.card:nth-child(1) {
  animation-delay: 0.2s;
}
.card:nth-child(2) {
  animation-delay: 0.4s;
}
.card:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; 
    gap: 1rem;
  }

  .card {
    padding: 1rem; 
    font-size: 0.9rem; 
   
  }

  .chart {
    width: 90%; 
    height: 150px; 
  }

  .chart h2 {
    font-size: 1.2rem;
  }
}

</style>
