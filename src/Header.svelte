<!--suppress CssUnresolvedCustomProperty -->
<script lang="ts">
    export let colourLeft: string;
    export let colourMiddle: string;
    export let colourRight: string;
</script>

<div class="header">
    <div class="header-decoration"></div>
    <div class="title"
         style:--colour-left="{colourLeft}" style:--colour-middle="{colourMiddle}" style:--colour-right="{colourRight}">
        <h1>neonfinch</h1>
    </div>
    <div class="header-decoration"></div>
</div>

<style>
    .header {
        height: 48px;
        display: flex;
        gap: 80px;
    }

    .header > div {
        flex: 1;
    }

    .header-decoration {
        background: var(--darker);
    }

    .header > :first-child {
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-color: var(--lighter);
        border-radius: 0 0 48px 0;
    }

    .header > :last-child {
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-color: var(--lighter);
        border-radius: 0 0 0 48px;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 2rem;
        letter-spacing: 1.5rem;
        text-indent: 1.5rem; /* otherwise not centered after letter spacing applied */
        font-variant: all-small-caps;
        font-weight: 300;

        /* all for text-gradient */
        background: linear-gradient(45deg, var(--colour-left) 15%, var(--colour-middle) 50%, var(--colour-right) 85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        /* sweet neon blur */
        text-shadow: -4px 4px 20px var(--colour-left), 0px 0px 20px var(--colour-middle), 4px -4px 20px var(--colour-right)
    }

    @media (max-width: 640px) {
        .header-decoration {
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