<script setup>
import { Button } from 'primevue';
import { useTheme } from '../composables/useTheme';

const { toggleDarkMode } = useTheme();
</script>

<template>
  <div class="p-d-flex p-jc-end p-ai-center">
    <Button label="" icon="pi pi-moon" class="p-button-rounded p-button-outlined p-button-secondary" @click="toggleDarkMode" />
  </div>
</template>
