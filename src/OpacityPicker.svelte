<script lang="ts">
    export let label: string;
    export let value: string;
    export let disabled: boolean;
</script>

<label class="{disabled ? 'disabled' : ''}">
    <!--suppress HtmlWrongAttributeValue -->
    <input type="number" bind:value={value} disabled={disabled} min="0" max="1" step="0.1" />
    {label}
</label>

<style>
    input {
        background: var(--light);
        border: none;
    }

    label {
        display: inherit;
    }

    .disabled {
        opacity: 0.125;
    }
</style>