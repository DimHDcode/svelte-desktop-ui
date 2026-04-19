<script>
  import { tick } from "svelte";
  /**
   * @typedef {Object} Column
   * @property {number} id
   * @property {string} title
   * @property {string} name
   * @property {string} width
   * @property {string} [width]
   * @property {string} [minWidth]
   */

  /**
   * @type {{
   *   columns: Column[],
   *   rows: Object[],
   *   selectedRow?: any,
   *   returnId?: boolean,
   *   caption?: string,
   *   scroll?: 'nearest' | 'start' | 'center' | 'end' | '',
   *   select?: boolean
   * }}
   */
  let {
    columns,
    rows,
    selectedRow = $bindable(null),
    returnId = false,
    caption = "",
    scroll = "",
    select = true,
  } = $props();

  $effect(() => {
    if (scroll && selectedRow) {
      tick().then(() => {
        const el = document.querySelector("tr.selected");
        el?.scrollIntoView({ block: scroll });
      });
    }
  });
</script>

<div class="dt-table">
  {#if caption}
    <div class="dt-caption">
      {caption}
    </div>
  {/if}
  <div class="dt-head">
    {#each columns as column}
      <div
        class="dt-head-cell"
        style:width={column.width}
        style:min-width={column.minWidth}
      >
        {column.title}
      </div>
    {/each}
  </div>
  <div class="dt-body">
    {#each rows as row}
      <div
        class="dt-body-row"
        onclick={() => {
          if (!select) return;
          if (returnId) {
            selectedRow = row.id;
          } else {
            selectedRow = row;
          }
        }}
        class:selected={returnId
          ? selectedRow === row.id
          : selectedRow?.id === row.id}
      >
        {#each columns as column}
          <div
            class="dt-body-cell"
            style:width={column.width}
            style:text-align={column.align}
            style:min-width={column.minWidth}
          >
            {row[column.name]}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .dt-table {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .dt-caption {
    display: block;
    text-align: start;
    font-size: calc(var(--pico-font-size) + 50%);
    padding: 5px 0 5px 5px;
    font-weight: 400;
  }
  .dt-head {
    width: 100%;
    display: flex;
    background-color: var(--pico-form-element-background-color);
  }
  .dt-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .dt-body-row {
    display: flex;
  }
  .dt-head-cell,
  .dt-body-cell {
    padding: calc(var(--pico-spacing) / 2) var(--pico-spacing);
    border-bottom: var(--pico-border-width) solid var(--pico-table-border-color);
    color: var(--pico-color);
    font-weight: var(--pico-font-weight);
  }
  .dt-body-row.selected {
    background-color: var(--pico-primary-background);
  }
  .dt-body-row:not(.selected):hover {
    background-color: var(--pico-form-element-background-color);
  }
</style>
