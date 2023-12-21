<script>
import gsap from "gsap";
export default {
  data() {
    return {
      installMethod: null,
      isOpen: false,
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
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>

<template>
  <div class="container mx-auto">
    <h1 class="font-black text-5xl mb-5 text-center">
      Come installare <span class="gsap">GSAP</span>
    </h1>
    <p class="text-testo mb-5 text-center">
      Scegli il tipo di installazione che preferisci:
    </p>
    <!-- NAV -->
    <div class="list-disc flex justify-center gap-4 mt-8 mb-4">
      <div class="mb-4">
        <a
          class="plugin-nav"
          @click.prevent="installCdn()"
          v-bind:class="{ selected: installMethod === 'cdn' }"
          >CDN</a
        >
      </div>
      <div class="mb-4">
        <a
          class="plugin-nav"
          @click.prevent="installNpm()"
          v-bind:class="{ selected: installMethod === 'npm' }"
          >npm</a
        >
      </div>
      <div class="mb-4">
        <a
          class="plugin-nav"
          @click.prevent="installYarn()"
          v-bind:class="{ selected: installMethod === 'yarn' }"
          >yarn</a
        >
      </div>
    </div>

    <!-- Tutorial Install -->
    <!-- CDN -->
    <div class="tutorial" v-if="installMethod === 'cdn'">
      <p class="mb-4">
        Per installare una libreria tramite CDN, aggiungi il seguente tag script
        al tuo documento HTML:
      </p>
      <img src="../../assets/img/install/cdn.png" alt="" />
      <!-- TOGGLE TEXT -->
      <div class="mt-5 mb-2">
        <div class="header-toggle flex gap-2 items-center my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
            :class="{ 'rotate-180': isOpen }"
          >
            <path
              d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
            />
          </svg>
          <h3
            @click="isOpen ? close() : open()"
            class="cursor-pointer font-bold"
          >
            Confuso?
          </h3>
        </div>
        <div v-show="isOpen">
          <p class="my-2">
            Solitamente è meglio posizionare il tag di script di GSAP prima
            della chiusura del tag body e prima del tuo codice personalizzato
            GSAP.
          </p>
          <img src="../../assets/img/install/confuso.png" alt="" />
          <a href="http://" class="text-verde hover:underline my-2"
            >Leggi la documentazione ufficiale.</a
          >
        </div>
      </div>
      <h3 class="my-2">Lista dei Plugin e Easing Free</h3>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
      >
        <div class="plugin">Flip</div>
        <div class="plugin">ScrollTo</div>
        <div class="plugin">Easel</div>
        <div class="plugin">Scrolltrigger</div>
        <div class="plugin">Draggable</div>
        <div class="plugin">Pixi</div>
        <div class="plugin">Observer</div>
        <div class="plugin">MotionPath</div>
        <div class="plugin">Text</div>
        <div class="plugin">RoughEase</div>
        <div class="plugin">ExpoScaleEase</div>
        <div class="plugin">SlowMo</div>
        <div class="plugin">CustomEase</div>
      </div>
      <h3 class="my-2">E per aggiungere Plugin?</h3>
      <img src="../../assets/img/install/cdn-import.png" alt="" class="my-2" />

      <a href="http://" class="text-verde hover:underline my-2"
        >Leggi la documentazione ufficiale.</a
      >
    </div>

    <!-- NPM -->
    <div class="tutorial" v-if="installMethod === 'npm'">
      <p class="mb-2">
        Per installare una libreria tramite NPM, esegui il seguente comando sul
        terminale:
      </p>
      <img src="../../assets/img/install/npm.png" alt="" class="my-2" />
      <p>In seguito aggiungi l'import al tuo file Javascript</p>
      <img src="../../assets/img/install/import-base.png" alt="" class="my-2" />
      <h3 class="my-2">Lista dei Plugin e Easing Free</h3>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
      >
        <div class="plugin">Flip</div>
        <div class="plugin">ScrollTo</div>
        <div class="plugin">Easel</div>
        <div class="plugin">Scrolltrigger</div>
        <div class="plugin">Draggable</div>
        <div class="plugin">Pixi</div>
        <div class="plugin">Observer</div>
        <div class="plugin">MotionPath</div>
        <div class="plugin">Text</div>
        <div class="plugin">RoughEase</div>
        <div class="plugin">ExpoScaleEase</div>
        <div class="plugin">SlowMo</div>
        <div class="plugin">CustomEase</div>
      </div>
      <h3 class="my-2">Come aggiungerli al tuo progetto:</h3>
      <img src="../../assets/img/install/import-plug.png" alt="" />
      <!-- TOGGLE TEXT -->
      <div>
        <div class="header-toggle flex gap-2 items-center my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
            :class="{ 'rotate-180': isOpen }"
          >
            <path
              d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
            />
          </svg>
          <h3
            @click="isOpen ? close() : open()"
            class="font-bold cursor-pointer"
          >
            Cos'è registerPlugin?
          </h3>
        </div>
        <div v-show="isOpen">
          <p>
            Registrare un plugin con il core di GSAP assicura che i due
            funzionino perfettamente insieme e previene anche problemi di tree
            shaking negli strumenti di build o bundler. <br />
            Non c'è alcun problema nel registrare lo stesso plugin più volte.
          </p>
          <a href="http://" class="text-verde hover:underline my-2"
            >Leggi la documentazione ufficiale.</a
          >
        </div>
      </div>
    </div>

    <!-- YARN -->
    <div class="tutorial" v-if="installMethod === 'yarn'">
      <p class="mb-2">
        Per installare una libreria tramite Yarn, esegui il seguente comando sul
        terminale:
      </p>
      <img src="../../assets/img/install/yarn.png" alt="" class="my-2" />
      <p>In seguito aggiungi l'import al tuo file Javascript</p>
      <img src="../../assets/img/install/import-base.png" alt="" class="my-2" />
      <h3 class="my-2">Lista dei Plugin e Easing Free</h3>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
      >
        <div class="plugin">Flip</div>
        <div class="plugin">ScrollTo</div>
        <div class="plugin">Easel</div>
        <div class="plugin">Scrolltrigger</div>
        <div class="plugin">Draggable</div>
        <div class="plugin">Pixi</div>
        <div class="plugin">Observer</div>
        <div class="plugin">MotionPath</div>
        <div class="plugin">Text</div>
        <div class="plugin">RoughEase</div>
        <div class="plugin">ExpoScaleEase</div>
        <div class="plugin">SlowMo</div>
        <div class="plugin">CustomEase</div>
      </div>
      <h3 class="my-2">Come aggiungerli al tuo progetto:</h3>
      <img src="../../assets/img/install/import-plug.png" alt="" />
      <!-- TOGGLE TEXT -->
      <div>
        <div class="header-toggle flex gap-2 items-center my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="10"
            viewBox="0 0 320 512"
            :class="{ 'rotate-180': isOpen }"
          >
            <path
              d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
            />
          </svg>
          <h3
            @click="isOpen ? close() : open()"
            class="font-bold cursor-pointer"
          >
            Cos'è registerPlugin?
          </h3>
        </div>
        <div v-show="isOpen">
          <p>
            Registrare un plugin con il core di GSAP assicura che i due
            funzionino perfettamente insieme e previene anche problemi di tree
            shaking negli strumenti di build o bundler. <br />
            Non c'è alcun problema nel registrare lo stesso plugin più volte.
          </p>
          <a href="http://" class="text-verde hover:underline my-2"
            >Leggi la documentazione ufficiale.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selected {
  padding: 1rem 2rem;
  border-width: 2px;
  border-color: #00ff00;
  border-style: dashed;
  color: #00ff00;
}

img {
  display: block;
  margin: auto;
  max-width: 100%; /* Imposta la larghezza massima al 100% per evitare overflow */
  height: auto; /* Imposta l'altezza automaticamente per mantenere l'aspetto originale */
  border-radius: 10px;
  margin-top: 1rem; /* Aggiungi un margine verticale, puoi regolare il valore secondo le tue esigenze */
  margin-bottom: 1rem; /* Aggiungi un margine verticale, puoi regolare il valore secondo le tue esigenze */
}
</style>
