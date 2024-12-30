<template>
  <div class="dashboard">
   
    <header class="navbar">
      <button class="menu-toggle" @click="toggleSidebar">
        <i class="pi pi-bars"></i>
      </button>
      <h1>F <span style="color: #ff6347;">I</span> V E</h1>
    </header>

    
    <aside class="sidebar" :class="{ open: sidebarVisible }">
      <div class="profile">
        <span v-if="sidebarVisible">Username</span>
      </div>
      <ul>
        <router-link to="/dashboard" class="no-underline">
          <li>
            <i class="pi pi-home"></i>
            <span v-if="sidebarVisible">Home</span>
          </li>
        </router-link>
        <router-link to="/dashboard/profile" class="no-underline">
          <li>
            <i class="pi pi-user"></i>
            <span v-if="sidebarVisible">Profile</span>
          </li>
        </router-link>
        <router-link to="/dashboard/settings" class="no-underline">
          <li>
            <i class="pi pi-cog"></i>
            <span v-if="sidebarVisible">Configurações</span>
          </li>
        </router-link>
        <router-link to="/dashboard/upload-photos" class="no-underline">
          <li>
            <i class="pi pi-upload"></i>
            <span v-if="sidebarVisible">Upload Photos</span>
          </li>
        </router-link>
        <router-link v-if="isAdmin" to="/dashboard/approve-uploads" class="no-underline">
          <li>
            <i class="pi pi-check-circle"></i>
            <span v-if="sidebarVisible">Aprovação Uploads</span>
          </li>
        </router-link>
        <router-link v-if="isAdmin" to="/dashboard/users" class="no-underline">
          <li>
            <i class="pi pi-users"></i>
            <span v-if="sidebarVisible">Usuários</span>
          </li>
        </router-link>
        <router-link @click="handleLogout" to="/" class="no-underline">
          <li>
            <i class="pi pi-sign-out"></i>
            <span v-if="sidebarVisible">Logout</span>
          </li>
        </router-link>
      </ul>
    </aside>

    <main class="content" :class="{ shifted: sidebarVisible }">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';

const { logout, isAdmin } = useAuth();
const sidebarVisible = ref(false);



const handleLogout = () => {
  logout();
};

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
.dashboard {
  display: flex;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background: linear-gradient(to bottom, #ffffff, #f9f9f9);
  overflow: hidden;
}


.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.navbar h1 {
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  letter-spacing: 1px;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #555;
  cursor: pointer;
}
.menu-toggle:hover {
  color: #ff6347;
}


.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100% - 60px);
  width: 60px;
  background: #ffffff;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1), 2px 0 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.sidebar.open {
  width: 250px;
}

.sidebar .profile {
  text-align: center;
  margin: 1rem 0;
}

.sidebar .profile span {
  display: block;
  color: #555;
  font-size: 1.2rem;
  font-weight: 500;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.sidebar ul li {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.sidebar ul li:hover {
  background: rgba(255, 99, 71, 0.1);
  transform: translateX(5px);
}

.sidebar ul li i {
  font-size: 1.5rem;
  color: #333;
  transition: color 0.2s ease;
}

.sidebar ul li:hover i {
  color: #ff6347;
}

.sidebar ul li span {
  margin-left: 1rem;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
}


.content {
  flex: 1;
  overflow: auto;
  margin-left: 60px;
  padding: 2rem;
  margin-top: 60px;
  transition: margin-left 0.3s ease-in-out;
}

.content.shifted {
  margin-left: 250px;
}

.content .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}


.card {
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card h2 {
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
}

.card p {
  font-size: 1.2rem;
  color: #ff6347;
  margin-top: 0.5rem;
  font-weight: 500;
}
</style>