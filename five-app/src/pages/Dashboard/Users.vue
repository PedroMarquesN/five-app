<script setup>
import { ref, onMounted } from 'vue';
import { fetchUsers, activateUser, deactivateUser } from '../../utils/apiUser.ts';
import Swal from 'sweetalert2';

const users = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);

const loadUsers = async (page = 1) => {
  try {
    const response = await fetchUsers(page, 5);
    users.value = response.users;
    currentPage.value = response.meta.current_page;
    totalPages.value = response.meta.last_page;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};

const handleActivateUser = async (id) => {
  try {
    await activateUser(id);
    const user = users.value.find((user) => user.id === id);
    user.is_admin = true;
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
            title: "Usuário ativado como administrador!"
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
            title: "Oops...",
        });
  }
};

const handleDeactivateUser = async (id) => {
  try {
    await deactivateUser(id);
    const user = users.value.find((user) => user.id === id);
    user.is_admin = false;
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
            title: "Usuário desativado como administrador!"
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
            title: "Oops...",
        });
  }
};

onMounted(() => loadUsers());

const changePage = (newPage) => {
  if (newPage > 0 && newPage <= totalPages.value) {
    loadUsers(newPage);
  }
};
</script>

<template>
  <section class="manage-users">
    <h1>Gerenciamento de Usuários</h1>
    <p>Aqui você pode ativar ou desativar o status de administrador dos usuários.</p>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.is_admin ? 'Administrador' : 'Usuário' }}</td>
          <td>
            <button v-if="!user.is_admin" @click="handleActivateUser(user.id)">Ativar</button>
            <button v-if="user.is_admin" @click="handleDeactivateUser(user.id)">Desativar</button>
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
.manage-users {
  padding: 2rem;
  color: #746767;
}

.manage-users h1 {
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

/* Estilos personalizados para SweetAlert2 */
.swal2-popup {
  width: 300px !important;
  font-size: 14px !important;
}
</style>