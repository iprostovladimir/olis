// Подключение из node_modules
import * as noUiSlider from "nouislider";

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

// export function rangeInit() {
//   const priceSliders = document.querySelectorAll(".aside__spoller-range");
//   priceSliders.forEach((priceSlider) => {
//     let textFrom = priceSlider.getAttribute("data-from");
//     let textTo = priceSlider.getAttribute("data-to");
//     noUiSlider.create(priceSlider, {
//       start: [120, 20000], // [0,200000]
//       connect: true,
//       range: {
//         min: 0,
//         max: 200000,
//       },
//       format: {
//         to: function (value) {
//           return Math.round(value); // Округление до целых чисел
//         },
//         from: function (value) {
//           return value;
//         },
//       },
//     });
//     const priceStart = document.getElementById("price-start");
//     const priceEnd = document.getElementById("price-end");
//     priceSlider.noUiSlider.on("update", function (values) {
//       textFrom = Math.round(values[0]); // Округление до целых чисел
//       textTo = Math.round(values[1]); // Округление до целых чисел
//       priceStart.value = textFrom;
//       priceEnd.value = textTo;
//     });
//     priceStart.value = textFrom; // Добавление символа рубля
//     priceEnd.value = textTo; // Добавление символа рубля
//   });
// }
// rangeInit();

export function rangeInit() {
  const priceSliders = document.querySelectorAll(".aside__spoller-range");

  priceSliders.forEach((priceSlider) => {
    let textFrom = priceSlider.getAttribute("data-from");
    let textTo = priceSlider.getAttribute("data-to");
    let maxRange = priceSlider.getAttribute("data-max");

    const priceStart =
      priceSlider.nextElementSibling.querySelector(".price-start");
    const priceEnd = priceSlider.nextElementSibling.querySelector(".price-end");

    noUiSlider.create(priceSlider, {
      start: [Number(textFrom), Number(textTo)],
      connect: true,
      range: {
        min: 0,
        max: Number(maxRange),
      },
      format: wNumb({
        decimals: 0,
        thousand: " ",
        to: function (value) {
          return Math.round(value);
        },
        from: function (value) {
          return value;
        },
      }),
    });

    priceSlider.noUiSlider.on("update", function (values) {
      textFrom = values[0];
      textTo = values[1];
      priceStart.value = textFrom;
      priceEnd.value = textTo;
    });

    priceSlider.noUiSlider.on("change", function (values) {
      const updatedTextFrom = values[0];
      const updatedTextTo = values[1];
      console.log(updatedTextFrom, values[0]);

      priceSlider.setAttribute("data-from", updatedTextFrom);
      priceSlider.setAttribute("data-to", updatedTextTo);
    });
  });
}

rangeInit();
