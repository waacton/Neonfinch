<script lang="ts">
    export let size: string;

    export let useForegroundGradient: boolean;
    export let foreground1: string;
    export let foreground2: string;
    export let foreground3: string;

    export let useBackgroundGradient: boolean;
    export let background1: string;
    export let background2: string;

    export let useBorder: string;
    export let border: boolean;
    export let borderOpacity: boolean;
</script>

<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
        {#if useBorder}
            <path id="background-with-border" fill="url(#background-gradient)" stroke="{border}"
                  stroke-opacity="{borderOpacity}" stroke-width="11.5"
                  d="M20.317 5.68896H491.682C499.761 5.68896 506.311 12.2384 506.311 20.3175V491.683C506.311 499.762 499.761 506.311 491.682 506.311H20.317C12.2379 506.311 5.68848 499.762 5.68848 491.683V20.3175C5.68848 12.2384 12.2379 5.68896 20.317 5.68896Z"/>
        {:else}
            <path id="background-no-border" fill="url(#background-gradient)"
                  d="M491.683 0H20.3175C9.09645 0 0 9.09645 0 20.3175V491.683C0 502.903 9.09645 512 20.3175 512H491.683C502.903 512 512 502.903 512 491.683V20.3175C512 9.09645 502.903 0 491.683 0Z"/>
        {/if}
        <path id="foreground" stroke="url(#foreground-gradient)" stroke-width="11.5"
              d="M274.994 272.628C274.994 272.628 245.064 300.952 228.327 312.852C198.967 333.727 134.795 366.994 134.795 366.994C134.795 366.994 159.442 314.002 176.017 290.109C199.336 256.493 229.751 230.837 257.025 197.902C267.48 185.276 276.56 158.495 294.628 148.289C322.476 132.559 339.185 140.279 349.093 143.632C360.175 147.381 376.877 155.732 376.877 155.732C376.877 155.732 357.193 163.008 350.866 170.772C339.286 184.98 335.342 198.667 333.514 222.95C331.49 249.809 331.218 281.467 314.933 303.826C292.713 334.333 252.386 353.113 217.68 361.804"/>
    </g>
    <defs>
        <radialGradient id="background-gradient" cx="0" cy="0" r="0.69" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate({size / 2} {size / 2}) scale({size})" spreadMethod="reflect">
            <stop offset="0" stop-color="{background1}"/>
            <stop offset="1" stop-color="{useBackgroundGradient ? background2 : background1}"/>
        </radialGradient>
        <linearGradient id="foreground-gradient" x1="329.143" y1="158.476" x2="150.349" y2="349.46"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="{foreground1}"/>
            <stop offset="0.5" stop-color="{useForegroundGradient ? foreground2 : foreground1}"/>
            <stop offset="1" stop-color="{useForegroundGradient ? foreground3 : foreground1}"/>
        </linearGradient>
    </defs>
</svg>