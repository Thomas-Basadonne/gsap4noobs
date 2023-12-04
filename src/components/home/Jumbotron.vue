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
    <div class="testo h-jumbo w-auto">
      <span>Animate</span> <span>anyth!ng</span>
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
