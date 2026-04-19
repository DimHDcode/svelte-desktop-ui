<script>
  import DtColorPicker from "./lib/DtColorPicker.svelte";
  import DtListBox from "./lib/DtListBox.svelte";
  import ButtonsGroup from "./test/ButtonsGroup.svelte";
  import ButtonTest from "./test/ButtonTest.svelte";
  import DialogTest from "./test/DialogTest.svelte";
  import InputNumber from "./test/InputNumberTest.svelte";
  import ModalWindowTest from "./test/ModalWindowTest.svelte";
  import SelectTest from "./test/SelectTest.svelte";
  import TableTest from "./test/TableTest.svelte";

  let listItems = [
    {
      id: 1,
      item: "Button",
    },
    {
      id: 2,
      item: "Buttons Group",
    },
    {
      id: 3,
      item: "Table",
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
  ];
  let selectedItem = $state(listItems[0]);
  const components = {
    1: ButtonTest,
    2: ButtonsGroup,
    3: TableTest,
    4: SelectTest,
    5: DtColorPicker,
    6: InputNumber,
    7: DialogTest,
    8: ModalWindowTest,
  };
  let Component = $derived(components[selectedItem?.id]);
  $inspect(selectedItem);
</script>

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

    gap: 10px;
    padding: 10px;
    grid-template: components;
  }
  .component {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 10px;
    padding: 10px;
    grid-template: component;
  }
</style>
