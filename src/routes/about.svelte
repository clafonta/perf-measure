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
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This app is used for <a href="https://web.dev/performance-scoring/">Lighthouse</a> performance scoring evaluation.
		The objective is to set a baseline of performance scoring, using basic static content and then compare the scores
		to pages with added dynamic content and 3rd party tools e.g Google Tags, Experimentation, Cookie Consent, etc.
	</p>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<table>
		<caption>Page Speeds to Compare</caption>
		<thead>
		<tr>
			<th scope="col">Static</th>
			<th scope="col">vs</th>
			<th scope="col">Dynamic</th>
			<th scope="col" width="50%">Learnings</th>

		</tr>
		</thead>
		<tbody>
		<tr>
			<td data-label="Base"><a href="/about">About</a></td>
			<td data-label="">vs.</td>
			<td data-label="Dynamic"><a href="/gdpr">GDPR / Cookie Consent</a></td>
			<td data-label="notes">No significant difference in Lighthouse performance score since this JavaScript utility is
			not blocking for rendering or interactivity.</td>

		</tr>
		<tr>
			<td data-label="Base"><a href="/lazynot">Static images</a></td>
			<td data-label="">vs.</td>
			<td data-label="Dynamic"><a href="/lazy">Lazy loading images</a></td>
			<td data-label="Notes">Not lazy loading images takes a <span style="color:red">-5pt</span>
				hit on Lighthouse performance score.</td>

		</tr>
		<tr>
			<td data-label="Base"><a href="/about">About</a></td>
			<td data-label="">vs.</td>
			<td data-label="Dynamic"><a href="/experiment">Experiment</a></td>
			<td data-label="notes">The experiment page is slower, with a <span style="color:red">-10pt</span>
				on Lighthouse performance score compared to the basic About page.</td>
		</tr>
		<tr>
			<td data-label="Base"><a href="/about">About</a></td>
			<td data-label="">vs.</td>
			<td data-label="Dynamic"><a href="/marketing">Marketing</a></td>
			<td data-label="notes">The marketing page includes Google Tag Manager and is slower, with a <span style="color:red">-10pt</span>
				on Lighthouse performance score compared to the basic About page.</td>
		</tr>

		</tbody>
	</table>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding-bottom: 20px;
	}
	table {
		border: 1px solid #ccc;
		border-collapse: collapse;
		margin: 0;
		padding: 0;
		width: 100%;
		table-layout: fixed;
	}

	table caption {
		font-size: 2em;
		margin: .5em 0 .75em;
		text-align: left;
	}

	table tr {
		background-color: #f8f8f8;
		border: 1px solid #ddd;
		padding: .35em;
	}

	table th {
		padding: .625em;
		text-align: center;
	}
	table td {
		padding: .625em;
		text-align: left;
	}

	table tbody td:nth-child(2) {
		text-align: center;
	}

	table th {
		font-size: .85em;
		letter-spacing: .1em;
		text-transform: uppercase;
		background-color: #ccc;
	}

	@media screen and (max-width: 600px) {
		table {
			border: 0;
		}

		table caption {
			font-size: 1.3em;
		}

		table thead {
			border: none;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
			font-weight: 900;
		}

		table tr {
			border-bottom: 3px solid #ddd;
			display: block;
			margin-bottom: .625em;
		}

		table td {
			border-bottom: 1px solid #ddd;
			display: block;
			font-size: .8em;
			text-align: right;
			margin-left: 20px;
		}


		table td::before {

			content: attr(data-label);
			float: left;
			font-weight: bold;
			text-transform: uppercase;
		}

		table td:last-child {
			border-bottom: 0;
		}
	}

</style>
