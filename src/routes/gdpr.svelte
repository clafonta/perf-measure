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

    import Icon from '@smui/textfield/icon';

    // GDPR
    import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
    import '@beyonk/gdpr-cookie-consent-banner/dist/style.css' // optional, you can also define your own styles
    function initAnalytics () {
        // do something with segment.io or google analytics etc
    }
</script>

<svelte:head>
    <title>About GDPR</title>
</svelte:head>

<GdprBanner cookieName="foo" description="bar" on:analytics={initAnalytics} />
<div class="content">
    <h1>About GDPR</h1>

    <p>
        This page is to evaluate the Lighthouse performance score when including cookie consent. Compare this page with the vanilla <a href="/about">About</a> page.
    </p>

    <p style="display: flex; align-items: center;">
        Click on the <Icon style="font-size: 20px; margin: 0; padding: 0 5px;" class="material-icons" variant="outlined">cookie</Icon> icon lower right for details.

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
