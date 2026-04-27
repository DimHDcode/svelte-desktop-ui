<!-- dtListBox.svelte -->
<script>
  let {
    items,
    width = "100%",
    selectedItem = $bindable(),
    onclick,
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
      onclick?.();
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
      onmouseenter={() => {
        onhover?.(item);
      }}
      onclick={(e) => {
        e.preventDefault();
        prev = item;
        onclick?.(item);
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
