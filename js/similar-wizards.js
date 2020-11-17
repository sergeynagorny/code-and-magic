'use strict';

(function () {

  var dataWizards = window.wizard.generateRandomWizards(4);
  var setup = document.querySelector('.setup');


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

  var renderSimilarWizards = function (data) {
    var similarWizards = setup.querySelector('.setup-similar');
    var similarWizardsList = similarWizards.querySelector('.setup-similar-list');

    similarWizards.classList.remove('hidden');
    similarWizardsList.appendChild(createSimilarWizards(data));
  };

  renderSimilarWizards(dataWizards);

})();
