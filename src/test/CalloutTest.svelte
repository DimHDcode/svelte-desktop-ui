<script>
  import Callout from "../lib/Callout/Callout.svelte";
</script>

<div style="width: 40%; display: flex; flex-direction: column; gap: 10px">
  <Callout title="Noraml">
    Long-form information about the important content. This text is styled as
    <a>"Running text"</a>, so it may contain things like headers, links, lists,
    <code class="bp6-code">code</code> etc.
  </Callout>
  <Callout title="Compact" compact>
    Long-form information about the important content. This text is styled as
    <a>"Running text"</a>, so it may contain things like headers, links, lists,
    <code class="bp6-code">code</code> etc.
  </Callout>
  <Callout title="Minimal compact" compact minimal>
    Long-form information about the important content. This text is styled as
    <a>"Running text"</a>, so it may contain things like headers, links, lists,
    <code class="bp6-code">code</code> etc.
  </Callout>
  <Callout title="Danger" intent="danger">
    Long-form information about the important content. This text is styled as
    <a>"Running text"</a>, so it may contain things like headers, links, lists,
    <code class="bp6-code">code</code> etc.
  </Callout>
</div>
