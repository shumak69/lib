/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head-active';
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content-active';
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;

  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (isCreated) {
  const scrolls = calcScroll();

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  for (let i = 0; i < this.length; i++) {
    const target = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrolls}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(item => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(item).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
        document.body.style.marginRight = `0`;

        if (isCreated) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
        document.body.style.marginRight = `0`;

        if (isCreated) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').replace(/#/, '')); // btns = {count: num, settings: [[text, classname=[], close, cb]]}

    const buttons = [];

    for (let j = 0; j < btns.settings.length; j++) {
      const {
        settings
      } = btns;
      const setting = settings[j];
      let btn = document.createElement('button');
      btn.classList.add('btn', ...setting[1]);
      btn.textContent = setting[0];

      if (setting[2]) {
        btn.setAttribute('data-close', 'true');
      }

      if (setting[3] && typeof setting[3] === 'function') {
        btn.addEventListener('click', setting[3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;
    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/slider.js":
/*!*****************************************!*\
  !*** ./src/js/lib/components/slider.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.slider = function (auto) {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesField = this[i].querySelector('.carousel-slides');
    const dots = this[i].querySelectorAll('.carousel-indicators li');
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(item => {
      item.style.width = width;
    });
    let offset = 0;
    let slideIndex = 0;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();

      if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      dots.forEach(item => {
        item.classList.remove('active');
      });
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault();

      if (offset == 0) {
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }

      dots.forEach(item => {
        item.classList.remove('active');
      });
      dots[slideIndex].classList.add('active');
    });
    document.querySelector('.carousel-indicators').addEventListener('click', e => {
      if (e.target.getAttribute('data-slide-to')) {
        slideIndex = +e.target.getAttribute('data-slide-to');
        dots.forEach(item => {
          item.classList.remove('active');
        });
        dots[slideIndex].classList.add('active');
        offset = +width.replace(/\D/g, '') * slideIndex;
        slidesField.style.transform = `translateX(-${offset}px)`;
      }
    });

    if (typeof auto === 'number') {
      let interval;

      const activateAnimation = () => {
        interval = setInterval(() => {
          this[i].querySelector('[data-slide="next"]').click();
        }, auto);
      };

      activateAnimation();
      this[i].addEventListener('mouseenter', () => {
        clearInterval(interval);
      });
      this[i].addEventListener('mouseleave', () => {
        activateAnimation();
      });
    }
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').slider();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createSlider = function (_ref) {
  let {
    img,
    prev,
    next,
    auto
  } = _ref;
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  const carouselDots = [];
  carousel.innerHTML = `
    <ol class="carousel-indicators">
        </ol>
        <div class="carousel-inner">
            <div class="carousel-slides">
            </div>
        </div>
        <a href="#" class="carousel-prev" data-slide="prev">
            <span class="carousel-prev-icon">${prev}</span>
        </a>
        <a href="#" class="carousel-next" data-slide="next">
            <span class="carousel-next-icon">${next}</span>
        </a>
        `; // console.log(carouselDots);

  for (let i = 0; i < Object.keys(img).length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i);

    if (i == 0) {
      dot.classList.add('active');
    }

    carousel.querySelector('.carousel-indicators').appendChild(dot);
    carouselDots.push(dot);
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    item.innerHTML = `<img src="${img[i]}" alt="photo">`;
    carousel.querySelector('.carousel-slides').appendChild(item);
  } // document.querySelector('.carousel-indicators').innerHTML = carouselDots;


  document.body.appendChild(carousel);

  if (typeof auto === 'number') {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').slider(auto);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item-active').siblings().removeClass('tab-item-active').closest('.tab').find('.tab-content').removeClass('tab-content-active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content-active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/action */ "./src/js/lib/modules/action.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/slider */ "./src/js/lib/components/slider.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/request */ "./src/js/lib/services/request.js");
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_services_request__WEBPACK_IMPORTED_MODULE_12__);













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/action.js":
/*!**************************************!*\
  !*** ./src/js/lib/modules/action.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  console.log(this);
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const array = copyObj[i].querySelectorAll(selector);

    if (array.length == 0) {
      continue;
    }

    for (let j = 0; j < array.length; j++) {
      this[counter] = array[j];
      counter++;
    }

    numberOfItems += array.length;
  }

  this.length = numberOfItems;
  console.log(numberOfItems, Object.keys(this).length);

  for (; numberOfItems < Object.keys(this).length; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) === null) {
      return this;
    } else {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }

  for (; counter < Object.keys(this).length; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  const newObj = [...this[0].parentElement.children].filter(item => item !== this[0]);

  for (let i = 0; i < this.length; i++) {
    delete this[i];
  }

  Object.assign(this, newObj);
  this.length = newObj.length;
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (propetry) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].getAttribute(propetry)) {
      return this[i].getAttribute(propetry);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (propetry, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].getAttribute(propetry)) {
      this[i].setAttribute(propetry, value);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (propetry) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].getAttribute(propetry)) {
      this[i].removeAttribute(propetry);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.add(...arguments);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.remove(...arguments);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList) {
      this[i].classList.toggle(classNames);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / dur, 1);
    cb(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
  let fin = arguments.length > 2 ? arguments[2] : undefined;

  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      console.log('1');
      this[i].style.display = display || 'block';

      const _fadeIn = complection => {
        this[i].style.opacity = complection;
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      console.log('2');

      const _fadeOut = complection => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
          this[i].style.display = 'none';
        }
      };

      const ani = this.animateOverTime(dur, _fadeOut, fin);
      requestAnimationFrame(ani);
    }

    console.log(this.length + 'f');
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/request.js":
/*!****************************************!*\
  !*** ./src/js/lib/services/request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 // $('button').on('click', function () {
//     $('div').eq(1).toggleClass('active');
// });
// $('div').click(function () {
//     console.log($(this).index());
// });
// $('button').click(function () {
//     $(this).fadeOut(580);
// });

$('#first').click(function () {
  $('div').eq(1).fadeToggle(800);
});
$('[data-count="second"]').click(function () {
  $('div').eq(2).fadeToggle(800);
});
$('button').eq(3).on('click', () => {
  $('.w-500').fadeToggle(800);
}); // $('.wrapper').html(`
//     <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//         <a href="#" class="dropdown-item">Action</a>
//         <a href="#" class="dropdown-item">Effects</a>
//         <a href="#" class="dropdown-item">Style</a>
//     </div>
//     </div>`
// );
// $('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  btns: {
    settings: [['Close', ['btn-danger', 'mr-10'], true], ['Save changes', ['btn-success'], false, () => {
      alert('Данные сохранены');
    }], ['Another btn', ['btn-warning', 'ml-10'], false, () => {
      alert('hello');
    }]]
  }
}));
$('').createSlider({
  img: ['https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg', 'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg', 'https://pixlr.com/images/best-photo-editor-cover.jpg'],
  prev: '&lt;',
  next: '&gt;',
  auto: 3000
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map