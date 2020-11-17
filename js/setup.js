'use strict';

(function () {

  var setupPopup = document.querySelector('.setup');

  window.wizard = {
    fisrtName: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    lastName: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    colorCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    colorEyes: ['black', 'red', 'blue', 'yellow', 'green'],
    colorFireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],

    getRandomValue: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
  };


  var generateRandomWizards = function (count) {
    var randomWizards = [];
    for (var i = 0; i < count; i++) {
      randomWizards.push({
        name: window.wizard.getRandomValue(window.wizard.fisrtName) + ' ' + window.wizard.getRandomValue(window.wizard.lastName),
        colorCoat: window.wizard.getRandomValue(window.wizard.colorCoat),
        colorEyes: window.wizard.getRandomValue(window.wizard.colorEyes),
      });
    }
    return randomWizards;
  };


  var createSimilarWizards = function (randomWizards) {
    var similarWizardTempalte = document.querySelector('#similar-wizard-template').content;
    var similarWizardItem = similarWizardTempalte.querySelector('.setup-similar-item');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < randomWizards.length; i++) {
      var wizard = similarWizardItem.cloneNode(true);
      var wizardName = wizard.querySelector('.setup-similar-label');
      var wizardCoat = wizard.querySelector('.wizard-coat');
      var wizardEyes = wizard.querySelector('.wizard-eyes');

      wizardName.textContent = randomWizards[i].name;
      wizardCoat.style.fill = randomWizards[i].colorCoat;
      wizardEyes.style.fill = randomWizards[i].colorEyes;

      fragment.appendChild(wizard);
    }

    return fragment;
  };

  var renderSimilarWizards = function (count) {
    var similarWizards = setupPopup.querySelector('.setup-similar');
    var similarWizardsList = similarWizards.querySelector('.setup-similar-list');

    similarWizards.classList.remove('hidden');
    similarWizardsList.appendChild(createSimilarWizards(generateRandomWizards(count)));
  };

  renderSimilarWizards(4);

})();

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
