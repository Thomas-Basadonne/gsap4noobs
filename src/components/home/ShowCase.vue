<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BtnRotate from "../_partials/BtnRotate.vue";
export default {
  components: { BtnRotate },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gsap", {
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "none",
      color: "#1AE348",
    });

    const races = document.querySelector(".races");

    function getScrollAmount() {
      let racesWidth = 0;
      for (const img of races.querySelectorAll("img")) {
        racesWidth += img.offsetWidth;
      }

      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "top 0",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });
    const infoButton = document.querySelector(".info");
    const moreDiv = document.querySelector(".more");

    infoButton.addEventListener("click", () => {
      // Anima il div .more per farlo apparire da destra
      gsap.fromTo(
        moreDiv,
        {
          x: 400, // Stato iniziale: spostamento di -100px lungo l'asse x
        },
        {
          opacity: 1, // Stato finale: opacità 1
          x: 0, // Stato finale: spostamento di 0px lungo l'asse x
          duration: 1,
          ease: "power2.inOut",
        }
      );

      // Dopo che il tween è completato, elimina il bottone .info
      gsap.to(infoButton, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          infoButton.remove();
        },
      });
    });
  },
};
</script>

<template>
  <div class="mt-5 mb-20 ml-5">
    <h2 class="font-black text-8xl">
      Showcase
      <span class="gsap">GSAP</span>
    </h2>
    <p class="font-bold text-xl mt-4">
      Scropri i <span class="best">migliori siti e progetti</span> animati con
      la librearia GSAP
    </p>
  </div>

  <div class="racesWrapper">
    <div class="races">
      <img src="../../assets/img/showcase/showcase1.png" alt="" />
      <img src="../../assets/img/showcase/showcase2.png" alt="" />
      <img src="../../assets/img/showcase/showcase3.png" alt="" />
      <img src="../../assets/img/showcase/showcase4.png" alt="" />
      <img src="../../assets/img/showcase/showcase5.png" alt="" />
      <img src="../../assets/img/showcase/showcase6.png" alt="" />
    </div>
  </div>

  <div class="h-[250px] flex justify-end items-center">
    <BtnRotate class="info z-40 cursor-pointer" />
    <div
      class="more h-[200px] my-5 mr-5 text-end flex flex-col justify-center"
      style="opacity: 0"
    >
      <h2 class="font-black text-2xl">Non ti bastano?</h2>
      <p class="font-bold text-lg whitespace-nowrap">
        Lasciati ispirare dallo
        <a
          href="https://gsap.com/showcase/"
          class="text-verde hover:scale-100 hover:underline"
          >Showcase ufficiale</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.races {
  width: fit-content;
  display: flex;
  flex-wrap: nowrap;
}

.races img {
  flex-shrink: 0;
  padding-right: 0.8em;
  padding-left: 0.8em;
  margin: 0;
}

.races h2:last-of-type {
  background: #e1e1ff;
}
</style>
