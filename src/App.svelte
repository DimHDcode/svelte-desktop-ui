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
  import TagTest from "./test/TagTest.svelte";
  import DrawerTest from "./test/DrawerTest.svelte";
  import CardTEst from "./test/CardTest.svelte";
  import CalloutTest from "./test/CalloutTest.svelte";
  import NonIdealStateTest from "./test/NonIdealStateTest.svelte";
  import CompoundTagTest from "./test/CompoundTagTest.svelte";
  import SegmentedControlTest from "./test/SegmentedControlTest.svelte";
  import ListBox from "./lib/ListBox/ListBox.svelte";
  import PopoverTest from "./test/PopoverTest.svelte";

  let listItems = $state([
    {
      value: 1,
      label: "Button",
    },
    {
      value: 2,
      label: "Button Group",
    },
    {
      value: 3,
      label: "Data Grid",
    },
    {
      value: 4,
      label: "Select",
    },
    {
      value: 5,
      label: "Color Picker",
    },
    {
      value: 6,
      label: "Input Number",
    },
    {
      value: 7,
      label: "Dialog",
    },
    {
      value: 8,
      label: "Modal Window",
    },
    {
      value: 9,
      label: "Switch",
    },
    {
      value: 10,
      label: "Toggle Button",
    },
    {
      value: 11,
      label: "Menu",
    },
    {
      value: 12,
      label: "ListBox",
    },
    {
      value: 13,
      label: "Tag",
    },

    {
      value: 14,
      label: "Drawer",
    },
    {
      value: 15,
      label: "Card",
    },
    {
      value: 16,
      label: "Callout",
    },
    {
      value: 17,
      label: "Non-ideal state",
    },
    {
      value: 18,
      label: "Compound Tag",
    },
    {
      value: 19,
      label: "Segmented control",
    },
    {
      value: 20,
      label: "Popover",
    },
  ]);
  let selectedItem = $state(listItems[0].value);
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
    16: CalloutTest,
    17: NonIdealStateTest,
    18: CompoundTagTest,
    19: SegmentedControlTest,
    20: PopoverTest,
  };
  let Component = $derived(components[selectedItem]);
</script>

<div class="header">
  <div class="lib-name">Svelte Desktop UI</div>
</div>
<div class="wrapper">
  <div class="grid-root">
    <div class="components">
      <ListBox items={listItems} bind:selectedItem fill size="small" />
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
    height: 75%;
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
