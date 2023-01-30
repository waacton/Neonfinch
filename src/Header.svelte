<!--suppress CssUnresolvedCustomProperty -->
<script lang="ts">
    export let colourLeft: string;
    export let colourMiddle: string;
    export let colourRight: string;

    interface Title {
        text: string;
        font: string;
    }

    const ENGLISH: Title = {
        text: "neonfinch",
        font: "'Roboto', sans-serif"
    }

    const KOREAN: Title = {
        text: "네온핀치",
        font: "'Noto Sans KR', sans-serif"
    }

    let title = ENGLISH;
    function updateTitle() {
        const isEnglish = title === ENGLISH;
        title = isEnglish ? KOREAN : ENGLISH;
    }

</script>

<div class="header" on:click={updateTitle}>
    <div class="section decoration"></div>
    <div class="section title"
         style:--colour-left="{colourLeft}" style:--colour-middle="{colourMiddle}" style:--colour-right="{colourRight}">
        <h1 style:--font-family="{title.font}">{title.text}</h1>
    </div>
    <div class="section decoration"></div>
</div>

<style>
    .header {
        height: 48px;
        display: flex;
        gap: 80px;
    }

    .section {
        flex: 1;
    }

    .decoration {
        background: var(--darker);
    }

    .header > :first-child {
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-color: var(--light);
        border-radius: 0 0 48px 0;
    }

    .header > :last-child {
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-color: var(--light);
        border-radius: 0 0 0 48px;
    }

    .title {
        min-width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-family: var(--font-family);
        font-size: 2.25rem;
        letter-spacing: 1.5rem;
        text-indent: 1.5rem; /* otherwise not centered after letter spacing applied */
        font-variant: all-small-caps;
        font-weight: 300;
        min-width: max-content;

        /* all for text-gradient */
        background:
                linear-gradient(45deg,
                var(--colour-left) 15%,
                var(--colour-middle) 50%,
                var(--colour-right) 85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        /* sweet neon blur */
        text-shadow:
                -4px 4px 20px var(--colour-left),
                0px 0px 20px var(--colour-middle),
                4px -4px 20px var(--colour-right)
    }

    @media (max-width: 640px) {
        .decoration {
            display: none;
        }
    }

    @media (max-width: 380px) {
        h1 {
            letter-spacing: 1rem;
            text-indent: 1rem;
        }
    }
</style>