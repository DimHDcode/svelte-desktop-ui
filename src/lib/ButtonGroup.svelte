<script>
  let { children, variant, size, fill, vertical } = $props();
</script>

<div
  class="bp6-button-group"
  class:bp6-outlined={variant === "outlined"}
  class:bp6-minimal={variant === "minimal"}
  class:bp6-small={size === "small"}
  class:bp6-large={size === "large"}
  class:bp6-fill={fill}
  class:bp6-vertical={vertical}
>
  {@render children()}
</div>
