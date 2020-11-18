'use strict';

(function () {
  var SIMILAR_WIZARDS_COUNT = 4;
  var dataWizards = [];
  var setup = document.querySelector('.setup');

  var onLoad = function (data) {
    dataWizards = data;
    updateSimilarWizards(data);
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

    similarWizardsList.innerHTML = '';
    for (var i = 0; i < SIMILAR_WIZARDS_COUNT; i++) {
      fragment.appendChild(createSimilarWizards(data[i]));
    }
    similarWizardsList.appendChild(fragment);
  };

  var updateSimilarWizards = window.debounce(function () {
    var WizardColor = {
      coat: document.querySelector('input[name=coat-color]').value,
      eyes: document.querySelector('input[name=eyes-color]').value,
      fireball: document.querySelector('input[name=fireball-color]').value,
    };

    var getRank = function (wizard) {
      var rank = 0;

      if (wizard.colorCoat === WizardColor.coat) {
        rank += 2;
      }
      if (wizard.colorEyes === WizardColor.eyes) {
        rank += 1;
      }
      if (wizard.colorFireball === WizardColor.fireball) {
        rank += 1;
      }

      return rank;
    };

    var namesComparator = function (left, right) {
      if (left > right) {
        return 1;
      } else if (left < right) {
        return -1;
      } else {
        return 0;
      }
    };

    dataWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name - right.name);
      }
      return rankDiff;
    });

    renderSimilarWizards(dataWizards);
  });


  window.similarWizards = {
    update: updateSimilarWizards,
  };

})();
