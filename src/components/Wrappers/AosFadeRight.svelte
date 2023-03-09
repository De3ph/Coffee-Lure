<script lang="ts">
  import AOS from "aos"
  import "aos/dist/aos.css"
  import { onMount } from "svelte"
  AOS.init()
</script>

<main data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="false">
  <slot />
</main>
