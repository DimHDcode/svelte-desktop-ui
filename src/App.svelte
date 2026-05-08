<script>
  import ColorPicker from "./test/ColorPickerTest.svelte";
  import DtListBox from "./lib/DtListBox.svelte";
  import ButtonGroup from "./test/ButtonGroupTest.svelte";
  import ButtonTest from "./test/ButtonTest.svelte";
  import DialogTest from "./test/DialogTest.svelte";
  import InputNumber from "./test/InputNumberTest.svelte";
  import ModalWindowTest from "./test/ModalWindowTest.svelte";
  import SelectTest from "./test/SelectTest.svelte";
  import GridTest from "./test/GridTest.svelte";
  import SwitchTest from "./test/SwitchTest.svelte";
  import ToggleButtonTest from "./test/ToggleButtonTest.svelte";
  import MenuTest from "./test/MenuTest.svelte";
  import ListBoxTest from "./test/ListBoxTest.svelte";
  import Menu from "@lucide/svelte/icons/menu";
  import TagTest from "./test/TagTest.svelte";
  import DrawerTest from "./test/DrawerTest.svelte";
  import CardTEst from "./test/CardTest.svelte";

  let listItems = $state([
    {
      id: 1,
      item: "Button",
    },
    {
      id: 2,
      item: "Button Group",
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
    {
      id: 12,
      item: "ListBox",
    },
    {
      id: 13,
      item: "Tag",
    },

    {
      id: 14,
      item: "Drawer",
    },
    {
      id: 15,
      item: "Card",
    },
  ]);
  let selectedItem = $state(listItems[0]);
  const components = {
    1: ButtonTest,
    2: ButtonGroup,
    3: GridTest,
    4: SelectTest,
    5: ColorPicker,
    6: InputNumber,
    7: DialogTest,
    8: ModalWindowTest,
    9: SwitchTest,
    10: ToggleButtonTest,
    11: MenuTest,
    12: ListBoxTest,
    13: TagTest,
    14: DrawerTest,
    15: CardTEst,
  };
  let Component = $derived(components[selectedItem.id]);
</script>

<div class="header">
  <div class="lib-name">Svelte Desktop UI</div>
</div>
<div class="wrapper">
  <div class="grid-root">
    <div class="components">
      <DtListBox items={listItems} bind:selectedItem />
    </div>
    <div class="component">
      {#if Component}
        <Component />
      {/if}
    </div>
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .grid-root {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "components" "component";
    width: 100%;
    height: 100%;
  }
  .components {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;

    grid-template: components;
  }
  .component {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 50%;
    overflow: hidden;
    gap: 10px;
    padding-left: 10px;
    grid-template: component;
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px 0 15px;
  }
  .lib-name {
    font-size: 30px;
    font-weight: 600;
  }
</style>
