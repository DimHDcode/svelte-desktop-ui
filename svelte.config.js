/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  compilerOptions: {
    runes: true,
    warningFilter: (warning) =>
      !warning.code.startsWith("a11y") &&
      !warning.code.includes("event_directive_deprecated"),
  },
};
