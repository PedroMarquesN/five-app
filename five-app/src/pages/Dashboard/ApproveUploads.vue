<script setup>
import { ref, onMounted } from 'vue';
import { fetchUploads, approveUpload, rejectUpload } from '../../utils/api';
import Swal from 'sweetalert2';

const uploads = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);

const loadUploads = async (page = 1) => {
  try {
    const response = await fetchUploads(page, 5);
    uploads.value = response.uploads;
    currentPage.value = response.meta.current_page;
    totalPages.value = response.meta.last_page;
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
      title: "Pedido aprovado!"
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
      title: "Erro ao aprovar pedido"
    });
  }
};

const handleRejectUpload = async (id) => {
  try {
    await rejectUpload(id);
    const upload = uploads.value.find((upload) => upload.id === id);
    upload.status = 'rejeitado';
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
      title: "Foto rejeitada!"
    });
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Erro ao rejeitar foto"
    });
  }
};

onMounted(() => loadUploads());

const changePage = (newPage) => {
  if (newPage > 0 && newPage <= totalPages.value) {
    loadUploads(newPage);
  }
};
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
          <td :class="[upload.status, 'uppercase']">{{ upload.status }}</td>
          <td>
            <button class="ativar" @click="handleApproveUpload(upload.id)">Aprovar</button>
            <button class="desativar" @click="handleRejectUpload(upload.id)">Rejeitar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination" v-if="totalPages > 1">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Próxima</button>
    </div>
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

.ativar {
  background-color: #4caf50;  
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.desativar {
  background-color: #d32405;  
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.desativar:hover {
  background-color: #d32405;  
  transform: translateY(-3px); 
}

button:hover {
  background-color: #45a049; 
  transform: translateY(-3px); 
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.pagination button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}




.pendente {
  color: #ff9800; 
  font-weight: bold;
}

.aprovado {
  color: #4caf50; 
  font-weight: bold;
}

.rejeitado {
  color: #f44336; 
  font-weight: bold;
}
.uppercase {
  text-transform: uppercase;
}
</style>