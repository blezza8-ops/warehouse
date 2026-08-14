import * as components from "./components.js";
import { navigate } from "./navigate.js";
import { setLocalStorage, getLocalStorage } from "./localStorage.js";

export function actionAddBtn() {
  const addBtn = document.querySelector(".add-btn");
  if (addBtn) {
    addBtn.addEventListener("click", function () {
      navigate("add-form");
    });
  }
}

export function addForm(containerEl, index) {
  const addFormTitle = components.getTitleEl("Добавить запись");
  const formEl = components.getFormEl();
  const blockEl = components.getDivEl();
  const inputNameEl = components.getInputEl("text", "Название", "name");
  const inputShelfEl = components.getInputEl("text", "Полка", "shelf");
  const inputWeightEl = components.getInputEl("number", "Вес(кг)", "weight");
  const inputDateEl = components.getInputEl("date", "Время хранения", "date");
  const buttonEl = components.getButtonEl(
    "Добавить запись",
    "submit",
    "add-form__btn",
  );

  const arrInputs = [inputNameEl, inputShelfEl, inputWeightEl, inputDateEl];
  arrInputs.forEach((input) => {
    input.setAttribute("required", true);
    formEl.append(input);
  });
  formEl.append(buttonEl);
  blockEl.append(addFormTitle, formEl);
  containerEl.append(blockEl);

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = inputNameEl.value;
    const shelf = inputShelfEl.value;
    const weight = inputWeightEl.value;
    const date = inputDateEl.value;
    const i = {
      name,
      shelf,
      weight,
      date,
    };
    const items = getLocalStorage("items", "items");
    items.push(i);
    setLocalStorage(items);
    navigate();
  });
}
