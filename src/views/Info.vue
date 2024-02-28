<template>
  <div class="container text-center">
    <h3 class="text-white">{{ Anime.title }} - Trailer</h3>
    <div>
      <iframe
        width="560"
        height="315"
        :src="Anime.trailer"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col"><img :src="Anime.image" alt="anime" /></div>
        <div class="col">
          <div>
            <h3 class="text-white">Type:</h3>
            <p class="text-white">{{ Anime.type }}</p>
          </div>
          <div>
            <h3 class="text-white">Status:</h3>
            <p class="text-white">{{ Anime.status }}</p>
          </div>
          <div>
            <h3 class="text-white">Studio:</h3>
            <p class="text-white">{{ Anime.studio }}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-white">Synopsis:</h3>
        <p class="text-white">{{ Anime.synopsis }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, watch } from 'vue';

export default {
  props: ['id'],
  setup(props) {
    const Anime = ref({});

    const getAnime = () => {
      axios
        .get(`https://api.jikan.moe/v4/anime/${props.id}`)
        .then((response) => {
          const result = response.data.data;
          Anime.value = {
            title: result.title,
            type: result.type,
            status: result.status,
            studio: result.studios[0].name,
            duration: result.duration,
            trailer: result.trailer.embed_url,
            synopsis: result.synopsis,
            image: result.images.webp.image_url,
          };
        })
        .then(() => {
          console.log(Anime.value);
        })
        .catch((error) => {
          console.error("Error fetching anime data:", error);
        });
    };

    getAnime();

    watch(() => props.id, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        getAnime();
      }
    });

    return {
      Anime,
    };
  },
};
</script>

<style>
</style>
