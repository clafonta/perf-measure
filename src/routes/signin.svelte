<LayoutGrid class="content">
    <Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
        <div class="content">
            <div class="signin-content">
                <h1>Sign in</h1>
                <p>New to <span><AppName />?</span> <a href="signup">Sign up</a>.</p>
            </div>
            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueA} label="Email"
                           helperLine$style="width: 100%;">
                    <HelperText slot="helper">Enter your email address</HelperText>
                </Textfield>
            </div>
            <div>
                <Textfield variant="outlined" style="width:100%" bind:value={valueC} label="Password"
                           type="{passwordFieldType}">
                    <Icon class="material-icons" slot="trailingIcon" on:click={ handleClick } role="button">
                        {#if isPasswordVisible}visibility{:else }visibility_off{/if}
                    </Icon>
                    <HelperText slot="helper">Enter your password.</HelperText>
                </Textfield>
            </div>
            <div>
                <p style="padding-top: 1em;"><Button variant="unelevated">Signin</Button></p>
                <p style="padding-top: 1em;"><a href="passwordreset">Forgot password?</a></p>
            </div>
        </div>
    </Cell>
</LayoutGrid>

<script lang="ts">
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import Button, {Label} from '@smui/button';
    import Icon from '@smui/textfield/icon';
    import AppName from '$lib/header/AppName.svelte';

    let isPasswordVisible = false;
    let valueA = '';
    let valueB = '';
    let valueC = '';

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
