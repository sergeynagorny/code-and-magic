'use strict';

// mywizard.js
(function () {
  var wizardElement = document.querySelector('.setup-player');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  var wizardFierballElement = wizardElement.querySelector('.setup-fireball-wrap');
  var wizardNameInput = document.querySelector('.setup-user-name');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFierballInput = document.querySelector('input[name=fireball-color]');
  var wizardForm = document.querySelector('.setup-wizard-form');

  var wizardData = {
    name: wizardNameInput.value,
    colorCoat: wizardCoatInput.value,
    colorEyes: wizardEyesInput.value,
    colorFireball: wizardFierballInput.value,
  };

  var wizard = new window.Wizard(wizardData);

  wizardNameInput.addEventListener('input', function () {
    wizard.setName(wizardNameInput.value);
  });

  wizardCoatElement.addEventListener('click', function () {
    var newColor = wizard.changeColorCoat();
    wizardCoatElement.style.fill = newColor;
    wizardCoatInput = newColor;
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = wizard.changeColorEyes();
    wizardEyesElement.style.fill = newColor;
    wizardEyesInput = newColor;
  });

  wizardFierballElement.addEventListener('click', function () {
    var newColor = wizard.changeColorFireball();
    wizardFierballElement.style.background = newColor;
    wizardFierballInput = newColor;
  });

  wizardForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(wizardForm), window.dialog.close, window.backend.errorHandler);
  });

  window.myWizard = wizard;
})();
