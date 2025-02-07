// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.data = void 0;
var data = {
  DataIncludes: ['Client', 'Prochant', 'Prochant & Client'] // Branch: [], // See below
  // Unit: [], // See below

};
exports.data = data;

var api = function api(path, key) {
  return new DevExpress.data.CustomStore({
    loadMode: "raw",
    key: key || "id",
    load: function load() {
      // return $.getJSON((prefix || 'data') + '/' + jsonFile);
      return $.getJSON(path);
    }
  });
};

exports.api = api;
data['Unit'] = [{
  text: 'Dollars',
  id: 'dollars'
}, {
  text: 'Count',
  id: 'count'
}, {
  text: 'Days',
  id: 'days'
}];
data['PeriodInMonths'] = [{
  text: '3'
}, {
  text: '6'
}, {
  text: '12'
}, {
  text: '18'
}, {
  text: '24'
}];
data['OrderDateOrDOS'] = [{
  text: 'Order date'
}, {
  text: 'DOS'
}];
data['OpenOrdersChart'] = {
  Jan: 6,
  Feb: 13,
  Mar: 9,
  Apr: 16,
  May: 15,
  Jun: 14,
  Jul: 4,
  Aug: 6,
  Sep: 4,
  Oct: 8,
  Nov: 7,
  Dec: 9
};
data['HeldRevenueChart'] = {
  Jan: 14,
  Feb: 12,
  Mar: 12,
  Apr: 15,
  May: 10,
  Jun: 5,
  Jul: 4,
  Aug: 2,
  Sep: 1,
  Oct: 2,
  Nov: 1,
  Dec: 6
};
data['AccountsReceivableChart'] = {
  Jan: 6,
  Feb: 1,
  Mar: 3,
  Apr: 5,
  May: 8,
  Jun: 6,
  Jul: 6,
  Aug: 5,
  Sep: 8,
  Oct: 9,
  Nov: 16,
  Dec: 15
};
data['BillingDonut'] = [{
  name: "Difference",
  val: 6.05
}, {
  name: "Goal",
  val: 93.95
}];
data['PaymentActivityDonut'] = [{
  name: "Difference",
  val: 49.1
}, {
  name: "Goal",
  val: 50.9
}];
data['DenialsDonut'] = [{
  name: "Difference",
  val: 16.73
}, {
  name: "Goal",
  val: 83.27
}];
data['90ARDonut'] = [{
  name: "Difference",
  val: 9.68
}, {
  name: "Goal",
  val: 90.32
}];
data['SplineMonths'] = ['Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020'];
data['SplineSeries1'] = [605, 680, 660, 630, 335, 375, 330, 440, 402, 450, 380, 405];
data['SplineSeries2'] = [510, 510, 525, 520, 525, 510, 480, 475, 475, 465, 465, 465];
},{}],"src/router.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeOnClick = routeOnClick;

function routeOnClick(el, pageWithParams) {
  $(el).click(function () {
    location.href = pageWithParams;
  });
}
},{}],"src/pdx/pdxSelectBox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxSelectBox = pdxSelectBox;
exports.pdxSelectBoxSearch = pdxSelectBoxSearch;

function pdxSelectBox(el, dataSource, selected) {
  if (!el) return console.warn('pdxSelectBox needs a valid element');
  if (typeof el == 'string') el = $(el);
  return el.dxSelectBox({
    dataSource: dataSource,
    value: selected || dataSource[0] //displayExpr: "Name",
    //searchEnabled: true

  }).dxSelectBox("instance");
}

function pdxSelectBoxSearch(el, dataSource, selected) {
  if (!el) return console.warn('pdxSelectBoxSearch needs a valid element');
  if (typeof el == 'string') el = $(el);
  var opts = {
    dataSource: dataSource,
    value: selected,
    displayExpr: "name",
    searchEnabled: true
  };
  if (selected) opts.value = selected;
  return el.dxSelectBox().dxSelectBox("instance");
}
},{}],"src/pdx/pdxDropDownBox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxDropDownBoxWithDataGrid = pdxDropDownBoxWithDataGrid;

function pdxDropDownBoxWithDataGrid(el, dataSource, selected, opts) {
  if (!el) return console.warn('pdxMultiSelectBoxWithSearch needs a valid element');
  if (typeof el == 'string') el = $(el);
  if (!opts) opts = {}; // set default

  return el.dxDropDownBox({
    dataSource: dataSource,
    value: selected || dataSource[0],
    //value: [0],
    displayExpr: "name",
    valueExpr: "abbr",
    // searchEnabled: true,
    showClearButton: opts.showClearButton || false,
    contentTemplate: function contentTemplate(e) {
      var ddbComponent = e.component,
          value = ddbComponent.option("value"); // const containerDiv = $('<div class="pdx-dropdown">');

      var datagrid = $('<div class="datagrid-tpl"></div>').appendTo(el);
      var $dataGrid = datagrid.dxDataGrid({
        dataSource: e.component.getDataSource(),
        columns: ["name"],
        showBorders: opts.showBorders || false,
        showColumnLines: opts.showColumnLines || false,
        // default: true
        showCheckBoxesMode: 'always',
        hoverStateEnabled: true,
        paging: {
          enabled: false,
          pageSize: 10
        },
        filterRow: {
          visible: true
        },
        scrolling: true,
        // { mode: "infinite" },
        selection: {
          mode: "multiple"
        },
        // selectedRowKeys: [value],
        height: "120%",
        onSelectionChanged: function onSelectionChanged(selectedItems) {
          var keys = selectedItems.selectedRowKeys,
              hasSelection = keys.length;
          console.log('onSelectionChanged', selectedItems, keys);
          e.component.option("value", hasSelection ? keys : null);
        }
      });
      var dgInstance = $dataGrid.dxDataGrid("instance");
      e.component.on("valueChanged", function (args) {
        console.log('valueChanged', args);
        dgInstance.selectRows(args.value, false);
      }); //return containerDiv; // $dataGrid;

      return $dataGrid;
    }
  }).dxDropDownBox("instance");
}
},{}],"src/pdx/pdxButtonGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxButtonGroup = pdxButtonGroup;
var buttonGroupOptions = {
  stylingMode: "outlined",
  onItemClick: function onItemClick(e) {
    DevExpress.ui.notify({
      message: 'The "' + e.itemData.text + '" button was clicked',
      width: 420
    }, "success", 1000);
  }
};

function pdxButtonGroup(el, dataSource, selectedItemKeys) {
  if (!dataSource) return console.warn('Datasource not given for pdxButtonGroup: ', el, dataSource, selectedItemKeys);
  el = $(el);

  if (!(selectedItemKeys instanceof Array) && typeof selectedItemKeys == 'string') {
    selectedItemKeys = [selectedItemKeys];
  }

  var options = Object.assign({}, buttonGroupOptions, {
    items: dataSource
  });
  if (selectedItemKeys && selectedItemKeys instanceof Array) options.selectedItemKeys = selectedItemKeys;
  if (dataSource['overrideOptions']) options = Object.assign({}, options, dataSource['overrideOptions']);
  el.dxButtonGroup(options);
}
},{}],"src/Data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.data = void 0;
var data = {
  DataIncludes: ['Client', 'Prochant', 'Prochant & Client'] // Branch: [], // See below
  // Unit: [], // See below

};
exports.data = data;

var api = function api(path, key) {
  return new DevExpress.data.CustomStore({
    loadMode: "raw",
    key: key || "id",
    load: function load() {
      // return $.getJSON((prefix || 'data') + '/' + jsonFile);
      return $.getJSON(path);
    }
  });
};

exports.api = api;
data['Unit'] = [{
  text: 'Dollars',
  id: 'dollars'
}, {
  text: 'Count',
  id: 'count'
}, {
  text: 'Days',
  id: 'days'
}];
data['PeriodInMonths'] = [{
  text: '3'
}, {
  text: '6'
}, {
  text: '12'
}, {
  text: '18'
}, {
  text: '24'
}];
data['OrderDateOrDOS'] = [{
  text: 'Order date'
}, {
  text: 'DOS'
}];
data['OpenOrdersChart'] = {
  Jan: 6,
  Feb: 13,
  Mar: 9,
  Apr: 16,
  May: 15,
  Jun: 14,
  Jul: 4,
  Aug: 6,
  Sep: 4,
  Oct: 8,
  Nov: 7,
  Dec: 9
};
data['HeldRevenueChart'] = {
  Jan: 14,
  Feb: 12,
  Mar: 12,
  Apr: 15,
  May: 10,
  Jun: 5,
  Jul: 4,
  Aug: 2,
  Sep: 1,
  Oct: 2,
  Nov: 1,
  Dec: 6
};
data['AccountsReceivableChart'] = {
  Jan: 6,
  Feb: 1,
  Mar: 3,
  Apr: 5,
  May: 8,
  Jun: 6,
  Jul: 6,
  Aug: 5,
  Sep: 8,
  Oct: 9,
  Nov: 16,
  Dec: 15
};
data['BillingDonut'] = [{
  name: "Difference",
  val: 6.05
}, {
  name: "Goal",
  val: 93.95
}];
data['PaymentActivityDonut'] = [{
  name: "Difference",
  val: 49.1
}, {
  name: "Goal",
  val: 50.9
}];
data['DenialsDonut'] = [{
  name: "Difference",
  val: 16.73
}, {
  name: "Goal",
  val: 83.27
}];
data['90ARDonut'] = [{
  name: "Difference",
  val: 9.68
}, {
  name: "Goal",
  val: 90.32
}];
data['SplineMonths'] = ['Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020'];
data['SplineSeries1'] = [605, 680, 660, 630, 335, 375, 330, 440, 402, 450, 380, 405];
data['SplineSeries2'] = [510, 510, 525, 520, 525, 510, 480, 475, 475, 465, 465, 465];
},{}],"src/palette.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProchantPalette = exports.colorGreyLight = exports.colorBlueGrey = exports.colorViolet = exports.colorSlateBlue = exports.colorOrange = exports.colorGreen = exports.colorRed = void 0;
// palette.js
var colorRed = '#D24747';
exports.colorRed = colorRed;
var colorGreen = '#389E0D';
exports.colorGreen = colorGreen;
var colorOrange = '#F5A731'; // export const colorOrange = '#F5A731';

exports.colorOrange = colorOrange;
var colorSlateBlue = '#B6CAE1';
exports.colorSlateBlue = colorSlateBlue;
var colorViolet = '#7111EC';
exports.colorViolet = colorViolet;
var colorBlueGrey = '#48607D';
exports.colorBlueGrey = colorBlueGrey;
var colorGreyLight = '#E0E0E0';
exports.colorGreyLight = colorGreyLight;
var ProchantPalette = {
  // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
  simpleSet: ['#00A200', '#E33740', '#6682bb', '#a37182', '#eeba69'] // Applies in the CircularGauge and LinearGauge
  //indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
  // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
  //gradientSet: ['#78b6d9', '#eeba69'] 

};
exports.ProchantPalette = ProchantPalette;
var BillingPalette = {
  simpleSet: [colorRed, colorGreen]
};
var PaymentAndARPalette = {
  simpleSet: [colorRed, colorOrange]
};
var DenialsPalette = {
  simpleSet: [colorGreen, colorSlateBlue]
};
var SplinePalette = {
  simpleSet: [colorViolet, colorBlueGrey]
};
DevExpress.viz.registerPalette("Prochant", ProchantPalette);
DevExpress.viz.registerPalette("BillingPalette", BillingPalette);
DevExpress.viz.registerPalette("PaymentAndARPalette", PaymentAndARPalette);
DevExpress.viz.registerPalette("DenialsPalette", DenialsPalette);
DevExpress.viz.registerPalette("SplinePalette", SplinePalette);
},{}],"src/pdx/pdxChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxLineChart = pdxLineChart;

var _Data = require("../Data.js");

var _palette = require("../palette.js");

var commonLineChartOptions = {
  commonAxisSettings: {
    visible: false,
    tick: {
      visible: false
    },
    label: {
      visible: false
    },
    grid: {
      visible: false
    },
    valueMarginsEnabled: false // , "min": -10, minValueMargin: 100

  },
  series: {
    argumentField: 'month',
    point: {
      visible: false
    }
  },
  legend: {
    visible: false
  },
  tooltip: {
    enabled: true,
    contentTemplate: lineChartToolTipTemplate
  },
  margin: {
    bottom: 20
  }
};

function pdxLineChart(el, dataSource, lineColor) {
  el = $(el); // const dataSource = data[dsKey];

  var overrideOptions = dataSource['options'] || {};
  var dsKeys = Object.keys(dataSource);
  var calculatedOptions = {
    size: {}
  };
  calculatedOptions.size.width = Math.round(el.parent().width());
  calculatedOptions.size.height = Math.round(calculatedOptions.size.width / (overrideOptions.heightRatio || 3.1)); // console.log(calculatedOptions);

  var dataSpecifictOpts = {
    dataSource: dsKeys.map(function (month) {
      return {
        month: month,
        val: dataSource[month]
      };
    })
  };
  var opts = Object.assign(dataSpecifictOpts, commonLineChartOptions, calculatedOptions, overrideOptions); // console.log(opts);

  var L = dsKeys.length;
  var isGreen = (dataSource[dsKeys[L - 1]] - dataSource[dsKeys[L - 2]]) * lineColor > 0;
  opts.series.color = isGreen ? _palette.colorGreen : _palette.colorRed; //

  el.dxChart(opts);
  return el.dxChart('instance');
}

;

function lineChartToolTipTemplate(info, container) {
  var html = ['<div class="pdx-chart-tooltip">', '<div class="month"></div>', '<div class="value"></div>', '</div>'];
  var content = $(html.join(""));
  content.find(".month").text(info.argument);
  content.find(".value").text('$' + (info.value + 400.82) + 'K');
  content.appendTo(container);
} // export function pdxChartSplines(el, dataSource, lineColor) {
//     el = $(el);
//     el.dxChart(opts);
//     return el.dxChart('instance');
// }
},{"../Data.js":"src/Data.js","../palette.js":"src/palette.js"}],"src/pdx/pdxDonut.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDonutOptions = buildDonutOptions;
exports.pdxDonut = pdxDonut;

var _palette = require("../palette.js");

var donutFirst = $('.pdx-donut:first');
var donutWidth = donutFirst.width();
var donutHeight = donutFirst.height(); // console.log('donutWidth', donutWidth, 'donutHeight', donutHeight);

var donutCommonOptions = {
  type: "doughnut",
  minSegmentSize: 2,
  // legend: { visible: true, verticalAlignment: "center", },
  legend: {
    visible: false
  },
  startAngle: 90,
  innerRadius: 0.7,
  annotations: [{
    tooltipEnabled: false,
    type: 'text',
    text: '',
    paddingLeftRight: 0,
    paddingTopBottom: 0,
    border: false,
    color: 'transparent',
    font: {
      family: 'Assistant',
      size: '0.8rem',
      weight: 700,
      color: _palette.colorRed
    },
    x: donutWidth / 2,
    y: donutWidth / 2
  }],
  // size: { width: 30, height: 30 },
  series: [{
    argumentField: "name" // label: { visible: false, position: 'inside' },

  }]
};

function buildDonutOptions(p, d, t, g) {
  var opts = Object.assign({}, donutCommonOptions, {
    palette: p,
    dataSource: d // title: "Title",

  });
  if (t && t[0] == '-') opts.segmentsDirection = 'anticlockwise';
  opts.annotations[0].text = t;
  opts.annotations[0].font.color = g ? _palette.colorGreen : _palette.colorRed;
  return opts;
}

;

function pdxDonut(el, dataSource, palette, value, isGreen) {
  if (!el) return console.warn('el required for pdxDonut: ', el, dataSource);
  if (typeof el == 'string') el = $(el);
  el.dxPieChart(buildDonutOptions(palette, dataSource, value, isGreen));
} // pdxDonut('#pdxBillingDonut', data['BillingDonut'], 'BillingPalette', '-6.05%');
// pdxDonut('#pdxPaymentActivityDonut', data['PaymentActivityDonut'], 'PaymentAndARPalette', '-50.9%');
// pdxDonut('#pdxDenialsDonut', data['DenialsDonut'], 'DenialsPalette', '-16.73%', true);
// pdxDonut('#pdx90ARDonut', data['90ARDonut'], 'PaymentAndARPalette', '+9.68%');
// $("#pdxPaymentActivityDonut").dxPieChart(buildDonutOptions("PaymentAndARPalette", dataSource, '-50.9%'));
// $("#pdxDenialsDonut").dxPieChart(buildDonutOptions("DenialsPalette", dataSource, '-16.73%', 1));
// $("#pdx90ARDonut").dxPieChart(buildDonutOptions("PaymentAndARPalette", dataSource, '+9.68%'));
},{"../palette.js":"src/palette.js"}],"src/pages/pageHome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pageHome;

var _data = require("../data.js");

var _router = require("../router.js");

var _pdxSelectBox = require("../pdx/pdxSelectBox.js");

var _pdxDropDownBox = require("../pdx/pdxDropDownBox.js");

var _pdxButtonGroup = require("../pdx/pdxButtonGroup.js");

var _pdxChart = require("../pdx/pdxChart.js");

var _pdxDonut = require("../pdx/pdxDonut.js");

function pageHome() {
  var dataSource = _data.data['DataIncludes'];
  (0, _pdxSelectBox.pdxSelectBox)('#pdxDataIncludes', dataSource, dataSource[dataSource.length - 1]);
  var dataSource = (0, _data.api)('data/branches.json', 'abbr'); //pdxSelectBoxSearch('#pdxBranch', dataSource, dataSource[0]);
  // pdxSelectBoxSearch('#pdxBranch', dataSource, dataSource[0]);

  (0, _pdxDropDownBox.pdxDropDownBoxWithDataGrid)('#pdxBranch', dataSource, 'All');
  (0, _pdxButtonGroup.pdxButtonGroup)('#pdxUnit', _data.data['Unit'], 'Dollars');
  (0, _pdxChart.pdxLineChart)('#pdxOpenOrdersChart', _data.data['OpenOrdersChart'], -1);
  (0, _pdxChart.pdxLineChart)('#pdxHeldRevenueChart', _data.data['HeldRevenueChart'], -1);
  (0, _pdxChart.pdxLineChart)('#pdxAccountsReceivableChart', _data.data['AccountsReceivableChart'], -1);
  (0, _pdxDonut.pdxDonut)('#pdxBillingDonut', _data.data['BillingDonut'], 'BillingPalette', '-6.05%');
  (0, _pdxDonut.pdxDonut)('#pdxPaymentActivityDonut', _data.data['PaymentActivityDonut'], 'PaymentAndARPalette', '-50.9%');
  (0, _pdxDonut.pdxDonut)('#pdxDenialsDonut', _data.data['DenialsDonut'], 'DenialsPalette', '-16.73%', true);
  (0, _pdxDonut.pdxDonut)('#pdx90ARDonut', _data.data['90ARDonut'], 'PaymentAndARPalette', '+9.68%'); // routeOnClick('#cardOpenOrders,#cardOpenOrdersCount,#cardOpenOrdersDays', 'orders.html');
  // routeOnClick('#cardHeldRevenue,#cardHeldRevenueCount,#cardHeldRevenueDays', 'held.html');
  // routeOnClick('#cardAR,#cardARCount,#cardARDSO', 'ar.html');

  (0, _router.routeOnClick)('#cardOpenOrders,#cardOpenOrdersCount,#cardOpenOrdersDays', 'detail.html?data=orders');
  (0, _router.routeOnClick)('#cardHeldRevenue,#cardHeldRevenueCount,#cardHeldRevenueDays', 'detail.html?data=held');
  (0, _router.routeOnClick)('#cardAR,#cardARCount,#cardARDSO', 'detail.html?data=ar');
}

;
},{"../data.js":"src/data.js","../router.js":"src/router.js","../pdx/pdxSelectBox.js":"src/pdx/pdxSelectBox.js","../pdx/pdxDropDownBox.js":"src/pdx/pdxDropDownBox.js","../pdx/pdxButtonGroup.js":"src/pdx/pdxButtonGroup.js","../pdx/pdxChart.js":"src/pdx/pdxChart.js","../pdx/pdxDonut.js":"src/pdx/pdxDonut.js"}],"src/pdx/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageInitAnimation = pageInitAnimation;
exports.pageViewportFromQS = pageViewportFromQS;
exports.navigateTo = navigateTo;
exports.QS = QS;
exports.resizeToAspect = resizeToAspect;
exports.doubleAxis = doubleAxis;

function pageInitAnimation() {
  $('.page-init-hidden').hide().addClass('page-init-animating').removeClass('page-init-hidden');
  $('.page-init-animating,.page-init-hidden').slideDown(800, function () {
    $(this).removeClass('page-init-hidden').removeClass('page-init-animating');
  });
}

function pageViewportFromQS() {
  // location.search.split(/[\?\&]/).map(kv => {
  //     kv=kv.split('='); if(kv[0]=='vw') $('html').width(parseInt(kv[1], 10));
  // });
  if (QS('vw')) $('html').width(parseInt(QS('vw'), 10));
}

function navigateTo(page) {
  location.href = page + '.html';
}

function QS(key, dV) {
  if (!QS.qs) {
    QS.qs = {};
    location.search.split(/[\?\&]/).map(function (kv) {
      kv = kv.split('=');
      QS.qs[kv[0]] = kv[1];
    });
  }

  return QS.qs[key] || dV;
}

function resizeToAspect(el, wRatio, hRatio) {
  el = $(el);
  console.log(el);
  var aspectRatio = hRatio / wRatio;
  var outerWidth = $(el).outerWidth();
  el.height(aspectRatio * outerWidth);
}

function doubleAxis(name1, text1, color1, name2, text2, color2) {
  return {
    valueAxis: [{
      name: name1,
      title: {
        text: text1,
        font: {
          color: color1
        }
      },
      label: {
        font: {
          color: color1
        }
      }
    }, {
      name: name2,
      position: "right",
      title: {
        text: text2,
        font: {
          color: color2
        }
      },
      label: {
        font: {
          color: color2
        }
      }
    }]
  };
}
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _pageHome = _interopRequireDefault(require("./pages/pageHome.js"));

var _util = require("./pdx/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(_pageHome.default); // pageInitAnimation();
// pageViewportFromQS();
},{"./pages/pageHome.js":"src/pages/pageHome.js","./pdx/util.js":"src/pdx/util.js"}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49350" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map