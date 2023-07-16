/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 89:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


// eslint-disable-next-line no-unused-vars
__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=template&id=5bc13af7&scoped=true

const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.pushScopeId)("data-v-5bc13af7"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.popScopeId)(), n);
const _hoisted_1 = {
  class: "x"
};
const _hoisted_2 = {
  key: 0,
  class: "loading"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "loading-spinner"
}, null, -1));
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "loading-text"
}, "Loading...", -1));
const _hoisted_5 = [_hoisted_3, _hoisted_4];
const _hoisted_6 = {
  class: "overWrapper"
};
const _hoisted_7 = {
  class: "innerWrapper"
};
const _hoisted_8 = {
  key: 0,
  class: "fake1"
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  style: {
    "margin-left": "4px"
  }
}, "-", -1));
const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "bar1"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "xItem"
})], -1));
const _hoisted_11 = {
  class: "box2",
  ref: "box2"
};
const _hoisted_12 = ["onMouseover", "onMouseout"];
const _hoisted_13 = {
  class: "span"
};
const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "box3"
}, null, -1));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [!$data.isOk ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_2, _hoisted_5)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_7, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: "box1",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
      visibility: $data.isOk ? 'visible' : 'hidden'
    })
  }, [$props.isShowY ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_8, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($data.yData, item => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
      class: "yItem",
      style: {
        "height": "50%"
      },
      key: item
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(item), 1), _hoisted_9]);
  }), 128))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), _hoisted_10], 4), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_11, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
    class: "fake",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
      width: `${$data.box2Width}px`,
      borderBottom: $data.isOk ? '1px solid #000' : '0px',
      borderLeft: $data.isOk ? '1px solid #000' : '0px'
    })
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($data.tData, item => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
      class: "value",
      key: item
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["vItem", {
        'vItem-animate': item.animate
      }]),
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
        height: $data.isOk ? `${item.bit * 100}%` : '0%',
        backgroundColor: item.bgColor,
        transition: 'all 0.3s ease'
      }),
      onMouseover: $event => $options.handleMouseOver(item.id),
      onMouseout: $event => $options.handleMouseOut(item.id)
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", _hoisted_13, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($data.isOk && $props.isShowValue ? item.value : ''), 1)], 46, _hoisted_12)]);
  }), 128))], 4), $props.isShowX ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    key: 0,
    class: "bar",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
      width: `${$data.box2Width}px`
    })
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($props.data, item => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
      class: "xItem",
      key: item
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($data.isOk ? item.xName : ''), 1)]);
  }), 128))], 4)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 512), _hoisted_14])])]);
}
;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue?vue&type=template&id=5bc13af7&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=script&lang=js
/* harmony default export */ var colin_barvue_type_script_lang_js = ({
  name: 'colinBar',
  props: {
    data: {
      type: Array,
      default: () => [{
        id: 1,
        xName: '周一',
        value: 120
      }, {
        id: 2,
        xName: '周二',
        value: 60
      }, {
        id: 3,
        xName: '周三',
        value: 20
      }, {
        id: 4,
        xName: '周四',
        value: 70
      }, {
        id: 5,
        xName: '周五',
        value: 10
      }, {
        id: 6,
        xName: '周一',
        value: 120
      }, {
        id: 7,
        xName: '周二',
        value: 60
      }, {
        id: 8,
        xName: '周三',
        value: 20
      }, {
        id: 9,
        xName: '周四',
        value: 70
      }, {
        id: 10,
        xName: '周五',
        value: 10
      }, {
        id: 11,
        xName: '周一',
        value: 120
      }, {
        id: 12,
        xName: '周二',
        value: 60
      }, {
        id: 13,
        xName: '周三',
        value: 20
      }, {
        id: 14,
        xName: '周四',
        value: 70
      }, {
        id: 15,
        xName: '周五',
        value: 10
      }]
    },
    isShowY: {
      type: Boolean,
      default: true // 设置默认值为false
    },

    isShowX: {
      type: Boolean,
      default: true
    },
    isShowValue: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: '#5871c0'
    }
  },
  data() {
    return {
      box2Width: null,
      yData: [],
      isOk: false,
      tData: []
    };
  },
  methods: {
    handleMouseOver(id) {
      const x = this.tData.find(item => {
        return item.id === id;
      });
      const y = this.lightenColor(this.bgColor, 10);
      x.bgColor = y;
    },
    handleMouseOut(id) {
      const x = this.tData.find(item => {
        return item.id === id;
      });
      x.bgColor = this.bgColor;
    },
    handleData(data) {
      const values = Array.from(new Set(data.map(item => item.value))).sort((a, b) => b - a);
      const max = values.shift();
      this.yData = [Math.floor(max / 2), Math.floor(max)].reverse();
    },
    handleX(data) {
      const maxItem = data.reduce((max, item) => item.value > max.value ? item : max);
      const maxBit = maxItem.value;
      const result = data.map(item => ({
        ...item,
        bit: Number((item.value / maxBit).toFixed(2)) // 计算比例
      }));
      // 设置具有最大值的项的比例为 1
      this.tData = result.map(item => ({
        ...item,
        bit: item === maxItem ? 1 : item.bit
      }));
    },
    handleBgColor(data) {
      data.map(item => {
        item.bgColor = this.bgColor;
      });
    },
    lightenColor(color, amount) {
      // 判断颜色值是否为缩写形式，若是则转换为完整的6位颜色值
      if (color.length === 4) {
        color = color.replace(/^#(.)(.)(.)$/, "#$1$1$2$2$3$3");
      }

      // 移除颜色值的井号 #
      color = color.replace("#", "");

      // 将颜色值转换为RGB格式
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);

      // 计算亮度增量
      const increment = Math.round(2.55 * amount);

      // 增加RGB各分量的值
      const newR = Math.min(255, r + increment);
      const newG = Math.min(255, g + increment);
      const newB = Math.min(255, b + increment);

      // 将新的RGB值转换为十六进制颜色表示
      const newColor = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
      return newColor;
    }
  },
  async mounted() {
    this.handleData(this.data);
    this.handleBgColor(this.data);
    await this.handleX(this.data);
    this.box2Width = this.$refs.box2.scrollWidth;
    // 在页面加载后添加动画类，通过 setTimeout 模拟延迟效果
    setTimeout(() => {
      this.data.forEach((item, index) => {
        setTimeout(() => {
          item.animate = true;
        }, index * 100); // 逐个元素延迟添加动画类
      });
    }, 500); // 延迟 500 毫秒后开始添加动画类
    setTimeout(() => {
      this.isOk = true;
    }, 500);
  }
});
;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=style&index=0&id=5bc13af7&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue?vue&type=style&index=0&id=5bc13af7&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=style&index=1&id=5bc13af7&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue?vue&type=style&index=1&id=5bc13af7&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(89);
;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue




;



const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(colin_barvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-5bc13af7"]])

/* harmony default export */ var colin_bar = (__exports__);
;// CONCATENATED MODULE: ./src/plugin/index.js

const components = {
  colinBar: colin_bar
};
function install(Vue) {
  const keys = Object.keys(components);
  keys.forEach(name => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
}
/* harmony default export */ var src_plugin = ({
  install,
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_plugin);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=colinbar.common.js.map