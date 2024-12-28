// filepath: /c:/Users/w10-/OneDrive/Área de Trabalho/Five/five-app/src/views/HomeView.vue
<script setup>
import Section1 from '../pages/Home.vue';


const sections = [
  { id: 'section1', label: 'Section 1', component: Section1 },
  { id: 'section2', label: 'Section 2',},
  { id: 'section3', label: 'Section 3', },
];

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <div>
    <nav>
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a href="#" @click.prevent="scrollToSection(section.id)">{{ section.label }}</a>
        </li>
      </ul>
    </nav>

    <component v-for="section in sections" :is="section.component" :key="section.id" />
  </div>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 1rem;
  margin: 0;
}

nav a {
  text-decoration: none;
  color: #333;
}

.section {
  padding: 100px 20px;
  margin-top: 60px; 
}

.section:nth-child(even) {
  background-color: #f9f9f9;
}
</style>