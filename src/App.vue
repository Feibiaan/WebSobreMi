<template>
  <NavbarVue/>
  <nav v-if="!userStore.loadingSession">
    <RouterLink to="/" v-if="userStore.userData">Home</RouterLink> |
    <RouterLink to="/login" v-if="!userStore.userData">Login</RouterLink> |
    <RouterLink to="/register" v-if="!userStore.userData">Register</RouterLink> |
    <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
  </nav>
  <div v-else>
    loading user...
  </div>
  
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
import { useUserStore } from './stores/userStore'; 

const userStore = useUserStore();

</script>

<style scoped>

</style>
