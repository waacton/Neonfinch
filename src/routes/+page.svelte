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

<FinchSvg {...svgProps} />

<fieldset>
    <legend>Foreground</legend>
    <label>
        <input type="checkbox" bind:checked={useForegroundGradient}/>
        Gradient
    </label>
    <ColourPicker label="Colour 1" bind:value={foreground1}/>
    <ColourPicker label="Colour 2" bind:value={foreground2} disabled={!useForegroundGradient}/>
    <ColourPicker label="Colour 3" bind:value={foreground3} disabled={!useForegroundGradient}/>
</fieldset>

<fieldset>
    <legend>Background</legend>
    <label>
        <input type="checkbox" bind:checked={useBackgroundGradient}/>
        Background gradient
    </label>
    <ColourPicker label="Colour 1" bind:value={background1}/>
    <ColourPicker label="Colour 2" bind:value={background2} disabled={!useBackgroundGradient}/>
</fieldset>

<fieldset>
    <legend>Border</legend>
    <label>
        <input type="checkbox" bind:checked={useBorder}/>
        Border
    </label>

    <OpacityPicker label="Opacity" bind:value={borderOpacity} disabled={!useBorder} />
    <ColourPicker label="Colour" bind:value={border} disabled={!useBorder}/>
</fieldset>


