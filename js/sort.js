import { setLocalStorage, getLocalStorage } from "./localStorage.js";
import { renderTable } from "./renderTable.js";

const n = document.querySelector(".th__name");
const s = document.querySelector(".th__shelf");
const w = document.querySelector(".th__weight");
const d = document.querySelector(".th__date");

let anchor = true;

function sortNum(arr, key) {
    arr.sort((a, b) => anchor ? a[key] - b[key] : b[key] - a[key]);
  setLocalStorage(arr);
}

function sortStr(arr, key) {
    arr.sort((a, b) => anchor ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]));
    setLocalStorage(arr)
}

n.addEventListener("click", () => {
    const items = getLocalStorage("items", "items") || [];
    anchor ? (anchor = false) : (anchor = true);
    sortStr(items, 'name');
    renderTable();
})

s.addEventListener("click", () => {
  const items = getLocalStorage("items", "items") || [];
  anchor ? (anchor = false) : (anchor = true);
  sortNum(items, 'shelf');
  renderTable();
});

w.addEventListener("click", () => {
  const items = getLocalStorage("items", "items") || [];
  anchor ? (anchor = false) : (anchor = true);
  sortNum(items, 'weight');
  renderTable();
});

d.addEventListener("click", () => {
  const items = getLocalStorage("items", "items") || [];
  anchor ? (anchor = false) : (anchor = true);
  sortStr(items, 'date');
  renderTable();
});


