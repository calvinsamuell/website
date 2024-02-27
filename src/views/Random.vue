<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <div v-for="anime in getRandomNumber(3)" :key="anime.id">
          <router-link :to="{ name: 'Details', params: { id: anime.id } }">
            <div class="card">
              <img :src="anime.image" class="card-img-top" alt="anime" />
              <div class="card-body">
                <h5 class="card-title">{{ anime.title }}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col">
        <div v-for="anime in getRandomNumber(3)" :key="anime.id">
          <router-link :to="{ name: 'Details', params: { id: anime.id } }">
            <div class="card">
              <img :src="anime.image" class="card-img-top" :alt="anime.title" />
              <div class="card-body">
                <h5 class="card-title">{{ anime.title }}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const randomAnime = ref([]);

    const getRandomAnime = () => {
      axios
        .get("https://api.jikan.moe/v4/recommendations/anime")
        .then((response) => {
          response.data.data.forEach((result) => {
            result.entry.forEach((hasil) => {
              randomAnime.value.push({
                id: hasil.mal_id,
                title: hasil.title,
                image: hasil.images.webp.image_url,
              });
            });
          });
        })
        .then(() => {
          console.log(randomAnime.value);
        });
    };
    const getRandomNumber = (num) => {
      const startIndex = Math.floor(
        Math.random() * (randomAnime.value.length - num)
      );
      return randomAnime.value.slice(startIndex, startIndex + num);
    };

    return {
      randomAnime,
      getRandomAnime,
      getRandomNumber,
    };
  },

  mounted() {
    this.getRandomAnime();
  },
};
</script>


<style>
</style>