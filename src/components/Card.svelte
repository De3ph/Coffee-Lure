<script lang="ts">
    export let imageUrl;
    export let title;
    export let desc;

</script>

<div class="card min-w-32 xl:w-80 h-full bg-base-100 shadow-xl">
    <figure><img class="object-cover" src={imageUrl} alt="bean" /></figure>
    <div class="card-body bg-base-200">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
        <div class="card-actions justify-end">
            <button class="btn btn-dark">Buy Now</button>
        </div>
    </div>
</div>