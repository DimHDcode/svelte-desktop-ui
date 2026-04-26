<script>
  let {
    onlabel = "On",
    offlabel = "Off",
    onicon: OnIcon = null,
    officon: OffIcon = null,
    ontype = "primary",
    offtype = "secondary",
    width = "100px",
    disabled = false,
    iconSize = 13,
    value = true,
  } = $props();
</script>

<button
  style:width
  style="overflow: hidden"
  class={value ? ontype : offtype}
  {disabled}
  onclick={() => {
    value = !value;
  }}
>
  {#if OnIcon && value}
    <OnIcon size={iconSize} />
  {/if}
  {#if OffIcon && !value}
    <OffIcon size={iconSize} />
  {/if}
  {value ? onlabel : offlabel}
</button>
