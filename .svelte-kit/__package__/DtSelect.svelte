<script>
  let { options, value = $bindable("") } = $props();
</script>

<label
  >Язык
  <select bind:value>
    <option value="" disabled selected hidden id="disabled-option"
      >Выбери язык</option
    >
    {#each options as option}
      <option value={option}>{option.option}</option>
    {/each}
  </select>
</label>
