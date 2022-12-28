<script lang="ts">
    export let label: string;
    export let value: string;
    export let disabled: boolean;
</script>

<label class="{disabled ? 'disabled' : ''} input-container">
    <!--suppress HtmlWrongAttributeValue -->
    <input type="number" bind:value={value} disabled={disabled} min="0.1" max="1" step="0.1" />
    {label}
</label>

<style>
    .disabled {
        opacity: 0.125;
    }
</style>