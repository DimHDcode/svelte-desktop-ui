<script>
  import Button from "../lib/Button/Button.svelte";
  import DataGrid from "../lib/DataGrid/DataGrid.svelte";
  import Trach2 from "@lucide/svelte/icons/trash-2";

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
  <Button
    type="secondary"
    icon={Trach2}
    iconSize={14}
    compact
    shadow
    onclick={(e) => console.log(row)}>{row.age}</Button
  >
{/snippet}

<div class="table">
  <DataGrid />
</div>

<style>
  .table {
    height: 70%;
    width: 100%;
  }
</style>
