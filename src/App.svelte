<script>
  import ColorPicker from "./test/ColorPickerTest.svelte";
  import DtListBox from "./lib/DtListBox.svelte";
  import DtSelect from "./lib/DtSelect.svelte";
  import ButtonsGroup from "./test/ButtonsGroup.svelte";
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

  let listItems = $state([
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
  ]);
  let selectedItem = $state(listItems[0]);
  const components = {
    1: ButtonTest,
    2: ButtonsGroup,
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
  };
  let Component = $derived(components[selectedItem.id]);
  // $inspect(selectedItem);
  const themeOptions = [
    {
      id: 1,
      option: "Blue",
      css: "pico.blue.min.css",
    },
    {
      id: 2,
      option: "Amber",
      css: "pico.amber.min.css",
    },
    {
      id: 3,
      option: "Cyan",
      css: "pico.cyan.min.css",
    },
    {
      id: 4,
      option: "Fuchsia",
      css: "pico.fuchsia.min.css",
    },
    {
      id: 5,
      option: "Green",
      css: "pico.green.min.css",
    },
    {
      id: 6,
      option: "Grey",
      css: "pico.grey.min.css",
    },
    {
      id: 7,
      option: "Indigo",
      css: "pico.indigo.min.css",
    },
    {
      id: 8,
      option: "Jade",
      css: "pico.jade.min.css",
    },
    {
      id: 9,
      option: "Lime",
      css: "pico.lime.min.css",
    },
    {
      id: 10,
      option: "Orange",
      css: "pico.orange.min.css",
    },
    {
      id: 11,
      option: "Pink",
      css: "pico.pink.min.css",
    },
    {
      id: 12,
      option: "Pumpkin",
      css: "pico.pumpkin.min.css",
    },
    {
      id: 13,
      option: "Purple",
      css: "pico.purple.min.css",
    },
    {
      id: 14,
      option: "Red",
      css: "pico.red.min.css",
    },
    {
      id: 14,
      option: "Sand",
      css: "pico.sand.min.css",
    },
    {
      id: 15,
      option: "Slate",
      css: "pico.slate.min.css",
    },
    {
      id: 16,
      option: "Violet",
      css: "pico.violet.min.css",
    },
    {
      id: 17,
      option: "Yellow",
      css: "pico.yellow.min.css",
    },
    {
      id: 18,
      option: "Zinc",
      css: "pico.zinc.min.css",
    },
  ];

  let selectedTheme = $state(themeOptions[0]);

  $effect(() => {
    const link = document.querySelector("link[data-theme]");
    if (link) link.href = `/svelte-desktop-ui/${selectedTheme.css}`;
  });
</script>

<div class="header">
  <div class="lib-name">Svelte Desktop UI</div>
  <DtSelect
    bind:value={selectedTheme}
    options={themeOptions}
    width="300px"
    label="Theme"
    labelPosition="left"
  />
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
    height: 100%;
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
