<script>
  /**
   * @typedef {Object} Options
   * @property {any} id
   * @property {string} option
   */

  /**
   * @type {{
   * options: Options[],
   * placeholder?: String,
   * label?: String,
   * width?: String,
   * labelPosition?: 'top' | 'left' | '',
   * value?: any
   * }}
   */
  let {
    options,
    placeholder = "",
    label = "",
    width = "100%",
    labelPosition = "top",
    value = $bindable(""),
  } = $props();
</script>

<div
  class="select-root"
  class:label-left={labelPosition === "left"}
  style:width
>
  <label
    >{label}
    <select bind:value>
      <option value="" disabled selected hidden id="disabled-option"
        >{placeholder}</option
      >
      {#each options as option}
        <option value={option}>{option.option}</option>
      {/each}
    </select>
  </label>
</div>
