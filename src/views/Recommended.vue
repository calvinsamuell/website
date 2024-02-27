<template>
  <section>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(anime, index) in topAnime"
          :key="anime.id"
          :class="{ 'carousel-item': true, active: index === 0 }"
        >
          <router-link :to="{ name: 'Details', params: { id: anime.id } }">
            <img
              :src="anime.image"
              class="d-block mx-auto"
              :alt="'Slide ' + (index + 1)"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ anime.title }}</h5>
            </div>
          </router-link>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <section>
    <div class="row">
      <div
        v-for="anime in topAnime.slice(16, 25)"
        :key="anime.id"
        class="col-md-6 col-lg-4 mb-4"
      >
      <router-link :to="{ name: 'Details', params: { id: anime.id } }">
        <div class="card">
          <img
            :src="anime.image1"
            class="card-img-top"
            :alt="anime.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ anime.title }}</h5>
          </div>
        </div>
    </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const topAnime = ref([]);

    const getTopAnime = () => {
      axios
        .get("https://api.jikan.moe/v4/top/anime")
        .then((response) => {
          response.data.data.forEach((result) => {
            topAnime.value.push({
              id: result.mal_id,
              title: result.title,
              image: result.images.webp.large_image_url,
              image1: result.images.webp.large_image_url,
            });
          });
        })
        .then(() => {
          console.log(topAnime.value);
        });
    };

    return {
      topAnime,
      getTopAnime,
    };
  },
  mounted() {
    this.getTopAnime();
  },
};
</script>

<style>
/* CSS styles here */
</style>
