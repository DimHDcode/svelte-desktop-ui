<script>
  import Select from "../lib/Select/Select.svelte";
  const items = [
    { value: "apple", label: "Apple", subLabel: "yaamy" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
    { value: "orange", label: "Orange" },
    { value: "kiwi", label: "Kiwi" },
  ];
  let value = $state();
</script>

<div style="width: 20%">
  <Select
    {items}
    bind:value
    fill
    placeholder="Select a fruit"
    matchTargetWidth
    clearSelection
  />
</div>
