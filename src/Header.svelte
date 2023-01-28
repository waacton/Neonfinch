<div class="header">
    <div class="header-decoration"></div>
    <div class="title">
        <h1>neonfinch</h1>
    </div>
    <div class="header-decoration"></div>
</div>

<style>
    .header {
        height: 48px;
        display: flex;
    }

    .header > div {
        flex: 1;
    }

    .header-decoration {
        background: var(--darker);
    }

    @media (max-width: 640px)
    {
        .header-decoration {
            display: none;
        }
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
        background: linear-gradient(45deg, magenta, yellow, cyan);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        /* sweet neon blur */
        text-shadow: -4px 4px 20px magenta, 0px 0px 20px yellow, 4px -4px 20px cyan
    }
</style>