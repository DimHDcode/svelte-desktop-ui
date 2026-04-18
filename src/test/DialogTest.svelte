<script>
  import DtButton from "../lib/DtButton.svelte";
  import DtDialog from "../lib/DtDialog.svelte";

  let value = $state(null);
  $inspect(value);
</script>

<DtButton command="show-modal" commandfor="dt-dialog">Open dialog</DtButton>
<DtDialog bind:value />
