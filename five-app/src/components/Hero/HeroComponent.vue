<script setup>
import { ref } from 'vue';

const letters = ref("FIVE FOTOGRAFIA".split(''));
const subtitle = ref("Imortalizando Momentos");
</script>

<template>
    <section class="hero-section">
        <div class="hero-image"></div>
        <div class="hero-content">
            <h1 class="hero-title">
                <span v-for="(letter, index) in letters" :key="index" v-motion="{
                    initial: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 300, delay: index * 80 + 1200, easing: 'ease-out' } }
                }" :style="{ color: letter === 'I' ? '#ff6347' : 'inherit' }" class="hero-letter">
                    {{ letter }}
                </span>
            </h1>

            <span class="hero-subtitle" v-motion="{
                initial: { opacity: 0, x: 250, scale: 0.9 },
                visibleOnce: { opacity: 1, x: 0, transition: { duration: 500, delay: 500, easing: 'ease-out' } }
            }">
                {{ subtitle }}
            </span>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
}

.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/Hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    filter: grayscale(80%) contrast(1.2);
    z-index: -1;
}

.hero-content {
    position: relative;
    z-index: 1;
    color: white;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
    font-family: 'Poppins', sans-serif;
    padding: 0 2rem;
}

.hero-title {
    font-size: 5rem;
    font-weight: bold;
    display: flex;
    gap: 0.2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.hero-letter {
    display: inline-block;
}

.hero-subtitle {
    font-size: 2rem;
    margin-top: 1rem;
    display: block;
    color: #fff;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(255, 99, 71, 0.7);
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}



@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }
}
</style>
