<script>
  import SegmentedControl from "../lib/SegmentedControl/SegmentedControl.svelte";
  const options = [
    {
      label: "List",
      value: "list",
      icon: "list",
    },
    {
      label: "Grid",
      value: "grid",
      icon: "grid",
    },
    {
      label: "Gallery",
      value: "gallery",
      icon: "disable",
      disabled: true,
    },
  ];

  let value = $state("list");
</script>

<SegmentedControl {options} bind:value />
<SegmentedControl {options} bind:value small />
<SegmentedControl {options} bind:value large />
<SegmentedControl {options} bind:value primary />
<SegmentedControl {options} bind:value fill />
<SegmentedControl {options} bind:value disabled />
