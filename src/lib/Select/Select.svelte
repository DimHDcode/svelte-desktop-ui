<!-- Select.svelte -->
<script>
  import { Select } from "bits-ui";

  let {
    items = [],
    fill = false,
    value = $bindable(),
    matchTargetWidth = false,
    disabled = false,
    clearSelection = false,
    placeholder = "",
    small = false,
  } = $props();

  const selectedLabel = $derived(
    items.find((item) => item.value === value)?.label ?? placeholder,
  );
  let selectWidth = $state();
</script>

<Select.Root type="single" bind:value {items} {disabled}>
  <div bind:clientWidth={selectWidth}>
    <Select.Trigger
      class={`bp6-button bp6-align-left ${fill ? "bp6-fill" : ""} ${small ? "bp6-small" : ""}`}
    >
      <span class="bp6-icon bp6-icon-film"> </span>
      <span class="bp6-button-text">
        {selectedLabel}
      </span>
      {#if clearSelection}
        <span
          class="bp6-button bp6-minimal bp6-small"
          onpointerdown={(e) => {
            e.stopPropagation();
            value = null;
          }}
        >
          <span class="bp6-icon bp6-icon-cross"></span>
        </span>
      {/if}
      <span class="bp6-icon bp6-icon-caret-down"></span>
    </Select.Trigger>
  </div>

  <Select.Portal>
    <Select.Content
      sideOffset={14}
      align="start"
      class={`bp6-popover bp6-dark bp6-popover-placement-bottom ${small ? "bp6-small" : ""}`}
    >
      <div
        class="bp6-popover-arrow"
        data-popper-arrow="true"
        style="position: absolute; top: -11px; left: 10px;"
      >
        <svg viewBox="0 0 30 30" style="transform: rotate(90deg);"
          ><path
            class="bp6-popover-arrow-border"
            d="M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z"
          ></path><path
            class="bp6-popover-arrow-fill"
            d="M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z"
          ></path></svg
        >
      </div>
      <div style:width={matchTargetWidth ? selectWidth + "px" : ""}>
        <Select.Viewport class="bp6-menu">
          {#each items as item (item.value)}
            <Select.Item value={item.value} label={item.label}>
              {#snippet children({ selected })}
                <li>
                  <div
                    class="bp6-menu-item bp6-popover-dismiss bp6-menu-item-is-selectable"
                    class:bp6-selected={selected}
                    class:bp6-active={selected}
                  >
                    {#if selected}
                      <span
                        class="bp6-icon bp6-icon-small-tick bp6-menu-item-selected-icon"
                      ></span>
                    {/if}
                    <span class="bp6-text-overflow-ellipsis bp6-fill">
                      {item.label}
                    </span>
                    {#if item.subLabel}
                      <span class="bp6-menu-item-label">{item.subLabel}</span>
                    {/if}
                  </div>
                </li>
              {/snippet}
            </Select.Item>
          {/each}
        </Select.Viewport>
      </div>
    </Select.Content>
  </Select.Portal>
</Select.Root>
