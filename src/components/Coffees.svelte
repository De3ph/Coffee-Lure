<script lang="ts">

import Card from "./Card.svelte";
</script>

<main id="beans" class="min-h-screen bg-brandCream flex flex-col justify-center py-28">

    <div class="grid justify-items-center md:grid-cols-2 p-20 gap-y-10 md:gap-x-10 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-20 lg:gap-x-0">
        <Card imageUrl="/src/assets/beans/1.webp" title="Lavazza Super Crema Espresso" desc="No one does espresso quite like Italy. The country invented it, then perfected it." />
        <Card imageUrl="/src/assets/beans/2.webp" title="SF Bay Coffee Hazelnut Crème, Whole Bean" desc="All kinds of flavored coffees are available today. There’s the seasonal pumpkin spice craze or the always reliable French vanilla route." />
        <Card imageUrl="/src/assets/beans/3.webp" title="Kicking Horse Decaf Dark Roast Coffee" desc="A good cup of decaf can be hard to find. When coffee beans go through the decaffeination process, they lose certain chemicals that create the tastes and aromas you love."  />
        <Card imageUrl="/src/assets/beans/4.webp" title="Seattle's Best Coffee Portside Blend" desc="The only thing better than coffee is a lot of coffee, and Seattle’s Best makes it easy to load up on java with its unbeatable prices." />
    </div>

</main>