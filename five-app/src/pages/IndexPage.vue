<script setup lang="ts">
import FavoriteProduct from '../components/FavoriteProduct/FavoriteProduct.vue';
import HeroComponent from '../components/Hero/HeroComponent.vue';


defineOptions({
  name: 'IndexPage',
});
</script>

<template>
  <div class="index-page">
    <div id="inicio" class="section">
      <HeroComponent />
    </div>
    <div id="favorite-products" class="section">
      <FavoriteProduct />
    </div>

  </div>
</template>

<style scoped>
.index-page {
  padding: 0;
}



.banner-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 20px;
}
</style>