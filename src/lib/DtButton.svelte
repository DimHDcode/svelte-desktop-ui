<script>
  /**
   * @param {Object} props
   * @param {import('svelte').Snippet} [props.children]
   * @param {'primary' | 'secondary' | 'contrast'} [props.type]
   * @param {boolean} [props.outline]
   * @param {any} [props.icon]
   * @param {number} [props.iconSize]
   * @param {string} [props.width]
   */
  let {
    children = () => "Button",
    type = "primary",
    outline = false,
    icon: Icon = null,
    iconSize = 13,
    width = "",
    ...rest
  } = $props();
</script>

<button style:width class:outline class={type} {...rest}>
  {#if Icon}
    <Icon size={iconSize} />
  {/if}
  {@render children()}
</button>
