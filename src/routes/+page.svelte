<script lang="ts">
    import FinchSvg from "../FinchSvg.svelte";
    import Checkbox from "../Checkbox.svelte";
    import ColourPicker from "../ColourPicker.svelte";
    import OpacityPicker from "../OpacityPicker.svelte";

    const svgId = "svg";
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
        id: svgId,
        size,
        useForegroundGradient, foreground1, foreground2, foreground3,
        useBackgroundGradient, background1, background2,
        useBorder, border, borderOpacity
    }

    function downloadSvg() {
        const url = getSvgBlobURL();
        download(url, "neonfinch.svg");
        URL.revokeObjectURL(url);
    }

    // downloading PNG from SVG isn't straightforward, need to:
    // 1. create an image using the SVG's blob data as the source
    // 2. draw the image to a canvas
    // 3. get a URL for a PNG from the canvas, which can be downloaded
    function downloadPng() {
        const url = getSvgBlobURL();

        const image = new Image;
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;

            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, size, size);

            const pngUrl = canvas.toDataURL("image/png");
            download(pngUrl, "neonfinch.png")
            URL.revokeObjectURL(url);

            canvas.remove();
            image.remove();
        }

        image.src = url;
    }

    function getSvgBlobURL(): string {
        const svg = document.getElementById("svg");
        const blob = new Blob([svg.outerHTML], {type: "image/svg+xml"}); // +xml is needed for PNG image source
        return URL.createObjectURL(blob);
    }

    // make a temporary <a> element to download a URL
    function download(url: string, name: string) {
        const a = document.createElement("a") as HTMLAnchorElement;
        a.download = name;
        a.href = url;
        a.click();
        a.remove();
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

<button on:click={downloadSvg}>
    Save SVG
</button>

<button on:click={downloadPng}>
    Save PNG
</button>

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
        gap: 6px;
    }

    legend {
        color: var(--lighter);
        font-variant: all-small-caps;
        font-weight: 700;
    }

</style>
