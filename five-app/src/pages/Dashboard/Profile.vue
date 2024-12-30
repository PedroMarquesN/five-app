<template>
    <section class="profile">
      <h1>Perfil do Usuário</h1>
      <div class="profile-info">
        <img src="../../assets/avatar.png" alt="Avatar" class="avatar"/>
        <div>
          <h2>{{userName}}</h2>
          <p>Email: {{userEmail}}</p>
          <p>Data de Registro: 01/01/2022</p>
        </div>
      </div>
      <button @click="editProfile">Editar Perfil</button>
    </section>
  </template>
  
  <script setup>
import { useAuth } from '../../composables/useAuth';

  const {userName, userEmail} = useAuth();
  const editProfile = () => {

  };
  </script>
  
  <style scoped>
  .profile {
    padding: 2rem;
    color: #fff;
  }
  
  .profile h1 {
    font-size: 2rem;
    color: #ff6347;
  }
  
  .profile-info {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
  
  .profile-info .avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-right: 1rem;
  }
  
  .profile-info h2 {
    font-size: 1.6rem;
    color: #ff6347;
  }
  
  .profile-info p {
    font-size: 1rem;
    color: #776e6e;
  }
  
  button {
    background-color: #ff6347;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    margin-top: 2rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e04e36;
  }

  
  </style>
  