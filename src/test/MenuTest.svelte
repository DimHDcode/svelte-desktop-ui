<script>
  import DtButton from "../lib/Button.svelte";
  import DtMenu from "../lib/DtMenu.svelte";
  import Menu from "@lucide/svelte/icons/menu";
  import Save from "@lucide/svelte/icons/save";
  const items = [
    {
      id: 1,
      item: "File",
      children: [
        { id: 2, item: "New", hotkey: "Ctrl+N" },
        { id: 3, item: "Open", hotkey: "Ctrl+O" },
        { id: 4, item: "Save", hotkey: "Ctrl+S", icon: Save },
        {
          id: 10,
          item: "Resent projects...",
          children: [
            { id: 11, item: "Untitled Project 1" },
            { id: 12, item: "Danny's Project 1" },
          ],
        },
      ],
    },
    {
      id: 5,
      item: "Edit",
      children: [
        { id: 6, item: "Undo", hotkey: "Ctrl+Z" },
        {
          id: 7,
          item: "Redo",
          hotkey: "Ctrl+Y",
        },
      ],
    },
    { id: 8, item: "About", hotkey: "Ctrl+O" },
  ];
  let open = $state(false);
</script>

<div class="dt-menu-root">
  <DtButton
    icon={Menu}
    type="secondary"
    onclick={(e) => {
      e.stopPropagation();
      open = !open;
    }}>Menu</DtButton
  >
  <DtMenu bind:open {items} width="150px" />
</div>
