<script>
  let { label = "", disabled = false, value = $bindable(false) } = $props();
  $inspect(disabled);
</script>

<label class:disabled>
  <input type="checkbox" role="switch" {disabled} bind:checked={value} />
  {label}
</label>
