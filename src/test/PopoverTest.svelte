<script>
  import Button from "../lib/Button/Button.svelte";
  import Popover from "../lib/Popover/Popover.svelte";
  let open = $state(false);
  let buttonEl = $state();
  let popover;
</script>

<Button onclick={(e) => popover.open(e)}>Open Popover</Button>
<Popover bind:this={popover}>
  <div>
    <h5 class="bp6-heading">Confirm deletion</h5>
    <p>
      Are you sure you want to delete these items? You won't be able to recover
      them.
    </p>
    <div style="display: flex; justify-content: flex-end; margin-top: 15px;">
      <button
        type="button"
        class="bp6-button bp6-popover-dismiss"
        style="margin-right: 10px;"
        ><span class="bp6-button-text">Cancel</span></button
      ><button
        type="button"
        class="bp6-button bp6-intent-danger bp6-popover-dismiss"
        ><span class="bp6-button-text">Delete</span></button
      >
    </div>
  </div>
</Popover>
