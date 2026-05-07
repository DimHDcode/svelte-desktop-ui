<script>
  import DtButton from "../lib/Button.svelte";
</script>

<div class="root">
  <div class="row">
    <DtButton>Click Me</DtButton>
    <DtButton intent="primary">Primary</DtButton>
    <DtButton intent="success">Success</DtButton>
    <DtButton intent="warning">Warning</DtButton>
    <DtButton intent="danger">Danger</DtButton>
  </div>
  <div class="row">
    <DtButton variant="minimal">Minimal</DtButton>
    <DtButton variant="outlined">Outlined</DtButton>
  </div>
  <div class="row">
    <DtButton size="small">Small</DtButton>
    <DtButton size="large">Large</DtButton>
  </div>
  <div class="row">
    <DtButton fill>Fill With Button</DtButton>
  </div>
  <div class="col">
    <div
      style="min-width: 300px; display: flex; flex-direction: column; gap: 10px"
    >
      <DtButton alignText="start" fill icon="align-left" endIcon="caret-down"
        >Start</DtButton
      >
      <DtButton alignText="center" fill icon="align-center" endIcon="caret-down"
        >Start</DtButton
      >
      <DtButton alignText="end" fill icon="align-right" endIcon="caret-down"
        >End</DtButton
      >
    </div>
  </div>
  <div class="row" style="max-width: 300px;">
    <DtButton ellipsizeText
      >This is a very long button label that will be truncated</DtButton
    >
  </div>
  <div class="row">
    <DtButton icon="refresh" intent="danger" text="Reset" />
    <DtButton icon="user" endIcon="caret-down" text="Profile settings" />
    <DtButton endIcon="arrow-right" intent="success" text="Next step" />
  </div>
  <div class="row">
    <DtButton icon="edit" />
    <DtButton icon="share" variant="outlined" />
    <DtButton icon="filter" intent="primary" variant="minimal" />
    <DtButton icon="add" size="small" intent="success" />
    <DtButton icon="trash" disabled={true} intent="danger" />
  </div>
  <div class="row">
    <DtButton>Default</DtButton>
    <DtButton active={true}>Active</DtButton>
    <DtButton disabled={true}>Disabled</DtButton>
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
