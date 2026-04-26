<script>
  import DtButton from "../lib/DtButton.svelte";
  import DtGrid from "../lib/DtGrid.svelte";

  const columns = [
    {
      id: 1,
      title: "ID",
      name: "id",
      width: "80px",
      align: "start",
    },
    {
      id: 2,
      title: "Name",
      name: "name",
      width: "100%",
      align: "start",
      minWidth: "200px",
      type: "text",
    },
    {
      id: 3,
      title: "Age",
      name: "age",
      width: "80зч",
      align: "center",
      snippet: "ageCell",
    },
  ];

  let rows = $state([
    {
      id: 1,
      name: "Ivan",
      age: 25,
    },
    {
      id: 2,
      name: "Petr",
      age: 30,
    },
    {
      id: 3,
      name: "Petr",
      age: 30,
    },
    {
      id: 4,
      name: "Petr",
      age: 30,
    },
    {
      id: 5,
      name: "Petr ооо оооппп ",
      age: 30,
    },
    {
      id: 6,
      name: "Petr",
      age: 30,
    },
    {
      id: 7,
      name: "Petr",
      age: 30,
    },
  ]);
  let selectedRow = $state(1);
</script>

{#snippet ageCell(row)}
  <DtButton type="secondary" onclick={(e) => console.log(row)}
    >{row.age}</DtButton
  >
{/snippet}

<div class="table">
  <DtGrid
    {columns}
    {rows}
    width="50%"
    rowHeight={100}
    snippets={{ ageCell }}
    caption="Long Long Table Caption with Text text text"
    bind:selectedRow
    returnId={true}
    select={true}
    scroll=""
  />
</div>

<style>
  .table {
    height: 20%;
    width: 100%;
  }
</style>
