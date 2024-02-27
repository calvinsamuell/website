<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <Info :id="id"/>
      </div>
      <div class="col">
        <h3 class="text-white">Reccomendation</h3>
        <Random />
      </div>
    </div>
  </div>
</template>
  
<script>
import Random from "./Random.vue";
import Info from "./Info.vue";

export default {
  props: ["id"],
  components: { Random, Info },
  };
</script>