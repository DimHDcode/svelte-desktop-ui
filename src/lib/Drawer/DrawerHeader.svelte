<script>
  import { getContext } from "svelte";

  let { children = () => {}, icon } = $props();
  const api = getContext("bp6-drawer-api");
</script>

<div class="bp6-drawer-header">
  {#if icon}
    <span class={`bp6-icon bp6-icon-${icon}`}></span>
  {/if}
  <h4 class="bp6-heading">
    {@render children()}
  </h4>
  <button
    type="button"
    class="bp6-button bp6-minimal bp6-dialog-close-button"
    onclick={() => api?.close()}
    ><span aria-hidden="true" class="bp6-icon bp6-icon-small-cross"
    ></span></button
  >
</div>
