import { getLocalStorage, setLocalStorage } from "./localStorage.js";
import { renderTable } from "./renderTable.js";

const tbody = document.querySelector("#tbody");
function deleteItem() {
  tbody.addEventListener("click", (e) => {
    const deleteButton = e.target.closest(".btn-delete");
    if (deleteButton) {
      const index = deleteButton.getAttribute("data-index");
      const items = getLocalStorage("items", "items");
      items.splice(index, 1);
      setLocalStorage(items);
      renderTable();
    }
  });
}

export { deleteItem };
