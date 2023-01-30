<!--
    using svelte's layout concept to apply some global CSS
    (CSS reset and custom input styles)
    https://kit.svelte.dev/docs/routing#layout

    would be a good place to wrap content in the max-width-wrapper
-->

<script>
    import '../app.css'
</script>

<slot />