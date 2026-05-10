<script>
  let { items = [], selectedItem = $bindable(), size, fill = false } = $props();
</script>

<ul
  class="bp6-menu"
  style="border: 1px solid #5a5c63;"
  class:bp6-small={size === "small"}
  class:bp6-large={size === "large"}
  style:width={fill ? "100%" : ""}
>
  {#each items as item}
    <li>
      <div
        tabindex="0"
        class="bp6-menu-item bp6-popover-dismiss bp6-menu-item-is-selectable"
        class:bp6-selected={selectedItem === item.value}
        class:bp6-active={selectedItem === item.value}
        onclick={() => (selectedItem = item.value)}
      >
        {#if selectedItem === item.value}
          <span class="bp6-icon bp6-icon-small-tick bp6-menu-item-selected-icon"
            ><svg
              data-icon="small-tick"
              height="16"
              role="img"
              viewBox="0 0 16 16"
              width="16"
              ><path
                d="M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5"
                fill-rule="evenodd"
              ></path></svg
            ></span
          >
        {/if}
        <div class="bp6-text-overflow-ellipsis bp6-fill">
          {item.label}
        </div>
        {#if item.subLabel}
          <span class="bp6-menu-item-label">{item.subLabel}</span>
        {/if}
      </div>
    </li>

    {#if item.divider}
      <li class="bp6-menu-divider"></li>
    {/if}
  {/each}
</ul>
