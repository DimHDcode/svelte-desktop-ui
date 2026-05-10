<script>
  import ListBox from "../lib/ListBox/ListBox.svelte";

  const items = [
    { value: "apple", label: "Apple", subLabel: "yaamy", divider: true },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
    { value: "orange", label: "Orange" },
    { value: "kiwi", label: "Kiwi" },
  ];
  let selectedItem = $state(items[0].value);
</script>

<ListBox {items} bind:selectedItem size="small" />
