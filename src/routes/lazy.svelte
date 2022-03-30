<script>


    import ImageLoader from '$lib/image/ImageLoader.svelte';
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import IconButton, { Icon } from '@smui/icon-button';

    let panel1Open = false;
    let panel2Open = false;
    let panel3Open = false;
    let panel4Open = false;

</script>

<section>
    <div class="accordion-container">
        <Accordion>

            <Panel bind:open={panel1Open}>
                <Header>
                    <span class="font-f">Retail</span>
                    <IconButton slot="icon" toggle pressed={panel1Open}>
                        <Icon class="material-icons" on>expand_less</Icon>
                        <Icon class="material-icons">expand_more</Icon>
                    </IconButton>
                </Header>
                <Content>
                    <p>All the retail tools you need for selling online and instore - from inventory management, exchanges, and more.</p>
                    <ImageLoader src="https://dummyimage.com/420x320/ccc/333333.png" alt="Our image"></ImageLoader>
                    <p>
                        <a href="/about"><span style="margin-bottom: 5px; padding-bottom: 15px;">Learn more</span> <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900; margin: 0; padding: 0;"  slot="trailingIcon">east</Icon></span></a>
                    </p>
                </Content>
            </Panel>
            <Panel bind:open={panel2Open}>
                <Header>
                    <span class="font-f">Food &amp; beverages</span>
                    <IconButton slot="icon" toggle pressed={panel2Open}>
                        <Icon class="material-icons" on>expand_less</Icon>
                        <Icon class="material-icons">expand_more</Icon>
                    </IconButton>
                </Header>
                <Content>
                    <p>Tools for front of house, like menus and table management - and back of house, like kitchen displays and delivery.</p>
                    <ImageLoader src="https://dummyimage.com/320x320/ccc/333333.png" alt="Our image"></ImageLoader>
                    <p>
                        <a href="/about"><span style="margin-bottom: 5px; padding-bottom: 15px;">Learn more</span> <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900; margin: 0; padding: 0;"  slot="trailingIcon">east</Icon></span></a>
                    </p>
                </Content>
            </Panel>
            <Panel bind:open={panel3Open}>
                <Header>
                    <span class="font-f">Professional services</span>
                    <IconButton slot="icon" toggle pressed={panel3Open}>
                        <Icon class="material-icons" on>expand_less</Icon>
                        <Icon class="material-icons">expand_more</Icon>
                    </IconButton>
                </Header>
                <Content>
                    <p>Integrated tools that help you get paid quickly, deliver better client service, and improve your cash flow.</p>
                    <ImageLoader src="https://dummyimage.com/220x120/ccc/333333.png" alt="Our image"></ImageLoader>
                    <p>
                        <a href="/about"><span style="margin-bottom: 5px; padding-bottom: 15px;">Learn more</span> <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900; margin: 0; padding: 0;"  slot="trailingIcon">east</Icon></span></a>
                    </p>
                </Content>
            </Panel>
            <Panel bind:open={panel4Open}>
                <Header>
                    <span class="font-f">Large business</span>
                    <!-- <span slot="description">Description of panel 4.</span> -->
                    <IconButton slot="icon" toggle pressed={panel4Open}>
                        <Icon class="material-icons" on>expand_less</Icon>
                        <Icon class="material-icons">expand_more</Icon>
                    </IconButton>
                </Header>
                <Content>
                    <p>Build custom solutions and deliver great customer experiences wih advanced reporting and more.</p>
                    <ImageLoader src="https://dummyimage.com/620x220/ccc/333333.png" alt="Our image"></ImageLoader>
                    <p>
                        <a href="/about"><span style="margin-bottom: 5px; padding-bottom: 15px;">Learn more</span> <span style="size: 8px;"><Icon class="material-icons" style="font-size: 20px; font-weight: 900; margin: 0; padding: 0;"  slot="trailingIcon">east</Icon></span></a>
                    </p>

                </Content>
            </Panel>
        </Accordion>
    </div>
</section>
<style>
    .container {
        width: 280px;

        height: 10px;
    }
    .img-container img {
        max-width: 100%;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding-top: 1em;
        padding-bottom: 10px;
        max-width: 800px;
        margin: var(--column-margin-top) auto 0 auto;
    }
    .accordion-container {
        width: 100%;

    }
    .font-f {
        font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
        color: var(--accent-color);
        font-weight: 900;
        font-size: 20px;
    }

</style>