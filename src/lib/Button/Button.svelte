<script>
  import { getContext } from "svelte";
  /**
   * @param {Object} props
   * @param {import('svelte').Snippet} [props.children]
   * @param {'primary' | 'success' | 'warning' | 'danger'} [props.intent]
   * @param {'minimal' | 'outlined'} [props.variant]
   * @param {'small' | 'large'} [props.size]
   */
  let {
    children,
    onclick = () => {},
    intent,
    variant,
    size,
    fill,
    disabled,
    active,
    alignText,
    icon,
    endIcon,
    ellipsizeText,
    text,
  } = $props();
</script>

<button
  onclick={(e) => {
    onclick(e);
  }}
  {disabled}
  type="button"
  class="bp6-button"
  class:bp6-active={active}
  tabindex={disabled || active ? -1 : null}
  class:bp6-intent-primary={intent === "primary"}
  class:bp6-intent-success={intent === "success"}
  class:bp6-intent-warning={intent === "warning"}
  class:bp6-intent-danger={intent === "danger"}
  class:bp6-minimal={variant === "minimal"}
  class:bp6-outlined={variant === "outlined"}
  class:bp6-small={size === "small"}
  class:bp6-large={size === "large"}
  class:bp6-fill={fill}
  class:bp6-align-left={alignText === "start"}
  class:bp6-align-center={alignText === "center"}
  class:bp6-align-right={alignText === "end"}
>
  {#if icon}
    <span aria-hidden="true" class={`bp6-icon bp6-icon-${icon}`}> </span>
  {/if}
  {#if children || text}
    <span
      class:bp6-text-overflow-ellipsis={ellipsizeText}
      class="bp6-button-text"
    >
      {#if !text}
        {@render children()}
      {:else}
        {text}
      {/if}
    </span>
  {/if}
  {#if endIcon}
    <span aria-hidden="true" class={`bp6-icon bp6-icon-${endIcon}`}> </span>
  {/if}
</button>
