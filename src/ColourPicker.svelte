<script lang="ts">
    export let value: string;
    export let disabled: boolean;
</script>

<label class="{disabled ? 'disabled' : ''} input-container">
    <!--suppress HtmlWrongAttributeValue -->
    <input type="color" bind:value={value} disabled={disabled}/>
    {value}
</label>

<style>
    .disabled {
        opacity: 0.125;
    }
</style>