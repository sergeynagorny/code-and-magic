'use strict';

(function () {

  var wizards = [];
  var SIMILAR_WIZARDS_COUNT = 4;
  var similarWizardTempalte = document.querySelector('#similar-wizard-template').content;
  var similarWizard = similarWizardTempalte.querySelector('.setup-similar-item');

  var createSimilarWizard = function (wizard) {
    var element = similarWizard.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = wizard.name;
    element.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return element;
  };

  var renderSimilarWizards = function (data) {
    var similarWizards = document.querySelector('.setup-similar');
    var similarWizardsList = similarWizards.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    similarWizards.classList.remove('hidden');
    similarWizardsList.innerHTML = '';

    for (var i = 0; i < SIMILAR_WIZARDS_COUNT; i++) {
      fragment.appendChild(createSimilarWizard(data[i]));
    }

    similarWizardsList.appendChild(fragment);
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.myWizard.colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === window.myWizard.colorEyes) {
      rank += 1;
    }
    if (wizard.colorFireball === window.myWizard.colorFireball) {
      rank += 0;
    }

    return rank;
  };

  var compareNames = function (leftName, rightName) {
    if (leftName > rightName) {
      return 1;
    } else if (leftName < rightName) {
      return -1;
    } else {
      return 0;
    }
  };

  var compareWizards = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? compareNames(left.name, right.name) : rankDiff;
  };

  var updateFilter = function () {
    renderSimilarWizards(wizards.sort(compareWizards));
  };

  window.myWizard.onChange = function () {
    updateFilter();
  };

  var onLoad = function (data) {
    wizards = data;
    updateFilter();
  };

  window.backend.load(onLoad, window.backend.errorHandler);

})();
