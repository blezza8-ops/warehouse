import * as components from "./components.js";
import { navigate } from "./navigate.js";
import { setLocalStorage, getLocalStorage } from "./localStorage.js";
const tbodyEl = document.querySelector("#table");

export function actionEditBtn() {
  tbodyEl.addEventListener("click", (e) => {
    const buttonEdit = e.target.closest(".btn-edit");
    if (buttonEdit) {
      const index = buttonEdit.getAttribute("data-index");
      navigate("edit-form", index);
    }
  });
}

export function createEditForm(containerEl, index) {
  const editFormTitle = components.getTitleEl("Изменить запись");
  const formEl = components.getFormEl();
  const blockEl = components.getDivEl();
  const inputEditNameEl = components.getInputEl("text", "Название", "name");
  const inputEditShelfEl = components.getInputEl("text", "Полка", "shelf");
  const inputEditWeightEl = components.getInputEl(
    "number",
    "Вес(кг)",
    "weight",
  );
  const inputEditDateEl = components.getInputEl(
    "date",
    "Время хранения",
    "date",
  );
  const buttonEl = components.getButtonEl(
    "Сохранить",
    "submit",
    "edit-form__btn",
  );
  const items = getLocalStorage("items", "items") || [];
  const currentItem = items[index];

  const arrInputs = [
    inputEditNameEl,
    inputEditShelfEl,
    inputEditWeightEl,
    inputEditDateEl,
  ];

  inputEditNameEl.classList.add("input__name");
  inputEditShelfEl.classList.add("input__shelf");
  inputEditWeightEl.classList.add("input__weight");
  inputEditDateEl.classList.add("input__date");

  if (currentItem) {
    inputEditNameEl.value = currentItem.name;
    inputEditShelfEl.value = currentItem.shelf;
    inputEditWeightEl.value = currentItem.weight;
    inputEditDateEl.value = currentItem.date;
  }

  arrInputs.forEach((input) => {
    input.setAttribute("required", true);
    formEl.append(input);
  });

  formEl.append(buttonEl);
  blockEl.append(editFormTitle, formEl);
  containerEl.append(blockEl);

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedItem = {
      name: inputEditNameEl.value,
      shelf: inputEditShelfEl.value,
      weight: inputEditWeightEl.value,
      date: inputEditDateEl.value,
    };
    items[index] = updatedItem;
    setLocalStorage(items);
    navigate()
  });
}

// const editFormTitle =  components.getTitleEl('Изменить запись');
//     const formEl = components.getFormEl();
//     const blockEl = components.getDivEl();
//     const inputNameEl = components.getInputEl('text', 'Название', 'name');
//     const inputShelfEl = components.getInputEl('text', 'Полка', 'shelf');
//     const inputWeightEl = components.getInputEl('number', 'Вес(кг)', 'weight');
//     const inputDateEl = components.getInputEl('date', 'Время хранения', 'date');
//     const buttonEl = components.getButtonEl('Добавить запись', 'submit');
//     const items = getLocalStorage('items', 'items') || [];

//     const arrInputs = [
//         inputNameEl,
//         inputShelfEl,
//         inputWeightEl,
//         inputDateEl,
//     ]
//     arrInputs.forEach(input => {
//         input.setAttribute('required', true);
//         formEl.append(input);
//     });
//     formEl.append(buttonEl);

//     blockEl.append(editFormTitle, formEl);
//     containerEl.append(blockEl);
