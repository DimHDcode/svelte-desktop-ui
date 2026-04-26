<script>
  import DtToggleButton from "../lib/DtToggleButton.svelte";
  import Shield from "@lucide/svelte/icons/shield";
  import Shieldban from "@lucide/svelte/icons/shield-ban";
</script>

<DtToggleButton
  onlabel="Active"
  offlabel="Idle"
  ontype="primary"
  offtype="outline"
  onicon={Shield}
  officon={Shieldban}
  width="100px"
></DtToggleButton>
