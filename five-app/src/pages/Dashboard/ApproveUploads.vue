<template>
    <section class="approve-uploads">
      <h1>Aprovação de Uploads</h1>
      <p>Aqui você pode aprovar ou rejeitar uploads feitos pelos usuários.</p>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Título</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(upload, index) in uploads" :key="index">
            <td><img :src="upload.photo" alt="Upload" class="upload-img" /></td>
            <td>{{ upload.title }}</td>
            <td>{{ upload.date }}</td>
            <td>
              <button @click="approveUpload(index)">Aprovar</button>
              <button @click="rejectUpload(index)">Rejeitar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const uploads = ref([
    { photo: 'path-to-photo.jpg', title: 'Foto 1', date: '01/01/2022' },
    { photo: 'path-to-photo.jpg', title: 'Foto 2', date: '01/02/2022' },
  ]);
  
  const approveUpload = (index) => {
 
  };
  
  const rejectUpload = (index) => {

  };
  </script>
  
  <style scoped>
  .approve-uploads {
    padding: 2rem;
    color: #fff;
  }
  
  .approve-uploads h1 {
    font-size: 2rem;
    color: #ff6347;
  }
  
  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }
  
  table th,
  table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .upload-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  button {
    background-color: #ff6347;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  
  button:hover {
    background-color: #e04e36;
  }
  </style>
  