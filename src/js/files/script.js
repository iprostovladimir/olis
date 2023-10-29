// Подключение функционала "Чертогов Фрилансера"
import AirDatepicker from "air-datepicker";
import ImageZoom from "js-image-zoom";
import { bodyLock, bodyUnlock, isMobile, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const headerSubs = document.querySelectorAll("[data-hassub]");
export const inner = document.querySelector(".header-sublist");

if (headerSubs.length) {
  const headerItems = document.querySelectorAll("[data-selector]");
  if (window.innerWidth > 1365) {
    let isActive = [false, false];
    document.body.addEventListener("click", function (e) {
      const target = e.target;
      const className = target.classList[0];
      if (
        !target.hasAttribute("class") ||
        className.includes("header") ||
        className.includes("catalog-sublist") ||
        className.includes("menu__link")
      )
        return;
      inner.classList.remove("_active");
      target.classList.remove("_active");
      headerSubs.forEach((element) => {
        element.classList.remove("_active");
      });
      headerItems.forEach((element) => {
        element.classList.remove("_active");
      });
    });
    headerSubs.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (!element.classList.contains("_active")) {
          headerSubs.forEach((element) => {
            element.classList.remove("_active");
          });
          e.target.classList.add("_active");
          headerItems.forEach((element) => {
            element.classList.remove("_active");
          });
          document
            .querySelector(`[data-selector='${e.target.dataset.hassub}']`)
            .classList.add("_active");
          inner.classList.add("_active");
          isActive[0] = true;
        } else {
          e.target.classList.remove("_active");

          document
            .querySelector(`[data-selector='${e.target.dataset.hassub}']`)
            .classList.remove("_active");
          inner.classList.remove("_active");
          isActive[0] = true;
          isActive[0] = false;
        }
      });
    });
    inner.addEventListener("click", (e) => {
      isActive[1] = true;

      inner.classList.add("_active");
      return isActive;
    });

    // inner.addEventListener("mouseleave", (e) => {
    //   isActive[1] = false;

    //   setTimeout(() => {
    //     if (!isActive.includes(true)) {
    //       inner.classList.remove("_active");
    //     }
    //   }, 500);
    // });
  } else {
    const catalog = document.querySelector(".js-catalog-list");
    let headerHeight = document
      .querySelector("header")
      .getBoundingClientRect().height;

    headerSubs.forEach((element) => {
      const backBtn = document.querySelectorAll(
        `[data-selector='${element.dataset.hassub}'] .header-sublist__back`
      );
      const closeBtn = document.querySelector(
        `[data-selector='${element.dataset.hassub}'] .header-sublist__close`
      );
      backBtn.forEach((el) => {
        el.addEventListener("click", function (e) {
          inner.classList.remove("_active");
        });
      });
      closeBtn.addEventListener("click", function (e) {
        menuClose();
      });
      if (element.dataset.hassub === "catalog-sublist") {
        element.classList.remove("_active");
        document.querySelector(".catalog-sublist").classList.remove("_active");
        backBtn.forEach((el) => {
          el.addEventListener("click", function (e) {
            document
              .querySelector(".catalog-sublist__item._active")
              .classList.remove("_active");
          });
        });

        document
          .querySelectorAll(".catalog-sublist__item._active")
          .forEach((el) => {
            el.classList.remove("_active");
          });
        element.addEventListener("click", function (e) {
          document.documentElement.setAttribute(
            "style",
            `--header: ${
              document.documentElement.clientHeight - headerHeight
            }px`
          );
          element.classList.toggle("_active");

          document
            .querySelector(`[data-selector='${element.dataset.hassub}']`)
            .classList.toggle("_active");

          if (element.classList.contains("_active")) {
            document.documentElement.classList.add("lock");
          } else {
            document.documentElement.classList.remove("lock");
          }
        });
      } else {
        element.addEventListener("click", (e) => {
          document.documentElement.setAttribute(
            "style",
            `--header: ${
              document.documentElement.clientHeight - headerHeight
            }px`
          );
          inner.classList.add("_active");
          headerSubs.forEach((element) => {
            element.classList.remove("_active");
          });
          headerItems.forEach((element) => {
            element.classList.remove("_active");
          });
          inner.classList.add("_active");
          e.target.classList.add("_active");
          document
            .querySelector(`[data-selector='${e.target.dataset.hassub}']`)
            .classList.add("_active");
        });
      }
    });
  }
}

const headerCatalog = document.querySelector(".js-catalog-list");
if (headerCatalog) {
  const catalogLinks = document.querySelectorAll("[data-sublist]");
  const catalogBodys = document.querySelectorAll("[data-subid]");
  let activeItems = [catalogLinks[0], catalogBodys[0]];
  const linksHide = document.querySelectorAll(".header-sublist__link");
  if (window.innerWidth > 1365) {
    linksHide.forEach((element) => {
      element.addEventListener("click", function (e) {
        activeItems.forEach((item) => {
          item.classList.remove("_active");
        });
      });
    });
  }
  catalogLinks.forEach((element) => {
    if (window.innerWidth > 1365) {
      element.addEventListener("mouseenter", function () {
        activeItems.forEach((item) => {
          item.classList.remove("_active");
        });
        this.classList.add("_active");
        catalogBodys[this.dataset.sublist].classList.add("_active");
        activeItems = [this, catalogBodys[this.dataset.sublist]];
      });
    } else {
      element.addEventListener("click", function () {
        activeItems.forEach((item) => {
          item.classList.remove("_active");
        });
        this.classList.add("_active");
        catalogBodys[this.dataset.sublist].classList.add("_active");
        activeItems = [this, catalogBodys[this.dataset.sublist]];
      });
    }
  });
}
export const initViedos = (parent) => {
  const inframes = parent.querySelectorAll(
    "iframe[data-src^='https://www.youtube.com/'], iframe[src^='https://player.vimeo.com/']"
  );
  if (inframes.length) {
    const styles = document.createElement("link");
    styles.href = "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.css";
    styles.rel = "stylesheet";
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.js";
    document.body.append(script);
    document.body.append(styles);

    script.addEventListener("load", () => {
      // Setup the player
      let videos = [];

      inframes.forEach((element) => {
        const parentElement = element.parentElement;
        const childElements = parentElement.children;
        const text = element.dataset.text;

        const index = Array.prototype.indexOf.call(childElements, element);
        const div = document.createElement("div");
        div.insertAdjacentElement("afterbegin", element);
        div.setAttribute("data-player", true);

        if (text) {
          div.setAttribute("data-text", text);
        }

        div.setAttribute("data-plyr-provider", "youtube");
        div.classList.add("plyr-inner");

        // Найти элемент, перед которым нужно вставить новый элемент
        const referenceElement = parentElement.children[index];

        // Вставить новый элемент перед найденным элементом
        parentElement.insertBefore(div, referenceElement);

        const player = new Plyr(div, {
          muted: false,
          hideControls: false,
          // displayDuration: true,
          duration: true,
          // controls: controls,
        });
      });
      setTimeout(() => {
        window.addEventListener("scroll", () => {
          const btns = document.querySelectorAll(
            ".plyr__control.plyr__control--overlaid"
          );
          btns.forEach((element) => {
            if (element.parentElement.dataset.text) {
              element.setAttribute(
                "data-text",
                element.parentElement.dataset.text
              );
            }
          });
        });
      }, 10);
    });
  }
};

// const productBtn = document.querySelector(".product__btn");

// if (productBtn) {
//   const aside = document.querySelector(".aside");

//   productBtn.addEventListener("click", function () {
//     aside.classList.toggle("_active");
//     bodyLock();
//   });
//   const topAsideBtn = document.querySelector(".top-aside__btn");
//   topAsideBtn.addEventListener("click", function () {
//     aside.classList.remove("_active");
//     bodyUnlock();
//   });
// }
const initDatePickers = () => {
  const datePickers = document.querySelectorAll("[data-datepicker]");
  if (datePickers.length) {
    datePickers.forEach((element) => {
      let opt = {
        position: "bottom center",
      };
      if ((element.dataset.datepicker = "range")) {
        opt.range = true;
        opt.multipleDatesSeparator = "-";
      }
      new AirDatepicker(element, opt);
    });
  }
};
initDatePickers();
window.initDatePickers = initDatePickers;

const openItems = document.querySelectorAll("[data-open]");
if (openItems) {
  openItems.forEach((element) => {
    const item = document.querySelector(
      `[data-item='${element.dataset.open}']`
    );

    if (item) {
      const close = document.querySelector(
        `[data-item-close=${element.dataset.open}]`
      );
      console.log(close);
      element.addEventListener("click", function (e) {
        if (item) {
          item.classList.add("_active");
          bodyLock();
        }
      });
      close.addEventListener("click", function (e) {
        if (item) {
          item.classList.remove("_active");
          bodyUnlock();
        }
      });
    }
  });
}

const typeItems = document.querySelectorAll(".js-type");
if (typeItems[0]) {
  typeItems.forEach((element) => {
    const btns = document.querySelectorAll(".js-type-item");
    let activeBtn = btns[1];
    btns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        element.classList.remove(`${activeBtn.dataset.type}`);
        activeBtn.classList.remove("_active");
        activeBtn = e.target;
        element.classList.add(`${activeBtn.dataset.type}`);
        activeBtn.classList.add("_active");
      });
    });
  });
}

const initZoom = () => {
  let slideElements = document.getElementsByClassName("js-kit-slide");

  if (slideElements && window.innerWidth > 992) {
    // Add event listeners to each slide element
    Array.from(slideElements).forEach(function (slideElement) {
      slideElement.addEventListener("mousemove", function (e) {
        zoom(e, slideElement);
      });
    });

    // Zoom function
    function zoom(e, zoomer) {
      let offsetX, offsetY;
      e.offsetX
        ? (offsetX = e.offsetX)
        : (offsetX = e.touches ? e.touches[0].pageX : 0);
      e.offsetY
        ? (offsetY = e.offsetY)
        : (offsetY = e.touches ? e.touches[0].pageY : 0);
      let x = (offsetX / zoomer.offsetWidth) * 100;
      let y = (offsetY / zoomer.offsetHeight) * 100;
      zoomer.style.backgroundPosition = x + "% " + y + "%";
    }
  }
};
initZoom();
window.initZoom = initZoom;

const btnBuyList = document.querySelectorAll(".js-btn-buy");

btnBuyList.forEach(function (btnBuy) {
  btnBuy.addEventListener("click", function () {
    btnBuy.textContent = "В корзине";
  });
});

const initInputFiles = () => {
  const loaders = document.querySelectorAll(".file-loader");

  loaders.forEach((loader) => {
    const dropBox = loader.querySelector(".file-loader__row");
    const input = loader.querySelector(".file-loader__input");
    const files = loader.querySelector(".file-loader__files");
    const errors = loader.querySelector(".file-loader__error");
    const errorsTextEl = document.querySelector("#errors-code");
    const maxSize = errorsTextEl.getAttribute("data-size");
    const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
    const fileTypeError = errorsTextEl.getAttribute("data-fileType");
    const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
    const maxFiles = errorsTextEl.getAttribute("data-max");

    const dt = new DataTransfer();
    let errorsArr = [];
    const imageType = /image.*/;
    const videoType = /video.*/;
    const fileType = /application.*/;

    const previewFile = (fileList) => {
      const filesArr = [...fileList];

      filesArr.forEach((file) => {
        const fReader = new FileReader();
        if (loader.dataset.type === "images") {
          fReader.readAsDataURL(file);
          fReader.onloadend = () => {
            const wrap = document.createElement("div");
            wrap.classList.add("file-loader__result");
            const close = document.createElement("button");
            const inp = document.createElement("input");
            close.classList.add("close");
            close.setAttribute("type", "button");
            inp.setAttribute("type", "file");

            if (file.type.match(imageType)) {
              const img = document.createElement("img");
              img.src = fReader.result;
              files.appendChild(wrap).appendChild(img);
              wrap.classList.add("image");
            } else {
              const video = document.createElement("video");
              video.src = fReader.result;
              files.appendChild(wrap).appendChild(video);
              wrap.classList.add("video");
            }
            if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
              files.appendChild(wrap).appendChild(close);
              close.addEventListener("click", (e) => {
                // eslint-disable-next-line no-use-before-define
                deleteFile(e.target.parentNode);
                e.preventDefault();
                e.stopPropagation();
              });
            }

            const image = new Image();
            image.src = fReader.result;
          };
        } else if (loader.dataset.type === "files") {
          fReader.readAsDataURL(file);
          fReader.onloadend = () => {
            const wrap = document.createElement("div");
            wrap.setAttribute(
              "class",
              "file-loader__result  file-loader__result--file"
            );
            const close = document.createElement("button");
            const name = document.createElement("p");
            close.classList.add("close");
            name.textContent = file.name;
            wrap.appendChild(name);
            wrap.appendChild(close);
            files.appendChild(wrap);
            if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
              files.appendChild(wrap).appendChild(close);
              close.addEventListener("click", (e) => {
                // eslint-disable-next-line no-use-before-define
                deleteFile(e.target.parentNode);
                e.preventDefault();
                e.stopPropagation();
              });
            }
          };
        } else {
          console.log("Не указан тип загружаемых файлов, превью не работает!");
        }
      });
    };

    const createError = () => {
      if (errorsArr.length) {
        errors.classList.add("active");

        errorsArr.forEach((string) => {
          const p = document.createElement("p");
          p.textContent = string;
          errors.appendChild(p);
        });
      }
      errorsArr = [];
    };

    const checkErrors = () => {
      if (errorsArr[0]) {
        createError();
      } else {
        errors.classList.remove("active");

        errors.innerHTML = "";
      }
    };

    const refreshFiles = () => {
      // Clear files
      files.innerHTML = "";

      // Make all files

      Array.from(input.files).forEach((file) => {
        if (loader.dataset.type === "images") {
          if (dt.files.length > maxFiles - 1) {
            errorsArr.push(`$ ${maxFilesLenghtError}`);
            return;
          }
          if (file.size > maxSize) {
            errorsArr.push(`${file.name} ${maxSizeError}`);
            return;
          }

          if (file.type.match(imageType)) {
            dt.items.add(file);
            return;
          }
          if (file.type.match(videoType)) {
            dt.items.add(file);
            return;
          }
        } else if (loader.dataset.type === "files") {
          if (dt.files.length > maxFiles - 1) {
            errorsArr.push(`$ ${maxFilesLenghtError}`);
            return;
          }
          if (file.size > maxSize) {
            errorsArr.push(`${file.name} ${maxSizeError}`);
            return;
          }

          if (file.type.match(fileType)) {
            console.log("123");
            dt.items.add(file);
            return;
          }
        }
        errorsArr.push(`${file.name} ${fileTypeError}`);
      });
      input.files = dt.files;

      previewFile(dt.files);

      if (input.files.length > 0) {
        loader.classList.add("field");
      } else {
        loader.classList.remove("field");
      }
      checkErrors();
    };

    function getChildElementIndex(element) {
      return Array.prototype.indexOf.call(element.parentNode.children, element);
    }
    const deleteFile = (element, elIndex) => {
      const newDt = new DataTransfer();

      const index = elIndex || getChildElementIndex(element);
      // Copy all besides deleted
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= input.files.length - 1; i++) {
        if (i !== index) newDt.items.add(input.files[i]);
      }

      // Replace
      dt.clearData();

      input.files = newDt.files;

      refreshFiles();
    };

    dropBox.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      refreshFiles();
      e.preventDefault();
    });

    input.addEventListener("change", (e) => {
      if (input.files.length === 0) {
        input.files = dt.files;
        return;
      }
      refreshFiles();
      e.preventDefault();
    });
  });
};
initInputFiles();
window.initInputFiles = initInputFiles;

const arrows = document.querySelectorAll(".pagging__arrow");
const items = document.querySelectorAll(".pagging__item");

if (arrows) {
  // Функция для добавления класса active к элементам
  function addActiveClass(element) {
    element.classList.add("active");
  }

  // Функция для удаления класса active с элементов
  function removeActiveClass(element) {
    element.classList.remove("active");
  }

  // Обработчик события click для элементов .pagging__arrow
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", function () {
      // Удаляем класс active с всех элементов .pagging__arrow и .pagging__item
      arrows.forEach((a) => removeActiveClass(a));
      items.forEach((i) => removeActiveClass(i));
      // Добавляем класс active к выбранному элементу .pagging__arrow
      addActiveClass(arrow);
    });
  });

  // Обработчик события click для элементов .pagging__item
  items.forEach((item) => {
    item.addEventListener("click", function () {
      // Удаляем класс active с всех элементов .pagging__arrow и .pagging__item
      arrows.forEach((a) => removeActiveClass(a));
      items.forEach((i) => removeActiveClass(i));
      // Добавляем класс active к выбранному элементу .pagging__item
      addActiveClass(item);
    });
  });
}
