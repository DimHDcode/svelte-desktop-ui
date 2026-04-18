<script>
  import DtColorPicker from "../lib/DtColorPicker.svelte";
  let value = $state("#ffffff");
</script>

<DtColorPicker bind:value />
