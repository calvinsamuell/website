<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Anonime</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li v-if="authStore.currentUser" class="nav-item">
            <span class="nav-link">Welcome {{ authStore.currentUser.fullname }}</span>
          </li>
          <li v-if="!authStore.currentUser" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="authStore.currentUser" class="nav-item">
            <button @click="logoutUser" class="btn btn-link nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logoutUser = () => {
      authStore.logoutUser();
      router.push("/login");
    };

    return { authStore, logoutUser };
  }
};
</script>

<style></style>
