/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const telInputs = document.querySelectorAll('input[type="tel"]');

if (telInputs[0]) {
  telInputs.forEach((input) => {
    Inputmask({ mask: "+7 (999) 999-9999" }).mask(input);
  });
}
