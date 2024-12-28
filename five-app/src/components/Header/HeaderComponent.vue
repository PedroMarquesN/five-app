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

      <!-- Links -->
      <nav class="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Galeria</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      <!-- Botões -->
      <div class="navbar-actions">
        <button class="dark-mode-toggle" @click="toggleDarkMode">Modo Escuro</button>
        <button class="login-button">Login</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Navbar fixo com aparência de espelho */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.8); /* Transparência */
  backdrop-filter: blur(10px); /* Efeito de espelho */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra leve */
  transition: background-color 0.3s ease, color 0.3s ease;
}

html.my-app-dark .navbar {
  background-color: rgba(0, 0, 0, 0.8); /* Cor para modo escuro */
  color: #fff;
}

/* Conteúdo do Navbar */
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
  color: inherit;
  text-decoration: none;
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
  color: inherit;
  font-size: 1rem;
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: #007bff;
}

/* Botões */
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
  color: inherit;
  transition: color 0.3s;
}

.dark-mode-toggle:hover {
  color: #007bff;
}

.login-button {
  padding: 0.5rem 1rem;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* Responsividade */
@media (max-width: 768px) {
  .navbar-links {
    display: none; /* Esconde os links no mobile */
  }

  .navbar-actions {
    gap: 0.5rem;
  }
}
</style>
