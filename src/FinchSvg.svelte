<script lang="ts">
    export let id: string;
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

<!-- webstorm doesn't like this style assignment -->
<svg id="{id}" style:min-width="{size}" width="{size}" height="{size}" viewBox="0 0 {size} {size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
        {#if useBorder}
            <path id="background-with-border" fill="url(#background-gradient)" stroke="{border}"
                  stroke-opacity="{borderOpacity}" stroke-width="11.5"
                  d="M20.317 5.68896H491.682C499.761 5.68896 506.311 12.2384 506.311 20.3175V491.683C506.311 499.762 499.761 506.311 491.682 506.311H20.317C12.2379 506.311 5.68848 499.762 5.68848 491.683V20.3175C5.68848 12.2384 12.2379 5.68896 20.317 5.68896Z"/>
        {:else}
            <path id="background-no-border" fill="url(#background-gradient)"
                  d="M491.683 0H20.3175C9.09645 0 0 9.09645 0 20.3175V491.683C0 502.903 9.09645 512 20.3175 512H491.683C502.903 512 512 502.903 512 491.683V20.3175C512 9.09645 502.903 0 491.683 0Z"/>
        {/if}
        <path id="foreground" fill="url(#foreground-gradient)"
              d="M382.585 139.532C381.858 139.171 364.7 130.612 352.789 126.578L350.758 125.874C339.638 121.963 318.94 114.69 287.946 132.2C273.039 140.621 264.028 156.342 256.078 170.215C252.643 176.208 249.4 181.866 246.394 185.498C235.343 198.85 223.537 211.241 212.038 223.312C195.178 241.009 177.741 259.311 163.104 280.407C145.781 305.377 121.095 358.336 120.056 360.582L106 390.799L135.586 375.462C138.284 374.062 201.993 341 232.429 319.355C249.935 306.909 280.023 278.49 281.3 277.287L282.26 276.377L266.635 259.878L265.674 260.788C265.377 261.072 235.499 289.294 219.26 300.844C203.384 312.128 176.844 327.292 156.059 338.709C163.712 323.692 173.784 304.883 181.775 293.365C195.393 273.733 211.466 256.863 228.624 238.855C240.292 226.601 252.354 213.935 263.895 200.002C268.131 194.884 271.845 188.407 275.792 181.523C282.288 170.188 289.652 157.344 299.125 151.997C321.163 139.55 333.921 144.047 343.234 147.326L345.498 148.113C347.135 148.667 348.997 149.362 351.055 150.185C347.204 152.76 344.212 155.34 342.14 157.884C327.627 175.691 323.729 193.219 321.904 217.476C321.676 220.549 321.465 223.678 321.255 226.853C319.622 251.292 317.934 276.569 305.081 294.211C279.671 329.103 231.675 344.198 212.216 349.069L210.936 349.394L216.457 371.432L217.737 371.112C239.593 365.641 293.65 348.502 323.45 307.591C340.169 284.638 342.163 254.746 343.924 228.376C344.13 225.27 344.336 222.201 344.565 219.186C346.339 195.588 350.031 184.18 359.755 172.242C362.674 168.66 374.228 163.048 381.451 160.367L406 151.26L382.585 139.532Z"/>
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

<style>
    svg {
        background: white;
        border-radius: 20px;
        padding: 32px;
        margin: 32px;
        box-sizing: content-box; /* so that content takes up the width it wants to be */
        filter: drop-shadow(2px 2px 4px var(--darker))
    }
</style>