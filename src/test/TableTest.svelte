<script>
  import DtGrid from "../lib/DtGrid.svelte";
  import DtTable from "../lib/DtTable.svelte";
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
      width: "70%",
      align: "start",
      minWidth: "200px",
    },
    {
      id: 3,
      title: "Age",
      name: "age",
      width: "30%",
    },
  ];

  let rows = [
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
  ];
  let selectedRow = $state(1);

  // $inspect(selectedRow);
</script>

<div class="table">
  <DtTable
    {columns}
    {rows}
    caption="Long Long Table Caption with Text text text"
    bind:selectedRow
    returnId={true}
    select={true}
  />
  <DtGrid
    {columns}
    {rows}
    caption="Long Long Table Caption with Text text text"
    bind:selectedRow
    returnId={true}
    select={true}
  />
</div>

<style>
  .table {
    height: 20%;
    display: flex;
    gap: 1rem;
  }
</style>
