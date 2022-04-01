<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/header/Footer.svelte';
	import '../app.css';
</script>


<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	* {font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;}
	main {
		padding: 0 10px;
	}
</style>