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

  var setup = document.querySelector('.setup');
  var setupBtnOpen = document.querySelector('.setup-open');
  var setupBtnClose = document.querySelector('.setup-close');

  var KEYCODE = {
    ENTER: 13,
    ESC: 27,
  };

  var onSetupEscPress = function (evt) {
    if (evt.keyCode === KEYCODE.ESC) {
      setupClose();
    }
  };

  var setupOpen = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
  };

  var setupClose = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
  };

  setupBtnOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE.ENTER) {
      if (setup.classList.contains('hidden')) {
        setupOpen();
      } else {
        setupClose();
      }
    }
  });

  setupBtnClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEYCODE.ENTER) {
      setupClose();
    }
  });

  setupBtnOpen.addEventListener('click', function () {
    setupOpen();
  });

  setupBtnClose.addEventListener('click', function () {
    setupClose();
  });

})();
