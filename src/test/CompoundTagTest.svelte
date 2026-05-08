<script>
  import CompoundTag from "../lib/CompoundTag/CompoundTag.svelte";
</script>

<CompoundTag leftContent="Key">Value</CompoundTag>
<CompoundTag leftContent="Status" intent="primary">Active</CompoundTag>
<CompoundTag leftContent="Status" intent="success">Success</CompoundTag>
<CompoundTag leftContent="Status" intent="warning">Degraded</CompoundTag>
<CompoundTag leftContent="Status" intent="danger">Down</CompoundTag>
<CompoundTag leftContent="Env" minimal>Production</CompoundTag>
<CompoundTag leftContent="Env" intent="primary" minimal>Staging</CompoundTag>
<CompoundTag leftContent="Size" large>Large</CompoundTag>
<CompoundTag leftContent="Region" fill>US East (N. Virginia)</CompoundTag>
<CompoundTag leftContent="City" round>London</CompoundTag>
<CompoundTag leftContent="City" round intent="success">New York</CompoundTag>

<CompoundTag leftContent="City" icon="globe">London</CompoundTag>
<CompoundTag leftContent="City" endIcon="map-marker">Seattle</CompoundTag>
<CompoundTag leftContent="City" icon="globe" endIcon="map-marker"
  >New York</CompoundTag
>
<CompoundTag leftContent="Filter" interactive>Region</CompoundTag>
<CompoundTag leftContent="Filter" interactive intent="primary"
  >Status</CompoundTag
>
