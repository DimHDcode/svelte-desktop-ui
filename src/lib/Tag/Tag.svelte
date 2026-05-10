<script>
  import { onDestroy, onMount } from "svelte";

  // @ts-nocheck

  let {
    children = () => "Tag",
    label,
    fill = false,
    large = false,
    minimal = false,
    interactive = false,
    round = false,
    removable = false,
    startIcon,
    endIcon,
    intent,
    onclick = () => {},
    onremove = () => {},
  } = $props();
  // onMount(() => {
  //   console.log("Tag mount");
  // });
  // onDestroy(() => {
  //   console.log("Tag destroy");
  // });
</script>

<span
  class="bp6-tag"
  class:bp6-fill={fill}
  class:bp6-large={large}
  class:bp6-minimal={minimal}
  class:bp6-interactive={interactive}
  class:bp6-round={round}
  class:bp6-intent-primary={intent === "primary"}
  class:bp6-intent-success={intent === "success"}
  class:bp6-intent-warning={intent === "warning"}
  class:bp6-intent-danger={intent === "danger"}
  onclick={() => {
    if (!interactive) return;
    onclick();
  }}
>
  {#if startIcon}
    <span class={`bp6-icon bp6-icon-${startIcon}`}></span>
  {/if}
  <span class="bp6-text-overflow-ellipsis bp6-fill">
    {#if label}
      {label}
    {:else}
      {@render children()}
    {/if}
  </span>
  {#if removable}
    <button class="bp6-tag-remove" onclick={() => onremove()}> </button>
  {/if}
  {#if endIcon}
    <span class={`bp6-icon bp6-icon-${endIcon}`}></span>
  {/if}
</span>
