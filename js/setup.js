'use strict';

(function () {

  // Кастомизация волшебника
  // FIXME: Переписать с замыканиями, как положенно

  var setupWizard = document.querySelector('.setup-player');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFireballInput = document.querySelector('input[name=fireball-color]');

  wizardCoat.addEventListener('click', function () {
    var randomColor = window.wizard.getRandomValue(window.wizard.colorCoat);
    wizardCoat.style.fill = randomColor;
    wizardCoatInput.value = randomColor;
  });

  wizardEyes.addEventListener('click', function () {
    var randomColor = window.wizard.getRandomValue(window.wizard.colorEyes);
    wizardEyes.style.fill = randomColor;
    wizardEyesInput.value = randomColor;
  });

  wizardFireball.addEventListener('click', function () {
    var randomColor = window.wizard.getRandomValue(window.wizard.colorFireball);
    wizardFireball.style.background = randomColor;
    wizardFireballInput.value = randomColor;
  });

})();
