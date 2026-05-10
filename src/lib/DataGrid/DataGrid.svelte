<script>
  import { onDestroy, onMount, unmount } from "svelte";
  import { TabulatorFull as Tabulator } from "tabulator-tables";

  let { tableData, columns = [], selectedRow = $bindable() } = $props();

  let emptyEl = $state(null);
  let gridEl = $state(null);
  /** @type {Tabulator | undefined} */
  let table;
  let tableBuilt = $state(false);

  // $inspect(selectedRow);
  // $inspect(tableData);
  let isInternalChange = false;

  /// ------------------- данные изменились снаружи -------------------
  $effect(() => {
    if (!tableBuilt) return;
    if (isInternalChange) {
      isInternalChange = false;
      return;
    }
    console.log("Tabulator change data");

    table?.replaceData($state.snapshot(tableData));
  });
  ///------------------- изменилось выделение строки снаружи --------------------------
  $effect(() => {
    if (!tableBuilt) return;
    if (!selectedRow) return;
    if (isInternalChange) {
      isInternalChange = false;
      return;
    }
    console.log("Tabulator change selectedRow");
    table.deselectRow();
    table.selectRow(selectedRow);
    table.scrollToRow(selectedRow, "center", false);
  });

  let customNodes = [];

  function moveItem(arr, fromIdx, toIdx) {
    const [item] = arr.splice(fromIdx, 1);
    arr.splice(toIdx, 0, item);
  }

  onMount(() => {
    table = new Tabulator(gridEl, {
      columns,
      editTriggerEvent: "dblclick",
      layout: "fitColumns",
      maxHeight: "100%",
      rowHeight: 30,
      placeholder: emptyEl,
      movableRows: true,
      selectableRows: 1,
      scrollToRowIfVisible: true,
      columnDefaults: {
        headerSort: false,
      },
      renderVertical: "virtual",
      height: "100%",
      selectableRowsCheck: (row) => {
        return row.isSelected() ? false : true;
      },
    });
    setTimeout(() => {
      const rows = table.getRows();
      rows[0].update({ age: 999 });
    }, 2000);

    table.on("tableBuilt", () => {
      tableBuilt = true;
    });
    table.on("rowMoved", (row) => {
      isInternalChange = true;
      const oldIdx = tableData.findIndex((r) => r.id === row.getData().id);
      moveItem(tableData, oldIdx, row.getPosition() - 1);
    });
    table.on("rowSelected", (row) => {
      isInternalChange = true;
      selectedRow = row.getData().id;
    });

    table.on("cellEdited", (cell) => {
      isInternalChange = true;

      const id = cell.getRow().getData().id;
      const row = tableData.find((r) => r.id === id);
      row[cell.getField()] = cell.getValue();
    });
  });
  onDestroy(() => {
    table.destroy();
    customNodes.forEach((app) => {
      if (app) unmount(app);
    });
  });
</script>

<div bind:this={emptyEl}>empty oooooooo</div>
<div bind:this={gridEl}></div>
