<template>
    <div class="container">
        <div class="card">
           
            <div class="section-title">Melhores Fotos</div>

            <div class="text-center mt-5 ml-2">
                <Button label="Ver Todas as Fotos" class="see-all-button" icon="pi pi-images" />
            </div>
           
            <Carousel :value="favorites" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
                <template #item="slotProps">
                    <div class="favorite-item">
                       
                        <div class="favorite-star">
                            <i class="pi pi-star"></i>
                        </div>

                        
                        <div class="image-container">
                            <img :src="slotProps.data.image" :alt="slotProps.data.name" class="favorite-image" />
                        </div>

                       
                        <div class="text-center mt-4">
                            <div class="favorite-title">{{ slotProps.data.name }}</div>
                            <div class="favorite-description">{{ slotProps.data.description }}</div>
                        </div>
                    </div>
                </template>
            </Carousel>

            

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';

const favorites = ref([
    {
        id: '1000',
        name: 'Vintage Watch',
        description: 'A timeless vintage watch with a classic design.',
        image: new URL('../../assets/product1.jpg', import.meta.url).href
    },
    {
        id: '1001',
        name: 'Old Camera',
        description: 'An old camera that captures memories.',
        image: new URL('../../assets/product2.jpg', import.meta.url).href
    },
    {
        id: '1002',
        name: 'Classic Record',
        description: 'A classic vinyl record that brings nostalgia.',
        image: new URL('../../assets/product3.jpg', import.meta.url).href
    }
]);

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: #f4f4f4;
}

.card {
    background-color: #f4f4f4;
    border-radius: 16px;
    padding: 2rem;
    width: 80%;
    max-width: 1200px;
}

.section-title {
    font-family: 'Times New Roman', serif;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
}

.favorite-item {
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.favorite-item .favorite-star {
    position: absolute;
    top: 10px;
    left: 10px;
    color: gold;
    font-size: 1.5rem;
}

.favorite-item img {
    width: 100%;
    border-radius: 12px;
    height: 200px;
    object-fit: cover;
}

.favorite-item .image-container {
    overflow: hidden;
    border-radius: 12px;
}

.favorite-title {
    font-family: 'Times New Roman', serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.favorite-description {
    font-family: 'Georgia', serif;
    font-size: 1rem;
    color: #555;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.favorite-item .text-center {
    text-align: center;
}

.product-item .text-gray-500 {
    color: #6b7280;
}


.see-all-button {
    background-color: #333;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.see-all-button:hover {
    background-color: #444;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>