import { createApp } from "vue";
import FoodCard from "./food-card.vue"

const app = createApp({});

app.component("FoodCard", FoodCard);

app.mount("#vue");