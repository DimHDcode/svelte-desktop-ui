<script>
  import { tick } from "svelte";
  /**
   * @typedef {Object} Column
   * @property {number} id
   * @property {string} title
   * @property {string} name
   * @property {string} width
   * @property {string} align
   * @property {string} type
   * @property {string} [width]
   * @property {string} [minWidth]
   * @property {string} snippet
   */

  /**
   * @type {{
   *   columns: Column[],
   *   rows: Object[],
   *   selectedRow?: any,
   *   onSelect?: any,
   *   returnId?: boolean,
   *   caption?: string,
   *   scroll?: 'nearest' | 'start' | 'center' | 'end' | '',
   *   select?: boolean,
   *   rowHeight?: number,
   *   snippets?: Object{},
   * }}
   */
  let {
    columns,
    rows,
    selectedRow = $bindable(null),
    onSelect = null,
    returnId = false,
    caption = "",
    scroll = "",
    select = true,
    rowHeight = 32,
    snippets = {},
  } = $props();

  $effect(() => {
    if (scroll && selectedRow) {
      const el = document.querySelector(".dt-body-row.selected");
      el?.scrollIntoView({ block: scroll });
    }
  });
  let editingCell = $state(null); // { rowId, colName }
  $effect(() => {
    if (!editingCell) return;

    function handleClick() {
      editingCell = null;
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });
  $effect(() => {
    if (editingCell) {
      tick().then(() => {
        document.querySelector(".editing input")?.focus();
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
        style:width={column.width ? column.width : "100%"}
        style:justify-content={column.align}
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
        style:height="{rowHeight}px"
        onclick={() => {
          if (!select) return;
          if (returnId) {
            selectedRow = row.id;
          } else {
            selectedRow = row;
          }
          onSelect?.(selectedRow);
        }}
        class:selected={returnId
          ? selectedRow === row.id
          : selectedRow?.id === row.id}
      >
        {#each columns as column}
          <div
            class="dt-body-cell"
            style:width={column.width ? column.width : "100%"}
            style:justify-content={column.align}
            style:min-width={column.minWidth}
            onclick={column.snippet ? (e) => e.stopPropagation() : null}
            ondblclick={column.type
              ? () => (editingCell = { rowId: row.id, colName: column.name })
              : null}
          >
            {#if column.type}
              {#if editingCell?.rowId === row.id && editingCell?.colName === column.name}
                <input
                  type={column.type}
                  bind:value={row[column.name]}
                  onclick={(e) => e.stopPropagation()}
                  onkeydown={(e) => e.key === "Enter" && (editingCell = null)}
                />
              {:else}
                <span>
                  {row[column.name]}
                </span>
              {/if}
            {:else}
              {row[column.name]}
            {/if}
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
  }
  .dt-body-row.selected {
    background-color: var(--pico-primary-background);
  }
  .dt-body-row:not(.selected) {
    cursor: pointer;
  }
  .dt-body-row:not(.selected):hover {
    background-color: var(--pico-form-element-background-color);
  }
</style>
