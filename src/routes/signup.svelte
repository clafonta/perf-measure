<script lang="ts">
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Button from '@smui/button';
    import Icon from '@smui/textfield/icon';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import AppName from '$lib/header/AppName.svelte';

    import Select, { Option } from '@smui/select';
    import { Us, Ca, Au } from "svelte-flagicon";

    let isPasswordVisible = false;
    let valueA = '';
    let valueB = '';
    let valueC = '';
    let checked = false;
    let valueHelperText = '';


    let countrylist = [
        { id: 'Us', name: 'United States' },
        { id: 'Ca', name: 'Canada' },
        { id: 'Au', name: 'Australia'}

    ];



    let show_password = false;
    $: type = show_password ? 'text' : 'password'
    let passwordFieldType = 'password';


    function handleClick() {
        isPasswordVisible = !isPasswordVisible;
        if (isPasswordVisible) {
            passwordFieldType = 'text';
        } else {
            passwordFieldType = 'password';
        }
    }
</script>

<div>

</div>

<svelte:head>
    <title>Sign up</title>
</svelte:head>

<LayoutGrid class="content">
    <Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
        <div class="content">
            <div class="signin-content">
                <h1>Let’s create your account.</h1>
                <p><Icon class="material-icons">east</Icon> Signing up for <AppName /> is fast and free.</p>
                <p><Icon class="material-icons">east</Icon> No commitments or long-term contracts.</p>
            </div>
            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueA} label="Enter your email"
                           helperLine$style="width: 100%;">

                </Textfield>
            </div>
            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueB} label="Confirm your email"
                           helperLine$style="width: 100%;">
                </Textfield>
            </div>
            <div class="signin-content">
                <Textfield variant="outlined" style="width:100%" bind:value={valueC} label="Create a password"
                           type="{passwordFieldType}">
                    <Icon class="material-icons" slot="trailingIcon" on:click={ handleClick } role="button">
                        {#if isPasswordVisible}visibility{:else }visibility_off{/if}
                    </Icon>
                </Textfield>
            </div>
            <div class="signin-field">
                <Select style="width:100%" variant="outlined" bind:value={valueHelperText}  label="Country">
                    {#each countrylist as country}
                        {#if country.id === 'Us'}
                            <Option value={country.id}>
                                <Us size="26" round /><span class="country-name"> {country.name}</span>
                            </Option>
                        {:else if country.id === 'Ca'}
                            <Option value={country.id}>
                                <Ca round size="26" square="false" /><span class="country-name"> {country.name}</span>
                            </Option>
                        {:else if country.id === 'Au'}
                            <Option value={country.id}>
                                <Au round size="26" square="false" /><span class="country-name"> {country.name}</span>
                            </Option>
                        {/if}
                    {/each}
                </Select>

            </div>
            <div class="signin-content">
                <FormField>
                    <Checkbox bind:checked touch />
                    <span> I agree to <AppName />'s <a href="#/">Terms</a>, <a href="#/">Privacy Policy</a>, and <a href="#/">E-Sign Consent</a>.</span>
                </FormField>
            </div>

            <div class="signin-content">
                <Button variant="unelevated" style="width: 100%">Continue</Button>
            </div>
            <div>
                <p>Already have a <AppName /> account? <a href="/signin">Sign in</a>.</p>
            </div>
        </div>
    </Cell>
</LayoutGrid>



<style>

    .signin-field {
        padding-bottom: 14px;
    }

    .signin-content {
        padding-bottom: 2em;
    }
    .signin-content span {
        font-weight: bolder;
    }

    .signin-content h1 {
        text-align: left;
        font-size: 2em;
        font-weight: bolder;
    }
    .signin-content p {
        text-align: left;
        font-size: 1.5em;
        padding: 0;
        margin: 0;
    }
    .country-name {
        padding-left: 10px;
    }
    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
