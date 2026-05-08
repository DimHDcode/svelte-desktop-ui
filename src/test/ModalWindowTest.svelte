<script>
  import DtModalWindow from "../lib/DtModalWindow.svelte";
  import Button from "../lib/Button/Button.svelte";
</script>

<Button command="show-modal" commandfor="dt-modal">Open modal</Button>
<DtModalWindow
  title="Settings"
  buttons={["Yes", "No"]}
  width="50vw"
  height="50vh"
>
  <div class="modal-content">Modal Content</div>
</DtModalWindow>

<style>
  .modal-content {
    height: 100%;
    display: grid;
    place-items: center;
  }
</style>
