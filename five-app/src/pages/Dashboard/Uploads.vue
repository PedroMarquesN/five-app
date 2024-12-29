<template>
    <section class="upload-photos">
      <h1>Upload de Fotos</h1>
      <form @submit.prevent="uploadPhotos">
        <div class="custom-uploader">
          <input
            type="file"
            id="fileUpload"
            class="file-input"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            @change="handleFileChange"
          />
          <label for="fileUpload" class="upload-label">
            <q-icon name="cloud_upload" size="40px" />
            <span>Arraste ou clique para enviar sua foto</span>
          </label>
  
          <div v-if="localData.cvFile" class="upload-feedback text-positive">
            Arquivo selecionado: {{ localData.cvFile.name }}
          </div>
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
  const localData = ref({
    cvFile: null,
  });
  
  const handleFileChange = (event) => {
    localData.value.cvFile = event.target.files[0];
  };
  
  const uploadPhotos = () => {
    
  };
  </script>
  
  <style scoped>
  .custom-uploader {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #f0f4f8, #f6f8fb);
    border-radius: 12px;
    padding: 40px;
    width: 100%;
    max-width: 500px;
    margin-bottom: 25px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: 1px dashed rgba(255, 99, 71, 0.6);
    transition: all 0.3s ease;
  }
  
  .custom-uploader:hover {
    box-shadow: 0 8px 20px rgba(255, 99, 71, 0.2);
  }
  
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
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #e04e36; 
  }
  
  .upload-feedback {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 600;
    color: #a15d1c; 
    background-color: rgba(199, 153, 53, 0.1);
    border: 1px solid #c56e3b;
    border-radius: 8px;
    padding: 10px 15px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  
  .file-input {
    display: none;
  }
  
 
  .upload-label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #ff6347; 
    padding: 15px;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .upload-label:hover {
    background-color: #e04e36;
  }
  
  .upload-label span {
    margin-left: 10px;
  }
  </style>
  