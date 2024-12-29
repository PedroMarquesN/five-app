<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');


const handleSubmit = () => {
  console.log('Usuário:', username.value);
  console.log('Senha:', password.value);
};
const navigateToRegister = () => {
  router.push('/register');
};
</script>

<template>
    <div class="login-container">
      <div class="login-card">
        <div class="register-link">
          <span>Não possui conta? <a @click="navigateToRegister">Clique aqui</a></span>
        </div>
        
        <div class="login-title">Login</div>
  
      
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
           
            <label for="username" class="input-label">Usuário</label>
            <input 
              type="text" 
              id="username" 
              v-model="username" 
              placeholder="Digite seu usuário" 
              required 
              class="input-field"
            />
          </div>
  
          <div class="input-group">
           
            <label for="password" class="input-label">Senha</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              placeholder="Digite sua senha" 
              required 
              class="input-field"
            />
          </div>
  
         
          <div class="text-center">
            <button type="submit" class="login-button">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  

  
  <style scoped>

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6e7e7e, #b0b0b0);
    background-size: 400% 400%;
    animation: gradientAnimation 6s ease infinite;
  }
  
 
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .register-link {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #333;
  }
  
  .register-link a {
    color: #ff6347;
    cursor: pointer;
    text-decoration: underline;
  }
  
  .register-link a:hover {
    color: #8f220f;
  }

  .login-card {
    background-color: #fff;
    border-radius: 16px;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s ease-out;
  }
  
 
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-80px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  
  .login-title {
    font-family: 'Times New Roman', serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
  

  .input-group {
    margin-bottom: 1.5rem;
  }
  

  .input-field {
    width: 100%;
    padding: 12px 16px;
    margin-top: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;
  }
  
  .input-field:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  

  .input-label {
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }
  
  
  .login-button {
    width: 100%;
    padding: 12px 16px;
    font-size: 1.2rem;
    background-color: #333;
    border: none;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .login-button:hover {
    background-color: #444;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .login-button:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
  
 
  .text-center {
    text-align: center;
  }
  </style>
  