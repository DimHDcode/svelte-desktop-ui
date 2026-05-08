<script>
  import Button from "../lib/Button/Button.svelte";
  import Drawer from "../lib/Drawer/Drawer.svelte";
  import DrawerBody from "../lib/Drawer/DrawerBody.svelte";
  import DrawerFooter from "../lib/Drawer/DrawerFooter.svelte";
  import DrawerHeader from "../lib/Drawer/DrawerHeader.svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Open Drawer</Button>
<Drawer bind:open>
  <DrawerHeader icon="info-sign">Header</DrawerHeader>
  <DrawerBody>Body</DrawerBody>
  <DrawerFooter>Footer</DrawerFooter>
</Drawer>
