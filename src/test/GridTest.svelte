<script>
  import Button from "../lib/Button/Button.svelte";
  import DataGrid from "../lib/DataGrid/DataGrid.svelte";
  import { faker } from "@faker-js/faker";
  import Tag from "../lib/Tag/Tag.svelte";
  import { svelteCell } from "../lib/DataGrid/svelteFormatter";
  import * as v from "valibot";

  const TimecodeSchema = v.pipe(
    v.string(),
    v.transform((input) => input.replace(/\D/g, "").padStart(8, "0")),
    v.length(8),
    v.transform(
      (digits) =>
        `${digits.slice(0, 2)}:${digits.slice(2, 4)}:${digits.slice(4, 6)}:${digits.slice(6, 8)}`,
    ),
    v.regex(/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d:[0-2]\d$/),
  );

  function generateRow() {
    return {
      id: faker.string.uuid(),
      name: "00:00:00:00",
      age: faker.number.int({ min: 25, max: 90 }),
      color: faker.color.human(),
      date: faker.date.birthdate(),
    };
  }

  let tableData = $state(Array.from({ length: 100 }, generateRow));
  let columns = [
    {
      rowHandle: true,
      formatter: "handle",
      headerSort: false,
      frozen: true,
      width: 30,
      minWidth: 30,
    },
    { formatter: "rownum", hozAlign: "center", width: 40, resizable: false },
    { field: "id", visible: false },
    {
      title: "Name",
      field: "name",
      width: 150,
      resizable: false,
      editor: "input",
      editorParams: {
        selectContents: true,
      },
      validator: (cell, value) => v.safeParse(TimecodeSchema, value).success,
      mutatorEdit: (value) =>
        v.safeParse(TimecodeSchema, value).output ?? value,
    },
    {
      title: "Age",
      field: "age",
      hozAlign: "left",
      resizable: false,
      formatter: svelteCell(Tag, (cell) => ({
        label: cell.getValue(),
      })),
    },
    {
      title: "Favourite Color",
      field: "color",
      resizable: false,
      formatter: svelteCell(Button, (cell) => ({
        text: cell.getValue(),
        size: "small",
        icon: "play",
        onclick: () => console.log(cell.getRow().getData()),
      })),
    },
    {
      title: "Date Of Birth",
      field: "date",
      hozAlign: "center",
    },
  ];

  let selectedRow = $state(tableData[0].id);
  $inspect(tableData);
  // $inspect(selectedRow);
</script>

<div class="table">
  <DataGrid {columns} {tableData} bind:selectedRow />
</div>
<Button onclick={() => (selectedRow = tableData[1].id)}>Select 2 row</Button>

<style>
  .table {
    height: 70%;
    width: 100%;
  }
</style>
