<script setup>

import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import ThemeToggle from '../components/ThemeToggle.vue';
import { ref } from 'vue';

const inputText = ref('');

</script>
<template>
    <div id="section1" class="section">
        <ThemeToggle />
        <Card title="Card Title" style="margin-top: 2rem;">
          <template #content>
            <p>Este é um exemplo de um cartão PrimeVue.</p>
            <InputText v-model="inputText" placeholder="Digite algo" />
          </template>
        </Card>
      </div>
</template>