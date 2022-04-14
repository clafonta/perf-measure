<script context="module">
    export const prerender = true;
</script>
<script lang="ts">
    import LayoutGrid, {Cell} from '@smui/layout-grid';
	import Icon from '@smui/textfield/icon';
    import Button from '@smui/button';
	import AppName from '$lib/header/AppName.svelte';
	import Chip, { Set, Text } from '@smui/chips';
	import Textfield from '@smui/textfield';
	import GTM from '$lib/header/GTM.svelte';
	let valueA = '';
</script>
<svelte:head>
    <title>Home</title>
</svelte:head>

<section>
    <div class="section-blurb">
		<h1>Flexible business solutions that work for you.</h1>
		<p>
			<Button color="primary" variant="unelevated" style="margin:2px 0;">Get started</Button>
			<Button color="secondary" variant="outlined" style="margin:2px 0;">Contact sales</Button>
		</p>
    </div>
	<div class="section-blurb">
		<h1>Tools that connect every side of your business.</h1>
	</div>
	<div class="section-cards">
    <LayoutGrid>
		<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 6 }}>
			<div class="merchant-type">
				<div >
					<span class="merchant-type-name">Commerce</span>
				</div>
				<div class="merchant-type-details">
					<p>Sell in-person, online, or from anywhere. Take secure payments from customers, clients, and more.</p>
					<p><a href="/about">See commerce solutions<span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">east</Icon></span></a></p>
					<Set chips={['Point of sale', 'Online store', 'Payments']} let:chip nonInteractive>
						<Chip {chip}>
							<Text>{chip}</Text>
						</Chip>
					</Set>
				</div>
			</div>
		</Cell>

		<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 6 }}>
			<div class="merchant-type">
				<div >
					<span class="merchant-type-name">Customers</span>
				</div>
				<div class="merchant-type-details">
					<p>Keep customers coming back to your business with personal touches and rewards.</p>
					<p><a href="/about">Explore Customer Directory<span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">east</Icon></span></a></p>
					<Set chips={['Loyalty program', 'Email marketing', 'Message Hub']} let:chip nonInteractive>
						<Chip {chip}>
							<Text>{chip}</Text>
						</Chip>
					</Set>
				</div>
			</div>
		</Cell>
		<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 6 }}>
			<div class="merchant-type">
				<div >
					<span class="merchant-type-name">Banking</span>
				</div>
				<div class="merchant-type-details">
					<p>Access and manage your money as you make it with business banking accounts and services from <AppName /></p>
					<p><a href="/about">See banking solutions<span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">east</Icon></span></a></p>
					<Set chips={['Checking', 'Savings', 'Loans']} let:chip nonInteractive>
						<Chip {chip}>
							<Text>{chip}</Text>
						</Chip>
					</Set>
				</div>
			</div>
		</Cell>

		<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 6 }}>
			<div class="merchant-type">
				<div >
					<span class="merchant-type-name">Staff</span>
				</div>
				<div class="merchant-type-details">
					<p>Manage your team with scheduling, timecards, adn full service payroll, all in one plance.</p>
					<p><a href="/about">Check out Payroll<span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">east</Icon></span></a></p>
					<Set chips={['Team Management', 'Benefits']} let:chip nonInteractive>
						<Chip {chip}>
							<Text>{chip}</Text>
						</Chip>
					</Set>
				</div>
			</div>
		</Cell>
    </LayoutGrid>
	</div>
	<div class="section-blurb">
		<h1>Solution sets for every business type and size.</h1>
		<div class="lead-content">
			<h2><a href="/about">Retail <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900;"  slot="trailingIcon">east</Icon></span></a></h2>
			<p>All the retail tools you need for selling online and instore - from inventory management, exchanges, and more.</p>
		</div>
		<div class="lead-content">
			<h2><a href="/about">Food &amp; beverage <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900;"  slot="trailingIcon">east</Icon></span></a></h2>
			<p>Tools for front of house, like menus and table management - and back of house, like kitchen displays and delivery.</p>
		</div>
		<div class="lead-content">
			<h2><a href="/about">Professional services <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900;"  slot="trailingIcon">east</Icon></span></a></h2>
			<p>Integrated tools that help you get paid quickly, deliver better client service, and improve your cash flow.</p>
		</div>
		<div class="lead-content">
			<h2><a href="/about">Large business <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900;"  slot="trailingIcon">east</Icon></span></a></h2>
			<p>Build custom solutions and deliver great customer experiences wih advanced reporting and more.</p>
		</div>
	</div>

	<div class="section-blurb">
		<h1>Hardware for selling anywhere.</h1>

		<p style="font-size: 25px;">We design and build our hardware in-house, so it all works seamlessly.</p>
		<p style="font-size: 25px; font-weight: 900;"><a href="/about">Shop all hardware <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900;"  slot="trailingIcon">east</Icon></span></a></p>

	</div>

	<div class="section-blurb">
		<h1>Get business insights from business experts.</h1>
		<div class="lead-content">
			<p style="font-size: 25px; font-weight: 900;">Join our email list to receive advice from other business ownerw, support, articles, tips from industry experts, and more.</p>
		</div>
		<div style="padding-bottom: 20px;">
			<Textfield variant="outlined" style="width: 50%; margin:2px 0;" bind:value={valueA} label="Enter your email"
					   helperLine$style="width: 100%;">
			</Textfield>
			<Button color="primary" variant="unelevated" style="height: 56px; margin:2px 0;">Get more info</Button>
			<p>* Please refer to our <a href="/about">Privacy Policy </a> or <a href="/contact">contact us</a> for more details.</p>
		</div>
	</div>


</section>

<style>
	* { font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;  }
    .merchant-type {
        background-color: #fff;
        padding: 1em;
		position: relative;
		border-radius: 10px;
		border: solid 1px;
		border-color: #b9c6d2;
    }

	.merchant-type-name {
		font-size: 2em; font-weight: bolder;
	}
	.merchant-type-icon {
		font-size:16px; font-weight: bolder;
		margin-left: 0;
		padding-left: 0;
	}

	.merchant-type-details {
		min-height: 180px;
		position: relative;
	}


    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
		padding-top: 1em;

    }



	.section-blurb {
		max-width: 750px;
		text-align: left;
		padding-left: 24px;
		padding-right: 24px;
	}
	.section-blurb h1{
		text-align: left;
	}
	.section-cards {
		max-width: 800px;
	}

	.lead-content {
		padding-bottom: 1em;
	}
	.lead-content h2 {
		text-align: left;
		font-size: 25px;
		font-weight: 900;
		color: magenta;
	}

    .lead-content p {
		max-width: 500px;
        text-align: left;
        padding: 0;
        margin-bottom: 20px;
    }

</style>
