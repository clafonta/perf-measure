<script context="module">
    export const prerender = true;
</script>


<script lang="ts">
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Icon from '@smui/textfield/icon';
    import Button, {Label} from '@smui/button';
    import AppName from '$lib/header/AppName.svelte';
    import Img from '@zerodevx/svelte-img';
    let selected;

    function handleChange() {
        if (selected === 'size' ) {
            alert("Size: " +  selected);
        } else {
            alert("Type: " +  selected);
        }
    }
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>


<section>
    <div class="goodness">
        <h1><AppName type="name_and_logo" style="font-size: 50px; color: #ba55d3;"/></h1>
        <p class="subtext">
            Flexible business solutions
            that work for you.
        </p>
    </div>

    <div class="lead-content">
        <h2>What <select class="choice"  bind:value={selected} on:change="{handleChange}">
            <option value="size">size</option>
            <option value="type">type</option>
        </select>  of business are you?</h2>
        <p class="lead_blurb">Knowing what <i>type</i> or <i>size</i> of business you run will help us give you the information
            you need. </p>
    </div>
    <div class="discovery-by-size">
        <LayoutGrid>
            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Individual</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">person_outline</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>Solutions for health, beauty, repair, and other professionals.</p>
                        <p class="element-to-stick-to-bottom">
                            <Button variant="unelevated" color="primary" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>

            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Small</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">store</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>All the retail tools you need, from open to close, in-store and online. </p>
                        <p class="element-to-stick-to-bottom" style="background-color:#b9c6d2; ">
                            <Button variant="outlined" color="secondary" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>



            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Medium</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">business</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>Solutions for front of the house, back of the house, and everything in between.</p>
                        <p class="element-to-stick-to-bottom" style="background-color: lavender">
                            <Button variant="outlined" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>

            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Large</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">public</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>Build custom solutions with our scalable and secure platforms.</p>
                        <p class="element-to-stick-to-bottom">
                            <Button color="secondary" variant="unelevated" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>
        </LayoutGrid>
    </div>

    <div class="discovery-by-type">
        <LayoutGrid >
            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Individual</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">person_outline</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>Solutions for health, beauty, repair, and other professionals.</p>
                        <p class="element-to-stick-to-bottom">
                            <Button variant="unelevated" color="primary" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>
            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Small</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">store</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>All the retail tools you need, from open to close, in-store and online. </p>
                        <p class="element-to-stick-to-bottom" style="background-color:#b9c6d2; ">
                            <Button variant="outlined" color="secondary" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>
            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Medium</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">business</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>Solutions for front of the house, back of the house, and everything in between.</p>
                        <p class="element-to-stick-to-bottom" style="background-color: lavender">
                            <Button variant="outlined" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>
            <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 6 }}>
                <div class="merchant-type">
                    <div>
                        <span class="merchant-type-name">Large</span>
                        <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 2em;"  slot="trailingIcon">public</Icon></span>
                    </div>
                    <div class="merchant-type-details">
                        <p>Build custom solutions with our scalable and secure platforms.</p>
                        <p class="element-to-stick-to-bottom">
                            <Button color="secondary" variant="unelevated" style="width: 100%">Learn more</Button>
                        </p>
                    </div>
                </div>
            </Cell>
        </LayoutGrid>
    </div>
</section>

<style>
    * { font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;  }
    .merchant-type {
        background-color: #fff;
        padding: 1em;
        position: relative;
    }

    .goodness {
        border-radius: 50% 20% / 10% 40%;
        box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
        background-color: #fff;
        border-style: solid;
        border-width: 4px;
        border-color: #ccc;
        text-align: left;
        padding: 2em;
    }
    .choice {
        border-radius: 50% 20% / 10% 40%;
        background-color: #fff;
        border-style: solid;
        border-width: 2px;
        border-color: #ccc;
        padding: 5px;
        font-size: 1em;
        font-weight: bold;

    }
    .goodness h1 {
        text-align: left;
        margin: 0;
        padding: 0;
    }

    .merchant-type-name {
        font-size: 2em; font-weight: bolder;
    }
    .merchant-type-icon {
        font-size: 1em; font-weight: bolder;
    }
    .merchant-type-details {
        min-height: 180px;
        position: relative;
    }
    .element-to-stick-to-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding-top: 1em;

    }

    .subtext {
        text-align: left;
        font-size: 2em;
        color: #444444;
    }
    .lead-content h2 {
        text-align: left;
        font-size: 2em;
        font-weight: 900;
        margin-bottom: 5px;
        margin-top: 80px;
    }

    .lead_blurb {
        font-size: 20px;
        color: #444444;
    }

    .lead-content p {
        text-align: left;
        padding: 0;
        margin: 0;
    }

    .discovery-by-size {

    }
    .discovery-by-type {
        display: none;
    }

</style>
