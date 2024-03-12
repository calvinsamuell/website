<template>
  <navbar-vue />
  <router-view />
</template>

<script>
import NavbarVue from "./views/Navbar.vue";
export default{
  components: {NavbarVue}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav,
body {
  background: rgb(26 25 39);
}

nav a {
  color: white;
}

.card, .carousel-anime {
      transition: transform 0.3s ease;
    }

.card:hover, .carousel-anime:hover {
  transform: scale(0.9);
}

.carousel-item:hover .carousel-caption {
      display: block;
    }

.navbar-brand {
  font-size: 24px;
}
.nav-link {
  font-size: 18px;
}

</style>
