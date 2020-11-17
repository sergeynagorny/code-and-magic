'use strict';

(function () {

  var KEYCODE = {
    ENTER: 13,
    ESC: 27,
  };

  window.utils = {
    isEscKeycode: function (evt) {
      return evt.keyCode === KEYCODE.ESC;
    },

    isEnterKeycode: function (evt) {
      return evt.keyCode === KEYCODE.ENTER;
    },
  };

})();
