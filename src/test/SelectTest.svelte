<script>
  import DtSelect from "../lib/DtSelect.svelte";
  let options = [
    {
      id: 1,
      option: "first",
    },
    {
      id: 2,
      option: "second",
    },
  ];
  let selectedOption = $state("");
  $inspect(selectedOption);
</script>

<DtSelect {options} bind:value={selectedOption} />
