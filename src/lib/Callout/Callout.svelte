<script>
  let {
    children = () => {},
    title,
    compact = false,
    minimal = false,
    intent,
  } = $props();
</script>

<div
  class="bp6-callout bp6-callout-has-body-content"
  class:bp6-compact={compact}
  class:bp6-minimal={minimal}
  class:bp6-callout-icon={intent}
  class:bp6-intent-primary={intent === "primary"}
  class:bp6-intent-success={intent === "success"}
  class:bp6-intent-warning={intent === "warning"}
  class:bp6-intent-danger={intent === "danger"}
>
  {#if intent === "primary"}
    <span aria-hidden="true" tabindex="-1" class="bp6-icon bp6-icon-info-sign"
      ><svg
        data-icon="info-sign"
        height="16"
        role="img"
        viewBox="0 0 16 16"
        width="16"
        ><path
          d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8M7 3h2v2H7zm3 10H6v-1h1V7H6V6h3v6h1z"
          fill-rule="evenodd"
        ></path></svg
      ></span
    >
  {/if}
  {#if intent === "success"}
    <span aria-hidden="true" tabindex="-1" class="bp6-icon bp6-icon-tick"
      ><svg
        data-icon="tick"
        height="16"
        role="img"
        viewBox="0 0 16 16"
        width="16"
        ><path
          d="M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0 0 14 3"
          fill-rule="evenodd"
        ></path></svg
      ></span
    >
  {/if}
  {#if intent === "warning"}
    <span
      aria-hidden="true"
      tabindex="-1"
      class="bp6-icon bp6-icon-warning-sign"
      ><svg
        data-icon="warning-sign"
        height="16"
        role="img"
        viewBox="0 0 16 16"
        width="16"
        ><path
          d="m15.84 13.5.01-.01-7-12-.01.01c-.17-.3-.48-.5-.85-.5s-.67.2-.85.5l-.01-.01-7 12 .01.01c-.09.15-.15.31-.15.5 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 0-.19-.06-.35-.15-.5m-6.85-.51h-2v-2h2zm0-3h-2v-5h2z"
          fill-rule="evenodd"
        ></path></svg
      ></span
    >
  {/if}
  {#if intent === "danger"}
    <span aria-hidden="true" tabindex="-1" class="bp6-icon bp6-icon-error"
      ><svg
        data-icon="error"
        height="16"
        role="img"
        viewBox="0 0 16 16"
        width="16"
        ><path
          d="M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m1 13h-2v-2h2zm0-3h-2v-7h2z"
          fill-rule="evenodd"
        ></path></svg
      ></span
    >
  {/if}
  {#if title}
    <h5 class="bp6-heading">{title}</h5>
  {/if}
  {@render children()}
</div>
