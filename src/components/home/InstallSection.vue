<script>
import gsap from "gsap";
export default {
  data() {
    return {
      installMethod: null,
    };
  },
  methods: {
    installCdn() {
      this.installMethod = "cdn";
    },
    installNpm() {
      this.installMethod = "npm";
    },
    installYarn() {
      this.installMethod = "yarn";
    },
  },
};
</script>

<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-5">Come installare GSAP</h1>
    <p class="text-testo mb-5">
      Scegli il tipo di installazione che preferisci:
    </p>
    <!-- NAV -->
    <div class="list-disc flex justify-around mt-8 mb-4">
      <div class="mb-4">
        <a
          href="#"
          class="text-testo"
          @click.prevent="installCdn()"
          v-bind:class="{ selected: installMethod === 'cdn' }"
          >CDN</a
        >
      </div>
      <div class="mb-4">
        <a
          href="#"
          class="text-testo"
          @click.prevent="installNpm()"
          v-bind:class="{ selected: installMethod === 'npm' }"
          >NPM</a
        >
      </div>
      <div class="mb-4">
        <a
          href="#"
          class="text-testo"
          @click.prevent="installYarn()"
          v-bind:class="{ selected: installMethod === 'yarn' }"
          >Yarn</a
        >
      </div>
    </div>

    <!-- Tutorial Install -->
    <!-- CDN -->
    <div class="tutorial" v-if="installMethod === 'cdn'">
      <p class="text-gray-600 mb-4">
        Per installare una libreria tramite CDN, aggiungi il seguente tag script
        al tuo documento HTML:
      </p>
      <pre class="bg-gray-200 p-5 text-gray-700 rounded-md shadow">
        link qui
      </pre>
    </div>

    <!-- NPM -->
    <div class="tutorial" v-if="installMethod === 'npm'">
      <p class="text-gray-600 mb-5">
        Per installare una libreria tramite NPM, esegui il seguente comando:
      </p>
      <pre class="bg-gray-200 p-5 text-gray-700 rounded-md shadow">
        npm install 
      </pre>
    </div>

    <!-- YARN -->
    <div class="tutorial" v-if="installMethod === 'yarn'">
      <p class="text-gray-600 mb-5">
        Per installare una libreria tramite Yarn, esegui il seguente comando:
      </p>
      <pre class="bg-gray-200 p-5 text-gray-700 rounded-md shadow">
        yarn add 
      </pre>
    </div>
  </div>
</template>

<style>
.selected {
  padding: 1rem 2rem;
  border-width: 2px;
  border-color: #00ff00; /* colore del tuo verde */
  border-style: dashed;
}
</style>
