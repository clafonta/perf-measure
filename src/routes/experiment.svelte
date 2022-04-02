<script context="module">
    import GoogleOptimize from '$lib/header/GoogleOptimize.svelte';
    import GTM from '$lib/header/GTM.svelte';
</script>

<svelte:head>
    <title>Experiment A</title>
</svelte:head>
<GoogleOptimize />
<GTM gtmId="GTM-5RNG4CM" />
<div class="content">
    <h1>Experiment Page</h1>
    <p>
       This page is includes experimentation JavaScript, using <a href="https://marketingplatform.google.com/about/optimize/">Google's Optimize</a> solution.
    </p>
</div>

<style>
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
        padding-bottom: 20px;
    }

</style>
