<template>
    <section class="upload-photos">
      <h1>Upload de Fotos</h1>
      <form @submit.prevent="uploadPhotos">
        <div class="form-group">
          <label for="photos">Selecione as Fotos</label>
          <input type="file" id="photos" multiple @change="handlePhotoUpload" />
        </div>
        <div class="form-group">
          <label for="title">Título</label>
          <input type="text" id="title" v-model="title" placeholder="Digite o título" />
        </div>
        <div class="form-group">
          <label for="description">Descrição</label>
          <textarea id="description" v-model="description" placeholder="Digite a descrição"></textarea>
        </div>
        <button type="submit">Enviar Fotos</button>
      </form>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const photos = ref([]);
  const title = ref('');
  const description = ref('');
  
  const handlePhotoUpload = (event) => {
    photos.value = event.target.files;
  };
  
  const uploadPhotos = () => {
 
  };
  </script>
  
  <style scoped>
  .upload-photos {
    padding: 2rem;
    color: #fff;
  }
  
  .upload-photos h1 {
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
  
  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  textarea {
    min-height: 100px;
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
  