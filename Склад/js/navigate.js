import { getLoader } from "./components.js";

export async function navigate(cardName, index) {
  const appEl = document.getElementById("app");
  const warehouseView = document.getElementById("warehouse-view");
  const loaderEl = getLoader();
  appEl.append(loaderEl);

  const oldForm = appEl.querySelector(".block");
  if (oldForm) oldForm.remove();

  switch (cardName) {
    case "add-form":
      warehouseView.style.display = "none";
      const addForm = await import("./addForm.js");
      addForm.addForm(appEl);
      loaderEl.remove();
      break;
      case "edit-form":
      warehouseView.style.display = "none";
      const editForm = await import("./editForm.js");
      editForm.createEditForm(appEl, index);
      loaderEl.remove();
      break;
    default:
      warehouseView.style.display = "";
      const warehouseCard = await import("./warehouseCard.js");
      warehouseCard.createWarehouseCard(appEl);
      loaderEl.remove();
  }
}
