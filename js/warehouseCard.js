import * as components from "./components.js";
import { navigate } from "./navigate.js";
import { deleteItem } from "./deleteItem.js";
import { setLocalStorage, getLocalStorage } from "./localStorage.js";
import { renderTable } from "./renderTable.js";
import { createEditForm } from "./editForm.js";
import { actionEditBtn } from "./editForm.js";

export function createWarehouseCard(containerEl) {
  renderTable();
}

deleteItem();


