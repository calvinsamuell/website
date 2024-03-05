<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="mb-3">
          <button type="button" class="btn btn-primary"><router-link to="/login" class="nav-link text-white">Log in</router-link></button>
          <button type="button" class="btn btn-primary"><router-link to="/register" class="nav-link text-white">Register</router-link></button>
        </div>
        <form @submit.prevent="loginUser">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
            <input type="email" class="form-control" required v-model="userEmail" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-white">Password</label>
            <input type="password" class="form-control" required v-model="userPassword" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary ">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/Auth';
import { ref } from 'vue';

export default {
  setup(){
    const authStore = useAuthStore()
    const userEmail = ref('');
    const userPassword = ref('');

    const loginUser = () => {
      const user = authStore.getUserByEmail(userEmail.value);
      if (user && user.password === userPassword.value) {
        console.log('Login berhasil');
      } else {
        console.log('Login gagal');
      }
    };

    return {
      loginUser,
      userEmail,
      userPassword
    };
 
  }
};
</script>

<style>
</style>