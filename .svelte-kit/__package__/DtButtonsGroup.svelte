<script>
  import DtButton from "./DtButton.svelte";
  let {
    buttons,
    value = $bindable(buttons[0]),
    width = "300px",
    type = "primary",
  } = $props();
</script>

<div style:width role="group">
  {#each buttons as button}
    <DtButton
      onclick={() => (value = button)}
      {type}
      outline={value.id !== button.id}>{button.button}</DtButton
    >
  {/each}
</div>
