<script>
  import DtButton from "../lib/DtButton.svelte";
  import Menu from "@lucide/svelte/icons/menu";
</script>

<div class="root">
  <div class="row">
    <DtButton>PRIMARY</DtButton>
    <DtButton outline>PRIMARY OUTLINE</DtButton>
    <DtButton icon={Menu}>PRIMARY WITH ICON</DtButton>
  </div>
  <div class="row">
    <DtButton type="secondary">SECONDARY</DtButton>
    <DtButton type="secondary" outline>SECONDARY OUTLINE</DtButton>
    <DtButton type="secondary" icon={Menu}>SECONDARY WITH ICON</DtButton>
  </div>
  <div class="row">
    <DtButton type="contrast">CONTRAST</DtButton>
    <DtButton type="contrast" outline>CONTRAST OUTLINE</DtButton>
    <DtButton type="contrast" icon={Menu}>CONTRAST WITH ICON</DtButton>
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
  }
</style>
