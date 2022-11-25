<template>
  <div>
    <h1>Pagina principal o home </h1>
    <p>{{ useStore.userData }}</p>
  </div>
  
</template>

<script setup>
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../firebaseConfig';
import { useUserStore } from '../stores/userStore';

const useStore = useUserStore();

onAuthStateChanged(auth, (user) => {
  console.log(user)
})
</script>
