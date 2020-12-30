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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formHandler; });
/**
 * Form handler to validate and submit 
 * @param {Object} form 
 */
const formHandler = (form) => {

    Array.prototype.slice.call(form)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated');
            }, false)
        })

};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formHandler__ = __webpack_require__(0);


/**
 * Get Values from URL to retrieve the email
 */

const queryString = window.location.search;
let searchParams = new URLSearchParams(queryString);
const email = searchParams.get('email');

/**
 * Get DOM elements to update according results from fetch API
 */
let spinnerElement = document.querySelector('.spinner');
let noResultsElement = document.querySelector('.no-results');
let resultsElement = document.querySelector('.result');
let searchAgainWrapper = document.querySelector('.search-again-wrapper');

let cardElement = document.querySelector('.result .card');
let form = document.querySelectorAll('.email-form')

/**
 * Fetch data from api
 * @param {String} email 
 */
const getData = (email) => {
    fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`)
    .then(response => response.json())
    .then(data => {
        spinnerElement.classList.add('d-none');
        if (data.length === 0) {
            noResultsElement.classList.remove('d-none');
        } else {
            resultsElement.classList.remove('d-none');
            searchAgainWrapper.classList.remove('d-none');
            // Create component that renders card results
            let cardComponent =
                ` <div class="card-body">
                <div class="row mb-4">
                    <div class="col-2 d-none d-sm-block">
                        <div class="card-icon-profile">
                            <img src="assets/imgs/SVGs/icn_person.svg" />
                        </div>
                    </div>
                    <div class="col-md-10 col-sm-12">
                        <div class="row mb-4">
                            <div class="col-12">
                                <h2 class="card-title">${data.first_name} ${data.last_name}</h2>
                                <p class="card-text">${data.description}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="row mb-4">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Address</h5>
                                        <p class="card-text">${data.address}</p>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Email</h5>
                                        <p class="card-text">${data.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="row mb-4">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Phone number</h5>
                                        <div class="card-info-wrappers">
                                            <p class="color-blue">${data.phone_numbers[0]}</p>
                                            <p class="color-blue">${data.phone_numbers[1]}</p>
                                            <p class="color-blue">${data.phone_numbers[2]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-12">
                                        <h5 class="card-subtitle">Relatives</h5>
                                        <div class="card-info-wrappers">
                                            <p>${data.relatives[0]}</p>
                                            <p>${data.relatives[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>`
            cardElement.innerHTML = cardComponent;
        }
    })
}

/**
 * Make functions available
 */
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formHandler__["a" /* formHandler */])(form);
getData(email);


/***/ })
/******/ ]);