<script>
  import DtButtonsGroup from "../lib/DtButtonsGroup.svelte";

  let buttons = [
    {
      id: 1,
      button: "FIRST",
    },

    {
      id: 2,
      button: "SECOND",
    },
    {
      id: 3,
      button: "THIRD",
    },
  ];
  let selectedButton = $state(buttons[1]);
  $inspect(selectedButton);
</script>

<div class="root">
  <div class="row">
    <DtButtonsGroup
      {buttons}
      width="350px"
      type="primary"
      bind:value={selectedButton}
    />
  </div>
  <div class="row">
    <DtButtonsGroup
      {buttons}
      width="350px"
      type="secondary"
      bind:value={selectedButton}
    />
  </div>
  <div class="row">
    <DtButtonsGroup
      {buttons}
      width="350px"
      type="contrast"
      bind:value={selectedButton}
    />
  </div>
</div>

<style>
  .root {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    gap: 10px;
  }
  .row {
    display: flex;
  }
</style>
