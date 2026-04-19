<script>
  let { value = $bindable("#ffffff") } = $props();
</script>

<div style="width: 35px">
  <input type="color" bind:value />
</div>
