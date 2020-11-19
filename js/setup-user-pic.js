'use strict';

(function () {

  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var upload = document.querySelector('.upload');
  var uploadInput = upload.querySelector('input');
  var uploadPreview = upload.querySelector('.setup-user-pic');
  var setupOpenPreview = document.querySelector('.setup-open img');

  uploadInput.addEventListener('change', function () {
    var picture = uploadInput.files[0];
    var pictureName = picture.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return pictureName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        uploadPreview.src = reader.result;
        setupOpenPreview.src = reader.result;
      });
      reader.readAsDataURL(picture);
    }

  });

})();
