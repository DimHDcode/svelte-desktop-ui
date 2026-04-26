<script>
  import DtButton from "../lib/DtButton.svelte";
  import DtMenu from "../lib/DtMenu.svelte";
  import Menu from "@lucide/svelte/icons/menu";
  import Save from "@lucide/svelte/icons/save";
  const options = [
    {
      id: 1,
      item: "File",
      children: [
        { id: 2, item: "New", hotkey: "Ctrl+N" },
        { id: 3, item: "Open", hotkey: "Ctrl+O" },
        { id: 4, item: "Save", hotkey: "Ctrl+S", icon: Save },
      ],
    },
    {
      id: 5,
      item: "Edit",
      children: [{ id: 6, item: "Undo", hotkey: "Ctrl+Z" }],
    },
    { id: 7, item: "About", hotkey: "Ctrl+O" },
  ];
  let open = $state(false);
</script>

<div class="dt-menu-wrapper">
  <DtButton
    icon={Menu}
    onclick={(e) => {
      e.stopPropagation();
      open = !open;
    }}>Menu</DtButton
  >
  <DtMenu bind:open {options} />
</div>
