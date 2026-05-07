<script>
  let { children = () => {} } = $props();
</script>

<div class="bp6-drawer-body">
  <div class="bp6-dialog-body">
    {@render children()}
  </div>
</div>
