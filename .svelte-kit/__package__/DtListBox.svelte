<script>
  let { items, selectedItem = $bindable() } = $props();
</script>

<select size={items.length} bind:value={selectedItem}>
  {#each items as item}
    <option value={item}>{item.item}</option>
  {/each}
</select>
