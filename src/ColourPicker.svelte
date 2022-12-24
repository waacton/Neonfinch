<script lang="ts">
    export let label: string;
    export let value: string;
    export let disabled: boolean;
</script>

<label class="{disabled ? 'disabled' : ''}">
    <!--suppress HtmlWrongAttributeValue -->
    <input type="color" bind:value={value} disabled={disabled}/>
    {label} {value}
</label>

<style>
    input {
        background: var(--light);
        width: 2.5rem;
        height: 2.5rem;
        border: none;
    }

    label {
        display: block;
    }

    .disabled {
        opacity: 0.125;
    }
</style>