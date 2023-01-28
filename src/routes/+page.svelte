<script lang="ts">
    import FinchSvg from "../FinchSvg.svelte";
    import Checkbox from "../Checkbox.svelte";
    import ColourPicker from "../ColourPicker.svelte";
    import OpacityPicker from "../OpacityPicker.svelte";
    import {downloadJpg, downloadPng, downloadSvg, downloadWebp, IMAGE_SIZE, SVG_ID} from "../download";

    let useForegroundGradient = false;
    let foreground1 = "#ff283c";
    let foreground2 = "#ff283c";
    let foreground3 = "#ff283c";
    let useBackgroundGradient = false;
    let background1 = "#0f1c30";
    let background2 = "#0f1c30";
    let useBorder = false;
    let border = "#ff283c";
    let borderOpacity = 0.5;

    // $: is reactive declaration, effectively updating this props object when something changes
    $: svgProps = {
        id: SVG_ID,
        targetWidth: IMAGE_SIZE,
        useForegroundGradient, foreground1, foreground2, foreground3,
        useBackgroundGradient, background1, background2,
        useBorder, border, borderOpacity
    }
</script>

<div class="main">
    <FinchSvg {...svgProps}/>

    <div class="fieldsets">
        <fieldset>
            <legend>Foreground</legend>
            <div class="fields">
                <Checkbox label="Gradient" bind:checked={useForegroundGradient} />
                <ColourPicker bind:value={foreground1}/>
                <ColourPicker bind:value={foreground2} disabled={!useForegroundGradient}/>
                <ColourPicker bind:value={foreground3} disabled={!useForegroundGradient}/>
            </div>
        </fieldset>

        <fieldset>
            <legend>Background</legend>
            <div class="fields">
                <Checkbox label="Gradient" bind:checked={useBackgroundGradient} />
                <ColourPicker bind:value={background1}/>
                <ColourPicker bind:value={background2} disabled={!useBackgroundGradient}/>
            </div>
        </fieldset>

        <fieldset>
            <legend>Border</legend>
            <div class="fields">
                <Checkbox label="Show" bind:checked={useBorder} />
                <OpacityPicker label="Opacity" bind:value={borderOpacity} disabled={!useBorder}/>
                <ColourPicker bind:value={border} disabled={!useBorder}/>
            </div>
        </fieldset>
    </div>
</div>

<fieldset style="display: flex; gap: 8px; margin-left: 32px; width: calc(512px + 32px + 32px)">
    <legend>Save</legend>
    <button on:click={downloadSvg}>SVG</button>
    <button on:click={downloadPng}>PNG</button>
    <button on:click={downloadJpg}>JPG</button>
    <button on:click={downloadWebp}>WebP</button>
</fieldset>

<style>
    .main {
        display: flex;
        flex-direction: row;
    }

    .fieldsets {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
    }

    fieldset {
        border-radius: 0.5rem;
        border: 2px solid;
        border-color: var(--lighter);
        min-width: 200px;
    }

    .fields {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    legend {
        color: var(--lighter);
        font-variant: all-small-caps;
        font-weight: 700;
    }
</style>
