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
   *   selectedId?: any,
   *   caption?: string,
   *   scroll?: 'nearest' | 'start' | 'center' | 'end' | '',
   *   select?: boolean
   * }}
   */
  let {
    columns,
    rows,
    selectedRow = $bindable(null),
    selectedId = $bindable(null),
    caption = "",
    scroll = "",
    select = true,
  } = $props();

  $effect(() => {
    if (scroll && (selectedRow || selectedId)) {
      tick().then(() => {
        const el = document.querySelector("tr.selected");
        el?.scrollIntoView({ block: scroll });
      });
    }
  });
</script>

<table style="height: 100%">
  {#if caption}
    <caption> {caption} </caption>
  {/if}
  <thead>
    <tr>
      {#each columns as column}
        <th
          scope="col"
          style:width={column.width}
          style:min-width={column.minWidth}>{column.title}</th
        >
      {/each}
    </tr>
  </thead>
  <tbody style="height: 100%">
    {#each rows as row}
      <tr
        onclick={() => {
          if (!select) return;
          selectedRow = row;
          selectedId = row.id;
        }}
        class:selected={selectedRow?.id === row.id || selectedId == row.id}
      >
        {#each columns as column}
          <td
            style:width={column.width}
            style:text-align={column.align}
            style:min-width={column.minWidth}>{row[column.name]}</td
          >
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
