<script setup>
import { useTheme } from '../../composables/useTheme';

const { toggleDarkMode } = useTheme();
</script>

<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Serviço</a></li>
          </ul>
        </div>

        <div class="footer-social">
          <a href="#" class="social-icon">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="pi pi-linkedin"></i>
          </a>
        </div>

        <div class="footer-contact">
          <p>Contato: <a href="mailto:contato@foto.com">FiveFotografia@foto.com</a></p>
        </div>
      </div>
    </footer>

</template>

<style scoped>
.footer {
  background-color: #111;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3);

}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ff6347;
}

.footer-social {
  margin: 1rem 0;
}

.social-icon {
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #ff6347;
}

.footer-contact {
  margin-top: 1rem;
}

.footer-contact a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.footer-contact a:hover {
  color: #ff6347;
}


@media (max-width: 768px) {
  .footer-links ul {
    flex-direction: column;
  }
}
</style>
