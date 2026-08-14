function getDivEl() {
    const div = document.createElement('div');
    div.classList.add('block');
    return div;
}

function getTitleEl(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    title.classList.add('main-title');
    return title;
}

function getButtonEl(text, type, className) {
    const button = document.createElement('button');
    button.textContent = text;
    button.type = type;
    button.classList.add(className);
    return button;
}

function getFormEl() {
    const form = document.createElement('form');
    form.classList.add('form');
    return form;
}

function getInputEl(type, placeholder, name, value) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.name = name;
    input.classList.add('input');
    return input;
}

function getTableEl() {
    const table = document.createElement('table');
    table.classList.add('table');
    return table;
}

function getTableHeadEl() {
    const tableHead = document.createElement('thead');
    tableHead.classList.add('thead');
    return tableHead;
}

function getTableRowEl() {
    const tableRow = document.createElement('tr');
    tableRow.classList.add = 'tr';
    return tableRow;
}

function getThEl() {
    const th = document.createElement('th');
    th.classList.add('th');
    return th;
}

function getTableBodyEl() {
    const tableBody = document.createElement('tbody');
    tableBody.classList.add('tbody');
    return tableBody;
}

function getTdEl() {
    const td = document.createElement('td');
    td.classList.add('td');
    return td;
}

function getLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    return loader;
}

export {
    getDivEl,
    getTitleEl,
    getButtonEl,
    getFormEl,
    getInputEl,
    getTableRowEl,
    getTdEl,
    getThEl,
    getLoader,
}