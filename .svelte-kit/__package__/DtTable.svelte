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
   *   selectedRow: any,
   *   caption: string,
   *   scroll: 'nearest' | 'start' | 'center' | 'end' | ''
   * }}
   */
  let {
    columns,
    rows,
    selectedRow = $bindable(null),
    caption = "",
    scroll = "",
  } = $props();

  $effect(() => {
    if (scroll) {
      tick().then(() => {
        const el = document.querySelector("tr.selected");
        el?.scrollIntoView({ block: scroll });
      });
    }
  });
</script>

<table>
  <caption> {caption} </caption>
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
  <tbody>
    {#each rows as row}
      <tr
        onclick={() => (selectedRow = row)}
        class:selected={selectedRow?.id === row.id}
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
