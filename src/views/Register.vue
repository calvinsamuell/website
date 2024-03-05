<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="mb-3">
          <button type="button" class="btn btn-primary"><router-link to="/login" class="nav-link text-white">Log in</router-link></button>
          <button type="button" class="btn btn-primary"><router-link to="/register" class="nav-link text-white">Register</router-link></button>
        </div>
        <form @submit.prevent="authUser">
          <div class="mb-3">
            <label for="exampleInputName" class="form-label text-white">Full Name</label>
            <input type="text" class="form-control" id="exampleInputName" v-model="user.fullname" required aria-describedby="nameHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="user.email" required aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-white">Password</label>
            <input type="password" class="form-control" v-model="user.password" required id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary ">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>

import { useAuthStore } from '@/store/Auth'
import { ref } from 'vue';

export default {
  setup(){
    const user = ref({fullname: '', email: '', password: ''})

    const authStore = useAuthStore()

    const authUser = () => {
      authStore.addUser(user.value)
      user.value = {fullname: '', email: '', password: ''}
    }


    return{ user, authUser, authStore}
  }
};
</script>

<style>
</style>