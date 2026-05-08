<script>
  import Button from "../lib/Button/Button.svelte";
</script>

<div class="root">
  <div class="row">
    <Button>Click Me</Button>
    <Button intent="primary">Primary</Button>
    <Button intent="success">Success</Button>
    <Button intent="warning">Warning</Button>
    <Button intent="danger">Danger</Button>
  </div>
  <div class="row">
    <Button variant="minimal">Minimal</Button>
    <Button variant="outlined">Outlined</Button>
  </div>
  <div class="row">
    <Button size="small">Small</Button>
    <Button size="large">Large</Button>
  </div>
  <div class="row">
    <Button fill>Fill With Button</Button>
  </div>
  <div class="col">
    <div
      style="min-width: 300px; display: flex; flex-direction: column; gap: 10px"
    >
      <Button alignText="start" fill icon="align-left" endIcon="caret-down"
        >Start</Button
      >
      <Button alignText="center" fill icon="align-center" endIcon="caret-down"
        >Start</Button
      >
      <Button alignText="end" fill icon="align-right" endIcon="caret-down"
        >End</Button
      >
    </div>
  </div>
  <div class="row" style="max-width: 300px;">
    <Button ellipsizeText
      >This is a very long button label that will be truncated</Button
    >
  </div>
  <div class="row">
    <Button icon="refresh" intent="danger" text="Reset" />
    <Button icon="user" endIcon="caret-down" text="Profile settings" />
    <Button endIcon="arrow-right" intent="success" text="Next step" />
  </div>
  <div class="row">
    <Button icon="edit" />
    <Button icon="share" variant="outlined" />
    <Button icon="filter" intent="primary" variant="minimal" />
    <Button icon="add" size="small" intent="success" />
    <Button icon="trash" disabled={true} intent="danger" />
  </div>
  <div class="row">
    <Button>Default</Button>
    <Button active={true}>Active</Button>
    <Button disabled={true}>Disabled</Button>
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
    gap: 10px;
    align-items: center;
  }
  .col {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
</style>
