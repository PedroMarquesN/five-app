<template>
    <section class="settings">
      <h1>Configurações</h1>
      <form @submit.prevent="updateSettings">
        <div class="form-group">
          <label for="username">Nome de Usuário</label>
          <input type="text" id="username" v-model="username" placeholder="Digite seu nome de usuário" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Digite seu email" />
        </div>
        <div class="form-group">
          <label for="photo">Foto de Perfil</label>
          <input type="file" id="photo" @change="handleFileChange" />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const email = ref('');
  const photo = ref(null);
  
  const handleFileChange = (event) => {
    photo.value = event.target.files[0];
  };
  
  const updateSettings = () => {

  };
  </script>
  
  <style scoped>
  .settings {
    padding: 2rem;
    color: #fff;
  }
  
  .settings h1 {
    font-size: 2rem;
    color: #ff6347;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    font-size: 1rem;
    color: #ddd;
  }
  
  input {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #ff6347;
    box-shadow: 0 0 5px rgba(255, 99, 71, 0.5);
  }
  
  button {
    background-color: #ff6347;
    color: #fff;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e04e36;
  }
  </style>
  