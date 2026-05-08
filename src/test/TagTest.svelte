<script>
  import Tag from "../lib/Tag/Tag.svelte";
</script>

<div
  style="min-width: 200px; display: flex; flex-direction:column; gap: 10px; align-items: center;"
>
  <Tag>London</Tag>
  <Tag fill>London</Tag>
  <Tag large>London</Tag>
  <Tag minimal>London</Tag>
  <Tag interactive onclick={() => console.log("click")}>London</Tag>
  <Tag round>London</Tag>
  <Tag startIcon="home">London</Tag>
  <Tag endIcon="map">London</Tag>
  <Tag intent="primary">London</Tag>
  <Tag intent="success">London</Tag>
  <Tag intent="warning">London</Tag>
  <Tag intent="danger">London</Tag>
  <Tag removable>London</Tag>
</div>
