// lib/svelteCell.js
import { mount, unmount } from "svelte";

export function svelteCell(Component, getProps) {
  const elementToApp = new WeakMap();
  const allApps = new Set();
  let tableHooked = false;

  return (cell) => {
    const cellEl = cell.getElement();

    const prev = elementToApp.get(cellEl);
    if (prev) {
      unmount(prev);
      allApps.delete(prev);
      console.log("Cell replace unmount");
    }

    const target = document.createElement("span");
    target.classList.add("tabulator-custom-cell");

    const app = mount(Component, { target, props: getProps(cell) });
    console.log("Cell mount");

    elementToApp.set(cellEl, app);
    allApps.add(app);

    if (!tableHooked) {
      cell.getTable().on("tableDestroyed", () => {
        for (const a of allApps) {
          unmount(a);
          console.log("Cell unmount");
        }
        allApps.clear();
      });
      tableHooked = true;
    }

    return target;
  };
}
