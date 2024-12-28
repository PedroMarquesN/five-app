<template>
    <div class="layout">
      <HeaderComponent />
      <main class="main-content">
        <router-view />
      </main>
      <FooterComponent />
    </div>
  </template>
  
  <script setup >
import FooterComponent from '../components/Footer/FooterComponent.vue';
import HeaderComponent from '../components/Header/HeaderComponent.vue';



  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
  }
  </style>