<script>
  let {
    placeholder = "",
    label = "",
    min = 0,
    max = 10,
    step = 1,
    value = $bindable(),
  } = $props();
</script>

<fieldset>
  <label>
    {label}
    <input
      style="width: 100%"
      type="number"
      {placeholder}
      {min}
      {max}
      {step}
      bind:value
    />
  </label>
</fieldset>
