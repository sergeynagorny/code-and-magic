'use strict';

(function () {

  var wizardItems = {
    colorCoat: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    colorEyes: ['black', 'red', 'blue', 'yellow', 'green'],
    colorFireball: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],

    getNextColor: function (array, item) {
      var current = array.indexOf(item);
      return current >= array.length - 1 || current < 0 ? array[0] : array[current + 1];
    },
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
      var newColor = wizardItems.getNextColor(wizardItems.colorCoat, this.colorCoat);
      this.colorCoat = newColor;
      this.onChange(this);
      return newColor;
    },
    changeColorEyes: function () {
      var newColor = wizardItems.getNextColor(wizardItems.colorEyes, this.colorEyes);
      this.colorEyes = newColor;
      this.onChange(this);
      return newColor;
    },
    changeColorFireball: function () {
      var newColor = wizardItems.getNextColor(wizardItems.colorFireball, this.colorFireball);
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
