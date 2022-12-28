<script lang="ts">
    export let label: string;
    export let checked: string;
</script>

<label class="input-container">
    <input type="checkbox" bind:checked={checked} />
    {label}
</label>