<script lang="ts">
  import scrollreveal from "scrollreveal"
  import { onMount } from "svelte"

  const animOpt = {
    duration: 600,
    opacity: 0.2,
    useDelay: onload,
    reset: true,
    origin: "left",
    distance: "140px"
  }

  const animate = () => {
    scrollreveal().reveal('#heading', animOpt)
   }

   onMount(()=>{
    animate()
   })

</script>

<main id="map">
  <div
    class="min-h-screen max-w-screen flex flex-col py-10 px-2 justify-evenly items-center bg-brandAlmond "
  >
    <div id="heading" class="text-6xl md:text-8xl font-extrabold">
      Coffee Lure
    </div>
    <img class="object-contain px-5 w-8/12" src="/world.svg" alt="map" />
  </div>
</main>

<!--bg-no-repeat bg-cover bg-opacity-10 bg-center-->
