'use strict';

(function () {

  // TODO:
  // Если диалог открыт, нажатие на кнопку сохранить приводит к отправке формы
  // Если диалог открыт и фокус находится на "Сохранить" нажатие на ENTER приводит к отправке формы

  var dialog = document.querySelector('.setup');
  var dialogBtnOpen = document.querySelector('.setup-open');
  var dialogBtnClose = document.querySelector('.setup-close');


  var dialogDefaultCoords = {
    x: window.getComputedStyle(dialog).left,
    y: window.getComputedStyle(dialog).top,
  };

  var setDefaultCoords = function () {
    dialog.style.left = dialogDefaultCoords.x;
    dialog.style.top = dialogDefaultCoords.y;
  };

  var onDialogEscPress = function (evt) {
    if (window.utils.isEscKeycode(evt) && evt.target.tagName.toLowerCase() !== 'input') {
      dialogClose();
    }
  };

  var dialogOpen = function () {
    setDefaultCoords();
    dialog.classList.remove('hidden');
    document.addEventListener('keydown', onDialogEscPress);
  };

  var dialogClose = function () {
    dialog.classList.add('hidden');
    document.removeEventListener('keydown', onDialogEscPress);
  };

  dialogBtnOpen.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeycode(evt)) {
      if (dialog.classList.contains('hidden')) {
        dialogOpen();
      } else {
        dialogClose();
      }
    }
  });

  dialogBtnClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterKeycode(evt)) {
      dialogClose();
    }
  });

  dialogBtnOpen.addEventListener('click', function () {
    dialogOpen();
  });

  dialogBtnClose.addEventListener('click', function () {
    dialogClose();
  });

  window.dialog = {
    close: dialogClose,
  };

})();

(function () {

  var dialog = document.querySelector('.setup');
  var dialogHandle = document.querySelector('.upload');

  var Coordinate = function (x, y) {
    this.x = x;
    this.y = y;
  };
  Coordinate.prototype = {
    update: function (x, y) {
      this.x = x;
      this.y = y;
    },
    shift: function (shiftX, shiftY) {
      this.shiftX = this.x - shiftX;
      this.shiftY = this.y - shiftY;
    },
  };

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = new Coordinate(evt.clientX, evt.clientY);
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      startCoords.shift(moveEvt.clientX, moveEvt.clientY);
      startCoords.update(moveEvt.clientX, moveEvt.clientY);

      dialog.style.left = (dialog.offsetLeft - startCoords.shiftX) + 'px';
      dialog.style.top = (dialog.offsetTop - startCoords.shiftY) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onCLickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onCLickPreventDefault);
        };
        dialogHandle.addEventListener('click', onCLickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
