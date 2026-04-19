# svelte-desktop-ui

Desktop-first Svelte 5 UI component library. Compact, dense, built for mouse and keyboard — not for touch screens.

## Installation

Install the library from GitHub along with its peer dependencies:

```bash
npm install github:DimHDcode/svelte-desktop-ui @picocss/pico svelte
```

Peer dependencies must be installed by the consumer:

- `svelte` — version 5 or higher
- `@picocss/pico` — version 2 or higher

## Usage

### 1. Import styles

In your application entry point (usually `main.js` or `main.ts`), import stylesheets in this exact order:

```js
// 1. Pico CSS — pick any theme you like
import "@picocss/pico/css/pico.min.css";

// 2. Component library styles (on top of Pico)
import "svelte-desktop-ui/dt-styles.css";

// 3. Your application styles (on top of everything)
import "./app.css";
```

The order matters. Each layer can override the previous one — this is how the CSS cascade is meant to work.

### 2. Use components

```svelte
<script>
  import { DtButton, DtInputNumber, DtSelect } from "svelte-desktop-ui";
</script>

<DtButton>Click me</DtButton>
<DtInputNumber />
<DtSelect />
```

## Pico themes

Pico ships with multiple color themes. Swap the import line to change the theme:

```js
import "@picocss/pico/css/pico.amber.min.css";
import "@picocss/pico/css/pico.blue.min.css";
import "@picocss/pico/css/pico.green.min.css";
// ...and more
```

See the full list in [Pico documentation](https://picocss.com/docs).

## Available components

- `DtButton`
- `DtButtonsGroup`
- `DtColorPicker`
- `DtDialog`
- `DtInputNumber`
- `DtListBox`
- `DtModalWindow`
- `DtSelect`
- `DtTable`

## Pinning to a specific version

By default `npm install github:DimHDcode/svelte-desktop-ui` pulls the latest commit from the default branch. To pin to a specific tag or commit:

```bash
npm install github:DimHDcode/svelte-desktop-ui#v0.1.0
npm install github:DimHDcode/svelte-desktop-ui#abc1234
```

## License

MIT
