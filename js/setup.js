'use strict';

(function () {

  var wizardSetup = [
    {
      element: document.querySelector('.wizard-coat'),
      data: window.wizard.colorCoat,
      method: 'fill',
      input: document.querySelector('input[name=coat-color]'),
    },
    {
      element: document.querySelector('.wizard-eyes'),
      data: window.wizard.colorEyes,
      method: 'fill',
      input: document.querySelector('input[name=eyes-color]'),
    },
    {
      element: document.querySelector('.setup-fireball-wrap'),
      data: window.wizard.colorFireball,
      method: 'background',
      input: document.querySelector('input[name=fireball-color]'),
    },
  ];

  var addClickListener = function (item) {
    var i = 0;
    item.element.addEventListener('click', function () {
      i = i >= item.data.length - 1 ? 0 : ++i;

      if (item.method === 'background') {
        item.element.style.background = item.data[i];
      } else {
        item.element.style.fill = item.data[i];
      }

      item.input.value = item.data[i];
    });
  };

  wizardSetup.forEach(function (wizardItem) {
    addClickListener(wizardItem);
  });

})();
