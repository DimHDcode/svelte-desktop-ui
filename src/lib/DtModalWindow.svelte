<script>
  import DtButton from "./Button.svelte";
  import X from "@lucide/svelte/icons/x";
  let {
    title = "App Settings",
    buttons = null,
    buttonWidth = "100px",
    width = "50vw",
    height = "50vh",
    value = $bindable(),
    children = () => null,
  } = $props();
</script>

<dialog id="dt-modal">
  <article style:width style:height>
    <header
      style="height: 40px; display: flex; justify-content: space-between;"
    >
      {title}
      <DtButton
        type="secondary"
        commandfor="dt-modal"
        command="close"
        outline
        icon={X}
        onclick={() => (value = "closeModal")}
      ></DtButton>
    </header>
    <div style=" height: calc(100% - {buttons ? '80px' : '40px'});">
      {@render children()}
    </div>

    {#if buttons}
      <footer
        style="height: 40px; display: flex; gap: 1rem; justify-content: center;"
      >
        {#each buttons as button}
          <DtButton
            width={buttonWidth}
            commandfor="dt-modal"
            command="close"
            onclick={() => (value = button)}>{button}</DtButton
          >
        {/each}
      </footer>
    {/if}
  </article>
</dialog>
