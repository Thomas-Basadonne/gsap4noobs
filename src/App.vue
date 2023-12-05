<script>
import HeaderApp from "./components/_partials/HeaderApp.vue";
import FooterApp from "./components/_partials/FooterApp.vue";

import Jumbotron from "./components/home/Jumbotron.vue";

export default {
  data() {
    return {
      title: "Gsap4Noobs",
    };
  },
  components: {
    HeaderApp,
    Jumbotron,
    FooterApp,
  },
};
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <HeaderApp />
    <main class="flex-grow w-full">
      <Jumbotron />
    </main>
    <footer class="md:absolute bottom-0 w-full">
      <FooterApp />
    </footer>
  </div>
</template>

<style scoped></style>
