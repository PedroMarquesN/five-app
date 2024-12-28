<script setup>
import { useTheme } from '../../composables/useTheme';

const { toggleDarkMode } = useTheme();
</script>

<template>
  <header class="navbar">
    <div class="navbar-content">
      <!-- Logo -->
      <div class="navbar-brand">
        <a href="#" class="logo">PhotoUpload</a>
      </div>

      <nav class="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Galeria</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      <div class="navbar-actions">
        <button class="dark-mode-toggle" @click="toggleDarkMode">Modo Escuro</button>
        <button class="login-button">Login</button>
      </div>
    </div>
  </header>
</template>

<style scoped>

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7); 
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); 
  transition: background-color 0.3s ease, color 0.3s ease;
}

html.my-app-dark .navbar {
  background-color: rgba(0, 0, 0, 0.9); 
  color: #fff;
}


.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
}

/* Logo */
.navbar-brand .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-brand .logo:hover {
  color: #ff6347; 
}

/* Links */
.navbar-links ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-links a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: color 0.3s, text-shadow 0.3s ease;
}

.navbar-links a:hover {
  color: #ff6347;
  text-shadow: 0 0 10px rgba(255, 99, 71, 0.8); 
}

/* Ações */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.dark-mode-toggle {
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
  transition: color 0.3s, text-shadow 0.3s ease;
}

.dark-mode-toggle:hover {
  color: #ff6347;
  text-shadow: 0 0 10px rgba(255, 99, 71, 0.8);
}

.login-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ff6347;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.login-button:hover {
  background-color: #ff6347;
  border-color: #ff6347;
  box-shadow: 0 4px 8px rgba(255, 99, 71, 0.6);
}


@media (max-width: 768px) {
  .navbar-links {
    display: none; 
  }

  .navbar-actions {
    gap: 0.5rem;
  }
}
</style>
