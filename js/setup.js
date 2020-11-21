'use strict';

(function () {

  var getRandomELement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var Wizard = function (data) {
    this.name = data.name;
    this.colorCoat = data.colorCoat;
    this.colorEyes = data.colorEyes;
    this.colorFireball = data.colorFireball;
  };

  Wizard.prototype = {
    setName: function (name) {
      if (!name) {
        throw new Error('Имя не задано');
      }
      if (name.length > 30) {
        throw new Error('Недопустимое значение имени мага: ' + name);
      }
      this.name = name;
      this.onChange(this);
      return name;
    },
    changeColorCoat: function () {
      var newColor = getRandomELement(window.wizard.colorCoat);
      this.colorCoat = newColor;
      this.onChange(this);
      return newColor;
    },
    changeColorEyes: function () {
      var newColor = getRandomELement(window.wizard.colorEyes);
      this.colorEyes = newColor;
      this.onChange(this);
      return newColor;
    },
    changeColorFireball: function () {
      var newColor = getRandomELement(window.wizard.colorFireball);
      this.colorFireball = newColor;
      this.onChange(this);
      return newColor;
    },
    onChange: function (wizard) {
      return wizard;
    },
  };

  window.Wizard = Wizard;
})();

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

  var wizardData = {
    name: wizardNameInput.value,
    colorCoat: wizardCoatInput.value,
    colorEyes: wizardEyesInput.value,
    colorFireball: wizardFierballInput.value,
  };

  var wizard = new window.Wizard(wizardData);

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


  window.myWizard = wizard;
})();
