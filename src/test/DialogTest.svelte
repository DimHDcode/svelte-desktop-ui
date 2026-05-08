<script>
  import Button from "../lib/Button/Button.svelte";
  import DtDialog from "../lib/DtDialog.svelte";

  let value = $state(null);
  $inspect(value);
</script>

<Button command="show-modal" commandfor="dt-dialog">Open dialog</Button>
<DtDialog bind:value />
