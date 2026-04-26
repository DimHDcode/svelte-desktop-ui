<script>
  import DtListBox from "./DtListBox.svelte";
  let { open = $bindable(false), options = [], value = $bindable() } = $props();
  let hoveredItem = $state(null);
</script>

{#if open}
  <div class="dt-menu">
    <DtListBox
      items={options}
      bind:selectedItem={value}
      onhover={(item) => (hoveredItem = item)}
      onaction={() => (open = false)}
    />

    {#if hoveredItem?.children}
      <DtListBox items={hoveredItem.children} onaction={() => (open = false)} />
    {/if}
  </div>
{/if}
