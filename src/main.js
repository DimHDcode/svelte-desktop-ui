import { mount } from "svelte";

import App from "./App.svelte";
import "@picocss/pico/css/pico.blue.min.css";
import "@picocss/pico/css/pico.colors.min.css";
import "./app.css";
import "./lib/dt-styles.css";
import "@fontsource/roboto";

const app = mount(App, {
  target: document.getElementById("app"),
});

export default app;
