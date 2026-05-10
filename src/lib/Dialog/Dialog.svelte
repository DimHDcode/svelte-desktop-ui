<script>
  import { Dialog } from "bits-ui";
  import { tick } from "svelte";
  import { fade } from "svelte/transition";
  import * as dialog from "@zag-js/dialog";
  import { portal, normalizeProps, useMachine } from "@zag-js/svelte";
  let {
    open = $bindable(false),
    children,
    header,
    icon,
    footerLabel,
    closeButton = true,
    buttons,
  } = $props();

  const id = $props.id();
  const service = useMachine(dialog.machine, {
    id,
    get open() {
      return open;
    },
    onOpenChange(details) {
      open = details.open;
    },
  });
  const api = $derived(dialog.connect(service, normalizeProps));
</script>

{#if api.open}
  <div use:portal class="bp6-portal" transition:fade={{ duration: 100 }}>
    <div class="bp6-overlay bp6-overlay-open bp6-overlay-scroll-container">
      <div
        tabindex="0"
        class="bp6-overlay-start-focus-trap bp6-overlay-enter-done"
      ></div>
      <div
        {...api.getBackdropProps()}
        class="bp6-overlay-backdrop bp6-overlay-enter-done"
      ></div>
      <div
        class="bp6-dialog-container bp6-overlay-content bp6-overlay-enter-done"
        tabindex="0"
      >
        <div {...api.getContentProps()} class="bp6-dialog bp6-dark">
          <div class="bp6-dialog-header">
            {#if icon}
              <span tabindex="-1" class="bp6-icon bp6-icon-info-{icon}"></span>
            {/if}
            {#if header}
              <h2 {...api.getTitleProps()} class="bp6-heading">
                {header}
              </h2>
            {/if}
            {#if closeButton}
              <button
                {...api.getCloseTriggerProps()}
                type="button"
                class="bp6-button bp6-minimal bp6-dialog-close-button"
              >
                <span class="bp6-icon bp6-icon-small-cross"></span>
              </button>
            {/if}
          </div>
          <div class="bp6-dialog-body bp6-dialog-body-scroll-container">
            {@render children()}
          </div>
          <div class="bp6-dialog-footer bp6-dialog-footer-fixed">
            {#if footerLabel}
              <div class="bp6-dialog-footer-main-section">{footerLabel}</div>
            {/if}
            <div class="bp6-dialog-footer-actions">
              {#if buttons}
                {#each buttons as button}
                  <span class="bp6-popover-target">
                    <button
                      type="button"
                      class="bp6-button"
                      class:bp6-intent-primary={button.intent === "primary"}
                      class:bp6-intent-success={button.intent === "success"}
                      class:bp6-intent-warning={button.intent === "warning"}
                      class:bp6-intent-danger={button.intent === "danger"}
                      onclick={button.onclick}
                      tabindex="0"
                      {...button.command === "close"
                        ? api.getCloseTriggerProps()
                        : {}}
                    >
                      {#if button.icon}
                        <span class={`bp6-icon bp6-icon-${button.icon}`}>
                        </span>
                      {/if}
                      <span class="bp6-button-text">{button.label}</span>
                    </button>
                  </span>
                {/each}
              {/if}
            </div>
          </div>
        </div>
      </div>
      <div
        tabindex="0"
        class="bp6-overlay-end-focus-trap bp6-overlay-enter-done"
      ></div>
    </div>
  </div>
{/if}
