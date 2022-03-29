<script>
    export let type = '';
    export let style = '';
    import { application_name, application_color } from '$lib/stores.js'
    import Icon from '@smui/textfield/icon';
    import FormField from '@smui/form-field';
</script>

{#if type === 'name_and_logo'}
    <FormField>
        <Icon class="material-icons" style="{style}; " >{application_name}</Icon>
        <span class="m_title" style="font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;{style}">{application_name}</span>
    </FormField>
{:else if type === 'other'}
    other
{:else if type === 'logo'}
    <Icon class="material-icons" style="{style}; color: {application_color};">{application_name}</Icon>
{:else}
   <span class="m_case" style="{style}">{application_name}</span>
{/if}

<style>
    .m_title {
        text-transform: capitalize;
        font-weight: bold;
        text-shadow: 4px 4px #ccc;
    }
    .m_case {
        text-transform: uppercase;
    }

    @media (min-width: 30em) and (max-width: 80em) {
        .m_title {
            display: none;
        }
    }
</style>