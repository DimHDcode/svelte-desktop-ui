<script>
  import DtInputNumber from "../lib/DtInputNumber.svelte";
  let value = $state(1);
</script>

<DtInputNumber
  placeholder="Placeholder"
  label="Enter the number between 0 and 10"
  bind:value
/>
