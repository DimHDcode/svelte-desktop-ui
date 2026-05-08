<script>
  let {
    leftContent,
    children = () => {},
    intent,
    minimal,
    large,
    fill,
    round,
    icon,
    endIcon,
    interactive = false,
    onclick,
  } = $props();
</script>

<span
  class="bp6-tag bp6-compound-tag"
  class:bp6-intent-primary={intent === "primary"}
  class:bp6-intent-success={intent === "success"}
  class:bp6-intent-warning={intent === "warning"}
  class:bp6-intent-danger={intent === "danger"}
  class:bp6-minimal={minimal}
  class:bp6-large={large}
  class:bp6-fill={fill}
  class:bp6-round={round}
  class:bp6-interactive={interactive}
  onclick={(e) => {
    if (!interactive) return;
    onclick(e);
  }}
>
  {#if leftContent}
    <span class="bp6-compound-tag-left">
      {#if icon}
        <span class="bp6-icon bp6-icon-{icon}"></span>
      {/if}
      <span class="bp6-compound-tag-left-content bp6-fill">
        {leftContent}
      </span>
    </span>
  {/if}

  <span class="bp6-compound-tag-right">
    <span class="bp6-compound-tag-right-content bp6-fill">
      {@render children()}
    </span>
    {#if endIcon}
      <span class="bp6-icon bp6-icon-{endIcon}"></span>
    {/if}
  </span>
</span>
