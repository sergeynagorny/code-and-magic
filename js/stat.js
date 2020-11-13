'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_INDENT = 10;
  var CLOUD_PADDING = 30;
  var CLOUD_X = 140;
  var CLOUD_Y = 10;
  var GAP = 10;
  var LINE_HEIGHT = 15;
  var FONT_SIZE = '16px';
  var FONT_FAMILY = 'PT Sans';
  var CHART_Y_AXIS = 245;
  var COLUMN_GAP = 50;
  var CHART_WIDTH = 40;

  var dravBrokenRect = function (ctx, x, y, bgColor) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_INDENT);
    ctx.lineTo(x + CLOUD_WIDTH, y);
    ctx.lineTo(x + CLOUD_WIDTH - CLOUD_INDENT, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - CLOUD_INDENT);
    ctx.lineTo(x, y + CLOUD_HEIGHT);
    ctx.lineTo(x + CLOUD_INDENT, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x + CLOUD_INDENT, y + CLOUD_HEIGHT / 2);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = bgColor;
    ctx.fill();
  };

  var printTitleText = function (ctx) {
    ctx.fillStyle = '#000';
    ctx.font = FONT_SIZE + ' ' + FONT_FAMILY;
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_PADDING, CLOUD_PADDING);
    ctx.fillText('Список результатов:', CLOUD_X + CLOUD_PADDING, CLOUD_PADDING + LINE_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return Math.round(maxElement);
  };

  window.renderStatistics = function (ctx, name, time) {

    dravBrokenRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    dravBrokenRect(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)');

    printTitleText(ctx);

    var maxElement = getMaxElement(time);

    for (var i = 0; i < name.length; i++) {
      var CHART_X_AXIS = (COLUMN_GAP + CHART_WIDTH) * i;
      var passingTime = Math.round(time[i]);
      var chartHeight = passingTime / maxElement * 150;

      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillText(passingTime, CLOUD_X + CLOUD_PADDING + CHART_X_AXIS, CHART_Y_AXIS - chartHeight - 15);
      ctx.fillText(name[i], CLOUD_X + CLOUD_PADDING + CHART_X_AXIS, CHART_Y_AXIS + 5);
      if (name[i] === 'Вы') {
        ctx.fillStyle = 'rgb(255, 0, 0)';
      } else {
        ctx.fillStyle = 'rgb(0, 0, ' + Math.round(Math.random() * 255) + ')';
      }
      ctx.fillRect(CLOUD_X + CLOUD_PADDING + CHART_X_AXIS, CHART_Y_AXIS, CHART_WIDTH, -chartHeight);
    }
  };
})();
