<script>
export default {
  props: ["food"],
};
</script>

<template>
  <div class="food">
    <div class="food-img"><img :src="food.img" alt="pic" /></div>
    <div class="food-name">{{ food.name }}</div>
    <div class="food-desc">{{ food.desc }}</div>
    <div class="food-button">
      <button>Add to Cart</button>
    </div>
  </div>
</template>
