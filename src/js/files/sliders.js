/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
import { initViedos } from "./script.js";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import "swiper/css";

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add("swiper");
      slider.classList.add("swiper-wrapper");
      for (const slide of slider.children) {
        slide.classList.add("swiper-slide");
      }
    });
  }
}
// Инициализация слайдеров
export function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();
  let kitThumbs = document.querySelector(".thumbslider-kit");
  let kitGallery = document.querySelector(".js-slider-kit");

  // Перечень слайдеров
  if (document.querySelector(".swiper")) {
    const sliderInfo = new Swiper(".js-info-slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      slidesPerView: 1.25,
      spaceBetween: 20,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".info-reviews__arrow-next",
        prevEl: ".info-reviews__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.15,
          spaceBetween: 15,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1.25,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1.25,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 1.25,
          spaceBetween: 20,
        },
      },
      on: {},
    });
    const sliderReviews = new Swiper(".js-slider-reviews", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
			  effect: 'fade',
			  autoplay: {
				  delay: 3000,
				  disableOnInteraction: false,
			  },
			  */
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      // autoHeight: true,
      loop: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".reviews__swiper-arrow-next",
        prevEl: ".reviews__swiper-arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2.2,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {},
    });
    const sliderReviewsTwo = new Swiper(".js-slider-reviewsTwo", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
			  effect: 'fade',
			  autoplay: {
				  delay: 3000,
				  disableOnInteraction: false,
			  },
			  */
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      slidesPerView: 3,
      spaceBetween: 30,
      // autoHeight: true,
      loop: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".reviews__swiper-arrow-next",
        prevEl: ".reviews__swiper-arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1360: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1500: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      on: {},
    });
    const sliderPopular = new Swiper(".js-slider-popular", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: true,
      loop: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".popular__arrow-next",
        prevEl: ".popular__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
          autoHeight: true,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },

        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1740: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      on: {},
    });
    const sliderThumbs = new Swiper(".js-slider-thumbs", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".thumbs-reviews__arrow-next",
        prevEl: ".thumbs-reviews__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 3.2,
          spaceBetween: 15,
          autoHeight: true,
        },
        768: {
          slidesPerView: 4.2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1740: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {},
    });
    const sliderGallery = new Swiper(".js-slider-gallery", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Thumbs, A11y],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      thumbs: {
        swiper: {
          el: ".js-slider-thumbs",
          slidesPerView: 3,
          spaceBetween: 30,
          breakpoints: {
            320: {
              slidesPerView: 3.2,
              spaceBetween: 15,
              autoHeight: true,
            },
            768: {
              slidesPerView: 4.2,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1740: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        },
      },
      on: {},
    });

    const sliderThumbsCards = new Swiper(".js-slider-thumbscards", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      // loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      // navigation: {
      //   nextEl: ".thumbs-reviews__arrow-next",
      //   prevEl: ".thumbs-reviews__arrow-prev",
      // },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 15,
          autoHeight: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1740: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {},
    });
    const sliderGalleryCards = new Swiper(".js-slider-gallerycards", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Thumbs, EffectFade, A11y],
      effect: "fade",
      // autoplay: {
      // 	delay: 3000,
      // 	disableOnInteraction: false,
      // },
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 100,
      // loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".gallery-reviews__arrow-next",
        prevEl: ".gallery-reviews__arrow-prev",
      },
      thumbs: {
        swiper: {
          el: ".js-slider-thumbscards",
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {},
    });

    const kitThumbs = new Swiper(".js-thumbslider-kit", {
      // Подключаем модули слайдера
      // для конкретного случая

      modules: [Navigation, Pagination, Thumbs],
      /*
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
      observer: true,
      observeParents: true,
      // slidesPerView: 3,
      // spaceBetween: 30,
      // loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: ".slider-nav__progress",
        type: "progressbar",
      },
      // Arrows
      navigation: {
        nextEl: ".thumbslider-kit__arrow-next",
        prevEl: ".thumbslider-kit__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 15,
          autoHeight: true,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          direction: "vertical",
        },
        1740: {
          slidesPerView: 3,
          spaceBetween: 30,
          direction: "vertical",
        },
      },

      on: {},
    });
    const kitGallery = new Swiper(".js-slider-kit", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Thumbs],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      // loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      thumbs: {
        swiper: {
          el: ".js-thumbslider-kit",
          slidesPerView: 3,
          spaceBetween: 30,
          breakpoints: {
            320: {
              slidesPerView: 3,
              spaceBetween: 15,
              autoHeight: true,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
              direction: "vertical",
            },
            1740: {
              slidesPerView: 3,
              spaceBetween: 30,
              direction: "vertical",
            },
          },
        },
      },

      on: {},
    });
    const sliderProject = new Swiper(".js-slider-project", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      // slidesPerView: "auto",
      slidesPerView: 2.01,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,
      freeMode: true,
      centeredSlides: true,
      initialSlide: 1,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".project__arrow-next",
        prevEl: ".project__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.11,
          spaceBetween: 15,
          autoHeight: true,
          initialSlide: 0,
        },

        480: {
          slidesPerView: 1.1,
          spaceBetween: 15,
          autoHeight: true,
          initialSlide: 0,
        },
        768: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1.25,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 2.01,
          spaceBetween: 15,
        },
        1500: {
          slidesPerView: 2.01,
          spaceBetween: 30,
        },
      },
      on: {},
    });
    const kitThumbsVideo = new Swiper(".js-thumbslidervideo-kit", {
      // Подключаем модули слайдера
      // для конкретного случая

      modules: [Navigation, Pagination, Thumbs],
      /*
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/
      observer: true,
      observeParents: true,
      // slidesPerView: 3,
      // spaceBetween: 30,
      // loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: ".slider-nav__progress",
        type: "progressbar",
      },
      // Arrows
      navigation: {
        nextEl: ".thumbslider-kit__arrow-next",
        prevEl: ".thumbslider-kit__arrow-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 15,
          autoHeight: true,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
          direction: "vertical",
        },
        1740: {
          slidesPerView: 4,
          spaceBetween: 30,
          direction: "vertical",
        },
      },

      on: {},
    });
    const kitGalleryVideo = new Swiper(".js-slidervideo-kit", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Thumbs, A11y],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      // loop: true,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      thumbs: {
        swiper: {
          el: ".js-thumbslidervideo-kit",
          slidesPerView: 4,
          spaceBetween: 30,
          breakpoints: {
            320: {
              slidesPerView: 3,
              spaceBetween: 15,
              autoHeight: true,
            },
            480: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
              direction: "vertical",
            },
            1740: {
              slidesPerView: 4,
              spaceBetween: 30,
              direction: "vertical",
            },
          },
        },
      },

      on: {
        slideChange: function (swiper) {
          initViedos(swiper.slides[swiper.realIndex]);
        },
        init: function (swiper) {
          initViedos(swiper.slides[0]);
        },
      },
    });

    const sliderColumn = new Swiper(".js-slider-column", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, A11y],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      navigation: {
        nextEl: ".column-product__arrow-next",
        prevEl: ".column-product__arrow-prev",
      },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1.15,
      //     spaceBetween: 15,
      //     autoHeight: true,
      //   },
      //   768: {
      //     slidesPerView: 1.25,
      //     spaceBetween: 15,
      //   },
      //   992: {
      //     slidesPerView: 1.25,
      //     spaceBetween: 20,
      //   },
      //   1268: {
      //     slidesPerView: 1.25,
      //     spaceBetween: 20,
      //   },
      // },
      on: {},
    });
  }
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        loop: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
window.initSliders = initSliders;
