<script>
// import  from "./components/MyComponent.vue";
import { gsap } from "gsap";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  mounted() {
    gsap.set(["a", "li"], {
      autoAlpha: 0,
      y: -200,
    });

    gsap.to("a", {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      ease: "bounce",
    });

    gsap.to("li", {
      autoAlpha: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      stagger: 0.2,
    });
  },
};
</script>

<template>
  <header
    class="mx-6 my-4 pb-4 flex flex-col items-center border-b border-testo sm:flex-row sm:justify-between sm:items-center"
  >
    <a href="/" class="text-2xl font-black">
      GSAP<span class="text-verde mx-1">4</span>NOOBS
    </a>

    <ul class="nav hidden sm:flex sm:flex-row sm:gap-4">
      <li><a href="http://">Showcase</a></li>
      <li><a href="http://">Install</a></li>
      <li><a href="http://">Docs</a></li>
      <li><a href="http://">Contacts</a></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped></style>
