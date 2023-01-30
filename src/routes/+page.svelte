<!--suppress CssUnresolvedCustomProperty -->
<script lang="ts">
    import Header from "../Header.svelte";
    import FinchSvg from "../FinchSvg.svelte";
    import Checkbox from "../Checkbox.svelte";
    import ColourPicker from "../ColourPicker.svelte";
    import OpacityPicker from "../OpacityPicker.svelte";
    import {downloadJpg, downloadPng, downloadSvg, downloadWebp, IMAGE_SIZE, SVG_ID} from "../download";

    let useForegroundGradient = true;
    let foreground1 = "#00ffff";
    let foreground2 = "#ffff00";
    let foreground3 = "#ff00ff";
    let useBackgroundGradient = false;
    let background1 = "#252e37";
    let background2 = "#202932";
    let useBorder = false;
    let border = "#000000";
    let borderOpacity = 0.5;

    // $: is reactive declaration, effectively updating this props object when something changes
    $: svgProps = {
        id: SVG_ID,
        targetWidth: IMAGE_SIZE,
        useForegroundGradient, foreground1, foreground2, foreground3,
        useBackgroundGradient, background1, background2,
        useBorder, border, borderOpacity
    }

    $: headerProps = {
        colourRight: foreground1,
        colourMiddle: useForegroundGradient ? foreground2 : foreground1,
        colourLeft: useForegroundGradient ? foreground3 : foreground1,
    }
</script>

<Header {...headerProps} />

<!-- webstorm doesn't like this style assignment, but handy for using variables -->
<div class="max-width-wrapper" style:--max-width="{IMAGE_SIZE * 2}px">
    <div class="main">
        <div class="svg-wrapper">
            <FinchSvg class="test" {...svgProps} />
        </div>

        <div class="options">
            <fieldset>
                <legend>Foreground</legend>
                    <Checkbox label="Gradient" bind:checked={useForegroundGradient} />
                    <ColourPicker bind:value={foreground1}/>
                    <ColourPicker bind:value={foreground2} disabled={!useForegroundGradient} />
                    <ColourPicker bind:value={foreground3} disabled={!useForegroundGradient} />
            </fieldset>

            <fieldset>
                <legend>Background</legend>
                    <Checkbox label="Gradient" bind:checked={useBackgroundGradient} />
                    <ColourPicker bind:value={background1} />
                    <ColourPicker bind:value={background2} disabled={!useBackgroundGradient} />
            </fieldset>

            <fieldset>
                <legend>Border</legend>
                    <Checkbox label="Show" bind:checked={useBorder} />
                    <OpacityPicker label="Opacity" bind:value={borderOpacity} disabled={!useBorder} />
                    <ColourPicker bind:value={border} disabled={!useBorder} />
            </fieldset>

            <fieldset class="button-row">
                <legend>Save</legend>
                <button on:click={downloadSvg}>SVG</button>
                <button on:click={downloadPng}>PNG</button>
                <button on:click={downloadJpg}>JPG</button>
                <button on:click={downloadWebp}>WebP</button>
            </fieldset>
        </div>
    </div>
</div>

<style>
    .max-width-wrapper {
        max-width: var(--max-width);
        margin-left: auto;
        margin-right: auto;
        padding: 16px 32px;
    }

    .main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 32px;
    }

    .svg-wrapper {
        border-radius: 20px;
        box-shadow:
                2px 2px 4px var(--shadow1),
                -2px -2px 4px var(--shadow2);
    }

    .options {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 16px;
    }

    fieldset {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: var(--darker);
        border-radius: 0.5rem;
        border: 2px solid;
        border-color: var(--light);
        width: 100%;
    }

    .button-row {
        flex-direction: row;
    }

    legend {
        color: var(--light);
        font-variant: all-small-caps;
        font-weight: 700;
    }

    /* forces options to take up 100% width at this size, moving beneath the image */
    @media (max-width: 936px)
    {
        .options {
            min-width: 100%;
        }

        .main {
            gap: 16px;
        }
    }

    @media (pointer: coarse) {
        .svg-wrapper {
            position: sticky;
            top: 16px;
            z-index: 1;
        }
    }
</style>
