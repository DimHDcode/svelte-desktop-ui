<script>
  let { children = () => {} } = $props();
</script>

<div class="bp6-drawer-footer">
  {@render children()}
</div>
