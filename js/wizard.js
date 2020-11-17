'use strict';

(function () {

  window.wizard = {
    fisrtName: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    lastName: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    colorCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    colorEyes: ['black', 'red', 'blue', 'yellow', 'green'],
    colorFireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],

    getRandomValue: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    generateRandomWizards: function (count) {
      var randomWizards = [];
      for (var i = 0; i < count; i++) {
        randomWizards.push({
          name: window.wizard.getRandomValue(window.wizard.fisrtName) + ' ' + window.wizard.getRandomValue(window.wizard.lastName),
          colorCoat: window.wizard.getRandomValue(window.wizard.colorCoat),
          colorEyes: window.wizard.getRandomValue(window.wizard.colorEyes),
        });
      }
      return randomWizards;
    },
  };

})();
