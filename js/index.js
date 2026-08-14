import { actionAddBtn } from "./addForm.js";
import { actionEditBtn } from "./editForm.js";
import { navigate } from "./navigate.js";

document.addEventListener('DOMContentLoaded', function() {
    navigate();
    actionEditBtn();
    actionAddBtn();
})