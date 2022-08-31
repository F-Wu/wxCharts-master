const lineChart = require('../../utils/line-chart/index');
let chart = null;
//init、draw、showLine、hideLine，分别用来初始化、绘制、显示和隐藏某条线
Page({
  onLoad: function () {
  },
  onReady: function () {
    chart = lineChart.init('chart', {
      tipsCtx: 'chart-tips', //提示 id
      width: 320,
      height: 200,
      margin: 10,
      yUnit: 'h',
      xAxis: ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7'],
      lines: [{
        color: '#1296db',
        points: [5, 6, 8, 6, 7, 4, 3]
      }]
    });
   chart.draw();
  },
  tipsStart: function (e) {
    let x = e.changedTouches[0].x;

    this.chartTipsShowing = true;
    chart.tipsByX(x);
  },

  tipsMove: function (e) {
    let x = e.changedTouches[0].x;

    if (this.chartTipsShowing) {
      chart.tipsByX(x);
    }
  },

  tipsEnd: function () {
    this.chartTipsShowing = false;
    chart.clearTips();
  },
});