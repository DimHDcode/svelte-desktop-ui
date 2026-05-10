<script>
  let {
    title,
    children = () => {},
    action = false,
    onclick = () => {},
  } = $props();
</script>

<div class="bp6-non-ideal-state bp6-non-ideal-state-vertical">
  <div
    class="bp6-non-ideal-state-visual"
    style="font-size: 48px; line-height: 48px;"
  >
    <span
      aria-hidden="true"
      tabindex="-1"
      class="bp6-icon bp6-icon-search bp6-icon-muted"
      ><svg
        data-icon="search"
        height="48"
        role="img"
        viewBox="0 0 20 20"
        width="48"
        ><path
          d="m19.56 17.44-4.94-4.94A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8S0 3.58 0 8s3.58 8 8 8c1.67 0 3.21-.51 4.5-1.38l4.94 4.94a1.498 1.498 0 1 0 2.12-2.12M8 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6"
          fill-rule="evenodd"
        ></path></svg
      ></span
    >
  </div>
  <div class="bp6-non-ideal-state-text">
    {#if title}
      <h4 class="bp6-heading">{title}</h4>
    {/if}
    <div>
      {@render children()}
    </div>
  </div>
  {#if action}
    <button
      onclick={(e) => onclick(e)}
      type="button"
      class="bp6-button bp6-intent-primary bp6-outlined"
      ><span aria-hidden="true" class="bp6-icon bp6-icon-plus"
        ><svg
          data-icon="plus"
          height="16"
          role="img"
          viewBox="0 0 16 16"
          width="16"
          ><path
            d="M13 7H9V3c0-.55-.45-1-1-1s-1 .45-1 1v4H3c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V9h4c.55 0 1-.45 1-1s-.45-1-1-1"
            fill-rule="evenodd"
          ></path></svg
        ></span
      ><span class="bp6-button-text">New file</span></button
    >
  {/if}
</div>
