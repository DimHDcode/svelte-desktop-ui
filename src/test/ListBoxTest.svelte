<script>
  import DtListBox from "../lib/DtListBox.svelte";
  import Menu from "@lucide/svelte/icons/menu";

  let listItems = [
    {
      id: 1,
      item: "Button",
      icon: Menu,
      hotkey: "CTRL A",
    },
    {
      id: 2,
      item: "Buttons Group",
    },
    {
      id: 3,
      item: "Data Grid",
    },
    {
      id: 4,
      item: "Select",
    },
    {
      id: 5,
      item: "Color Picker",
    },
    {
      id: 6,
      item: "Input Number",
    },
    {
      id: 7,
      item: "Dialog",
    },
    {
      id: 8,
      item: "Modal Window",
    },
    {
      id: 9,
      item: "Switch",
    },
    {
      id: 10,
      item: "Toggle Button",
    },
    {
      id: 11,
      item: "Menu",
    },
  ];
  let selectedItem = $state(listItems[0]);
</script>

<DtListBox items={listItems} width="200px" bind:selectedItem />
