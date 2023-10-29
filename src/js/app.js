/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация:
Сниппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль работы с табами
Документация:
Сниппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "показать еще"
Документация по работе в шаблоне:
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Попапы
Документация по работе в шаблоне:
Сниппет (HTML): pl
*/
import "./libs/popup.js";

/*
Модуль параллакса мышью
Документация по работе в шаблоне:
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

export const togglePanel = (item, evt, el) => {
  evt.preventDefault();
  const panel = el || item.nextElementSibling;
  const parentAccordion = item.closest(".product__tabs-row");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.classList.remove("active");
    item.classList.remove("active");
    item.parentElement.classList.remove("active");

    if (parentAccordion && window.getComputedStyle(parentAccordion).maxHeight) {
      const oldHeight = parseInt(
        window.getComputedStyle(parentAccordion).maxHeight,
        10
      );
      parentAccordion.style.maxHeight = oldHeight;
    }
  } else {
    if (parentAccordion && window.getComputedStyle(parentAccordion).maxHeight) {
      const oldHeight = parseInt(
        window.getComputedStyle(parentAccordion).maxHeight,
        10
      );

      parentAccordion.style.maxHeight = `${panel.scrollHeight + oldHeight}px`;
    }
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    panel.classList.add("active");
    item.classList.add("active");
    item.parentElement.classList.add("active");
  }
};
// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы: добавление классов, работа с placeholder. */
flsForms.formFieldsInit();

/* Oтправка формы со встроенной валидацией полей. false - отключит валидацию */
flsForms.formSubmit(true);

/* Модуль формы "колличество" */
// flsForms.formQuantity();

/* Модуль формы "показать пароль" */
// flsForms.formViewpass();

/* Модуль звездного рейтинга */
flsForms.formRating();

/* Модуль работы с select. */
import "./libs/select.js";

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
import "./files/forms/inputmask.js";

import "./libs/wNumb.min.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
import "./files/forms/range.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне:
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: В HTML добавляем img, video, audio, iframe но вместо src пишем data-src
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
import "./files/scroll/lazyload.js";

// Наблюдатель за объектами c атрибутом data-watch
// Документация по работе в шаблоне: js/libs/watcher.js
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
import "./libs/dynamic_adapt.js";

/* Форматирование чисел */

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================

// const productTabsColumns = document.querySelectorAll(".product__tabs-column");

// productTabsColumns.forEach((productTabsColumn) => {
//   const contentPopularItems = productTabsColumn.querySelector(
//     ".content-popular__items"
//   );

//   productTabsColumn.addEventListener("mouseenter", function (evt) {
//     togglePanel(this, evt, contentPopularItems);
//   });

//   productTabsColumn.addEventListener("mouseleave", function (evt) {
//     togglePanel(this, evt, contentPopularItems);
//   });
// });

const productTabsColumns = document.querySelectorAll(".js-product-column");

productTabsColumns.forEach((productTabsColumn) => {
  const contentPopularItems = productTabsColumn.querySelector(
    ".content-popular__items"
  );

  productTabsColumn.addEventListener("mouseenter", function (evt) {
    togglePanel(this, evt, contentPopularItems);
    productTabsColumns.forEach((card) => {
      if (card !== this) {
        card.classList.add("_active");
      }
    });
  });

  productTabsColumn.addEventListener("mouseleave", function (evt) {
    togglePanel(this, evt, contentPopularItems);
    productTabsColumns.forEach((card) => {
      if (card !== this) {
        card.classList.remove("_active");
      }
    });
  });
});
import "./files/back.js";
