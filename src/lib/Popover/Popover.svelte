<script>
  import {
    computePosition,
    autoUpdate,
    offset,
    flip,
    shift,
    arrow,
  } from "@floating-ui/dom";

  let { placement = "bottom", children } = $props();

  let triggerEl = $state(null);
  let isOpen = $state(false);
  let popoverEl;
  let arrowEl;

  export function open(event) {
    triggerEl = event.currentTarget;
    isOpen = true;
  }

  export function close() {
    isOpen = false;
  }

  function portal(node) {
    document.body.appendChild(node);
    return {
      destroy() {
        node.remove();
      },
    };
  }

  $effect(() => {
    if (!isOpen || !triggerEl || !popoverEl) return;

    const cleanup = autoUpdate(triggerEl, popoverEl, async () => {
      const {
        x,
        y,
        placement: actualPlacement,
        middlewareData,
      } = await computePosition(triggerEl, popoverEl, {
        placement,
        middleware: [
          offset(10),
          flip(),
          shift({ padding: 8 }),
          arrow({ element: arrowEl }),
        ],
      });

      Object.assign(popoverEl.style, {
        left: `${x}px`,
        top: `${y}px`,
        position: "absolute",
      });

      if (middlewareData.arrow) {
        const { x: ax, y: ay } = middlewareData.arrow;
        console.log(ax, ay);

        Object.assign(arrowEl.style, {
          left: ax != null ? `${ax}px` : "-7.5px",
          top: ay != null ? `${ay}px` : "-7.5px",
        });
      }

      popoverEl.dataset.placement = actualPlacement;
    });

    return cleanup;
  });
</script>

{#if isOpen}
  <div
    class="bp6-popover bp6-dark bp6-popover-placement-bottom bp6-popover-content-sizing"
    use:portal
    bind:this={popoverEl}
  >
    <div bind:this={arrowEl} class="bp6-popover-arrow">
      <svg viewBox="0 0 30 30"
        ><path
          class="bp6-popover-arrow-border"
          d="M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z"
        ></path><path
          class="bp6-popover-arrow-fill"
          d="M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z"
        ></path></svg
      >
    </div>
    <div class="bp6-popover-content">
      {@render children()}
    </div>
  </div>
{/if}
