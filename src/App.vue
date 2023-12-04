<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import HeaderApp from "./components/_partials/HeaderApp.vue";
import FooterApp from "./components/_partials/FooterApp.vue";

export default {
  data() {
    return {
      title: "Gsap4Noobs",
    };
  },
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<template>
  <HeaderApp />
  <h1 class="p text-3xl font-bold underline">Hello world!</h1>
</template>

<style scoped></style>
