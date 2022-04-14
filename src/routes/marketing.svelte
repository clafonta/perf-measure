<script context="module">
    import { browser, dev } from '$app/env';

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;

    // since there's no dynamic data here, we can prerender
    // it so that it gets served as a static asset in prod
    export const prerender = true;

    import GTM from '$lib/header/GTM.svelte';

</script>

<svelte:head>
    <title>About Marketing</title>
</svelte:head>
<GTM gtmId="GTM-5RNG4CM" />

<div class="content">
    <h1>About Marketing</h1>

    <p>
        This page is used to evaluate the Lighthouse performance score when including Google Tag Manager. Compare this page with the vanilla <a href="/about">About</a> page.
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
