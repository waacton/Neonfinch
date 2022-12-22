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
    .disabled {
        opacity: 0.5;
    }
</style>