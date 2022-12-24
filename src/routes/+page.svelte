<script>
    import FinchSvg from "../FinchSvg.svelte";
    import ColourPicker from "../ColourPicker.svelte";
    import OpacityPicker from "../OpacityPicker.svelte";

    const size = 512;
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
        size,
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
                <label>
                    <input type="checkbox" bind:checked={useForegroundGradient}/>
                    Gradient
                </label>
                <ColourPicker label="Colour 1" bind:value={foreground1}/>
                <ColourPicker label="Colour 2" bind:value={foreground2} disabled={!useForegroundGradient}/>
                <ColourPicker label="Colour 3" bind:value={foreground3} disabled={!useForegroundGradient}/>
            </div>
        </fieldset>

        <fieldset>
            <legend>Background</legend>
            <div class="fields">
                <label>
                    <input type="checkbox" bind:checked={useBackgroundGradient}/>
                    Gradient
                </label>
                <ColourPicker label="Colour 1" bind:value={background1}/>
                <ColourPicker label="Colour 2" bind:value={background2} disabled={!useBackgroundGradient}/>
            </div>
        </fieldset>

        <fieldset>
            <legend>Border</legend>
            <div class="fields">
                <label>
                    <input type="checkbox" bind:checked={useBorder}/>
                    Show
                </label>

                <OpacityPicker label="Opacity" bind:value={borderOpacity} disabled={!useBorder}/>
                <ColourPicker label="Colour" bind:value={border} disabled={!useBorder}/>
            </div>
        </fieldset>
    </div>
</div>

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
        gap: 2px;
    }

    legend {
        color: var(--lighter)
    }

</style>
