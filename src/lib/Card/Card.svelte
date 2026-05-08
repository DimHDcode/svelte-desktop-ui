<script>
  let {
    header,
    footerButton,
    children = () => {},
    onclick = () => {},
    elevation = 0,
    compact,
  } = $props();
</script>

<div class="bp6-card bp6-elevation-{elevation}" class:bp6-compact={compact}>
  {#if header}
    <h3 class="bp6-heading">{header}</h3>
  {/if}
  <p>
    {@render children()}
  </p>
  {#if footerButton}
    <button onclick={(e) => onclick(e)} class="bp6-button bp6-intent-primary"
      ><span class="bp6-button-text">{footerButton}</span></button
    >
  {/if}
</div>
