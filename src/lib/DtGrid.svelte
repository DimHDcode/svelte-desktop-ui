<script>
  import { createRawSnippet, mount, onDestroy, onMount, unmount } from "svelte";
  import { TabulatorFull as Tabulator } from "tabulator-tables";
  import Button from "./Button.svelte";
  import Tag from "./Tag.svelte";
  import { table_nextPage } from "@tanstack/svelte-table/static-functions";

  // let tabledata = $state([
  //   { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "12/02/1976" },
  //   { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  //   {
  //     id: 3,
  //     name: "Christine Lobowski",
  //     age: "42",
  //     col: "green",
  //     dob: "22/05/1982",
  //   },
  //   {
  //     id: 4,
  //     name: "Brendon Philips",
  //     age: "125",
  //     col: "orange",
  //     dob: "01/08/1980",
  //   },
  //   {
  //     id: 5,
  //     name: "Margret Marmajuke",
  //     age: "16",
  //     col: "yellow",
  //     dob: "31/01/1999",
  //   },
  // ]);

  const names = [
    "Oli Bob",
    "Mary May",
    "Christine Lobowski",
    "Brendon Philips",
    "Margret Marmajuke",
    "Ибрагим",
    "Лиза Грачева",
    "Дядя Дима",
    "Ирина Зиновьевна",
    "Давид",
    "Ева",
  ];
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "purple",
    "cyan",
    "magenta",
  ];

  const generateData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      // Рандомим дату
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const year = Math.floor(Math.random() * (2010 - 1960 + 1)) + 1960;

      data.push({
        id: i,
        // Выбираем рандомное имя из списка
        name: names[Math.floor(Math.random() * names.length)],
        // Возраст строкой, как в твоем рефе
        age: String(Math.floor(Math.random() * 90) + 1),
        // Рандомный цвет
        col: colors[Math.floor(Math.random() * colors.length)],
        // Склеиваем дату
        dob: `${day}/${month}/${year}`,
      });
    }
    return data;
  };

  // Твой реактивный объект в Svelte 5
  let tabledata = $state(generateData(200));

  // $inspect(tabledata);
  let emptyEl = $state(null);
  let gridEl = $state(null);
  let table = $state();
  let tableBuilt = $state(false);
  let selectedRow = $state(tabledata[0].id);
  // $inspect(selectedRow);

  $effect(() => {
    if (!tableBuilt) return;
    table.selectRow(selectedRow);
    table.scrollToRow(selectedRow, "center", false);
  });

  let customNodes = [];

  onMount(() => {
    table = new Tabulator(gridEl, {
      data: $state.snapshot(tabledata),
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
      columns: [
        { formatter: "rownum", hozAlign: "center", width: 40 },
        { title: "Name", field: "name", width: 150 },
        {
          title: "Age",
          field: "age",
          hozAlign: "left",
          formatter: (cell, params, onRendered) => {
            let content = document.createElement("span");
            content.classList.add("tabulator-custom");

            const app = mount(Tag, {
              target: content,
              props: {
                children: createRawSnippet(() => ({
                  render: () => `<span>${cell.getValue()}</span>`,
                })),
              },
            });
            customNodes.push(app);
            cell.getElement().addEventListener("reclaimed", () => {
              unmount(app);
            });

            return content;
          },
        },
        {
          title: "Favourite Color",
          field: "col",
          formatter: (cell, params, onRendered) => {
            var content = document.createElement("span");
            content.classList.add("tabulator-custom");

            const app = mount(Button, {
              target: content,
              props: {
                text: cell.getValue(),
                size: "small",
                icon: "play",
                onclick: () => console.log(cell.getRow().getData()),
              },
            });
            customNodes.push(app);
            cell.getElement().addEventListener("reclaimed", () => {
              unmount(app);
            });

            return content;
          },
        },
        {
          title: "Date Of Birth",
          field: "dob",
          sorter: "date",
          hozAlign: "center",
        },
      ],
    });

    table.on("tableBuilt", () => {
      tableBuilt = true;
    });
    table.on("rowMoved", (d) => {
      tabledata = table.getData();
    });
    table.on("rowSelected", (row) => {
      selectedRow = row.getData().id;
    });
    table.on("rowDeselected", (row) => {});
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

<Button
  onclick={() => {
    table.deselectRow();
    selectedRow = 2;
  }}>Select 2</Button
>
