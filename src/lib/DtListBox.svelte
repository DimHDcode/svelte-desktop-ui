<!-- dtListBox.svelte -->
<script>
  let {
    items,
    width = "100%",
    selectedItem = $bindable(),
    onaction,
    onhover,
  } = $props();
  let prev = $state(selectedItem);
  let selectEl = $state();

  $effect(() => {
    selectedItem = prev;
  });
</script>

<svelte:window
  onclick={(e) => {
    if (selectEl && !selectEl.contains(e.target)) {
      onaction?.();
    }
  }}
/>

<select
  bind:this={selectEl}
  style:width
  size={items.length}
  bind:value={selectedItem}
>
  {#each items as item}
    <option
      value={item}
      onmouseenter={() => onhover?.(item)}
      onclick={(e) => {
        e.preventDefault();
        prev = item;
        onaction?.(item);
      }}
      ><div class="option-block">
        <item.icon size={16} />{item.item}
        {#if item.hotkey}
          <kbd class="dt-shortcut">{item.hotkey}</kbd>
        {/if}
      </div>
    </option>
  {/each}
</select>
