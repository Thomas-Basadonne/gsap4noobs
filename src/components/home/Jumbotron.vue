<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  mounted() {
    // Gestione animazioni Scritta Jumbotron
    gsap.from(".animate", {
      duration: 1.5,
      ease: "power1.out",
      x: -500,
      opacity: 0,
      rotation: -45,
      scale: 0.5,
    });

    gsap.from(".anything", {
      duration: 1.5,
      ease: "power1.out",
      x: 500,
      opacity: 0,
      rotation: 45,
      scale: 0.5,
    });

    //booleano colore !
    let isGreen = false;

    gsap.from(".i", {
      delay: 1.6,
      duration: 3,
      rotation: 180,
      repeat: 2,
      repeatDelay: 1.8,
      yoyo: true,
      ease: "easeInOutCubic",
      transformOrigin: "center",
      onRepeat: () => {
        if (isGreen) {
          gsap.to(".i", {
            duration: 0.5,
            color: "#FFFCE2",
          });
        } else {
          gsap.to(".i", {
            duration: 0.5,
            color: "#1AE348",
          });
        }
        isGreen = !isGreen; // Cambia lo stato
      },
      onComplete: () => {
        // Alla fine dell'animazione completa, imposta il colore a verde
        gsap.to(".i", {
          duration: 0.8,
          color: "#1AE348",
        });
      },
    });

    // Animazione Asterischi
    gsap.from(".asterisco", {
      autoAlpha: 0,
      delay: 1.5,
      x: -20,
      onComplete() {
        gsap.to(".asterisco", {
          duration: 2,
          rotation: 180,
          repeat: -1,
          ease: "none",
        });
      },
    });

    // Animazione p graffe
    const graffeDiv = document.querySelector(".graffe");

    gsap.set(graffeDiv, { opacity: 0 });

    gsap.to(graffeDiv, {
      opacity: 1,
      delay: 2,
      duration: 3,
    });

    // Animazione main-btn
    const button = document.querySelector(".main-btn");

    //animazione ingrasso
    gsap.from(button, {
      duration: 2,
      x: 300,
    });

    // Animazione su hover
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        backgroundColor: "#1AE348", // Cambia il colore di sfondo a rosso
        duration: 0.5,
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        backgroundColor: "#0E100F", // Ripristina il colore di sfondo a verde
        duration: 0.5,
      });
    });

    // Animazione su click
    button.addEventListener("click", () => {
      gsap.to(button, {
        scale: 1.2, // Aumenta la scala del pulsante al 120%
        duration: 0.5,
        ease: "elastic",
        onComplete: () => {
          gsap.to(button, { scale: 1, duration: 0.5 }); // Ripristina la scala a 100%
        },
      });
    });
    // Animazioni forme colorate

    // Animazione spirale arancione
    gsap.from(".spirale", {
      duration: 3,
      autoAlpha: 1,
      delay: 1.5,
      rotation: 360,
      y: -200,
      x: 200,
      onComplete() {
        gsap.to(".spirale", {
          duration: 5,
          autoAlpha: 1,
          y: 250,
          x: 250,
          rotation: 360,
          autoAlpha: 0,
        });
      },
    });

    //forma jumbo
    gsap.from(".formaS", {
      duration: 3,
      x: -200,
    });

    // forma footer
    gsap.from(".formaD", {
      duration: 3,
      x: 200,
    });

    // animazione forme allo spostamento mouse
    gsap.to(".forma", {
      delay: 3,
      onComplete() {
        const forma = document.querySelectorAll(".forma");

        document.addEventListener("mousemove", (e) => {
          const { clientX, clientY } = e;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          const deltaX = (clientX - centerX) / centerX;
          const deltaY = (clientY - centerY) / centerY;

          gsap.to(forma, {
            duration: 0.5,
            x: deltaX * 20, // Modifica la sensibilità e l'ampiezza del movimento
            y: deltaY * 20,
            ease: "power2.out",
          });
        });
      },
    });
  },
};
</script>

<template>
  <div class="jumbo mb-4 mx-6 lg:h-[38vw]">
    <div
      class="testo h-[60vh] flex flex-col justify-center items-center overflow-hidden"
    >
      <div class="flex justify-center h-fit">
        <img
          class="forma formaS w-12 md:w-20 lg:w-29 z-50 self-start"
          src="../../assets/img/forma.png"
          alt=""
        />
        <span
          class="animate flex items-baseline mr-16 sm:mr-52 text-center text-[3.8rem] sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-wide"
          >A<span class="flex flex-col items-center"
            ><span>n</span
            ><img
              class="spirale w-9 md:w-12 lg:w-14 inline-block"
              src="../../assets/img/spirale.png"
              alt="" /></span
          >imate</span
        >
      </div>

      <span
        class="anything flex items-baseline whitespace-nowrap leading-3 ml-16 sm:ml-52 text-center text-[3.8rem] sm:text-8xl md:text-9xl lg:text-[12rem] font-bold w-fit"
      >
        anyth<span class="i">!</span>n
        <span class="w-fit flex flex-row items-center gap-3">
          <span>g</span>
          <img
            class="asterisco mb-12 w-9 md:w-12 lg:w-14 z-50"
            src="../../assets/img/asterisco.png"
            alt=""
          />
        </span>
      </span>
    </div>

    <div
      class="subtitle flex flex-col md:flex-row items-center justify-between"
    >
      <div class="flex items-center">
        <img
          class="asterisco mb-12 w-4 md:w-8 lg:w-10 z-50"
          src="../../assets/img/asterisco.png"
          alt=""
        />
        <div class="graffe flex items-center">
          <div class="w-1/8 text-7xl font-light text-right mr-1">{</div>
          <div class="w-3/5 text-center font-bold">
            Newbies Edition, impara le basi di GSAP e rendi unici i tuoi
            progetti!
          </div>
          <div class="w-1/8 text-7xl font-light text-left ml-1">}</div>
        </div>
      </div>
      <button
        class="main-btn border-2 border-verde font-bold rounded-3xl px-16 py-2 my-10 w-full md:w-fit md:mr-14"
      >
        Vai alla Doc
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.i {
  display: inline-block;
  transform-origin: bottom;
}
</style>
