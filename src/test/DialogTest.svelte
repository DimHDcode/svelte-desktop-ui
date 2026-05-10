<script>
  import Button from "../lib/Button/Button.svelte";
  import Dialog from "../lib/Dialog/Dialog.svelte";

  let open = $state(false);
  let buttons = [
    {
      label: "Ok",
      icon: "menu",
      onclick: () => console.log("Ok"),
    },
    {
      label: "Cancel",
      intent: "danger",
      icon: "trash",
      command: "close",
    },
  ];
</script>

<Button onclick={() => (open = true)}>Open dialog</Button>
<Dialog
  bind:open
  header="Palantir Foundry"
  icon="sign"
  footerLabel="All checks passed"
  {buttons}
>
  <p>
    Data integration is the seminal problem of the digital age. For over ten
    years, we've helped the world's premier organizations rise to the challenge.
  </p>
</Dialog>
