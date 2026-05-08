<script>
  let {
    options = [],
    value = $bindable(),
    fill = false,
    disabled,
    primary = false,
    small = false,
    large = false,
  } = $props();
</script>

<div role="radiogroup" class="bp6-segmented-control" class:bp6-fill={fill}>
  {#each options as option}
    <button
      onclick={() =>
        !disabled || option.disabled ? (value = option.value) : null}
      disabled={option.disabled}
      type="button"
      role="radio"
      aria-checked="false"
      tabindex="-1"
      class="bp6-button"
      class:bp6-minimal={option.value !== value}
      class:bp6-intent-primary={primary}
      class:bp6-disabled={option.disabled || disabled}
      class:bp6-small={small}
      class:bp6-large={large}
    >
      {#if option.icon}
        <span class="bp6-icon bp6-icon-{option.icon}"></span>
      {/if}
      <span class="bp6-button-text">{option.label}</span></button
    >
  {/each}
</div>
