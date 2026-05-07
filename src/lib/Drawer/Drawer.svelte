<script>
  import { setContext } from "svelte";
  import { expoInOut } from "svelte/easing";
  import { fade, slide } from "svelte/transition";

  let { open = $bindable(), children = () => {} } = $props();

  setContext("bp6-drawer-api", {
    close: () => (open = false),
  });

  function portal(node) {
    document.body.appendChild(node);
    return {
      destroy: () => node.remove(),
    };
  }
</script>

{#if open}
  <div
    class="bp6-overlay bp6-overlay-open bp6-overlay-container"
    style="background-color: rgb(0, 0, 0, 0.5);"
    transition:fade={{ duration: 150 }}
    onclick={() => (open = false)}
  >
    <div use:portal class="bp6-portal">
      <div class="bp6-overlay" class:bp6-overlay-open={open}>
        <div
          tabindex="0"
          class="bp6-overlay-start-focus-trap bp6-overlay-enter-done"
        ></div>
        <div
          transition:slide={{ axis: "x", duration: 500, easing: expoInOut }}
          class="bp6-drawer bp6-position-right bp6-dark bp6-overlay-content bp6-overlay-enter-done"
          tabindex="0"
        >
          {@render children()}
        </div>
        <div
          tabindex="0"
          class="bp6-overlay-end-focus-trap bp6-overlay-enter-done"
        ></div>
      </div>
    </div>
  </div>
{/if}
