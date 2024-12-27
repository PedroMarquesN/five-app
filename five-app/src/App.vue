<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';

const inputText = ref('');
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('my-app-dark');
};
</script>

<template>
  <div>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode" />
    <Card title="Card Title" style="margin-top: 2rem;">
      <template #content>
        <p>Este é um exemplo de um cartão PrimeVue.</p>
        <InputText v-model="inputText" placeholder="Digite algo" />
      </template>
    </Card>
  </div>
</template>

<style scoped>
html.my-app-dark {
  background-color: #333;
  color: #fff;
}

html {
  background-color: #fff;
  color: #000;
}
</style>