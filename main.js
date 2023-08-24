(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}t.p="";var r=function(){function t(e,n,r){var o=e.name,i=e.link;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=o,this._link=i,this._template=n,this._openImagePopup=r,this._newCard=this._getTemplate(),this._galleryItem=this._newCard.querySelector(".gallery__item"),this._galleryPhoto=this._newCard.querySelector(".gallery__photo"),this._btnDeleteCard=this._newCard.querySelector(".gallery__delete"),this._btnLikeCard=this._newCard.querySelector(".gallery__btn-like")}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.cloneNode(!0)}},{key:"_setData",value:function(){this._galleryItem.querySelector(".gallery__location").textContent=this._name,this._galleryPhoto.src=this._link,this._galleryPhoto.alt="Достопримечательность из ".concat(this._name)}},{key:"_handleClickDelete",value:function(){this._galleryItem.remove()}},{key:"_handleClickLike",value:function(t){t.target.classList.toggle("gallery__like_active")}},{key:"_setListeners",value:function(){var t=this;this._btnDeleteCard.addEventListener("click",(function(){return t._handleClickDelete()})),this._btnLikeCard.addEventListener("click",(function(e){return t._handleClickLike(e)})),this._galleryPhoto.addEventListener("click",(function(){return t._openImagePopup(t._name,t._link)}))}},{key:"createCard",value:function(){return this._setData(),this._setListeners(),this._newCard}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._activeButtonClass=e.activeButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){var n=this._formElement.querySelector("#error-".concat(t.id));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector("#error-".concat(t.id));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=" "}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_activeButtonSave",value:function(){this._buttonElement.classList.remove(this._activeButtonClass),this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_inactiveButtonSave",value:function(){this._buttonElement.classList.add(this._activeButtonClass),this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"resetFormErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideError(e)}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._activeButtonSave():this._inactiveButtonSave()}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=r,this._renderer=o,this._selector=n,this._container=this._getContainer()}var e,n;return e=t,(n=[{key:"_getContainer",value:function(){return document.querySelector(this._selector)}},{key:"setItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._initialArray.forEach((function(e){t._renderer(e)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function f(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var m=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),f(this,"_handleCloseByOverlay",(function(t){t.target===t.currentTarget&&n.close()})),f(this,"_handleCloseByButton",(function(){n.close()})),this._selector=e,this._popup=this._getPopup(),this._buttonClosePopup=this._popup.querySelector(".popup__btn-close")}var e,n;return e=t,(n=[{key:"_getPopup",value:function(){return document.querySelector(this._selector)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._buttonClosePopup.addEventListener("click",this._handleCloseByButton),this._popup.addEventListener("mousedown",this._handleCloseByOverlay)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}(this,t)});function u(t){var e,n=t.selector,r=t.submitFunction;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._submitFunction=r,e._form=e._popup.querySelector(".popup__form"),e._inputsList=e._form.querySelectorAll(".popup__input"),e._handleSubmit=e._handleSubmit.bind(d(e)),e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputsList.forEach((function(e){t._values[e.id]=e.value})),this._values}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this._submitFunction(this._getInputValues()),this.close()}},{key:"close",value:function(){_(g(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){_(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageImg=e._popup.querySelector(".popup-image__img"),e._popupImageAbout=e._popup.querySelector(".popup-image__about"),e}return e=u,(n=[{key:"open",value:function(t){k(P(u.prototype),"open",this).call(this),this._popupImageAbout.textContent=t.name,this._popupImageImg.src=t.link,this._popupImageImg.alt="Достопримечательность из: ".concat(t.name)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=this._getElement(e.profileNameSelector),this._aboutElement=this._getElement(e.profileAboutSelector)}var e,n;return e=t,(n=[{key:"_getElement",value:function(t){return document.querySelector(t)}},{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.nameProfile,n=t.aboutProfile;this._nameElement.textContent=e,this._aboutElement.textContent=n}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B=[{name:"Металлострой",link:t.p+"142874dacebb0dacfd97.jpg"},{name:"Озеро Байкал",link:t.p+"df895eb3f87f54f1d5d1.jpg"},{name:"Гамсутль",link:t.p+"13eae54e106c200f9f60.jpg"},{name:"Санкт-Петербург",link:t.p+"15ef3482f3ccdb97f121.jpg"},{name:"Москва",link:t.p+"e9fbdf808bbb16958504.jpg"},{name:"Архангельск",link:t.p+"9adc8ef9999a03d135fc.jpg"}],q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__btn-save",profileNameSelector:".profile__name",profileAboutSelector:".profile__about",popupImageSelector:".popup-image",popupNewImageSelector:".popup-newImage",popupProfileSelector:".popup-profile",gallerySelector:".gallery",inactiveButtonClass:"popup__btn-inactive",activeButtonClass:"popup__btn-save",inputErrorClass:"popup__input_type_error",errorClass:"popup__error-message_active",templateSelector:"#template-gallery"},T=document.querySelector(".profile__btn-edit"),R=document.querySelector(".popup-profile"),x=document.querySelector(".popup-profile__form"),D=x.querySelector(".popup__input_el_name-profile"),A=x.querySelector(".popup__input_el_about-profile"),F=document.querySelector(".profile__btn-add"),N=document.querySelector(".popup-newImage");function V(t,e){M.open({name:t,link:e})}function U(t,e,n){return new r(t,e,n).createCard()}T.addEventListener("click",(function(){var t=H.getUserInfo(),e=t.name,n=t.about;D.value=e,A.value=n,K.resetFormErrors(),K.toggleButtonState(),G.open()})),F.addEventListener("click",(function(){Q.resetFormErrors(),Q.toggleButtonState(),z.open()}));var M=new j(q.popupImageSelector);M.setEventListeners();var z=new S({selector:q.popupNewImageSelector,submitFunction:function(t){var e=U({name:t.nameNewImage,link:t.linkNewImage},q.templateSelector,V);J.setItem(e)}});z.setEventListeners();var G=new S({selector:q.popupProfileSelector,submitFunction:function(t){H.setUserInfo(t)}});G.setEventListeners();var H=new I(q),J=new c({items:B,renderer:function(t){var e=U(t,q.templateSelector,V);J.setItem(e)}},q.gallerySelector);J.renderItems();var K=new u(q,R);K.enableValidation();var Q=new u(q,N);Q.enableValidation()})();