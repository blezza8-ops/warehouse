import * as components from './components.js';
import { setLocalStorage, getLocalStorage } from './localStorage.js';


const tbody = document.querySelector('#tbody')
export function renderTable() {
    const items = getLocalStorage('items', 'items');
    tbody.innerHTML = '';
    items.forEach((item, index) => {
        const tableRowEl = components.getTableRowEl();
        tableRowEl.innerHTML = `
        <td>${item.name}</td>
        <td>${item.shelf}</td>
        <td>${item.weight}</td>
        <td>${item.date}</td>
        <td><button class='btn-delete' data-index="${index}">Удалить</button>
        <button class='btn-edit' data-index="${index}">Редактировать</button></td>
        `;
        tbody.append(tableRowEl);
    });

}