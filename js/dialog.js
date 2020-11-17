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

})();

(function () {

  var dialog = document.querySelector('.setup');
  var dialogHandle = document.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      dialog.style.top = (dialog.offsetTop - shift.y) + 'px';
      dialog.style.left = (dialog.offsetLeft - shift.x) + 'px';
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
