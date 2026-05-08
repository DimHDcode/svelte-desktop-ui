<script>
  import Button from "./Button/Button.svelte";
  let {
    message = "Are you sure?",
    buttons = ["Ok", "Cancel"],
    buttonWidth = "100px",
    width = "20%",
    value = $bindable(),
  } = $props();
</script>

<dialog id="dt-dialog">
  <article style:width>
    <p style="text-align: center;">
      {message}
    </p>
    <div
      style="display: flex; gap: 1rem; width: 100%; justify-content: center;"
    >
      {#each buttons as button}
        <Button
          width={buttonWidth}
          commandfor="dt-dialog"
          command="close"
          onclick={() => (value = button)}>{button}</Button
        >
      {/each}
    </div>
  </article>
</dialog>
