<form autocomplete="off">
<LayoutGrid class="content">
    <Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
        <div class="content">
            <div class="signin-content">
                <h1>Contact <AppName /></h1>
                <p>If you’ve lost access to the email address associated with your <AppName /> account, then fill out the form below with as much information about your business as you can, and we’ll locate your account and assist.</p>
            </div>
            <div class="signin-field">
                <Textfield textarea variant="outlined" style="width:100%" bind:value={valueA} label="What's the issue?"
                           helperLine$style="width: 100%;">
                    <HelperText slot="helper">Describe your issue. Let us know about dates and details when you started to experience issues. </HelperText>
                </Textfield>
            </div>
            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueB} label="Your name (the legal name listed on your account)"
                           helperLine$style="width: 100%;">
                    <HelperText slot="helper">We'll try to cross reference your name across all account information. </HelperText>
                </Textfield>
            </div>
            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueC} label="Your business name (if applicable)" helperLine$style="width: 100%;">
                </Textfield>
            </div>
            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueD} label="The email address associated with your account"
                           helperLine$style="width: 100%;">
                </Textfield>
            </div>

            <div class="signin-field">
                <Textfield textarea autocomplete="off" variant="outlined" style="width:100%" bind:value={valueA} label="Any physical addresses you may have used to sign up"
                           helperLine$style="width: 100%;">
                    <HelperText slot="helper">Please note, that P.O. Box addresses are invalid.</HelperText>
                </Textfield>
            </div>

            <Textfield variant="outlined" style="width:100%" bind:value={valueE} label="The phone number associated with your account"
                       helperLine$style="width: 100%;">
                <HelperText slot="helper">We'll contact you at this phone number for any questions or updates.</HelperText>
            </Textfield>

            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueF} label="The last 3 digits of your bank account" helperLine$style="width: 100%;">
                </Textfield>
            </div>

            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueF} label="An email address" helperLine$style="width: 100%;">
                    <HelperText slot="helper">We'll use this email address to contact you.</HelperText>
                </Textfield>
            </div>

            <div class="signin-content">
                By clicking <span>Submit</span>, you agree to <AppName />'s <a href="#/">Terms</a>, <a href="#/">Privacy Policy</a>, and <a href="#/">E-Sign Consent</a>.
            </div>
            <div class="signin-content">
                <Button variant="unelevated" style="width: 100%">Submit</Button>
            </div>
            <div>
                <p>Already have a <AppName /> account? <a href="/signin">Sign in</a>.</p>

            </div>
        </div>
    </Cell>

</LayoutGrid>
</form>
<script lang="ts">
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Button, {Label} from '@smui/button';
    import Icon from '@smui/textfield/icon';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import HelperText from '@smui/textfield/helper-text';
    import AppName from '$lib/header/AppName.svelte';

    let isPasswordVisible = false;
    let valueA = '';
    let valueB = '';
    let valueC = '';
    let valueD = '';
    let valueE = '';
    let valueF = '';

    let checked = false;


    let show_password = false;
    $: type = show_password ? 'text' : 'password'
    let value = '';
    let passwordFieldType = 'password';

    function handleClick() {
        isPasswordVisible = !isPasswordVisible;
        if (isPasswordVisible) {
            passwordFieldType = 'text';
        } else {
            passwordFieldType = 'password';
        }
    }

    function onInput(event) {
        value = event.target.value
    }
</script>

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


    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
