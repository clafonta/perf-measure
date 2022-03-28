<LayoutGrid class="content">
    <Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
        <div class="content">
            <div class="signin-content">
                <h1>Reset your password</h1>
                Enter the email address you used to register with.
            </div>
            <div class="signin-field">
                <Textfield variant="outlined" style="width:100%" bind:value={valueA} label="Email"
                           helperLine$style="width: 100%;">
                </Textfield>
            </div>

            <div>

                <Button variant="unelevated">Send instructions</Button>
                <p><a href="contact">Forgot or lost your email address?</a></p>
                <FormField>
                    <Icon class="material-icons">west</Icon> <Button href="signin" >Back to Signin</Button>
                </FormField>
            </div>
        </div>
    </Cell>
</LayoutGrid>

<script lang="ts">
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import Button, {Label} from '@smui/button';
    import Icon from '@smui/textfield/icon';
    import FormField from '@smui/form-field';

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

    .signin-content h1 {
        text-align: left;
        font-size: 2em;
        font-weight: bolder;
    }

    .content {
        width: 100%;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto 0 auto;
    }
</style>
