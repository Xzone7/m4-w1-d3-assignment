<script>
import FoodCard from "./food-card.vue";
import { foodList } from "./static-config";

export default {
  name: "App",
  components: {
    FoodCard: FoodCard,
  },
  data() {
    return {
      foodList,
    };
  },
};
</script>

<template>
  <div id="app">
    <h2>Selections</h2>
    <div class="food-list-wrapper">
      <FoodCard v-for="food in foodList" :food="food" />
    </div>
  </div>
</template>
