function setLocalStorage(item) {
    return localStorage.setItem('items', JSON.stringify(item));
}

function getLocalStorage(items, data) {
    items = JSON.parse(localStorage.getItem(data)) || [];
    return items
}

export {
    setLocalStorage,
    getLocalStorage,
}