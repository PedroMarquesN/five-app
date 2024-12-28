import { ref } from 'vue';

const isDarkMode = ref(false);

export function useTheme() {
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('my-app-dark', isDarkMode.value);
  };

  return { isDarkMode, toggleDarkMode };
}
