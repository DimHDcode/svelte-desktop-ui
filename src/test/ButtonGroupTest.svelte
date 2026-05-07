<script>
  import Button from "../lib/Button.svelte";
  import ButtonGroup from "../lib/ButtonGroup.svelte";
</script>

<div class="root">
  <div class="row">
    <ButtonGroup radio>
      <Button onclick={(e) => console.log(e.currentTarget.textContent.trim())}
        >One</Button
      >
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
  <div class="row">
    <ButtonGroup variant="outlined">
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
  <div class="row">
    <ButtonGroup variant="minimal">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
  <div class="row">
    <ButtonGroup size="small">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
  <div class="row">
    <ButtonGroup size="large">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
  <div class="row">
    <ButtonGroup fill={true}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
  <div class="row">
    <ButtonGroup>
      <Button icon="bold" />
      <Button icon="italic" />
      <Button icon="underline" />
      <Button icon="strikethrough" />
    </ButtonGroup>
  </div>
  <div class="row">
    <div style="min-width: 300px;">
      <ButtonGroup vertical fill>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  </div>
  <div class="row">
    <div style="min-width: 300px;">
      <ButtonGroup variant="outlined" vertical fill>
        <Button alignText="start" icon="align-left">Start</Button>
        <Button alignText="center" icon="align-center">Center</Button>
        <Button alignText="end" endIcon="align-right">End</Button>
      </ButtonGroup>
    </div>
  </div>
</div>

<style>
  .root {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    gap: 10px;
    min-width: 50%;
  }
  .row {
    display: flex;
  }
</style>
