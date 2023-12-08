<script>
import HeaderApp from "./components/_partials/HeaderApp.vue";
import FooterApp from "./components/_partials/FooterApp.vue";

import Jumbotron from "./components/home/Jumbotron.vue";
import InstallSection from "./components/home/InstallSection.vue";
import ShowCase from "./components/home/ShowCase.vue";

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
    ShowCase,
    InstallSection,
  },
};
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <HeaderApp />
    <main class="flex-grow w-full mt-12">
      <Jumbotron />
      <hr class="mx-6 my-16 border-testo" />
      <InstallSection />
      <hr class="mx-6 my-16 border-testo" />
      <ShowCase />
    </main>
    <footer class="bottom-0 w-full">
      <FooterApp />
    </footer>
  </div>
</template>

<style scoped></style>
