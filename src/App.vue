<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  gsap.to(".p", {
    x: 200,
  });
});
</script>

<template>
  <h1 class="p text-3xl font-bold underline">Hello world!</h1>
</template>

<style scoped></style>
