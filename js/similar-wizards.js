'use strict';

(function () {
  var SIMILAR_WIZARDS_COUNT = 4;
  var dataWizards = [];
  var setup = document.querySelector('.setup');

  var onLoad = function (data) {
    dataWizards = data;
    renderSimilarWizards(data);
  };

  window.backend.load(onLoad, window.backend.errorHandler);

  var createSimilarWizards = function (wizardItem) {
    var similarWizardTempalte = document.querySelector('#similar-wizard-template').content;
    var similarWizardItem = similarWizardTempalte.querySelector('.setup-similar-item');

    var wizard = similarWizardItem.cloneNode(true);
    var wizardName = wizard.querySelector('.setup-similar-label');
    var wizardCoat = wizard.querySelector('.wizard-coat');
    var wizardEyes = wizard.querySelector('.wizard-eyes');

    wizardName.textContent = wizardItem.name;
    wizardCoat.style.fill = wizardItem.colorCoat;
    wizardEyes.style.fill = wizardItem.colorEyes;

    return wizard;

  };

  var renderSimilarWizards = function (data) {
    var similarWizards = setup.querySelector('.setup-similar');
    var similarWizardsList = similarWizards.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    similarWizards.classList.remove('hidden');

    for (var i = 0; i < SIMILAR_WIZARDS_COUNT; i++) {
      fragment.appendChild(createSimilarWizards(data[i]));
    }
    similarWizardsList.appendChild(fragment);
  };

})();
