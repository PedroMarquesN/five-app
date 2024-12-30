<script setup>
import { ref, onMounted } from 'vue';
import { fetchUploads, approveUpload, rejectUpload } from '../../utils/api';
import { useToast } from 'primevue/usetoast';
import Swal from 'sweetalert2'

const toast = useToast();
const uploads = ref([]);


const loadUploads = async () => {
  try {
    uploads.value = await fetchUploads();
  } catch (error) {
    console.error('Erro ao buscar uploads:', error);
  }
};

const handleApproveUpload = async (id) => {
  try {
    await approveUpload(id);
    const upload = uploads.value.find((upload) => upload.id === id);
    upload.status = 'aprovado';
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Pedido Aprovado!"
    });

  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Pedido não aprovado!"
    });
  }
};

const handleRejectUpload = async (id) => {
  try {
    await rejectUpload(id);
    const upload = uploads.value.find((upload) => upload.id === id);
    upload.status = 'rejeitado';
    Swal.fire({
      position: "top-end",
      title: "Foto Rejeitada!",
      icon: "success",
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo Deu errado",

    });
  }
};

onMounted(loadUploads);
</script>
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
          <th>Enviado por</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="upload in uploads" :key="upload.id">
          <td><img :src="upload.image" alt="Upload" class="upload-img" /></td>
          <td>{{ upload.titulo }}</td>
          <td>{{ upload.criado_em }}</td>
          <td>{{ upload.user.name }}</td>
          <td>{{ upload.status }}</td>
          <td>
            <button v-if="upload.status === 'pendente'" @click="handleApproveUpload(upload.id)">Aprovar</button>
            <button v-if="upload.status === 'pendente'" @click="handleRejectUpload(upload.id)">Rejeitar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>



<style scoped>
.approve-uploads {
  padding: 2rem;
  color: #746767;
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>