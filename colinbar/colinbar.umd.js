(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["colinbar"] = factory(require("vue"));
	else
		root["colinbar"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


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

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=template&id=650118e6&scoped=true

const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-650118e6"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const _hoisted_1 = {
  class: "x"
};
const _hoisted_2 = {
  key: 0,
  class: "loading"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "loading-spinner"
}, null, -1));
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
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
  class: "fake1"
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "margin-left": "4px"
  }
}, "-", -1));
const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "bar1"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "xItem"
})], -1));
const _hoisted_11 = {
  class: "box2",
  ref: "box2"
};
const _hoisted_12 = {
  class: "span"
};
const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "box3"
}, null, -1));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sppan = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("sppan");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [!$data.isOk ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_2, _hoisted_5)) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_7, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: "box1",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      visibility: $data.isOk ? 'visible' : 'hidden'
    })
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.yData, item => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      class: "yItem",
      style: {
        "height": "50%"
      },
      key: item
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(item), 1), _hoisted_9]);
  }), 128))]), _hoisted_10], 4), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_11, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: "fake",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      width: `${$data.box2Width}px`,
      borderBottom: $data.isOk ? '1px solid #000' : '0px'
    })
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.tData, item => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      class: "value",
      key: item
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["vItem", {
        'vItem-animate': item.animate
      }]),
      style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
        'height': $data.isOk ? `${item.bit * 100}%` : '0%'
      })
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", _hoisted_12, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.isOk ? item.value : ''), 1)], 6)]);
  }), 128))], 4), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: "bar",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      width: `${$data.box2Width}px`
    })
  }, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($props.data, item => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
      class: "xItem",
      key: item
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_sppan, null, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.isOk ? item.xName : ''), 1)]),
      _: 2
    }, 1024)]);
  }), 128))], 4)], 512), _hoisted_13])])]);
}
;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue?vue&type=template&id=650118e6&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=script&lang=js
/* harmony default export */ var colin_barvue_type_script_lang_js = ({
  name: 'colinBar',
  props: ['data'],
  data() {
    return {
      box2Width: null,
      yData: [],
      isOk: false,
      tData: []
    };
  },
  methods: {
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
    }
  },
  async mounted() {
    this.handleData(this.data);
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
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=style&index=0&id=650118e6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue?vue&type=style&index=0&id=650118e6&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/plugin/colin-bar/index.vue?vue&type=style&index=1&id=650118e6&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue?vue&type=style&index=1&id=650118e6&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/plugin/colin-bar/index.vue




;



const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(colin_barvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-650118e6"]])

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
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=colinbar.umd.js.map