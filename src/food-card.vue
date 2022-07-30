<script>
import { foodList } from "./static-config";

export default {
  data() {
    return {
      foodList,
    };
  },
};
</script>

<template>
  <div id="app">
    {{ foodList }}
  </div>
</template>
