<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="jumbo mb-4 mx-6">
    <div class="testo h-[60vh] flex flex-col justify-center items-center">
      <span
        class="mr-16 sm:mr-56 text-center text-[3rem] sm:text-8xl md:text-9xl lg:text-[15rem] font-bold tracking-wide"
        >Animate</span
      >
      <span
        class="leading-3 ml-16 sm:ml-56 text-center text-[3rem] sm:text-8xl md:text-9xl lg:text-[15rem] font-bold tracking-wide"
        >anyth!ng</span
      >
    </div>

    <div class="subtitle flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-1/8 text-7xl font-light text-right mr-1">{</div>
        <div class="w-3/5 text-center font-bold">
          Newbies Edition, impara le basi di GSAP e rendi unici i tuoi progetti!
        </div>
        <div class="w-1/8 text-7xl font-light text-left ml-1">}</div>
      </div>
      <button>Vai alla Doc</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
