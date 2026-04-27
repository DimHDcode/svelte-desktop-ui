<script>
  let {
    open = $bindable(false),
    items = [],
    value = $bindable(),
    width = "200px",
  } = $props();
  let path = $state([]);

  let wrapperEl = $state();
</script>

<svelte:window
  onclick={(e) => {
    if (wrapperEl && !wrapperEl.contains(e.target)) {
      open = false;
      path = [];
    }
  }}
/>
{#snippet iconSub()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-chevron-right-icon lucide-chevron-right"
    ><path d="m9 18 6-6-6-6" /></svg
  >
{/snippet}

{#if open}
  <div class="dt-menu-wrapper" bind:this={wrapperEl}>
    <select size={items.length}>
      {#each items as item}
        <option
          style:width
          value={item}
          onmouseenter={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const wrapperRect = wrapperEl.getBoundingClientRect();
            const top = rect.top - wrapperRect.top;
            const left = rect.right - wrapperRect.left;
            path = item.children ? [{ item, top, left }] : [];
          }}
          onclick={(e) => {
            e.preventDefault();
            if (!item.children) {
              value = item;
              open = false;
              path = [];
            }
          }}
        >
          <div class="option-block">
            {#if item.icon}<item.icon size={16} />{/if}
            {item.item}
            {#if item.hotkey}<kbd class="dt-shortcut">{item.hotkey}</kbd>{/if}
            {#if item.children}
              {@render iconSub()}
            {/if}
          </div>
        </option>
      {/each}
    </select>

    {#each path as level, i}
      {#if level.item.children}
        <select
          size={level.item.children.length}
          class="dt-submenu"
          style:left="{level.left + 10}px"
          style:top="{level.top - 5}px"
        >
          {#each level.item.children as child}
            <option
              style:width
              value={child}
              onmouseenter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const wrapperRect = wrapperEl.getBoundingClientRect();
                const top = rect.top - wrapperRect.top;
                const left = rect.right - wrapperRect.left;
                if (child.children) {
                  path = [...path.slice(0, i + 1), { item: child, top, left }];
                } else {
                  path = path.slice(0, i + 1);
                }
              }}
              onclick={(e) => {
                e.preventDefault();
                if (!child.children) {
                  value = child;
                  open = false;
                  path = [];
                }
              }}
            >
              <div class="option-block">
                {#if child.icon}<child.icon size={16} />{/if}
                {child.item}
                {#if child.hotkey}<kbd class="dt-shortcut">{child.hotkey}</kbd
                  >{/if}
                {#if child.children}
                  {@render iconSub()}
                {/if}
              </div>
            </option>
          {/each}
        </select>
      {/if}
    {/each}
  </div>
{/if}
