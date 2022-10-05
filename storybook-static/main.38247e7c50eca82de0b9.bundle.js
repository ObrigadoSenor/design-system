/*! For license information please see main.38247e7c50eca82de0b9.bundle.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1089: function (module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(7),
        __webpack_require__(54),
        __webpack_require__(49),
        __webpack_require__(44),
        __webpack_require__(34),
        __webpack_require__(1090),
        __webpack_require__(1091),
        __webpack_require__(8),
        __webpack_require__(50);
      var _clientApi = __webpack_require__(68),
        _clientLogger = __webpack_require__(47),
        _configFilename = __webpack_require__(1144);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        );
      }
      (_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          'Invalid args/argTypes in config, ignoring.',
          JSON.stringify({ args: _configFilename.args, argTypes: _configFilename.argTypes }),
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function (decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1);
          }),
        _configFilename.loaders &&
          _configFilename.loaders.forEach(function (loader) {
            return (0, _clientApi.addLoader)(loader, !1);
          }),
        (_configFilename.parameters || _configFilename.globals || _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              { globals: _configFilename.globals, globalTypes: _configFilename.globalTypes },
            ),
            !1,
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function (enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer);
          });
    },
    1097: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(371).configure)([__webpack_require__(1098), __webpack_require__(1105)], module, !1);
      }.call(this, __webpack_require__(99)(module)));
    },
    1098: function (module, exports, __webpack_require__) {
      var map = {
        './__stories__/Overview/Introduction.stories.tsx': 1099,
        './__stories__/Overview/Principles.stories.tsx': 1100,
        './__stories__/ProductsInUse/ProductsInUse.stories.tsx': 1101,
        './__stories__/Style/Colors.stories.tsx': 1102,
        './__stories__/Style/Fonts.stories.tsx': 1103,
        './__stories__/Style/Sizes.stories.tsx': 1104,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1098);
    },
    1099: function (module, exports) {
      throw new Error(
        "Module build failed (from ./node_modules/@storybook/source-loader/dist/index.js):\nError: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer\n    at readWasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/read-wasm.js:8:13)\n    at wasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/wasm.js:25:16)\n    at /Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/source-map-consumer.js:264:14",
      );
    },
    1100: function (module, exports) {
      throw new Error(
        "Module build failed (from ./node_modules/@storybook/source-loader/dist/index.js):\nError: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer\n    at readWasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/read-wasm.js:8:13)\n    at wasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/wasm.js:25:16)\n    at /Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/source-map-consumer.js:264:14",
      );
    },
    1101: function (module, exports) {
      throw new Error(
        "Module build failed (from ./node_modules/@storybook/source-loader/dist/index.js):\nError: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer\n    at readWasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/read-wasm.js:8:13)\n    at wasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/wasm.js:25:16)\n    at /Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/source-map-consumer.js:264:14",
      );
    },
    1102: function (module, exports) {
      throw new Error(
        "Module build failed (from ./node_modules/@storybook/source-loader/dist/index.js):\nError: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer\n    at readWasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/read-wasm.js:8:13)\n    at wasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/wasm.js:25:16)\n    at /Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/source-map-consumer.js:264:14",
      );
    },
    1103: function (module, exports) {
      throw new Error(
        "Module build failed (from ./node_modules/@storybook/source-loader/dist/index.js):\nError: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer\n    at readWasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/read-wasm.js:8:13)\n    at wasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/wasm.js:25:16)\n    at /Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/source-map-consumer.js:264:14",
      );
    },
    1104: function (module, exports) {
      throw new Error(
        "Module build failed (from ./node_modules/@storybook/source-loader/dist/index.js):\nError: You must provide the URL of lib/mappings.wasm by calling SourceMapConsumer.initialize({ 'lib/mappings.wasm': ... }) before using SourceMapConsumer\n    at readWasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/read-wasm.js:8:13)\n    at wasm (/Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/wasm.js:25:16)\n    at /Users/johansjoberg/Development/Obrigado Señor/design-system/node_modules/@storybook/source-loader/node_modules/source-map/lib/source-map-consumer.js:264:14",
      );
    },
    1105: function (module, exports, __webpack_require__) {
      var map = {
        './packages/calendar/src/components/datePicker/DatePicker.stories.mdx': 1141,
        './packages/core/src/components/button/Buttons.stories.mdx': 1110,
        './packages/core/src/components/button/setting/ButtonSettings.stories.mdx': 1117,
        './packages/core/src/components/image/Image.stories.mdx': 1145,
        './packages/core/src/components/price/Price.stories.mdx': 1147,
        './packages/core/src/components/text/Header.stories.mdx': 1122,
        './packages/core/src/components/text/Paragraph.stories.mdx': 1123,
        './packages/core/src/components/text/TextWithIcon.stories.mdx': 1124,
        './packages/forms/src/components/checkbox/Checkbox.stories.mdx': 1148,
        './packages/forms/src/components/dropdown/Dropdown.stories.mdx': 1142,
        './packages/forms/src/components/input/Input.stories.mdx': 1131,
        './packages/forms/src/components/radio/Radio.stories.mdx': 1149,
        './packages/icons/src/components/Icons.stories.mdx': 1140,
        './packages/select/src/components/tab/Tab.stories.mdx': 1146,
        './packages/system/src/components/modal/Modal.stories.mdx': 1150,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1105);
    },
    1107: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        ":root {\n  --date-picker-wrapper-extra-padding: 40px;\n}\n\n.date-picker-wrapper {\n  width: calc(var(--date-picker-day-width) * 7 + var(--date-picker-wrapper-extra-padding));\n  border: 1px solid var(--date-picker-border-color);\n  border-radius: var(--date-picker-border-radius);\n}\n\n.date-picker-grid-wrapper {\n  width: 100%;\n  border-radius: 6px;\n  overflow: auto;\n}\n\n.date-picker-grid-ul {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.date-picker-grid-li:not(:last-child),\n.date-picker-grid-li:not(:first-child) {\n  padding: 10px;\n}\n\n.date-picker-grid-li:first-child {\n  padding-left: 10px;\n}\n\n.date-picker-grid-li:last-child {\n  padding-right: 10px;\n}\n\n/* MONTH */\n\n.date-picker-month {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 20px;\n  color: var(--date-picker-text-color);\n}\n\n.date-picker-month-text {\n  font-size: var(--date-picker-month-text-size);\n  margin-right: 10px;\n  text-transform: capitalize;\n}\n\n.date-picker-year-text {\n  font-size: var(--date-picker-year-text-size);\n}\n\n.date-picker-grid-month {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-gap: var(--date-picker-month-grid-gap);\n  padding: 0;\n  list-style-type: none;\n}\n\n.date-picker-change-month-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  width: var(--date-picker-change-month-button-icon-size);\n  height: var(--date-picker-change-month-button-icon-size);\n  border: 1px solid var(--date-picker-change-month-button-border-color);\n  background-color: var(--date-picker-change-month-button-bg-color);\n}\n\n.date-picker-change-month-button:disabled {\n  border: 1px solid var(--date-picker-change-month-button-disabled-bg-color);\n  background-color: var(--date-picker-change-month-button-disabled-bg-color);\n}\n\n.date-picker-change-month-button > span > svg path {\n  fill: var(--date-picker-change-month-button-icon-color);\n}\n\n.date-picker-change-month-button:disabled > span > svg path {\n  fill: var(--date-picker-change-month-button-disabled-icon-color);\n}\n\n/* WEEK */\n\n.date-picker-week {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 10px 0;\n  font-size: var(--date-picker-week-text-size);\n  color: var(--date-picker-week-text-color);\n}\n\n.date-picker-week > span {\n  text-transform: capitalize;\n}\n\n/* DAY */\n.date-picker-day {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--date-picker-day-border-radius);\n  color: var(--date-picker-day-neutral-text-color);\n  border: 1px solid transparent;\n  background: transparent;\n  height: var(--date-picker-day-width);\n  width: var(--date-picker-day-width);\n}\n\n.date-picker-day.month-identifier {\n  scroll-margin: calc(var(--date-picker-wrapper-extra-padding) / 4);\n}\n\n.date-picker-day-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--date-picker-day-border-radius);\n  cursor: pointer;\n  color: var(--date-picker-day-neutral-text-color);\n  border: 1px solid var(--date-picker-day-neutral-border-color);\n  background: var(--date-picker-day-neutral-bg-color);\n  height: 100%;\n  width: 100%;\n}\n\n.date-picker-day-button[data-value~='disabled'],\n.date-picker-day[data-value~='empty'] {\n  cursor: default;\n  color: var(--date-picker-day-disabled-text-color);\n  border: 1px solid var(--date-picker-day-disabled-border-color);\n  background: var(--date-picker-day-disabled-bg-color);\n  pointer-events: none;\n}\n\n.date-picker-day-button[data-value~='disabled']:after {\n  content: '';\n  width: 55%;\n  height: 1px;\n  border-radius: 10px;\n  background-color: var(--date-picker-day-disabled-text-color);\n  transform: rotate(-45deg);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n\n.date-picker-day-button[data-value~='active'] {\n  color: var(--date-picker-day-active-text-color);\n  border: 1px solid var(--date-picker-day-active-border-color);\n  background: var(--date-picker-day-active-bg-color);\n}\n\n.date-picker-day-button[data-value~='activeMonth'] {\n  color: var(--date-picker-day-active-month-text-color);\n  border: 1px solid var(--date-picker-day-active-month-border-color);\n  background: var(--date-picker-day-active-month-bg-color);\n}\n\n.date-picker-day-button[data-value~='selectedRange'] {\n  color: var(--date-picker-day-selected-range-text-color);\n  border: 1px solid var(--date-picker-day-selected-range-border-color);\n  background: var(--date-picker-day-selected-range-bg-color);\n}\n\n.date-picker-day-button[data-value~='selected'] {\n  color: var(--date-picker-day-selected-text-color);\n  border: 1px solid var(--date-picker-day-selected-border-color);\n  background: var(--date-picker-day-selected-bg-color);\n}\n\n.date-picker-day-month-break {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: 12px;\n  border-color: 1px solid var(--date-picker-day-month-break-border-color);\n  color: var(--date-picker-day-month-break-text-color);\n  background-color: var(--date-picker-day-month-break-bg-color);\n  border-top-right-radius: var(--date-picker-day-border-radius);\n  border-top-left-radius: var(--date-picker-day-border-radius);\n  box-sizing: border-box;\n  text-transform: capitalize;\n}\n\n.date-picker-wrapper.basic {\n  border: none;\n  width: auto;\n  height: 100%;\n}\n\n.date-picker-wrapper.basic .date-picker-month {\n  justify-content: center;\n  align-items: center;\n}\n\n.date-picker-wrapper.basic .date-picker-change-month-button {\n  display: none;\n}\n\n.date-picker-wrapper.basic .date-picker-grid-wrapper {\n  height: 100%;\n  overflow: auto;\n}\n\n.date-picker-wrapper.basic .date-picker-grid-ul {\n  flex-direction: column;\n}\n\n.date-picker-wrapper.basic .date-picker-week {\n  position: relative;\n  box-shadow: 0 10px 10px -10px var(--date-picker-week-shadow);\n  width: 100%;\n  background-color: var(--date-picker-change-month-button-bg-color);\n  padding: 10px;\n  box-sizing: border-box;\n  z-index: 1;\n}\n\n.date-picker-wrapper.basic .date-picker-month-and-year {\n  padding: 10px 0;\n  font-size: var(--date-picker-month-text-size);\n}\n",
        '',
      ]),
        (module.exports = exports);
    },
    1108: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1109);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1109: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.flex-system {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  position: relative;\n}\n\n.flex-system.visible {\n  overflow: visible;\n}\n\n.flex-system.hidden {\n  overflow: hidden;\n}\n\n.flex-item {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  min-width: 370px;\n  margin-bottom: 40px;\n}\n\n.flex-label {\n  margin: 0;\n  padding: 15px;\n  box-sizing: border-box;\n  align-self: flex-start;\n  background-color: #f4f4f4;\n  width: 100%;\n  text-align: center;\n  color: #949494;\n  border-radius: 6px;\n  margin-bottom: 20px;\n}\n\n.flex-child {\n  width: 100%;\n  min-height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1110: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'cta', function () {
          return cta;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51),
        _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24),
        _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,
            {
              title: 'Core/Button/CTA',
              component: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h2', { id: 'buttons' }, 'Buttons'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('inlineCode', { parentName: 'p' }, 'Buttons'),
              ' as a core element. Has the function as building blocks for molecules or organisms.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('li', null, 'Comes both with and without emblem.'),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('li', null, 'Text + Emblem is always centered.'),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'li',
              null,
              'Primary colour is Red and secondary is white.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('li', null, 'Booking button is always red.'),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('li', null, 'Badge button is always blue.'),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'li',
              null,
              'The buttons width tend to be adjusted to the text amount on desktop, but have full width on mobile. Sometimes the grid sets the width aswell.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'li',
              null,
              'On mouse hover, the arrow emblem sligtly moves to the right.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'li',
              null,
              '20 pixels margins to the left and right should be applied on Primary and Secondary buttons.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Preview,
            { mdxType: 'Preview' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Story,
              { name: 'CTA', mdxType: 'Story' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
                { labels: ['Primary', 'Secondary', 'Badge', 'Flat', 'Icon'], mdxType: 'StoriesDivider' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  buttonType: 'primary',
                  label: 'See all destinations',
                  mdxType: 'Button',
                }),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  buttonType: 'secondary',
                  label: 'Back to attractions',
                  mdxType: 'Button',
                }),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  buttonType: 'badge',
                  label: 'Denmark',
                  mdxType: 'Button',
                }),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  buttonType: 'flat',
                  label: 'Denmark',
                  mdxType: 'Button',
                }),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  buttonType: 'icon',
                  leftIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_8__.placeholder },
                  label: '',
                  mdxType: 'Button',
                }),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'props' }, 'Props'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Props,
            {
              of: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Props',
            },
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var cta = function cta() {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
          { labels: ['Primary', 'Secondary', 'Badge', 'Flat', 'Icon'] },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            buttonType: 'primary',
            label: 'See all destinations',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            buttonType: 'secondary',
            label: 'Back to attractions',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            buttonType: 'badge',
            label: 'Denmark',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            buttonType: 'flat',
            label: 'Denmark',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            buttonType: 'icon',
            leftIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_8__.placeholder },
            label: '',
          }),
        );
      };
      (cta.displayName = 'cta'),
        (cta.storyName = 'CTA'),
        (cta.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'Primary\', \'Secondary\', \'Badge\', \'Flat\', \'Icon\']}>\n      <Button buttonType="primary" label="See all destinations" />\n      <Button buttonType="secondary" label="Back to attractions" />\n      <Button buttonType="badge" label="Denmark" />\n      <Button buttonType="flat" label="Denmark" />\n      <Button buttonType="icon" leftIcon={{\n    icon: placeholder\n  }} label="" />\n    </StoriesDivider>',
          },
        });
      var componentMeta = {
          title: 'Core/Button/CTA',
          component: ___WEBPACK_IMPORTED_MODULE_6__.a,
          includeStories: ['cta'],
        },
        mdxStoryNameToKey = { CTA: 'cta' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    1111: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1112);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1112: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        ":root {\n  --icon-color: black;\n  --icon-disabled-color: grey;\n  --icon-size: '1rem';\n  --icon-s: 1rem;\n  --icon-m: 1.5rem;\n  --icon-l: 2rem;\n  --icon-xl: 3rem;\n}\n\n.icon {\n  display: flex;\n  width: var(--icon-size);\n  height: var(--icon-size);\n  min-width: var(--icon-size);\n  min-height: var(--icon-size);\n  border-radius: var(--icon-size);\n}\n\n.icon,\n.disabled > svg {\n  fill: var(--icon-disabled-color);\n  color: var(--icon-disabled-color);\n}\n\n.icon,\n.disabled > svg path {\n  fill: var(--icon-disabled-color);\n  color: var(--icon-disabled-color);\n}\n\n.icon-s,\n.icon-s > svg {\n  width: var(--icon-s);\n  height: var(--icon-s);\n  min-width: var(--icon-s);\n  min-height: var(--icon-s);\n}\n\n.icon-m,\n.icon-m > svg {\n  width: var(--icon-m);\n  height: var(--icon-m);\n  min-width: var(--icon-m);\n  min-height: var(--icon-m);\n}\n\n.icon-l,\n.icon-l > svg {\n  width: var(--icon-l);\n  height: var(--icon-l);\n  min-width: var(--icon-l);\n  min-height: var(--icon-l);\n}\n.icon-xl,\n.icon-xl > svg {\n  width: var(--icon-xl);\n  height: var(--icon-xl);\n  min-width: var(--icon-xl);\n  min-height: var(--icon-xl);\n}\n",
        '',
      ]),
        (module.exports = exports);
    },
    1113: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1114);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1114: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        ".text-outer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.text-outer h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\n.text-outer .text-auto {\n  width: auto;\n}\n\n.text-outer .text-full {\n  width: 100%;\n}\n\n.text-outer .left-icon {\n  padding-right: var(--system-size-xs);\n}\n\n.text-outer .right-icon {\n  padding-left: var(--system-size-xs);\n}\n\n.text-outer .text {\n  color: var(--text-primary-color);\n}\n\n.text-outer .text.text-primary {\n  color: var(--text-primary-color);\n}\n\n.text-outer .text.text-secondary {\n  color: var(--text-secondary-color);\n}\n\n.text-outer .text.text-xs {\n  font-size: var(--text-size-xs);\n}\n\n.text-outer .text.text-s {\n  font-size: var(--text-size-s);\n}\n\n.text-outer .text.text-m {\n  font-size: var(--text-size-m);\n}\n\n.text-outer .text.text-l {\n  font-size: var(--text-size-l);\n}\n\n.text-outer .text.text-xl {\n  font-size: var(--text-size-xl);\n}\n\n.text-outer .text.text-xxl {\n  font-size: var(--text-size-xxl);\n}\n\n.text-outer .text.text-light {\n  font-weight: var(--text-font-weight-light);\n  font-variation-settings: 'wght' var(--text-font-weight-light);\n}\n\n.text-outer .text.text-regular {\n  font-weight: var(--text-font-weight-regular);\n  font-variation-settings: 'wght' var(--text-font-weight-regular);\n}\n\n.text-outer .text.text-medium {\n  font-weight: var(--text-font-weight-medium);\n  font-variation-settings: 'wght' var(--text-font-weight-medium);\n}\n\n.text-outer .text.text-bold {\n  font-weight: var(--text-font-weight-bold);\n  font-variation-settings: 'wght' var(--text-font-weight-bold);\n}\n\n.text-outer .text.text-wrap {\n  white-space: wrap;\n}\n\n.text-outer .text.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-outer .text.text-italic {\n  font-style: italic;\n}\n",
        '',
      ]),
        (module.exports = exports);
    },
    1115: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1116);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1116: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  cursor: pointer;\n}\n\n.button.button-primary {\n  background-color: var(--button-primary-bg-color);\n  border: 1px solid var(--button-primary-border-color);\n  border-radius: var(--button-primary-border-radius);\n  padding: var(--button-primary-padding);\n  height: var(--button-primary-height);\n}\n\n.button.button-primary .button-label span,\n.button-label p {\n  color: var(--button-primary-color);\n}\n\n.button.button-primary .icon svg > path {\n  fill: var(--button-primary-color);\n}\n\n.button.button-secondary {\n  background-color: var(--button-secondary-bg-color);\n  border: 1px solid var(--button-secondary-border-color);\n  border-radius: var(--button-secondary-border-radius);\n  padding: var(--button-secondary-padding);\n  height: var(--button-secondary-height);\n}\n\n.button.button-secondary .button-label span,\n.button-label p {\n  color: var(--button-secondary-color);\n}\n\n.button.button-secondary .icon svg > path {\n  fill: var(--button-secondary-color);\n}\n\n.button.button-flat {\n  background-color: var(--button-flat-bg-color);\n  border: 1px solid var(--button-flat-border-color);\n  border-radius: var(--button-flat-border-radius);\n  padding: var(--button-flat-padding);\n  height: var(--button-flat-height);\n}\n\n.button.button-flat .button-label span,\n.button-label p {\n  color: var(--button-flat-color);\n}\n\n.button.button-flat .icon svg > path {\n  fill: var(--button-flat-color);\n}\n\n.button.button-badge {\n  background-color: var(--button-badge-bg-color);\n  border: 1px solid var(--button-badge-border-color);\n  border-radius: var(--button-badge-border-radius);\n  padding: var(--button-badge-padding);\n  height: var(--button-badge-height);\n}\n\n.button.button-badge .button-label span,\n.button-label p {\n  color: var(--button-badge-color);\n}\n\n.button.button-badge .icon svg > path {\n  fill: var(--button-badge-color);\n}\n\n.button.button-icon {\n  background-color: var(--button-icon-bg-color);\n  border: 1px solid var(--button-icon-border-color);\n  border-radius: var(--button-icon-border-radius);\n  padding: var(--button-icon-padding);\n  height: var(--button-icon-height);\n  width: var(--button-icon-height);\n}\n\n.button.button-icon .button-label span,\n.button-label p {\n  color: var(--button-icon-color);\n}\n\n.button.button-icon .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.button.button-icon .icon svg {\n  width: 65%;\n  height: 65%;\n  min-width: 65%;\n  min-height: 65%;\n}\n\n.button.button-icon .icon svg > path {\n  fill: var(--button-icon-color);\n}\n\n.button.button--size-none {\n  height: var(--system-size-none);\n}\n\n.button.button--size-xxxs {\n  height: var(--system-size-xxxs);\n}\n\n.button.button--size-xxs {\n  height: var(--system-size-xxs);\n}\n\n.button.button--size-xs {\n  height: var(--system-size-xs);\n}\n\n.button.button--size-s {\n  height: var(--system-size-s);\n}\n\n.button.button--size-m {\n  height: var(--system-size-m);\n}\n\n.button.button--size-l {\n  height: var(--system-size-l);\n}\n\n.button.button--size-xl {\n  height: var(--system-size-xl);\n}\n\n.button.button--size-xxl {\n  height: var(--system-size-xxl);\n}\n\n.button.button-icon.button--size-none {\n  height: var(--system-size-none);\n  width: var(--system-size-none);\n}\n\n.button.button-icon.button--size-xxxs {\n  height: var(--system-size-xxxs);\n  width: var(--system-size-xxxs);\n}\n\n.button.button-icon.button--size-xxs {\n  height: var(--system-size-xxs);\n  width: var(--system-size-xxs);\n}\n\n.button.button-icon.button--size-xs {\n  height: var(--system-size-xs);\n  width: var(--system-size-xs);\n}\n\n.button.button-icon.button--size-s {\n  height: var(--system-size-s);\n  width: var(--system-size-s);\n}\n\n.button.button-icon.button--size-m {\n  height: var(--system-size-m);\n  width: var(--system-size-m);\n}\n\n.button.button-icon.button--size-l {\n  height: var(--system-size-l);\n  width: var(--system-size-l);\n}\n\n.button.button-icon.button--size-xl {\n  height: var(--system-size-xl);\n  width: var(--system-size-xl);\n}\n\n.button.button-icon.button--size-xxl {\n  height: var(--system-size-xxl);\n  width: var(--system-size-xxl);\n}\n\n.button.button--label-size-xxs {\n  font-size: var(--text-size-xxs);\n}\n\n.button.button--label-size-xs {\n  font-size: var(--text-size-xs);\n}\n\n.button.button--label-size-s {\n  font-size: var(--text-size-s);\n}\n\n.button.button--label-size-m {\n  font-size: var(--text-size-m);\n}\n\n.button.button--label-size-l {\n  font-size: var(--text-size-l);\n}\n\n.button.button--label-size-xl {\n  font-size: var(--text-size-xl);\n}\n\n.button.button-full-width {\n  width: 100%;\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1117: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'settingButton', function () {
          return settingButton;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41),
        ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(116),
        ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51),
        _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,
            {
              title: 'Core/Button',
              component: ___WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h2', { id: 'setting-button' }, 'Setting Button'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                'inlineCode',
                { parentName: 'p' },
                'Setting Button',
              ),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Preview,
            { mdxType: 'Preview' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Story,
              { name: 'Setting Button', mdxType: 'Story' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_9__.a,
                { labels: ['Default'], mdxType: 'StoriesDivider' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_7__.a, {
                  settingTitle: 'Settings button',
                  closeIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.placeholder, size: 'm' },
                  settingIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.placeholder, size: 'm' },
                  options: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                    'ul',
                    null,
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                      'li',
                      { key: 'option1' },
                      Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_8__.a, {
                        buttonType: 'primary',
                        leftIcon: { placeholder: _icons__WEBPACK_IMPORTED_MODULE_6__.placeholder, size: 'm' },
                        label: 'Option 1',
                        onClick: function onClick() {
                          return console.log();
                        },
                        mdxType: 'Button',
                      }),
                    ),
                  ),
                  mdxType: 'SettingButton',
                }),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'props' }, 'Props'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Props,
            {
              of: ___WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Props',
            },
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var settingButton = function settingButton() {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_9__.a,
          { labels: ['Default'] },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_7__.a, {
            settingTitle: 'Settings button',
            closeIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.placeholder, size: 'm' },
            settingIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.placeholder, size: 'm' },
            options: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'ul',
              null,
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                'li',
                { key: 'option1' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_8__.a, {
                  buttonType: 'primary',
                  leftIcon: { placeholder: _icons__WEBPACK_IMPORTED_MODULE_6__.placeholder, size: 'm' },
                  label: 'Option 1',
                  onClick: function onClick() {
                    return console.log();
                  },
                }),
              ),
            ),
          }),
        );
      };
      (settingButton.displayName = 'settingButton'),
        (settingButton.storyName = 'Setting Button'),
        (settingButton.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'Default\']}>\n      <SettingButton settingTitle="Settings button" closeIcon={{\n    icon: placeholder,\n    size: \'m\'\n  }} settingIcon={{\n    icon: placeholder,\n    size: \'m\'\n  }} options={<ul>\n            <li key="option1">\n              <Button buttonType="primary" leftIcon={{\n        placeholder,\n        size: \'m\'\n      }} label="Option 1" onClick={() => console.log()} />\n            </li>\n          </ul>} />\n    </StoriesDivider>',
          },
        });
      var componentMeta = {
          title: 'Core/Button',
          component: ___WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: ['settingButton'],
        },
        mdxStoryNameToKey = { 'Setting Button': 'settingButton' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    1118: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1119);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1119: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.image {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.image img {\n  width: 100%;\n  display: flex;\n  position: absolute;\n}\n\n.image.blur img {\n  filter: blur(10px);\n  transition: blur 0;\n}\n.image.no-blur img {\n  filter: none;\n  transition: filter 0.5s ease-out;\n}\n\n.image.image-border-radius-none {\n  border-radius: 0px;\n}\n\n.image.image-border-radius-s {\n  border-radius: calc(var(--image-border-radius) - 3px);\n}\n\n.image.image-border-radius-m {\n  border-radius: var(--image-border-radius);\n}\n\n.image.image-border-radius-l {\n  border-radius: calc(var(--image-border-radius) + 3px);\n}\n\n.image.image-border-radius-xl {\n  border-radius: calc(var(--image-border-radius) + 6px);\n}\n\n.image.image-border-radius-round {\n  border-radius: 50%;\n}\n\n.image.image-aspect-ratio-2-3 {\n  padding-bottom: 150%;\n}\n\n.image.image-aspect-ratio-21-9 {\n  padding-bottom: 42.7%;\n}\n\n.image.image-aspect-ratio-30-9 {\n  padding-bottom: 30%;\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1120: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1121);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1121: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.price {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  flex-direction: row;\n}\n\n.price .left .middle .right {\n  width: auto;\n}\n\n.price .left {\n  padding-right: var(--price-padding);\n}\n\n.price .right {\n  padding-left: var(--price-padding);\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1122: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'header', function () {
          return header;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
        _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,
            {
              title: 'Core/Text/Header',
              component: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h2', { id: 'header' }, 'Header'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('inlineCode', { parentName: 'p' }, 'Header'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Preview,
            { mdxType: 'Preview' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Story,
              { name: 'Header', mdxType: 'Story' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
                { labels: ['XX-Large', 'X-Large', 'Large', 'Medium', 'Small', 'XX-Small'], mdxType: 'StoriesDivider' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { tag: 'h1', size: 'xxl', weight: 'bold', mdxType: 'Text' },
                  'h1 Desktop page headline - what the page is about',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { tag: 'h2', size: 'xl', weight: 'bold', mdxType: 'Text' },
                  'h2 Dekstop section headline - what the section is about',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { tag: 'h1', size: 'l', weight: 'bold', mdxType: 'Text' },
                  'h1 Mobile page headline - what the page is about',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { tag: 'h2', size: 'm', weight: 'bold', mdxType: 'Text' },
                  'h2 Mobile section headline - what the section is about',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { tag: 'h3', size: 's', weight: 'bold', mdxType: 'Text' },
                  'h3 Headline in component',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { tag: 'h4', size: 'xxs', weight: 'bold', mdxType: 'Text' },
                  'h4 Headlines in footer',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'props' }, 'Props'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Props,
            {
              of: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Props',
            },
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var header = function header() {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
          { labels: ['XX-Large', 'X-Large', 'Large', 'Medium', 'Small', 'XX-Small'] },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { tag: 'h1', size: 'xxl', weight: 'bold' },
            'h1 Desktop page headline - what the page is about',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { tag: 'h2', size: 'xl', weight: 'bold' },
            'h2 Dekstop section headline - what the section is about',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { tag: 'h1', size: 'l', weight: 'bold' },
            'h1 Mobile page headline - what the page is about',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { tag: 'h2', size: 'm', weight: 'bold' },
            'h2 Mobile section headline - what the section is about',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { tag: 'h3', size: 's', weight: 'bold' },
            'h3 Headline in component',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { tag: 'h4', size: 'xxs', weight: 'bold' },
            'h4 Headlines in footer',
          ),
        );
      };
      (header.displayName = 'header'),
        (header.storyName = 'Header'),
        (header.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'XX-Large\', \'X-Large\', \'Large\', \'Medium\', \'Small\', \'XX-Small\']}>\n      <Text tag="h1" size="xxl" weight="bold">\n        h1 Desktop page headline - what the page is about\n      </Text>\n      <Text tag="h2" size="xl" weight="bold">\n        h2 Dekstop section headline - what the section is about\n      </Text>\n      <Text tag="h1" size="l" weight="bold">\n        h1 Mobile page headline - what the page is about\n      </Text>\n      <Text tag="h2" size="m" weight="bold">\n        h2 Mobile section headline - what the section is about\n      </Text>\n      <Text tag="h3" size="s" weight="bold">\n        h3 Headline in component\n      </Text>\n      <Text tag="h4" size="xxs" weight="bold">\n        h4 Headlines in footer\n      </Text>\n    </StoriesDivider>',
          },
        });
      var componentMeta = {
          title: 'Core/Text/Header',
          component: ___WEBPACK_IMPORTED_MODULE_6__.a,
          includeStories: ['header'],
        },
        mdxStoryNameToKey = { Header: 'header' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    1123: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'paragraph', function () {
          return paragraph;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23),
        _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,
            {
              title: 'Core/Text/Paragraph',
              component: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h2', { id: 'text' }, 'Text'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('inlineCode', { parentName: 'p' }, 'Text'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Preview,
            { mdxType: 'Preview' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Story,
              { name: 'Paragraph', mdxType: 'Story' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  labels: ['X-Small', 'XX-Small', 'XXX-Small', 'XX-Small Weight - Medium', 'XXX-Small Weight - Medium'],
                  mdxType: 'StoriesDivider',
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { size: 'xs', mdxType: 'Text' },
                  'Text in forms',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { size: 'xxs', mdxType: 'Text' },
                  'Body text, used in paragraphs and lists',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { size: 'xxxs', mdxType: 'Text' },
                  'Body text, used for explanatory text (ex. how long an offer is valid)',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { size: 'xxs', weight: 'medium', mdxType: 'Text' },
                  'Links in paragraphs, primary buttons, secondary buttons, badge buttons',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_6__.a,
                  { size: 'xxxs', weight: 'medium', mdxType: 'Text' },
                  'Labels in forms',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'props' }, 'Props'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Props,
            {
              of: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Props',
            },
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var paragraph = function paragraph() {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
          { labels: ['X-Small', 'XX-Small', 'XXX-Small', 'XX-Small Weight - Medium', 'XXX-Small Weight - Medium'] },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { size: 'xs' },
            'Text in forms',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { size: 'xxs' },
            'Body text, used in paragraphs and lists',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { size: 'xxxs' },
            'Body text, used for explanatory text (ex. how long an offer is valid)',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { size: 'xxs', weight: 'medium' },
            'Links in paragraphs, primary buttons, secondary buttons, badge buttons',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_6__.a,
            { size: 'xxxs', weight: 'medium' },
            'Labels in forms',
          ),
        );
      };
      (paragraph.displayName = 'paragraph'),
        (paragraph.storyName = 'Paragraph'),
        (paragraph.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'X-Small\', \'XX-Small\', \'XXX-Small\', \'XX-Small Weight - Medium\', \'XXX-Small Weight - Medium\']}>\n      <Text size="xs">Text in forms</Text>\n      <Text size="xxs">Body text, used in paragraphs and lists</Text>\n      <Text size="xxxs">Body text, used for explanatory text (ex. how long an offer is valid)</Text>\n      <Text size="xxs" weight="medium">\n        Links in paragraphs, primary buttons, secondary buttons, badge buttons\n      </Text>\n      <Text size="xxxs" weight="medium">\n        Labels in forms\n      </Text>\n    </StoriesDivider>',
          },
        });
      var componentMeta = {
          title: 'Core/Text/Paragraph',
          component: ___WEBPACK_IMPORTED_MODULE_6__.a,
          includeStories: ['paragraph'],
        },
        mdxStoryNameToKey = { Paragraph: 'paragraph' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    1124: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'withIcon', function () {
          return withIcon;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41),
        ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23),
        _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,
            {
              title: 'Core/Text/With Icon',
              component: ___WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h2', { id: 'text-with-icon' }, 'Text with icon'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                'inlineCode',
                { parentName: 'p' },
                'Text with icon',
              ),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Preview,
            { mdxType: 'Preview' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Story,
              { name: 'With Icon', mdxType: 'Story' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  labels: ['Icon to the left', 'Icon to the right', 'Icon to left and right'],
                  mdxType: 'StoriesDivider',
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    leftIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' },
                    size: 's',
                    mdxType: 'Text',
                  },
                  'Text with icon to the left',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    rightIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' },
                    size: 's',
                    mdxType: 'Text',
                  },
                  'Text with icon to the right',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                  ___WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    leftIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' },
                    rightIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' },
                    size: 's',
                    mdxType: 'Text',
                  },
                  'Text with icon to the right',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'props' }, 'Props'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Props,
            {
              of: ___WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Props',
            },
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var withIcon = function withIcon() {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_8__.a,
          { labels: ['Icon to the left', 'Icon to the right', 'Icon to left and right'] },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_7__.a,
            { leftIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' }, size: 's' },
            'Text with icon to the left',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_7__.a,
            { rightIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' }, size: 's' },
            'Text with icon to the right',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            ___WEBPACK_IMPORTED_MODULE_7__.a,
            {
              leftIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' },
              rightIcon: { icon: _icons__WEBPACK_IMPORTED_MODULE_6__.cookie, size: 'l' },
              size: 's',
            },
            'Text with icon to the right',
          ),
        );
      };
      (withIcon.displayName = 'withIcon'),
        (withIcon.storyName = 'With Icon'),
        (withIcon.parameters = {
          storySource: {
            source:
              "<StoriesDivider labels={['Icon to the left', 'Icon to the right', 'Icon to left and right']}>\n      <Text leftIcon={{\n    icon: cookie,\n    size: 'l'\n  }} size=\"s\">\n        Text with icon to the left\n      </Text>\n      <Text rightIcon={{\n    icon: cookie,\n    size: 'l'\n  }} size=\"s\">\n        Text with icon to the right\n      </Text>\n      <Text leftIcon={{\n    icon: cookie,\n    size: 'l'\n  }} rightIcon={{\n    icon: cookie,\n    size: 'l'\n  }} size=\"s\">\n        Text with icon to the right\n      </Text>\n    </StoriesDivider>",
          },
        });
      var componentMeta = {
          title: 'Core/Text/With Icon',
          component: ___WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: ['withIcon'],
        },
        mdxStoryNameToKey = { 'With Icon': 'withIcon' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    1125: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1126);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1126: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        ":root {\n  --checkbox-width: 20px;\n  --checkbox-height: 20px;\n}\n\n.checkbox-checkmark {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: var(--checkbox-height);\n  width: var(--checkbox-width);\n  border-radius: var(--checkbox-border-radius);\n  border: 2px solid var(--checkbox-border-color);\n}\n\n.checkbox-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  height: var(--checkbox-height);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  color: var(--checkbox-label-color);\n  padding-left: 10px;\n}\n\n.checkbox-input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkbox-input:checked + .checkbox-checkmark {\n  background-color: var(--checkbox-bg-color);\n  border: 2px solid var(--checkbox-bg-color);\n}\n\n.checkbox-input:checked + .checkbox-checkmark:after {\n  content: '';\n  position: absolute;\n  width: 30%;\n  height: 60%;\n  border: solid var(--checkbox-checkmark-color);\n  border-width: 0 2.5px 2.5px 0;\n  transform: rotate(45deg);\n  margin-bottom: 5px;\n}\n\n.checkbox-input:disabled {\n  background-color: var(--checkmark-disabled-bg-color);\n  cursor: default;\n  color: var(--checkbox-disabled-label-color);\n}\n\n.checkbox-input:disabled + .checkbox-checkmark {\n  background-color: var(--checkbox-checkmark-disabled-bg-color);\n  border: 2px solid var(--checkbox-checkmark-disabled-border-color);\n  cursor: default;\n}\n\n.checkbox-input:disabled ~ .checkbox-label {\n  color: var(--checkbox-disabled-label-color);\n  cursor: default;\n}\n\n.checkbox-input:disabled:not(:checked) + .checkbox-checkmark {\n  background-color: transparent;\n  border: 2px solid var(--checkbox-checkmark-disabled-border-color);\n}\n\n.checkbox-input:hover:not(:disabled) + .checkbox-checkmark ~ .checkbox-label {\n  color: var(--checkbox-hover-color);\n}\n\n.checkbox-input:hover:not(:disabled) + .checkbox-checkmark {\n  opacity: 0.75;\n}\n",
        '',
      ]),
        (module.exports = exports);
    },
    1127: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1128);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1128: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.input-div {\n  position: relative;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  min-width: var(--metrics-min-width);\n  background: var(--input-bg-color);\n  border-radius: var(--input-border-radius);\n  border: 1px solid var(--input-border-color);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.input-div.input-height-none {\n  height: var(--system-size-none);\n}\n\n.input-div.input-height-xxxs {\n  height: var(--system-size-xxxs);\n}\n\n.input-div.input-height-xxs {\n  height: var(--system-size-xxs);\n}\n\n.input-div.input-height-xs {\n  height: var(--system-size-xs);\n}\n\n.input-div.input-height-s {\n  height: var(--system-size-s);\n}\n\n.input-div.input-height-m {\n  height: var(--system-size-m);\n}\n\n.input-div.input-height-l {\n  height: var(--system-size-l);\n}\n\n.input-div.input-height-xl {\n  height: var(--system-size-xl);\n}\n\n.input-div.input-height-xxl {\n  height: var(--system-size-xxl);\n}\n\n.input-div .icon {\n  position: absolute;\n  z-index: 1;\n}\n\n.input-div .icon-left {\n  left: 7.5px;\n}\n\n.input-div .icon-right {\n  right: 7.5px;\n}\n\n.input:disabled {\n  background: var(--input-disabled-bg-color);\n  border: 1px solid var(--input-disabled-border-color);\n  cursor: default;\n}\n\n.input-wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.input {\n  color: var(--input-text-color);\n  height: 100%;\n  width: 100%;\n  border: none;\n  border-radius: var(--input-border-radius);\n  font-size: 16px;\n  padding: var(--input-no-icon-padding) var(--input-no-icon-padding) 0px var(--input-no-icon-padding);\n  box-sizing: border-box;\n  cursor: text;\n}\n\n.input::-moz-placeholder {\n  color: var(--input-placeholder-color);\n}\n\n.input:-ms-input-placeholder {\n  color: var(--input-placeholder-color);\n}\n\n.input::placeholder {\n  color: var(--input-placeholder-color);\n}\n\n.input-div.disabled {\n  border-color: var(--input-disabled-border-color);\n  border-bottom: none;\n}\n\n.input-div.disabled .input::-moz-placeholder {\n  color: var(--input-disabled-text-color);\n}\n\n.input-div.disabled .input:-ms-input-placeholder {\n  color: var(--input-disabled-text-color);\n}\n\n.input-div.disabled .input::placeholder {\n  color: var(--input-disabled-text-color);\n}\n\n.input-div.disabled .icon svg path {\n  fill: var(--input-disabled-text-color);\n}\n\n.input-div.disabled .input-title {\n  color: var(--input-disabled-title-color);\n}\n\n.input-wrapper .input-title {\n  color: var(--input-title-color);\n  font-size: 14px;\n  font-weight: 100;\n  position: absolute;\n  top: 25%;\n  transform: translateY(-25%);\n  padding-left: var(--input-no-icon-padding);\n}\n\n.input.icons-left,\n.input-title.icons-left {\n  padding-left: var(--input-with-icon-padding);\n}\n\n.input.icons-right,\n.input-title.icons-right {\n  padding-right: var(--input-with-icon-padding);\n  padding-left: var(--input-no-icon-padding);\n}\n\n.input.icons-right-left,\n.input-title.icons-right-left {\n  padding-left: var(--input-with-icon-padding);\n  padding-right: var(--input-with-icon-padding);\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1129: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.dropdown-wrapper {\n  height: auto;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n}\n\n.dropdown-wrapper.open {\n  z-index: 3;\n}\n\n.dropdown-wrapper.open > .input-div {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-color: transparent;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-wrapper.close > .input-div {\n  border-bottom-left-radius: var(--input-border-radius);\n  border-bottom-right-radius: var(--input-border-radius);\n  border-bottom-color: var(--input-border-color);\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-wrapper.disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.dropdown-wrapper.disabled .dropdown-content {\n  display: none;\n}\n\n.dropdown-content {\n  position: absolute;\n  height: auto;\n  width: 100%;\n  border-bottom-left-radius: var(--dropdown-border-radius);\n  border-bottom-right-radius: var(--dropdown-border-radius);\n  background-color: var(--dropdown-content-bg-color);\n  box-sizing: border-box;\n  z-index: 2;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-content.open {\n  border: 1px solid var(--input-border-color);\n  height: var(--dropdown-content-height);\n  opacity: 1;\n  transition: all var(--dropdown-content-transition-speed);\n  border-top: 0;\n  box-shadow: 0px -3px 10px -10px var(--input-border-color);\n}\n\n.dropdown-content.close {\n  border: 1px solid transparent;\n  opacity: 0.5;\n  height: 0;\n  margin-top: 0px;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-inner-content {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: transparent;\n  box-sizing: border-box;\n  list-style-type: none;\n  margin: 0;\n}\n\n.dropdown-content.open > .dropdown-inner-content {\n  padding: 10px 10px;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-content.close > .dropdown-inner-content {\n  padding: 0px 10px;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-content-button {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-items: center;\n  width: 100%;\n  height: var(--dropdown-content-item-height);\n  border: none;\n  border-radius: var(--dropdown-content-item-border-radius);\n  border: 1px solid var(--dropdown-content-item-border-color);\n  background-color: var(--dropdown-content-item-bg-color);\n  color: var(--dropdown-content-item-text-color);\n  margin-bottom: 2.5px;\n  cursor: pointer;\n}\n\n.dropdown-content-button .title {\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n  width: 100%;\n  text-align: left;\n  height: 100%;\n}\n\n.dropdown-content-button .icon svg path {\n  fill: var(--dropdown-content-item-icon-color);\n}\n\n.dropdown-content-button.active {\n  background-color: var(--dropdown-content-item-active-bg-color);\n  border: 1px solid var(--dropdown-content-item-active-border-color);\n  color: var(--dropdown-content-item-active-text-color);\n}\n\n.dropdown-content-button.active .title span,\n.title p {\n  background-color: var(--dropdown-content-item-active-bg-color);\n  border: 1px solid var(--dropdown-content-item-active-border-color);\n  color: var(--dropdown-content-item-active-text-color);\n}\n\n.dropdown-content-button.active .icon svg path {\n  fill: var(--dropdown-content-item-active-icon-color);\n}\n\n.dropdown-content-button:disabled input {\n  background-color: var(--dropdown-content-item-disabled-bg-color);\n  border: 1px solid var(--dropdown-content-item-disabled-border-color);\n  color: var(--dropdown-content-item-disabled-color);\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.dropdown-content-button:disabled {\n  background-color: var(--dropdown-content-item-disabled-bg-color);\n  border: 1px solid var(--dropdown-content-item-disabled-border-color);\n  color: var(--dropdown-content-item-disabled-color);\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.dropdown-content-button:disabled svg path {\n  fill: var(--dropdown-content-item-disabled-icon-color);\n}\n\n.dropdown-content-button:disabled .title {\n  background-color: var(--dropdown-content-item-disabled-bg-color);\n  border: 1px solid var(--dropdown-content-item-disabled-border-color);\n  color: var(--dropdown-content-item-disabled-color);\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1130: function (module, exports) {},
    1131: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'input', function () {
          return input;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
        ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79),
        _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,
            {
              title: 'Forms/Input',
              component: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h2', { id: 'input' }, 'Input'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('inlineCode', { parentName: 'p' }, 'Input'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Preview,
            { mdxType: 'Preview' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Story,
              { name: 'Input', mdxType: 'Story' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
                _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
                { labels: ['Standard', 'Default value', 'Disabled'], mdxType: 'StoriesDivider' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  title: 'Input',
                  placeholder: 'Placeholder',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Input',
                }),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  title: 'Input',
                  defaultValue: 'Default value',
                  placeholder: 'Placeholder',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Input',
                }),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
                  title: 'Input',
                  disabled: !0,
                  placeholder: 'Placeholder',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Input',
                }),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)('h1', { id: 'props' }, 'Props'),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Props,
            {
              of: ___WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Props',
            },
          ),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var input = function input() {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
          _storybook_storiesTheme_StoriesDivider__WEBPACK_IMPORTED_MODULE_7__.a,
          { labels: ['Standard', 'Default value', 'Disabled'] },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            title: 'Input',
            placeholder: 'Placeholder',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            title: 'Input',
            defaultValue: 'Default value',
            placeholder: 'Placeholder',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(___WEBPACK_IMPORTED_MODULE_6__.a, {
            title: 'Input',
            disabled: !0,
            placeholder: 'Placeholder',
            onChange: function onChange() {
              return console.log();
            },
          }),
        );
      };
      (input.displayName = 'input'),
        (input.storyName = 'Input'),
        (input.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'Standard\', \'Default value\', \'Disabled\']}>\n      <Input title="Input" placeholder="Placeholder" onChange={() => console.log()} />\n      <Input title="Input" defaultValue="Default value" placeholder="Placeholder" onChange={() => console.log()} />\n      <Input title="Input" disabled placeholder="Placeholder" onChange={() => console.log()} />\n    </StoriesDivider>',
          },
        });
      var componentMeta = {
          title: 'Forms/Input',
          component: ___WEBPACK_IMPORTED_MODULE_6__.a,
          includeStories: ['input'],
        },
        mdxStoryNameToKey = { Input: 'input' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent, null),
            );
          },
        })),
        (__webpack_exports__.default = componentMeta);
    },
    1132: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1133);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1133: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        ":root {\n  --radio-width: 20px;\n  --radio-height: 20px;\n}\n\n.radio-checkmark {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: var(--radio-height);\n  width: var(--radio-width);\n  border-radius: var(--radio-border-radius);\n  border: 2px solid var(--radio-border-color);\n}\n\n.radio-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  height: var(--radio-height);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  color: var(--radio-label-color);\n  padding-left: 10px;\n}\n\n.radio-input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.radio-input:checked + .radio-checkmark {\n  background-color: var(--radio-bg-color);\n  border: 2px solid var(--radio-bg-color);\n}\n\n.radio-input:checked + .radio-checkmark:after {\n  content: '';\n  width: 53%;\n  height: 53%;\n  background-color: var(--radio-checkmark-color);\n  border-radius: var(--radio-border-radius);\n}\n\n.radio-input:disabled {\n  background-color: var(--radio-checkmark-disabled-bg-color);\n  cursor: default;\n  color: var(--radio-disabled-label-color);\n}\n\n.radio-input:disabled + .radio-checkmark {\n  background-color: var(--radio-checkmark-disabled-bg-color);\n  border: 2px solid var(--radio-checkmark-disabled-border-color);\n  cursor: default;\n}\n\n.radio-input:disabled ~ .radio-label {\n  color: var(--radio-disabled-label-color);\n  cursor: default;\n}\n\n.radio-input:disabled:not(:checked) + .radio-checkmark {\n  background-color: transparent;\n  border: 2px solid var(--radio-checkmark-disabled-border-color);\n}\n\n.radio-input:hover:not(:disabled) + .radio-checkmark ~ .radio-label {\n  opacity: 0.75;\n}\n\n.checkbox-input:hover:not(:disabled) + .radio-checkmark {\n  opacity: 0.75;\n}\n",
        '',
      ]),
        (module.exports = exports);
    },
    1134: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.tab-wrapper {\n  display: flex;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  list-style-type: none;\n  padding: 0;\n}\n\n.tab-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.tab-content {\n  align-items: center;\n  justify-items: center;\n  background-color: transparent;\n  margin: 0;\n}\n.tab-content button {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  border: none;\n  background-color: transparent;\n  padding: var(--system-size-xs) var(--system-size-l);\n  margin: 0;\n  height: 100%;\n  border-bottom: var(--tab-border-width) solid var(--tab-border-color);\n}\n\n.tab-content.active button {\n  border-bottom: var(--tab-border-width) solid var(--tab-active-color);\n}\n\n.tab-content.active button .tab-text {\n  color: var(--tab-active-color);\n}\n\n.tab-content.active button svg path {\n  fill: var(--tab-active-color);\n}\n\n.tab-content button:disabled {\n  border-bottom: var(--tab-border-width) solid var(--tab-disabled-color);\n}\n\n.tab-content button:disabled .tab-text {\n  color: var(--tab-disabled-color);\n}\n\n.tab-content button:disabled .icon svg path {\n  fill: var(--tab-disabled-color);\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1135: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1136);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1136: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(73)(!1)).push([
        module.i,
        '.modal {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: var(--modal-bg-color);\n  border-top-left-radius: var(--modal-border-radius);\n  border-top-right-radius: var(--modal-border-radius);\n  width: 100%;\n  z-index: 6;\n  max-height: var(--modal-max-height);\n}\n.modal.open {\n  bottom: 0;\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-duration: var(--modal-transition-speed);\n          animation-duration: var(--modal-transition-speed);\n  box-shadow: 0px -15px 15px -5px var(--modal-shadow);\n  transition: all var(--modal-transition-speed);\n  height: var(--modal-height);\n}\n\n.modal.close {\n  bottom: calc(var(--modal-height) * -1);\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n  -webkit-animation-duration: var(--modal-transition-speed);\n          animation-duration: var(--modal-transition-speed);\n  transition: all var(--modal-transition-speed);\n}\n\n.modal.close.hide {\n  display: none;\n}\n\n.modal .modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  padding: var(--modal-padding);\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--modal-border-color);\n}\n\n.modal .modal-content {\n  width: 100%;\n  padding: var(--modal-padding);\n  box-sizing: border-box;\n  overflow: var(--modal-content-overflow);\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    bottom: calc(var(--modal-height) * -1);\n  }\n  to {\n    bottom: 0;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    bottom: calc(var(--modal-height) * -1);\n  }\n  to {\n    bottom: 0;\n  }\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    bottom: 0;\n  }\n  to {\n    bottom: calc(var(--modal-height) * -1);\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    bottom: 0;\n  }\n  to {\n    bottom: calc(var(--modal-height) * -1);\n  }\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  background-color: var(--modal-overlay-color);\n}\n\n.overlay.open {\n  transition: all var(--modal-transition-speed);\n  height: var(--modal-overlay-height);\n}\n\n.overlay.close {\n  transition: all var(--modal-transition-speed);\n  height: 0;\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1140: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'icons', function () {
          return Icons_stories_icons;
        });
      var components_namespaceObject = {};
      __webpack_require__.r(components_namespaceObject),
        __webpack_require__.d(components_namespaceObject, 'globe', function () {
          return globe;
        }),
        __webpack_require__.d(components_namespaceObject, 'cookie', function () {
          return cookie;
        }),
        __webpack_require__.d(components_namespaceObject, 'search', function () {
          return search;
        }),
        __webpack_require__.d(components_namespaceObject, 'placeholder', function () {
          return placeholder;
        }),
        __webpack_require__.d(components_namespaceObject, 'location', function () {
          return misc_location;
        }),
        __webpack_require__.d(components_namespaceObject, 'facebook', function () {
          return facebook;
        }),
        __webpack_require__.d(components_namespaceObject, 'twitter', function () {
          return twitter;
        }),
        __webpack_require__.d(components_namespaceObject, 'instagram', function () {
          return instagram;
        }),
        __webpack_require__.d(components_namespaceObject, 'youtube', function () {
          return youtube;
        }),
        __webpack_require__.d(components_namespaceObject, 'stena', function () {
          return stena;
        }),
        __webpack_require__.d(components_namespaceObject, 'checkbox', function () {
          return symbols_checkbox;
        }),
        __webpack_require__.d(components_namespaceObject, 'arrowLeft', function () {
          return arrowLeft;
        }),
        __webpack_require__.d(components_namespaceObject, 'arrowRight', function () {
          return arrowRight;
        }),
        __webpack_require__.d(components_namespaceObject, 'directionalArrows', function () {
          return directionalArrows;
        }),
        __webpack_require__.d(components_namespaceObject, 'close', function () {
          return symbols_close;
        }),
        __webpack_require__.d(components_namespaceObject, 'chevronDown', function () {
          return chevronDown;
        }),
        __webpack_require__.d(components_namespaceObject, 'positive', function () {
          return positive;
        }),
        __webpack_require__.d(components_namespaceObject, 'negative', function () {
          return negative;
        }),
        __webpack_require__.d(components_namespaceObject, 'ferryOut', function () {
          return ferryOut;
        }),
        __webpack_require__.d(components_namespaceObject, 'car', function () {
          return car;
        }),
        __webpack_require__.d(components_namespaceObject, 'ferry', function () {
          return ferry;
        }),
        __webpack_require__.d(components_namespaceObject, 'traveler', function () {
          return traveler;
        }),
        __webpack_require__.d(components_namespaceObject, 'adult', function () {
          return adult;
        }),
        __webpack_require__.d(components_namespaceObject, 'child', function () {
          return child;
        }),
        __webpack_require__.d(components_namespaceObject, 'dog', function () {
          return dog;
        }),
        __webpack_require__.d(components_namespaceObject, 'infant', function () {
          return infant;
        }),
        __webpack_require__.d(components_namespaceObject, 'clock', function () {
          return clock;
        }),
        __webpack_require__.d(components_namespaceObject, 'pet', function () {
          return pet;
        }),
        __webpack_require__.d(components_namespaceObject, 'basket', function () {
          return basket;
        }),
        __webpack_require__.d(components_namespaceObject, 'amend', function () {
          return amend;
        }),
        __webpack_require__.d(components_namespaceObject, 'checkIn', function () {
          return checkIn;
        }),
        __webpack_require__.d(components_namespaceObject, 'findTerminal', function () {
          return findTerminal;
        }),
        __webpack_require__.d(components_namespaceObject, 'food', function () {
          return food;
        }),
        __webpack_require__.d(components_namespaceObject, 'wifi', function () {
          return wifi;
        }),
        __webpack_require__.d(components_namespaceObject, 'accessibility', function () {
          return accessibility;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagDE', function () {
          return flagDE;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagDK', function () {
          return flagDK;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagFR', function () {
          return flagFR;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagIE', function () {
          return flagIE;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagLV', function () {
          return flagLV;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagNL', function () {
          return flagNL;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagNO', function () {
          return flagNO;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagPL', function () {
          return flagPL;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagSE', function () {
          return flagSE;
        }),
        __webpack_require__.d(components_namespaceObject, 'flagUK', function () {
          return flagUK;
        }),
        __webpack_require__.d(components_namespaceObject, 'ticket', function () {
          return ticket;
        }),
        __webpack_require__.d(components_namespaceObject, 'account', function () {
          return account;
        }),
        __webpack_require__.d(components_namespaceObject, 'home', function () {
          return home;
        }),
        __webpack_require__.d(components_namespaceObject, 'help', function () {
          return help;
        });
      __webpack_require__(9),
        __webpack_require__(19),
        __webpack_require__(3),
        __webpack_require__(8),
        __webpack_require__(88),
        __webpack_require__(0);
      var esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        dist = __webpack_require__(37),
        jsx_runtime = __webpack_require__(2),
        globe = Object(jsx_runtime.jsxs)('svg', {
          width: '25',
          height: '24',
          viewBox: '0 0 25 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('rect', {
              width: '24',
              height: '24',
              transform: 'translate(0.253601)',
              fill: 'white',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M12.2536 0C18.881 0 24.2536 5.37258 24.2536 12C24.2536 18.6274 18.881 24 12.2536 24C5.62618 24 0.253601 18.6274 0.253601 12C0.253601 5.37258 5.62618 0 12.2536 0ZM10.0546 1.21983C6.36463 1.9685 3.34525 4.56422 2.00348 8H7.53811C7.97574 5.02844 8.8872 2.59408 10.0546 1.21983ZM1.2536 12C1.2536 10.9574 1.39865 9.94872 1.66966 8.99298C1.69695 8.99759 1.72499 9 1.7536 9H7.41112C7.30829 9.95886 7.2536 10.9641 7.2536 12C7.2536 13.0359 7.30829 14.0411 7.41112 15H1.7536L1.66979 15.0075C1.39869 14.0516 1.2536 13.0428 1.2536 12ZM2.00348 16C3.34525 19.4358 6.36463 22.0315 10.0546 22.7802C8.8872 21.4059 7.97574 18.9716 7.53811 16H2.00348ZM8.55271 16C9.18814 20.1182 10.7388 23 12.2536 23C13.7684 23 15.3191 20.1182 15.9545 16H8.55271ZM16.9691 16C16.5315 18.9716 15.62 21.4059 14.4526 22.7802C18.1426 22.0315 21.1619 19.4358 22.5037 16H16.9691ZM22.8375 15.007C22.8103 15.0024 22.7822 15 22.7536 15H17.0961C17.1989 14.0411 17.2536 13.0359 17.2536 12C17.2536 10.9641 17.1989 9.95886 17.0961 9H22.7536L22.8374 8.99249C23.1085 9.94838 23.2536 10.9572 23.2536 12C23.2536 13.0426 23.1086 14.0513 22.8375 15.007ZM16.0877 15H8.41953C8.31234 14.0482 8.2536 13.0422 8.2536 12C8.2536 10.9578 8.31234 9.95183 8.41953 9H16.0877C16.1949 9.95183 16.2536 10.9578 16.2536 12C16.2536 13.0422 16.1949 14.0482 16.0877 15ZM16.9691 8H22.5037C21.1619 4.56422 18.1426 1.9685 14.4526 1.21983C15.62 2.59408 16.5315 5.02844 16.9691 8ZM12.2536 1C10.7388 1 9.18814 3.88184 8.55271 8H15.9545C15.3191 3.88184 13.7684 1 12.2536 1Z',
              fill: 'black',
            }),
          ],
        }),
        cookie = Object(jsx_runtime.jsxs)('svg', {
          width: '25',
          height: '24',
          viewBox: '0 0 25 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('rect', {
              width: '24',
              height: '24',
              transform: 'translate(0.253601)',
              fill: 'white',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M12.7724 0.541126C12.7965 0.250107 12.567 0.00052906 12.275 1.87077e-05L12.2536 0C5.62618 0 0.253601 5.37258 0.253601 12C0.253601 18.6274 5.62618 24 12.2536 24C17.7862 24 22.5632 20.2247 23.8926 14.9326C23.9351 14.7631 23.8862 14.5837 23.7634 14.4594C23.1202 13.8083 22.7536 12.9337 22.7536 12C22.7536 11.6967 22.7921 11.3989 22.8672 11.1115C22.9459 10.8108 22.7339 10.5119 22.4241 10.4866C20.5203 10.3317 18.9875 8.84009 18.778 6.94501C18.7499 6.69082 18.5346 6.4988 18.2788 6.49994L18.2536 6.5C15.216 6.5 12.7536 4.03757 12.7536 1C12.7536 0.846139 12.7599 0.693101 12.7724 0.541126ZM12.2536 23C6.17847 23 1.2536 18.0751 1.2536 12C1.2536 6.09243 5.91054 1.27255 11.7536 1.01116C11.7594 4.4608 14.4524 7.28017 17.8512 7.48775C18.2481 9.46886 19.8134 11.022 21.7923 11.4076C21.7666 11.6028 21.7536 11.8006 21.7536 12C21.7536 13.1002 22.1508 14.1388 22.8541 14.9486C21.547 19.6621 17.2341 23 12.2536 23ZM9.7536 7.5C9.7536 8.60457 8.85817 9.5 7.7536 9.5C6.64903 9.5 5.7536 8.60457 5.7536 7.5C5.7536 6.39543 6.64903 5.5 7.7536 5.5C8.85817 5.5 9.7536 6.39543 9.7536 7.5ZM6.7536 7.5C6.7536 8.05228 7.20132 8.5 7.7536 8.5C8.30589 8.5 8.7536 8.05228 8.7536 7.5C8.7536 6.94772 8.30589 6.5 7.7536 6.5C7.20132 6.5 6.7536 6.94772 6.7536 7.5ZM18.7536 18.5C19.8582 18.5 20.7536 17.6046 20.7536 16.5C20.7536 15.3954 19.8582 14.5 18.7536 14.5C17.649 14.5 16.7536 15.3954 16.7536 16.5C16.7536 17.6046 17.649 18.5 18.7536 18.5ZM18.7536 17.5C18.2013 17.5 17.7536 17.0523 17.7536 16.5C17.7536 15.9477 18.2013 15.5 18.7536 15.5C19.3059 15.5 19.7536 15.9477 19.7536 16.5C19.7536 17.0523 19.3059 17.5 18.7536 17.5ZM12.7536 16C12.7536 17.3807 11.6343 18.5 10.2536 18.5C8.87289 18.5 7.7536 17.3807 7.7536 16C7.7536 14.6193 8.87289 13.5 10.2536 13.5C11.6343 13.5 12.7536 14.6193 12.7536 16ZM8.7536 16C8.7536 16.8284 9.42517 17.5 10.2536 17.5C11.082 17.5 11.7536 16.8284 11.7536 16C11.7536 15.1716 11.082 14.5 10.2536 14.5C9.42517 14.5 8.7536 15.1716 8.7536 16ZM21.7536 5C23.1343 5 24.2536 3.88071 24.2536 2.5C24.2536 1.11929 23.1343 0 21.7536 0C20.3729 0 19.2536 1.11929 19.2536 2.5C19.2536 3.88071 20.3729 5 21.7536 5ZM21.7536 4C20.9252 4 20.2536 3.32843 20.2536 2.5C20.2536 1.67157 20.9252 1 21.7536 1C22.582 1 23.2536 1.67157 23.2536 2.5C23.2536 3.32843 22.582 4 21.7536 4Z',
              fill: 'black',
            }),
          ],
        }),
        search = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M13.7489 12.3347C14.5356 11.2597 15 9.9341 15 8.5C15 4.91015 12.0899 2 8.5 2C4.91015 2 2 4.91015 2 8.5C2 12.0899 4.91015 15 8.5 15C9.9341 15 11.2597 14.5356 12.3347 13.7489L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.7489 12.3347ZM8.5 13C6.01472 13 4 10.9853 4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13Z',
            fill: 'black',
          }),
        }),
        placeholder = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M544.5 137c4.142 0 7.5 3.358 7.5 7.5l-.001-.049v-.033l.077.033c1.688.77 2.833 2.43 2.919 4.32L555 149c0 2.761-2.239 5-5 5h-14.5c-2.485 0-4.5-2.015-4.5-4.5 0-1.589.831-3.029 2.153-3.84l-.025-.093c-.064-.26-.104-.525-.12-.795L533 144.5c0-2.485 2.015-4.5 4.5-4.5.264 0 .525.023.781.068l.148.029.118-.158c1.346-1.758 3.41-2.85 5.67-2.934zm0 1c-2.218 0-4.245 1.12-5.438 2.94l-.205.311-.356-.106c-.322-.096-.658-.145-1.001-.145-1.933 0-3.5 1.567-3.5 3.5 0 .425.075.838.22 1.225l.161.426-.41.2c-1.196.581-1.971 1.795-1.971 3.149 0 1.933 1.567 3.5 3.5 3.5H550c2.21 0 4-1.79 4-4 0-1.71-1.084-3.215-2.67-3.773l-.347-.122.013-.367.004-.238c0-3.59-2.91-6.5-6.5-6.5zm-1.5 9.5c1.105 0 2 .895 2 2 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.552-.448-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.105.895-2 2-2zm-4.216-3.411l.07.057.646.647.646-.647c.196-.195.512-.195.708 0 .173.174.192.443.057.638l-.057.07-.647.646.647.646c.195.196.195.512 0 .708-.174.173-.443.192-.638.057l-.07-.057-.646-.647-.646.647c-.196.195-.512.195-.708 0-.173-.174-.192-.443-.057-.638l.057-.07.647-.646-.647-.646c-.195-.196-.195-.512 0-.708.174-.173.443-.192.638-.057zm7 0l.07.057.646.647.646-.647c.196-.195.512-.195.708 0 .173.174.192.443.057.638l-.057.07-.647.646.647.646c.195.196.195.512 0 .708-.174.173-.443.192-.638.057l-.07-.057-.646-.647-.646.647c-.196.195-.512.195-.708 0-.173-.174-.192-.443-.057-.638l.057-.07.647-.646-.647-.646c-.195-.196-.195-.512 0-.708.174-.173.443-.192.638-.057z',
              transform: 'translate(-531 -134)',
            }),
          }),
        }),
        misc_location = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M12 0c4.411 0 8 3.598 8 8.021a8.047 8.047 0 0 1-1.787 5.048L12.057 24 5.74 13.004C4.633 11.645 4 9.851 4 8.021 4 3.598 7.589 0 12 0zm0 1C8.14 1 5 4.149 5 8.021c0 1.626.54 3.155 1.564 4.419l5.485 9.539 5.342-9.469C18.46 11.175 19 9.647 19 8.021 19 4.149 15.86 1 12 1zm0 1.711c2.921 0 5.298 2.382 5.298 5.31 0 2.928-2.377 5.31-5.298 5.31-2.921 0-5.298-2.382-5.298-5.31 0-2.928 2.377-5.31 5.298-5.31zm0 .999c-2.37 0-4.297 1.934-4.297 4.311 0 2.376 1.928 4.31 4.297 4.31 2.37 0 4.297-1.934 4.297-4.31 0-2.377-1.928-4.311-4.297-4.311z',
            }),
          }),
        }),
        facebook = Object(jsx_runtime.jsxs)('svg', {
          width: '40',
          height: '40',
          viewBox: '0 0 40 40',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
              fill: '#3B5998',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 29.9826 7.31371 38.2566 16.875 39.7569V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4293 7.8125C26.6175 7.8125 28.9062 8.20312 28.9062 8.20312V13.125H26.3843C23.8998 13.125 23.125 14.6667 23.125 16.2483V20H28.6719L27.7852 25.7813H23.125V39.7569C32.6863 38.2566 40 29.9826 40 20Z',
              fill: '#1877F2',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M27.7852 25.7812L28.6719 20H23.125V16.2483C23.125 14.6667 23.8998 13.125 26.3843 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4293 7.8125C19.8609 7.8125 16.875 10.5812 16.875 15.5937V20H11.7969V25.7812H16.875V39.7569C17.8933 39.9167 18.9369 40 20 40C21.0631 40 22.1068 39.9167 23.125 39.7569V25.7812H27.7852Z',
              fill: 'white',
            }),
          ],
        }),
        twitter = Object(jsx_runtime.jsxs)('svg', {
          width: '40',
          height: '40',
          viewBox: '0 0 40 40',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
              fill: '#55ACEE',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M15 31.6662C23.5317 31.7309 30.5017 24.8953 30.5667 16.3986C30.5684 16.3222 30.5684 16.2442 30.5667 16.1662V15.4692C31.655 14.6793 32.5934 13.7019 33.3334 12.5817C32.3384 13.0231 31.2834 13.3085 30.2 13.428C31.3484 12.7576 32.2017 11.6872 32.6 10.4243C31.525 11.0532 30.355 11.5013 29.1334 11.7519C27.0867 9.54308 23.6284 9.40368 21.4084 11.4432C20.2634 12.4954 19.6234 13.984 19.65 15.5356C19.6517 15.9538 19.6967 16.3704 19.7834 16.7803C15.3867 16.5612 11.29 14.4918 8.51669 11.0881C8.02169 11.9162 7.76169 12.8621 7.76669 13.8263C7.76669 15.6468 8.68002 17.3478 10.2 18.3568C9.33335 18.3402 8.48502 18.1062 7.73335 17.6764C7.69669 20.2951 9.53835 22.5687 12.1167 23.0865C11.645 23.2192 11.1567 23.2873 10.6667 23.2856C10.325 23.2856 9.98502 23.2541 9.65002 23.186C10.3667 25.4015 12.4134 26.92 14.75 26.9698C12.815 28.4799 10.425 29.2981 7.96669 29.2931C7.53169 29.2798 7.09669 29.24 6.66669 29.1769C9.15002 30.78 12.0417 31.643 15 31.6662',
              fill: 'white',
            }),
            Object(jsx_runtime.jsx)('mask', {
              id: 'mask0',
              'mask-type': 'alpha',
              maskUnits: 'userSpaceOnUse',
              x: '6',
              y: '10',
              width: '28',
              height: '22',
              children: Object(jsx_runtime.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M15 31.6662C23.5317 31.7309 30.5017 24.8953 30.5667 16.3986C30.5684 16.3222 30.5684 16.2442 30.5667 16.1662V15.4692C31.655 14.6793 32.5934 13.7019 33.3334 12.5817C32.3384 13.0231 31.2834 13.3085 30.2 13.428C31.3484 12.7576 32.2017 11.6872 32.6 10.4243C31.525 11.0532 30.355 11.5013 29.1334 11.7519C27.0867 9.54308 23.6284 9.40368 21.4084 11.4432C20.2634 12.4954 19.6234 13.984 19.65 15.5356C19.6517 15.9538 19.6967 16.3704 19.7834 16.7803C15.3867 16.5612 11.29 14.4918 8.51669 11.0881C8.02169 11.9162 7.76169 12.8621 7.76669 13.8263C7.76669 15.6468 8.68002 17.3478 10.2 18.3568C9.33335 18.3402 8.48502 18.1062 7.73335 17.6764C7.69669 20.2951 9.53835 22.5687 12.1167 23.0865C11.645 23.2192 11.1567 23.2873 10.6667 23.2856C10.325 23.2856 9.98502 23.2541 9.65002 23.186C10.3667 25.4015 12.4134 26.92 14.75 26.9698C12.815 28.4799 10.425 29.2981 7.96669 29.2931C7.53169 29.2798 7.09669 29.24 6.66669 29.1769C9.15002 30.78 12.0417 31.643 15 31.6662',
                fill: 'white',
              }),
            }),
            Object(jsx_runtime.jsx)('g', { mask: 'url(#mask0)' }),
          ],
        }),
        instagram = Object(jsx_runtime.jsxs)('svg', {
          width: '40',
          height: '40',
          viewBox: '0 0 40 40',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
              fill: '#C32AA3',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M19.9585 6.66699C16.3531 6.66699 15.8878 6.66699 14.4756 6.75033C13.374 6.77033 12.2841 6.97866 11.2523 7.36699C9.45627 8.04366 8.03903 9.46533 7.36448 11.267C6.97901 12.302 6.77133 13.3953 6.74973 14.5003C6.66666 15.917 6.66666 16.3837 6.66666 20.0003C6.66666 23.617 6.66666 24.0837 6.74973 25.5003C6.77133 26.6053 6.97901 27.6987 7.36448 28.7337C8.03903 30.5353 9.45627 31.9587 11.2523 32.6337C12.2791 33.0487 13.369 33.287 14.4756 33.3337H19.9585C23.5639 33.3337 24.0291 33.3337 25.4413 33.2503C26.5429 33.2303 27.6328 33.022 28.6646 32.6337C30.4606 31.9587 31.8795 30.5353 32.5524 28.7337C32.9661 27.7037 33.2037 26.6103 33.2502 25.5003C33.2502 24.0837 33.3333 23.617 33.3333 20.0003C33.3333 16.3837 33.2502 15.917 33.2502 14.5003C33.2286 13.3953 33.021 12.302 32.6355 11.267C31.9427 9.44699 30.4922 8.02199 28.6646 7.36699C27.6328 6.97866 26.5429 6.77033 25.4413 6.75033C24.0291 6.66699 23.5639 6.66699 19.9585 6.66699M19.9585 9.06699C23.514 9.06699 23.9294 9.06699 25.325 9.15033C26.1691 9.15366 27.0081 9.30533 27.8006 9.60033C28.9587 10.052 29.8758 10.972 30.3261 12.1337C30.6202 12.9287 30.7714 13.7687 30.7747 14.617C30.7747 16.017 30.8577 16.4337 30.8577 20.0003C30.8577 23.567 30.8577 23.9837 30.7747 25.3837C30.7714 26.2303 30.6202 27.072 30.3261 27.867C29.8758 29.0287 28.9587 29.9487 27.8006 30.4003C27.0081 30.6953 26.1691 30.847 25.325 30.8503C23.9294 30.8503 23.514 30.9337 19.9585 30.9337C16.4029 30.9337 15.9876 30.9337 14.5919 30.8503C13.7462 30.847 12.9088 30.6953 12.1163 30.4003C10.9583 29.9487 10.0411 29.0287 9.59087 27.867C9.29679 27.072 9.1456 26.2303 9.14227 25.3837C9.14227 23.9837 9.0592 23.567 9.0592 20.0003C9.0592 16.4337 9.0592 16.017 9.14227 14.617C9.1456 13.7687 9.29679 12.9287 9.59087 12.1337C10.0411 10.972 10.9583 10.052 12.1163 9.60033C12.9088 9.30533 13.7462 9.15366 14.5919 9.15033C15.9876 9.15033 16.4029 9.06699 19.9585 9.06699M19.9579 24.4502C17.5072 24.4502 15.5217 22.4585 15.5217 20.0002C15.5217 17.5418 17.5072 15.5502 19.9579 15.5502C22.4085 15.5502 24.394 17.5418 24.394 20.0002C24.384 22.4552 22.4052 24.4402 19.9579 24.4502M19.9578 13.1502C16.1863 13.1502 13.1292 16.2168 13.1292 20.0002C13.1292 23.7835 16.1863 26.8502 19.9578 26.8502C23.7294 26.8502 26.7865 23.7835 26.7865 20.0002C26.7865 16.2168 23.7294 13.1502 19.9578 13.1502M27.0516 11.2837C27.9321 11.2837 28.6482 12.0003 28.6482 12.8837C28.6482 13.767 27.9321 14.4837 27.0516 14.4837C26.1726 14.4837 25.4566 13.767 25.4566 12.8837C25.4566 12.0003 26.1726 11.2837 27.0516 11.2837',
              fill: 'white',
            }),
            Object(jsx_runtime.jsx)('mask', {
              id: 'mask0',
              'mask-type': 'alpha',
              maskUnits: 'userSpaceOnUse',
              x: '6',
              y: '6',
              width: '28',
              height: '28',
              children: Object(jsx_runtime.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M19.9585 6.66699C16.3531 6.66699 15.8878 6.66699 14.4756 6.75033C13.374 6.77033 12.2841 6.97866 11.2523 7.36699C9.45627 8.04366 8.03903 9.46533 7.36448 11.267C6.97901 12.302 6.77133 13.3953 6.74973 14.5003C6.66666 15.917 6.66666 16.3837 6.66666 20.0003C6.66666 23.617 6.66666 24.0837 6.74973 25.5003C6.77133 26.6053 6.97901 27.6987 7.36448 28.7337C8.03903 30.5353 9.45627 31.9587 11.2523 32.6337C12.2791 33.0487 13.369 33.287 14.4756 33.3337H19.9585C23.5639 33.3337 24.0291 33.3337 25.4413 33.2503C26.5429 33.2303 27.6328 33.022 28.6646 32.6337C30.4606 31.9587 31.8795 30.5353 32.5524 28.7337C32.9661 27.7037 33.2037 26.6103 33.2502 25.5003C33.2502 24.0837 33.3333 23.617 33.3333 20.0003C33.3333 16.3837 33.2502 15.917 33.2502 14.5003C33.2286 13.3953 33.021 12.302 32.6355 11.267C31.9427 9.44699 30.4922 8.02199 28.6646 7.36699C27.6328 6.97866 26.5429 6.77033 25.4413 6.75033C24.0291 6.66699 23.5639 6.66699 19.9585 6.66699M19.9585 9.06699C23.514 9.06699 23.9294 9.06699 25.325 9.15033C26.1691 9.15366 27.0081 9.30533 27.8006 9.60033C28.9587 10.052 29.8758 10.972 30.3261 12.1337C30.6202 12.9287 30.7714 13.7687 30.7747 14.617C30.7747 16.017 30.8577 16.4337 30.8577 20.0003C30.8577 23.567 30.8577 23.9837 30.7747 25.3837C30.7714 26.2303 30.6202 27.072 30.3261 27.867C29.8758 29.0287 28.9587 29.9487 27.8006 30.4003C27.0081 30.6953 26.1691 30.847 25.325 30.8503C23.9294 30.8503 23.514 30.9337 19.9585 30.9337C16.4029 30.9337 15.9876 30.9337 14.5919 30.8503C13.7462 30.847 12.9088 30.6953 12.1163 30.4003C10.9583 29.9487 10.0411 29.0287 9.59087 27.867C9.29679 27.072 9.1456 26.2303 9.14227 25.3837C9.14227 23.9837 9.0592 23.567 9.0592 20.0003C9.0592 16.4337 9.0592 16.017 9.14227 14.617C9.1456 13.7687 9.29679 12.9287 9.59087 12.1337C10.0411 10.972 10.9583 10.052 12.1163 9.60033C12.9088 9.30533 13.7462 9.15366 14.5919 9.15033C15.9876 9.15033 16.4029 9.06699 19.9585 9.06699M19.9579 24.4502C17.5072 24.4502 15.5217 22.4585 15.5217 20.0002C15.5217 17.5418 17.5072 15.5502 19.9579 15.5502C22.4085 15.5502 24.394 17.5418 24.394 20.0002C24.384 22.4552 22.4052 24.4402 19.9579 24.4502M19.9578 13.1502C16.1863 13.1502 13.1292 16.2168 13.1292 20.0002C13.1292 23.7835 16.1863 26.8502 19.9578 26.8502C23.7294 26.8502 26.7865 23.7835 26.7865 20.0002C26.7865 16.2168 23.7294 13.1502 19.9578 13.1502M27.0516 11.2837C27.9321 11.2837 28.6482 12.0003 28.6482 12.8837C28.6482 13.767 27.9321 14.4837 27.0516 14.4837C26.1726 14.4837 25.4566 13.767 25.4566 12.8837C25.4566 12.0003 26.1726 11.2837 27.0516 11.2837',
                fill: 'white',
              }),
            }),
            Object(jsx_runtime.jsx)('g', { mask: 'url(#mask0)' }),
          ],
        }),
        youtube = Object(jsx_runtime.jsxs)('svg', {
          width: '40',
          height: '40',
          viewBox: '0 0 40 40',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
              fill: '#FF0000',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M17.2497 24.2203V16.8934L24.4497 20.5731L17.2497 24.2203ZM33.0667 15.6235C32.9367 14.6873 32.57 13.7983 32 13.0347C31.295 12.3394 30.335 11.9454 29.3333 11.9438C25.6 11.667 20 11.667 20 11.667C20 11.667 14.4 11.667 10.6667 11.9438C9.66499 11.9454 8.70499 12.3394 7.99999 13.0347C7.42999 13.7983 7.06332 14.6873 6.93332 15.6235C6.76666 17.0237 6.67832 18.4305 6.66666 19.8405V21.8106C6.67832 23.2206 6.76666 24.6273 6.93332 26.0276C7.06166 26.9654 7.42666 27.8544 7.99999 28.6164C8.80666 29.3246 9.84832 29.7235 10.9333 29.7398C13.0667 29.9352 20 30.0003 20 30.0003C20 30.0003 25.6 30.0003 29.3333 29.7235C30.3367 29.7121 31.295 29.3149 32 28.6164C32.5717 27.8544 32.94 26.9654 33.0667 26.0276C33.2317 24.6273 33.3217 23.2206 33.3333 21.8106V19.8405C33.3217 18.4305 33.2317 17.0237 33.0667 15.6235V15.6235Z',
              fill: 'white',
            }),
            Object(jsx_runtime.jsx)('mask', {
              id: 'mask0',
              'mask-type': 'alpha',
              maskUnits: 'userSpaceOnUse',
              x: '6',
              y: '11',
              width: '28',
              height: '20',
              children: Object(jsx_runtime.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M17.2497 24.2203V16.8934L24.4497 20.5731L17.2497 24.2203ZM33.0667 15.6235C32.9367 14.6873 32.57 13.7983 32 13.0347C31.295 12.3394 30.335 11.9454 29.3333 11.9438C25.6 11.667 20 11.667 20 11.667C20 11.667 14.4 11.667 10.6667 11.9438C9.66499 11.9454 8.70499 12.3394 7.99999 13.0347C7.42999 13.7983 7.06332 14.6873 6.93332 15.6235C6.76666 17.0237 6.67832 18.4305 6.66666 19.8405V21.8106C6.67832 23.2206 6.76666 24.6273 6.93332 26.0276C7.06166 26.9654 7.42666 27.8544 7.99999 28.6164C8.80666 29.3246 9.84832 29.7235 10.9333 29.7398C13.0667 29.9352 20 30.0003 20 30.0003C20 30.0003 25.6 30.0003 29.3333 29.7235C30.3367 29.7121 31.295 29.3149 32 28.6164C32.5717 27.8544 32.94 26.9654 33.0667 26.0276C33.2317 24.6273 33.3217 23.2206 33.3333 21.8106V19.8405C33.3217 18.4305 33.2317 17.0237 33.0667 15.6235V15.6235Z',
                fill: 'white',
              }),
            }),
            Object(jsx_runtime.jsx)('g', { mask: 'url(#mask0)' }),
          ],
        }),
        stena = Object(jsx_runtime.jsxs)('svg', {
          width: '40',
          height: '40',
          viewBox: '0 0 40 40',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
              fill: '#EA143D',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M33.3249 15.0002C32.9097 14.9925 32.5609 14.6859 32.4999 14.2752C32.1857 9.83221 28.6438 6.30102 24.1999 6.0002C23.9785 5.99426 23.7694 5.89676 23.6225 5.73092C23.4756 5.56508 23.4041 5.34575 23.4249 5.1252C23.464 4.67146 23.8445 4.32353 24.2999 4.3252C29.5788 4.68458 33.7888 8.87325 34.1749 14.1502C34.2038 14.6109 33.8598 15.0104 33.3999 15.0502L33.3249 15.0002ZM23.4245 29.7002C23.4272 30.5612 23.2483 31.413 22.8995 32.2002C22.4055 33.3986 21.2897 34.2258 19.9995 34.3502C19.0176 34.4239 18.0315 34.4239 17.0495 34.3502H14.5495C13.4344 34.3658 12.3639 33.9123 11.5995 33.1002C11.0636 32.3735 10.7588 31.5024 10.7245 30.6002V27.7252H15.4745V29.2002C15.4745 29.6752 15.4745 30.4252 16.2995 30.6002C16.9134 30.767 17.5606 30.767 18.1745 30.6002C18.5495 30.4252 18.6745 29.9752 18.7495 29.1752C18.8177 28.2014 18.8177 27.224 18.7495 26.2502C18.7168 25.6702 18.3723 25.1534 17.8495 24.9002C17.7642 24.8547 17.6572 24.7979 17.5329 24.7318L17.5328 24.7318C16.5639 24.2172 14.5408 23.1427 13.4995 22.5002C12.5482 22.049 11.7363 21.3494 11.1495 20.4752C10.8596 19.8391 10.7063 19.1492 10.6995 18.4502C10.6314 17.351 10.7241 16.2477 10.9745 15.1752C11.1493 14.4581 11.61 13.8438 12.2495 13.4752C13.6314 12.7676 15.1735 12.4316 16.7245 12.5002C18.434 12.4019 20.1435 12.6925 21.7245 13.3502C22.4679 13.861 22.9445 14.6768 23.0245 15.5752V18.3002H20.7745H18.7995V17.1002C18.7825 16.7897 18.6377 16.5001 18.3995 16.3002C17.7046 16.0502 16.9444 16.0502 16.2495 16.3002C15.6655 16.5023 15.6466 17.0677 15.6306 17.543C15.6288 17.5968 15.627 17.6494 15.6245 17.7002C15.5672 18.2521 15.7389 18.8034 16.0995 19.2252C16.4435 19.5929 17.5529 20.2195 18.7709 20.9074C20.1198 21.6693 21.6019 22.5064 22.3245 23.1502C23.1577 23.8425 23.6048 24.8949 23.5245 25.9752C23.4921 26.1049 23.4702 27.3599 23.4519 28.4032L23.4519 28.4034L23.4519 28.4036C23.4421 28.9688 23.4333 29.4718 23.4245 29.7002ZM28.4243 15.1502C28.4632 15.5763 28.8215 15.902 29.2493 15.9002C29.4685 15.8812 29.671 15.7754 29.8118 15.6064C29.9527 15.4374 30.0202 15.2192 29.9993 15.0002C29.7267 11.696 27.2256 9.00882 23.9493 8.5002H23.6743C23.4552 8.47201 23.234 8.53286 23.0601 8.66913C22.8863 8.80541 22.7743 9.00571 22.7493 9.2252C22.7046 9.67785 23.0241 10.0855 23.4743 10.1502H23.6993C26.2375 10.5306 28.188 12.5946 28.4243 15.1502Z',
              fill: 'white',
            }),
          ],
        }),
        symbols_checkbox = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7.20586 18C6.88939 18 6.58586 17.8689 6.3635 17.6333L0.334061 11.2576C-0.118883 10.7792 -0.110648 10.0094 0.355237 9.5407C0.819945 9.07324 1.56466 9.08174 2.01878 9.56256L7.13174 14.9682L17.9153 1.44202C18.3283 0.924775 19.0695 0.850709 19.5706 1.27689C20.073 1.70307 20.1448 2.46802 19.7318 2.98648L8.1141 17.558C7.90233 17.8227 7.58939 17.9842 7.25527 17.9988C7.2388 18 7.22233 18 7.20586 18Z',
            fill: 'white',
          }),
        }),
        arrowLeft = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.2383 10.647C5.2415 10.6508 5.2442 10.6548 5.24745 10.6585L8.74745 14.6585C8.9451 14.8845 9.22205 15 9.5004 15C9.73415 15 9.9688 14.9186 10.1585 14.7526C10.5742 14.3889 10.6163 13.7571 10.2526 13.3415L8.20375 11H14C14.5523 11 15 10.5523 15 10C15 9.44774 14.5523 9.00004 14 9.00004H8.20375L10.2526 6.65851C10.6163 6.24291 10.5742 5.61117 10.1585 5.24747C9.74285 4.88372 9.1111 4.92587 8.74745 5.34157L5.24745 9.34154C5.2442 9.34524 5.2415 9.34924 5.2383 9.35299C5.22835 9.36469 5.21905 9.37679 5.20965 9.38894C5.1997 9.40179 5.1898 9.41469 5.18055 9.42789C5.17195 9.44014 5.1639 9.45279 5.1559 9.46544C5.1471 9.47934 5.13845 9.49319 5.1304 9.50739C5.12305 9.52039 5.11615 9.53359 5.10935 9.54694C5.10195 9.56144 5.09485 9.57604 5.0882 9.59079C5.082 9.60459 5.0762 9.61849 5.0706 9.63259C5.0647 9.64759 5.0592 9.66269 5.054 9.67789C5.04915 9.69224 5.04445 9.70659 5.0402 9.72124C5.03555 9.73724 5.0316 9.75329 5.0278 9.76949C5.02445 9.78364 5.021 9.79774 5.01825 9.81209C5.01465 9.83084 5.01215 9.84969 5.00965 9.86854C5.00805 9.88069 5.00595 9.89264 5.0048 9.90489C4.9988 9.96819 4.9988 10.0318 5.0048 10.0951C5.00595 10.1074 5.00805 10.1193 5.00965 10.1315C5.01215 10.1503 5.01465 10.1692 5.01825 10.1879C5.021 10.2023 5.02445 10.2164 5.0278 10.2305C5.0316 10.2467 5.03555 10.2628 5.0402 10.2788C5.04445 10.2934 5.04915 10.3078 5.054 10.3221C5.0592 10.3373 5.0647 10.3524 5.0706 10.3674C5.0762 10.3815 5.082 10.3954 5.0882 10.4092C5.09485 10.424 5.10195 10.4386 5.10935 10.4531C5.11615 10.4664 5.12305 10.4796 5.1304 10.4926C5.13845 10.5068 5.1471 10.5207 5.1559 10.5346C5.1639 10.5472 5.17195 10.5599 5.18055 10.5721C5.1898 10.5854 5.1997 10.5982 5.20965 10.6111C5.21905 10.6232 5.22835 10.6354 5.2383 10.647Z',
            fill: 'black',
          }),
        }),
        arrowRight = Object(jsx_runtime.jsx)('svg', {
          width: '21',
          height: '20',
          viewBox: '0 0 21 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M10.6998 16.9603C10.1694 16.5184 10.0978 15.7301 10.5397 15.1998L13.8312 11.25H4.5C3.80964 11.25 3.25 10.6904 3.25 10C3.25 9.30968 3.80964 8.75003 4.5 8.75003H13.8312L10.5397 4.80026C10.0978 4.26992 10.1694 3.48171 10.6998 3.03975C11.2301 2.5978 12.0183 2.66945 12.4603 3.1998L17.4603 9.1998C17.8466 9.66336 17.8466 10.3367 17.4603 10.8003L12.4603 16.8003C12.0183 17.3306 11.2301 17.4023 10.6998 16.9603Z',
            fill: 'black',
          }),
        }),
        directionalArrows = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.00005 5.00195H3.00005C2.10915 5.00195 1.66298 3.92481 2.29294 3.29485L5.29294 0.294847C5.68347 -0.0956783 6.31663 -0.0956783 6.70716 0.294847L9.70716 3.29485C10.3371 3.92481 9.89096 5.00195 9.00005 5.00195H7.00005L7.00005 14.002C7.00005 14.5542 6.55234 15.002 6.00005 15.002C5.48722 15.002 5.06454 14.6159 5.00678 14.1186L5.00005 14.002L5.00005 5.00195ZM15.0001 10.002H17.0001C17.891 10.002 18.3371 11.0791 17.7072 11.7091L14.7072 14.7091C14.3166 15.0996 13.6835 15.0996 13.2929 14.7091L10.2929 11.7091C9.66298 11.0791 10.1091 10.002 11.0001 10.002L13.0001 10.002L13.0001 1.00195L13.0068 0.885332C13.0645 0.387993 13.4872 0.00195313 14.0001 0.00195313C14.5523 0.00195313 15.0001 0.449668 15.0001 1.00195L15.0001 10.002Z',
            fill: 'black',
          }),
        }),
        symbols_close = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14.7071 13.2929C15.0977 13.6835 15.0977 14.3166 14.7071 14.7071C14.5119 14.9024 14.256 15 14 15C13.7441 15 13.4882 14.9024 13.2929 14.7071L10 11.4142L6.70711 14.7071C6.51186 14.9024 6.25591 15 6.00001 15C5.74411 15 5.48816 14.9024 5.29291 14.7071C4.90236 14.3166 4.90236 13.6835 5.29291 13.2929L8.58581 10L5.29291 6.70711C4.90236 6.31661 4.90236 5.68346 5.29291 5.29291C5.68341 4.90236 6.31656 4.90236 6.70711 5.29291L10 8.58581L13.2929 5.29291C13.6834 4.90236 14.3166 4.90236 14.7071 5.29291C15.0977 5.68346 15.0977 6.31661 14.7071 6.70711L11.4142 10L14.7071 13.2929Z',
            fill: '#0C6DCD',
          }),
        }),
        chevronDown = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5.70711 7.29289L10 11.5858L14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289Z',
            fill: '#2378CD',
          }),
        }),
        positive = Object(jsx_runtime.jsx)('svg', {
          width: '12',
          height: '12',
          viewBox: '0 0 12 12',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5 5V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5Z',
            fill: 'black',
          }),
        }),
        negative = Object(jsx_runtime.jsx)('svg', {
          width: '14',
          height: '2',
          viewBox: '0 0 14 2',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M1 2H13C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z',
            fill: 'black',
          }),
        }),
        ferryOut = Object(jsx_runtime.jsx)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M19.1116 0.185115C19.2662 -0.00554698 19.5322 -0.0527242 19.74 0.0612919L19.8149 0.111639L23.9939 3.50002L19.8149 6.88839C19.6004 7.06231 19.2855 7.02941 19.1116 6.81492C18.957 6.62426 18.9658 6.35429 19.1204 6.1745L19.1851 6.11164L21.7884 4.00002H5.5C3.18372 4.00002 1.27619 5.75004 1.02746 8.00002H4.07644C4.52454 8.00002 4.91244 8.29698 5.03588 8.71788L5.06283 8.83562L5.42356 11H14.4884C14.496 10.9998 14.5037 10.9998 14.5113 11H16.5C16.7761 11 17 11.2239 17 11.5C17 11.7455 16.8231 11.9496 16.5899 11.992L16.5 12H15.2384L16.838 16H23.5C23.8544 16 24.0867 16.3534 23.9706 16.6699L23.9341 16.7481L20.3616 23H22.5C22.7761 23 23 23.2239 23 23.5C23 23.7455 22.8231 23.9496 22.5899 23.992L22.5 24H19.5088C19.5026 24.0001 19.4965 24.0001 19.4903 24H1H0V8.50002C0 5.53654 2.34378 3.12048 5.27879 3.00438L5.5 3.00002H21.7903L19.1851 0.888394C18.9944 0.733803 18.9473 0.467841 19.0613 0.26L19.1116 0.185115ZM5.00824 12C5.00233 12.0001 4.99644 12.0001 4.99056 12H1V14H2.5C2.77614 14 3 14.2239 3 14.5C3 14.7455 2.82312 14.9496 2.58988 14.992L2.5 15H1V23H19.2098L22.637 17H16.5C16.3248 17 16.1646 16.9086 16.0747 16.7629L16.0358 16.6857L14.1615 12H5.00824ZM4.07644 9.00002L4.40977 11H1V9.00002H4.07644ZM7.5 14C7.77614 14 8 14.2239 8 14.5C8 14.7455 7.82312 14.9496 7.58988 14.992L7.5 15H5.5C5.22386 15 5 14.7762 5 14.5C5 14.2546 5.17688 14.0504 5.41012 14.0081L5.5 14H7.5ZM13 14.5C13 14.2239 12.7761 14 12.5 14H10.5L10.4101 14.0081C10.1769 14.0504 10 14.2546 10 14.5C10 14.7762 10.2239 15 10.5 15H12.5L12.5899 14.992C12.8231 14.9496 13 14.7455 13 14.5Z',
            fill: 'black',
          }),
        }),
        car = Object(jsx_runtime.jsx)('svg', {
          width: '22',
          height: '21',
          viewBox: '0 0 22 21',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.5 0H16.5C17.9096 0 19.161 0.901993 19.6068 2.23925L19.9903 3.40194L20.962 8.262L21.0172 8.32039C21.596 8.97446 21.9395 9.80373 21.9927 10.6755L22 10.9142V15.5C22 17.0345 20.9294 17.8663 19 17.9851V19.5C19 20.3284 18.3284 21 17.5 21C16.6716 21 16 20.3284 16 19.5V18H6V19.5C6 20.3284 5.32843 21 4.5 21C3.67157 21 3 20.3284 3 19.5V17.9852C1.15527 17.8721 0.0945817 17.1086 0.00503411 15.6721L0 15.5V10.9142C0 9.96471 0.345127 9.04832 0.980786 8.32303L1.037 8.262L2.02566 3.34189L2.3932 2.23925C2.81395 0.977002 3.95595 0.0964934 5.29582 0.00657544L5.5 0ZM16 17H18.5C20.2565 17 21 16.5043 21 15.5V10.9142C21 10.2083 20.7439 9.52885 20.2832 9H1.71684C1.25508 9.53001 1 10.2099 1 10.9142L0.999766 15.4847L1.00383 15.6256C1.06081 16.5374 1.81249 17 3.5 17H6H16ZM17 18V19.5C17 19.7455 17.1769 19.9496 17.4101 19.9919L17.5 20C17.7761 20 18 19.7761 18 19.5V18H17ZM4 18H5V19.5C5 19.7761 4.77614 20 4.5 20L4.41012 19.9919C4.17688 19.9496 4 19.7455 4 19.5V18ZM5.51678 0.999718L5.34619 1.00516C4.4275 1.06701 3.63414 1.67872 3.34189 2.55548L2.99029 3.59806L2.1099 8H19.8907L19.0257 3.65811L18.6581 2.55548C18.3485 1.62656 17.4792 1 16.5 1L5.51678 0.999718ZM4 15C4.55228 15 5 14.5523 5 14C5 13.4477 4.55228 13 4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15ZM18 15C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13C17.4477 13 17 13.4477 17 14C17 14.5523 17.4477 15 18 15ZM7.5 13C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14H14.5C14.7761 14 15 13.7761 15 13.5C15 13.2239 14.7761 13 14.5 13H7.5Z',
            fill: 'black',
          }),
        }),
        ferry = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M21.5 139c.184 0 .351.101.438.259l.036.083.886 2.658h6.64c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-.191l1.5 3H34.5c.359 0 .59.361.467.679l-.038.078L32.382 151H34.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-23c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h.947l-.39-3.9c-.054-.55.346-1.04.896-1.095l.063-.004 1.601-.001c.224 0 .417-.148.48-.357l.016-.081.336-2.686c.058-.462.425-.817.878-.87l.114-.006H18l.001-2.5c0-.245.177-.45.41-.492l.09-.008h3zm6.69 4H16.441l-.335 2.686c-.088.704-.655 1.243-1.348 1.307l-.14.007h-1.566l.4 4h17.764l2.4-4H30.5c-.158 0-.304-.074-.398-.197l-.05-.08L28.19 143zm-8.69 1c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h2zm4 0c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h2zm4 0c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h2zm-6.361-4H19l-.001 2h2.806l-.666-2z',
              transform: 'translate(-11 -134)',
            }),
          }),
        }),
        traveler = Object(jsx_runtime.jsxs)('svg', {
          width: '94',
          height: '24',
          viewBox: '0 0 94 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(jsx_runtime.jsx)('path', {
              d: 'M89.92 18V8.944H87.728V7.88C88.752 7.88 89.4587 7.75733 89.848 7.512C90.2373 7.26667 90.448 6.90667 90.48 6.432H91.672V18H89.92Z',
              fill: 'black',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M63.5 3H74.5C75.9096 3 77.161 3.90199 77.6068 5.23925L77.9903 6.40194L78.962 11.262L79.0172 11.3204C79.596 11.9745 79.9395 12.8037 79.9927 13.6755L80 13.9142V18.5C80 20.0345 78.9294 20.8663 77 20.9851V22.5C77 23.3284 76.3284 24 75.5 24C74.6716 24 74 23.3284 74 22.5V21H64V22.5C64 23.3284 63.3284 24 62.5 24C61.6716 24 61 23.3284 61 22.5V20.9852C59.1553 20.8721 58.0946 20.1086 58.005 18.6721L58 18.5V13.9142C58 12.9647 58.3451 12.0483 58.9808 11.323L59.037 11.262L60.0257 6.34189L60.3932 5.23925C60.814 3.977 61.9559 3.09649 63.2958 3.00658L63.5 3ZM74 20H76.5C78.2565 20 79 19.5043 79 18.5V13.9142C79 13.2083 78.7439 12.5289 78.2832 12H59.7168C59.2551 12.53 59 13.2099 59 13.9142L58.9998 18.4847L59.0038 18.6256C59.0608 19.5374 59.8125 20 61.5 20H64H74ZM75 21V22.5C75 22.7455 75.1769 22.9496 75.4101 22.9919L75.5 23C75.7761 23 76 22.7761 76 22.5V21H75ZM62 21H63V22.5C63 22.7761 62.7761 23 62.5 23L62.4101 22.9919C62.1769 22.9496 62 22.7455 62 22.5V21ZM63.5168 3.99972L63.3462 4.00516C62.4275 4.06701 61.6341 4.67872 61.3419 5.55548L60.9903 6.59806L60.1099 11H77.8907L77.0257 6.65811L76.6581 5.55548C76.3485 4.62656 75.4792 4 74.5 4L63.5168 3.99972ZM62 18C62.5523 18 63 17.5523 63 17C63 16.4477 62.5523 16 62 16C61.4477 16 61 16.4477 61 17C61 17.5523 61.4477 18 62 18ZM76 18C76.5523 18 77 17.5523 77 17C77 16.4477 76.5523 16 76 16C75.4477 16 75 16.4477 75 17C75 17.5523 75.4477 18 76 18ZM65.5 16C65.2239 16 65 16.2239 65 16.5C65 16.7761 65.2239 17 65.5 17H72.5C72.7761 17 73 16.7761 73 16.5C73 16.2239 72.7761 16 72.5 16H65.5Z',
              fill: 'black',
            }),
            Object(jsx_runtime.jsx)('path', {
              d: 'M30.88 9.856C30.88 9.08267 31.064 8.432 31.432 7.904C31.8053 7.37067 32.3013 6.96533 32.92 6.688C33.544 6.41067 34.2347 6.272 34.992 6.272C35.808 6.272 36.5307 6.38667 37.16 6.616C37.7893 6.84533 38.2827 7.184 38.64 7.632C39.0027 8.08 39.184 8.632 39.184 9.288C39.184 9.864 39.0053 10.3787 38.648 10.832C38.296 11.2853 37.7467 11.64 37 11.896C37.7307 12.0933 38.3253 12.4347 38.784 12.92C39.248 13.4053 39.48 14.0267 39.48 14.784C39.48 15.504 39.28 16.1173 38.88 16.624C38.48 17.1307 37.936 17.5173 37.248 17.784C36.5653 18.0507 35.792 18.1813 34.928 18.176C33.68 18.1653 32.68 17.8427 31.928 17.208C31.176 16.568 30.784 15.7013 30.752 14.608H32.44C32.552 15.3067 32.8347 15.8373 33.288 16.2C33.7413 16.5573 34.304 16.736 34.976 16.736C35.792 16.736 36.44 16.552 36.92 16.184C37.4 15.816 37.64 15.3387 37.64 14.752C37.64 14.1067 37.3787 13.6107 36.856 13.264C36.3333 12.9173 35.688 12.7387 34.92 12.728L33.856 12.704V11.28L34.848 11.248C35.3333 11.2373 35.7627 11.1467 36.136 10.976C36.5093 10.8 36.8027 10.5707 37.016 10.288C37.2347 10.0053 37.344 9.69333 37.344 9.352C37.344 8.888 37.1333 8.49067 36.712 8.16C36.2907 7.82933 35.7093 7.664 34.968 7.664C34.568 7.664 34.1867 7.73867 33.824 7.888C33.4667 8.03733 33.1707 8.27467 32.936 8.6C32.7067 8.92 32.5813 9.33867 32.56 9.856H30.88Z',
              fill: 'black',
            }),
            Object(jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M17 5C17 2.23858 14.7614 0 12 0C9.2386 0 7.00002 2.23858 7.00002 5C7.00002 7.76142 9.2386 10 12 10C14.7614 10 17 7.76142 17 5ZM8.00002 5C8.00002 2.79086 9.79088 1 12 1C14.2092 1 16 2.79086 16 5C16 7.20914 14.2092 9 12 9C9.79088 9 8.00002 7.20914 8.00002 5ZM7.37875 11.0149L5.88244 11.389C4.16764 11.8177 2.86262 13.2106 2.54643 14.9497L1.00809 23.4106C0.952283 23.7175 1.18807 24 1.50002 24H7.50002H16.4999H16.5H22.4999C22.8118 24 23.0476 23.7175 22.9918 23.4106L21.4535 14.9497C21.1373 13.2106 19.8323 11.8177 18.1175 11.389L16.6211 11.0149C16.3056 10.936 15.9999 11.1747 15.9999 11.5V23H8.00002V11.5C8.00002 11.1747 7.69433 10.936 7.37875 11.0149ZM7.00002 12.14V23H2.09802L3.5303 15.1286C3.77623 13.7759 4.79124 12.6926 6.12497 12.3592L7.00002 12.14ZM16.9999 12.14V23H21.9019L20.4696 15.1286C20.2237 13.7759 19.2087 12.6926 17.8749 12.3592L16.9999 12.14Z',
              fill: 'black',
            }),
          ],
        }),
        adult = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M20.583 144.466c.264.07.539-.074.63-.335.08-.268-.067-.552-.33-.638-.883-.283-1.848-.14-2.611.395-.233.145-.305.453-.16.69.082.138.226.225.385.237.102-.001.2-.034.285-.092.528-.366 1.194-.461 1.801-.257zm5.195 6.867l-.392.076c-1.575.318-3.198.318-4.773 0l-.39-.076c-.268-.055-.53.123-.585.394-.054.273.12.539.39.594h.375c1.713.363 3.482.363 5.195 0h.375c.268-.055.444-.32.39-.594-.054-.27-.315-.449-.585-.394zm7.956-6.397l-2.372-5.211c-.778-1.233-1.812-2.279-3.03-3.066-4.626-2.99-10.77-1.617-13.723 3.066l-2.342 5.165c-.562 1.233-.222 2.693.827 3.54l2.236 1.81c.165-5.926 1.32-9.907 3.498-11.837.85-.802 1.994-1.205 3.152-1.109l.78.137-.45.653c0 .09-1.397 2.188 0 3.494.999.59 2.109.963 3.256 1.095 2.403.502 5.12 1.063 5.12 3.433v4.073l2.221-1.81v.062c1.026-.84 1.365-2.274.827-3.495zm-4.055 1.17c0-1.427-1.785-1.915-4.308-2.432-1.333-.14-2.616-.604-3.736-1.35-1.025-1.057-1.244-2.668-.542-3.966-.585.148-1.126.44-1.575.85-1.396 1.216-3.048 4.164-3.183 11.182.135 2.947 4.818 5.577 6.665 5.577 1.876 0 6.68-2.705 6.68-5.713v-4.148zm3.828 3.116l-3.138 2.565c-1.504 2.819-4.237 4.75-7.37 5.214-3.12-.473-5.839-2.403-7.339-5.214l-3.168-2.565c-1.416-1.132-1.887-3.096-1.14-4.756l2.372-5.272c.877-1.423 2.065-2.625 3.47-3.513 5.111-3.234 11.845-1.66 15.038 3.513l2.417 5.272c.747 1.66.276 3.624-1.142 4.756zm-7.37-4.21c-.596 0-1.081.49-1.081 1.094 0 .604.485 1.094 1.082 1.094.597 0 1.081-.49 1.081-1.094 0-.604-.484-1.095-1.081-1.095zm-6.154 2.188c-.597 0-1.081-.49-1.081-1.094 0-.604.484-1.095 1.081-1.095s1.08.491 1.08 1.095-.483 1.094-1.08 1.094z',
              transform: 'translate(-11 -134)',
            }),
          }),
        }),
        child = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M151.333 146.675c0 .638-.5 1.155-1.12 1.155-.618 0-1.12-.517-1.12-1.155 0-.637.502-1.155 1.12-1.155.62 0 1.12.518 1.12 1.155zm5.35-1.155c.617.008 1.115.52 1.121 1.155 0 .638-.5 1.155-1.12 1.155-.618 0-1.12-.517-1.12-1.155 0-.637.502-1.155 1.12-1.155zm-.908 7.268c.16.228.112.546-.108.712-.677.36-1.434.53-2.196.495-.762.015-1.514-.177-2.181-.555-.168-.14-.228-.378-.149-.586.102-.261.389-.389.644-.284 1.056.572 2.316.572 3.373 0v.06c.215-.11.476-.043.617.158zm7.194-5.214c-.153.628-.629 1.119-1.238 1.276v-3.405c.912.236 1.466 1.188 1.238 2.129zm-2.213-5.984v8.82c0 3.69-3.213 6.585-7.27 6.585-4.058 0-7.272-2.895-7.272-6.585v-2.821c.618-1.758 2.188-2.973 3.999-3.089 2.328.183 4.64-.492 6.53-1.905 1.129-.948 2.56-1.423 4.013-1.335v.33zm-14.542 0c.007-3.616 2.836-6.552 6.34-6.585h1.833c3.026.005 5.634 2.195 6.254 5.25-1.611-.08-3.197.453-4.45 1.5-1.736 1.272-3.857 1.863-5.978 1.665-1.596.029-3.083.842-4 2.19v-4.02zm-1.017 7.41c-.73-.217-1.236-.898-1.251-1.68-.002-.792.511-1.486 1.25-1.695V149zm16.548-4.605v-2.805c-.006-4.19-3.297-7.582-7.358-7.59h-1.833c-4.06.008-7.35 3.4-7.357 7.59v2.91c-1.475.299-2.435 1.772-2.145 3.293.213 1.117 1.06 1.992 2.145 2.212v.345c0 4.32 3.62 7.65 8.289 7.65 4.668 0 8.304-3.33 8.304-7.59v-.511c1.28-.245 2.21-1.398 2.21-2.744.004-1.365-.949-2.533-2.255-2.76z',
              transform: 'translate(-141 -134)',
            }),
          }),
        }),
        dog = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M678.002 137.244c.287-.212.653-.291 1.003-.217l4.333.78c.672.142 1.233.6 1.505 1.227.261.65.194 1.385-.18 1.977l-3.01 4.658c-.222.358-.616.574-1.038.57h-.196c-.074.013-.15.013-.225 0-1.28 4.178-3.506 8.761-7.208 8.761-3.701 0-5.943-4.613-7.267-8.747-.085.015-.171.015-.256 0h-.075c-.422.002-.814-.213-1.038-.569l-3.01-4.598c-.393-.626-.449-1.406-.15-2.082.264-.636.828-1.102 1.505-1.243l4.273-.734c.444-.09.901.07 1.189.42.17.194.28.433.316.689 2.981-.573 6.046-.573 9.027 0 .031-.355.214-.68.502-.892zm-.306 1.955c-3.11-.667-6.325-.667-9.434 0l-.647 2.322 3.656 1.497c.444.179.74.602.752 1.079v2.755c0 .79-.374 1.533-1.008 2.007l-2.196 1.648h-.166c.706 1.61 2.087 2.832 3.777 3.34v-2.352l-.662-.988c-.139-.206-.152-.47-.036-.69.116-.218.344-.356.592-.359h1.324c.25.003.477.14.593.36.116.218.102.483-.036.689l-.707 1.063v2.352c3.1-.42 4.995-5.407 5.898-8.627zm-8.32 5.736c-.599 0-1.084.483-1.084 1.079 0 .595.485 1.078 1.083 1.078.599 0 1.084-.483 1.084-1.078 0-.596-.485-1.079-1.084-1.079zm7.372 0c.598 0 1.083.483 1.083 1.079 0 .595-.485 1.078-1.083 1.078s-1.083-.483-1.083-1.078c0-.596.485-1.079 1.083-1.079zm1.926-6.874l-.061.01c-.04.012-.076.034-.105.065-.043.084-.043.184 0 .27l1.881 6.709c.02.096.098.169.196.18.095.025.195-.018.24-.105l3.01-4.658c.178-.346.166-.758-.03-1.093-.136-.338-.438-.582-.798-.644l-4.333-.734zm-11.451-.005l-.06.005-4.273.734c-.373.058-.688.309-.827.659-.168.364-.134.79.09 1.123l2.994 4.613c.045.08.136.123.226.105.098-.011.177-.084.196-.18l1.805-6.71c.052-.082.052-.187 0-.27-.05-.062-.132-.092-.21-.074z',
              transform: 'translate(-661 -134)',
            }),
          }),
        }),
        infant = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M285.608 150.84c.132.24.047.548-.187.683-1.395.852-3.13.852-4.524 0-.047-.017-.09-.045-.13-.077-.215-.181-.248-.508-.073-.728.174-.223.49-.257.707-.077 1.086.653 2.43.653 3.517 0 .237-.14.539-.058.68.182l.01.017zm2.606-5.72c0 .708-.554 1.284-1.24 1.292-.695.01-1.264-.563-1.273-1.277-.007-.715.55-1.3 1.244-1.308h.013c.693 0 1.256.578 1.256 1.292zm-7.553 0c0 .714-.562 1.292-1.257 1.292-.694 0-1.257-.578-1.257-1.293 0-.714.563-1.292 1.257-1.292.695 0 1.257.578 1.257 1.292zm13.335 1.565c-.18.75-.75 1.337-1.48 1.523v-4.047c1.086.276 1.749 1.406 1.48 2.524zm-10.749 9.358c-4.587 0-8.307-3.829-8.307-8.552v-5.611c.01-3.762 2.952-6.819 6.608-6.86h3.267c3.682 0 6.667 3.07 6.667 6.86l.074 5.611c0 4.723-3.72 8.552-8.309 8.552zm-9.43-8.552c-.015.24-.015.479 0 .717-.88-.255-1.485-1.083-1.478-2.024-.007-.94.599-1.768 1.478-2.023v3.33zm18.67-4.35v-1.261c-.016-4.352-3.444-7.872-7.672-7.88h-3.267c-4.227.008-7.656 3.528-7.671 7.88v1.248c-1.634.046-2.92 1.444-2.876 3.125.045 1.68 1.404 3.005 3.038 2.959.955 5.192 5.821 8.603 10.866 7.619 3.756-.732 6.693-3.755 7.405-7.62 1.521-.14 2.688-1.454 2.69-3.027.016-1.517-1.055-2.814-2.513-3.042z',
              transform: 'translate(-271 -134)',
            }),
          }),
        }),
        clock = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.9933 2.88338C10.9355 2.38604 10.5128 2 10 2C9.44771 2 9 2.44772 9 3V10L9.00867 10.1314C9.0374 10.3481 9.13661 10.5508 9.29289 10.7071L13.2929 14.7071L13.3871 14.7903C13.7794 15.0953 14.3466 15.0676 14.7071 14.7071L14.7903 14.6129C15.0953 14.2206 15.0676 13.6534 14.7071 13.2929L11 9.585V3L10.9933 2.88338Z',
            fill: '#0C6DCD',
          }),
        }),
        pet = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L13.3032 1.28263C13.2968 1.28879 13.2906 1.29506 13.2844 1.30142L9.87868 4.70711L9.7796 4.79392C9.60606 4.92684 9.39259 5 9.17157 5H3.41421L1.70711 3.29289L1.6129 3.2097C1.22061 2.90468 0.653377 2.93241 0.292893 3.29289C-0.0976311 3.68342 -0.0976311 4.31658 0.292893 4.70711L2 6.41421V10.5858L0.87868 11.7071L0.743204 11.8518C0.265587 12.3971 0 13.0991 0 13.8284V19L0.00672773 19.1166C0.0644928 19.614 0.487164 20 1 20C1.55228 20 2 19.5523 2 19V13.8284L2.00867 13.697C2.0374 13.4803 2.13661 13.2776 2.29289 13.1213L3.41421 12L3.53309 11.8702C3.83351 11.5116 4 11.0573 4 10.5858V7H9.17157L9.36971 6.99346C10.093 6.94561 10.7772 6.63705 11.2929 6.12132L14.0742 3.33998L17.502 6.082L17.1669 6.41886L17.0731 6.50163C16.8115 6.70484 16.463 6.76691 16.1436 6.66044L15.2649 6.36754L15.1147 6.32383C14.1109 6.07328 13.0678 6.63447 12.7351 7.63246L12.1389 9.421L12.0896 9.59482C12.0207 9.88734 12.0184 10.1924 12.0839 10.4873L12.4201 12H6.18046L6.0155 12.0068L5.85166 12.0272C4.76212 12.2088 4.02608 13.2393 4.20767 14.3288L5.01361 19.1644L5.03941 19.2783C5.17816 19.7594 5.65854 20.0707 6.1644 19.9864C6.70917 19.8956 7.07719 19.3804 6.98639 18.8356L6.18046 14H12.8645L14.0238 19.2169L14.0557 19.3293C14.22 19.8023 14.7163 20.0874 15.2169 19.9762C15.7561 19.8564 16.096 19.3222 15.9762 18.7831L14.0363 10.0535L14.6325 8.26491L15.5111 8.5578L15.7024 8.6146C16.7276 8.88232 17.8249 8.58931 18.5811 7.83308L19.3121 7.10212L19.4151 6.9882C19.8956 6.39904 19.8613 5.52997 19.3121 4.9808C19.2523 4.92321 19.2523 4.9232 19.1885 4.87019L19.1885 4.87016L15.4971 1.91708L15.7071 1.70711L15.7903 1.6129C16.0953 1.22061 16.0676 0.653377 15.7071 0.292893Z',
            fill: '#0C6DCD',
          }),
        }),
        basket = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L13.3032 1.28263C13.2968 1.28879 13.2906 1.29506 13.2844 1.30142L9.87868 4.70711L9.7796 4.79392C9.60606 4.92684 9.39259 5 9.17157 5H3.41421L1.70711 3.29289L1.6129 3.2097C1.22061 2.90468 0.653377 2.93241 0.292893 3.29289C-0.0976311 3.68342 -0.0976311 4.31658 0.292893 4.70711L2 6.41421V10.5858L0.87868 11.7071L0.743204 11.8518C0.265587 12.3971 0 13.0991 0 13.8284V19L0.00672773 19.1166C0.0644928 19.614 0.487164 20 1 20C1.55228 20 2 19.5523 2 19V13.8284L2.00867 13.697C2.0374 13.4803 2.13661 13.2776 2.29289 13.1213L3.41421 12L3.53309 11.8702C3.83351 11.5116 4 11.0573 4 10.5858V7H9.17157L9.36971 6.99346C10.093 6.94561 10.7772 6.63705 11.2929 6.12132L14.0742 3.33998L17.502 6.082L17.1669 6.41886L17.0731 6.50163C16.8115 6.70484 16.463 6.76691 16.1436 6.66044L15.2649 6.36754L15.1147 6.32383C14.1109 6.07328 13.0678 6.63447 12.7351 7.63246L12.1389 9.421L12.0896 9.59482C12.0207 9.88734 12.0184 10.1924 12.0839 10.4873L12.4201 12H6.18046L6.0155 12.0068L5.85166 12.0272C4.76212 12.2088 4.02608 13.2393 4.20767 14.3288L5.01361 19.1644L5.03941 19.2783C5.17816 19.7594 5.65854 20.0707 6.1644 19.9864C6.70917 19.8956 7.07719 19.3804 6.98639 18.8356L6.18046 14H12.8645L14.0238 19.2169L14.0557 19.3293C14.22 19.8023 14.7163 20.0874 15.2169 19.9762C15.7561 19.8564 16.096 19.3222 15.9762 18.7831L14.0363 10.0535L14.6325 8.26491L15.5111 8.5578L15.7024 8.6146C16.7276 8.88232 17.8249 8.58931 18.5811 7.83308L19.3121 7.10212L19.4151 6.9882C19.8956 6.39904 19.8613 5.52997 19.3121 4.9808C19.2523 4.92321 19.2523 4.9232 19.1885 4.87019L19.1885 4.87016L15.4971 1.91708L15.7071 1.70711L15.7903 1.6129C16.0953 1.22061 16.0676 0.653377 15.7071 0.292893Z',
            fill: '#0C6DCD',
          }),
        }),
        amend = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2 2H18C19.1046 2 20 2.89543 20 4V16C20 17.1046 19.1046 18 18 18H2C0.89543 18 0 17.1046 0 16V13C0 12.4477 0.447715 12 1 12L1.14926 11.9945C2.18412 11.9182 3 11.0544 3 10C3 8.89543 2.10457 8 1 8C0.447715 8 0 7.55228 0 7V4C0 2.89543 0.89543 2 2 2ZM9.70711 6.29289L9.6129 6.2097L9.5114 6.14038C9.12751 5.91161 8.62334 5.96245 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L10.585 10L8.29289 12.2929L8.2097 12.3871C7.90468 12.7794 7.93241 13.3466 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L12 11.415L14.2929 13.7071L14.3871 13.7903C14.7794 14.0953 15.3466 14.0676 15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929L13.415 10L15.7071 7.70711L15.7903 7.6129C16.0953 7.22061 16.0676 6.65338 15.7071 6.29289C15.3166 5.90237 14.6834 5.90237 14.2929 6.29289L12 8.585L9.70711 6.29289Z',
            fill: '#0C6DCD',
          }),
        }),
        checkIn = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M15 2C15 3.10457 14.1046 4 13 4C11.8954 4 11 3.10457 11 2C11 0.89543 11.8954 0 13 0C14.1046 0 15 0.89543 15 2ZM16.1129 14.9938C16.7045 14.928 17.1186 14.3515 16.9701 13.7575L15.281 7H15.6459L15.7672 7.00735C16.1262 7.0511 16.4377 7.28692 16.5744 7.62861L18.0715 11.3714L18.1211 11.4772C18.3594 11.9175 18.8952 12.1189 19.3714 11.9285C19.8842 11.7234 20.1336 11.1414 19.9285 10.6286L18.4314 6.88583L18.3541 6.7093C17.8593 5.67031 16.8081 5 15.6459 5H14H12L12 5.00003L11.9995 5H9.82793C9.09859 5 8.39663 5.26559 7.85135 5.7432L7.70661 5.87868L6.2924 7.29289C5.90188 7.68342 5.90188 8.31658 6.2924 8.70711C6.65288 9.06759 7.22012 9.09532 7.61241 8.7903L7.70661 8.70711L9.12083 7.29289C9.27711 7.13661 9.47979 7.0374 9.69649 7.00867L9.82793 7H10.7185L9.02936 13.7575C8.88086 14.3515 9.29497 14.928 9.88659 14.9938L9.99951 15H10.9995V19C10.9995 19.5128 11.3855 19.9355 11.8829 19.9933L11.9995 20C12.5123 20 12.935 19.614 12.9928 19.1166L12.9995 19V14H13V19L13.007 19.1332C13.1356 20.3317 15 20.2874 15 19V15H16L16.1129 14.9938ZM2.0868 12C1.50176 12 1.04167 12.5 1.09025 13.083L1.42359 17.083C1.43303 17.1963 1.46111 17.3039 1.50466 17.4029C1.50158 17.4348 1.5 17.4672 1.5 17.5V19L1.50673 19.1166C1.56449 19.614 1.98716 20 2.5 20C3.05229 20 3.5 19.5523 3.5 19V18H4.5V19L4.50673 19.1166C4.56449 19.614 4.98716 20 5.5 20C6.05229 20 6.5 19.5523 6.5 19V17.5L6.49451 17.4048C6.53853 17.3053 6.56691 17.1971 6.57641 17.083L6.90975 13.083C6.95833 12.5 6.49824 12 5.9132 12H2.0868ZM5 9C5.55229 9 6 9.44771 6 10C6 10.5128 5.61396 10.9355 5.11662 10.9933L5 11H3C2.44772 11 2 10.5523 2 10C2 9.48716 2.38604 9.06449 2.88338 9.00673L3 9H5Z',
            fill: '#0C6DCD',
          }),
        }),
        findTerminal = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M10 0H13C13.5523 0 14 0.447715 14 1V2H16C16.5128 2 16.9355 2.38604 16.9933 2.88338L17 3V5H17.5C18.2797 5 18.9204 5.59489 18.9931 6.35554L19 6.5V9.99997C19.6426 10.4875 19.9449 11.333 19.7135 12.1427L18.04 18H19L19.1166 18.0067C19.614 18.0645 20 18.4872 20 19C20 19.5523 19.5523 20 19 20H1L0.883379 19.9933C0.38604 19.9355 0 19.5128 0 19V12L0.00672722 11.8834C0.0644923 11.386 0.487164 11 1 11L1.11662 11.0067C1.61396 11.0645 2 11.4872 2 12V18H4.95999L3.28646 12.1427L3.2485 11.9866C3.09529 11.2261 3.39859 10.4562 4 9.99997V6.5C4 5.7203 4.59489 5.07955 5.35554 5.00687L5.5 5H6V3C6 2.48716 6.38604 2.06449 6.88338 2.00673L7 2H9V1C9 0.447715 9.44771 0 10 0ZM13 4H10H8V6C8 6.51284 7.61396 6.93551 7.11662 6.99327L7 7H6V9.12297L11.1286 7.07152L11.2499 7.03179C11.4549 6.97881 11.6727 6.99205 11.8714 7.07152L17 9.12297V7H16C15.4872 7 15.0645 6.61396 15.0067 6.11662L15 6V4H13ZM15.9997 18C15.9998 17.9092 16.0123 17.8169 16.0385 17.7253L17.7905 11.5932L11.5 9.077L5.20951 11.5932L6.96152 17.7253L6.98709 17.8393C6.99592 17.8931 7.00023 17.9468 7.00026 18H15.9997Z',
            fill: '#0C6DCD',
          }),
        }),
        food = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M16.6616 0.0584885L15.0513 0.595259C13.8263 1.0036 13 2.15002 13 3.44131V7.42942C13 8.43248 13.5013 9.36918 14.3359 9.92557L16 11.035V18.9998L16.0067 19.1164C16.0645 19.6138 16.4872 19.9998 17 19.9998C17.5523 19.9998 18 19.5521 18 18.9998V10.4998V0.99979C18 0.682972 17.8559 0.409371 17.6368 0.228709C17.5685 0.172238 17.4925 0.124669 17.4108 0.0877761C17.2242 0.0032706 17.01 -0.0251305 16.7939 0.0210563C16.7486 0.0305456 16.7044 0.0430986 16.6616 0.0584885ZM9 -0.00020993C9.51284 -0.00020993 9.93551 0.38583 9.99327 0.883169L10 0.99979V6.76372C10 7.8332 9.4313 8.81628 8.51706 9.35191L8.34164 9.447L7.34164 9.947C7.23014 10.0028 7.11603 10.0511 7 10.0922V18.9998C7 19.5521 6.55228 19.9998 6 19.9998C5.48716 19.9998 5.06449 19.6138 5.00673 19.1164L5 18.9998V10.0922C4.95158 10.0751 4.90349 10.0566 4.85578 10.037L4.65836 9.947L3.65836 9.447C2.70179 8.96872 2.07683 8.02041 2.00661 6.96315L2 6.76372V0.99979C2 0.447505 2.44772 -0.00020993 3 -0.00020993C3.51284 -0.00020993 3.93551 0.38583 3.99327 0.883169L4 0.99979V6.76372C4 7.10041 4.16909 7.41141 4.4446 7.59533L4.55279 7.65815L5.55279 8.15815C5.7941 8.2788 6.07203 8.29604 6.3238 8.20986L6.44721 8.15815L7.44721 7.65815C7.74835 7.50758 7.9509 7.21726 7.9922 6.88858L8 6.76372V0.99979C8 0.447505 8.44772 -0.00020993 9 -0.00020993ZM6.99327 0.883169C6.93551 0.38583 6.51284 -0.00020993 6 -0.00020993C5.44772 -0.00020993 5 0.447505 5 0.99979V5.99979L5.00673 6.11641C5.06449 6.61375 5.48716 6.99979 6 6.99979C6.55228 6.99979 7 6.55207 7 5.99979V0.99979L6.99327 0.883169Z',
            fill: '#0C6DCD',
          }),
        }),
        wifi = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M19.8 5.4C17.6002 2.46692 14.2996 1 10 1C5.70038 1 2.39981 2.46692 0.199998 5.4C-0.131373 5.84183 -0.04183 6.46863 0.399998 6.8C0.841826 7.13137 1.46863 7.04183 1.8 6.6C3.60019 4.19975 6.29962 3 10 3C13.7004 3 16.3998 4.19975 18.2 6.6C18.5314 7.04183 19.1582 7.13137 19.6 6.8C20.0418 6.46863 20.1314 5.84183 19.8 5.4ZM12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17C8 15.8954 8.89543 15 10 15C11.1046 15 12 15.8954 12 17ZM10 5C12.9364 5 15.5226 6.10836 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711C14.4774 7.89164 12.3969 7 10 7C7.60306 7 5.52258 7.89164 3.7071 9.70711C3.31658 10.0976 2.68342 10.0976 2.29289 9.70711C1.90237 9.31658 1.90237 8.68342 2.29289 8.29289C4.47742 6.10836 7.0636 5 10 5ZM14.7071 11.2929C13.2006 9.78634 11.6279 9 10 9C8.37213 9 6.79944 9.78634 5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071C5.68341 13.0976 6.31658 13.0976 6.7071 12.7071C7.86722 11.547 8.9612 11 10 11C11.0388 11 12.1328 11.547 13.2929 12.7071C13.6834 13.0976 14.3166 13.0976 14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929Z',
            fill: '#0C6DCD',
          }),
        }),
        accessibility = Object(jsx_runtime.jsx)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M11 4C12.1046 4 13 3.10457 13 2C13 0.89543 12.1046 0 11 0C9.89543 0 9 0.89543 9 2C9 3.10457 9.89543 4 11 4ZM10 4C10.6123 4 11.0712 4.54158 10.9915 5.13148L10.9701 5.24254L9.281 12H15C15.3913 12 15.7427 12.2276 15.9056 12.5758L15.9487 12.6838L17.9487 18.6838C18.1233 19.2077 17.8402 19.774 17.3162 19.9487C16.8297 20.1109 16.3066 19.8783 16.0946 19.4247L16.0513 19.3162L14.279 14H8C7.3877 14 6.92883 13.4584 7.00851 12.8685L7.02986 12.7575L8.718 6H7.66666C7.49357 6 7.32421 6.04491 7.17476 6.12935L7.06666 6.2L3.6 8.8C3.15817 9.13137 2.53137 9.04183 2.2 8.6C1.89412 8.19216 1.94688 7.62671 2.30432 7.2815L2.4 7.2L5.86666 4.6C6.32825 4.25381 6.87858 4.04899 7.45107 4.00775L7.66666 4H10ZM6.46447 9.1358C6.19775 8.65219 5.58949 8.47636 5.10588 8.74308C3.20597 9.79091 2 11.7899 2 14C2 17.3137 4.68629 20 8 20C10.2701 20 12.3144 18.7275 13.3359 16.7461C13.5889 16.2552 13.3961 15.6521 12.9052 15.3991C12.4143 15.146 11.8112 15.3388 11.5582 15.8297C10.8765 17.152 9.51406 18 8 18C5.79086 18 4 16.2091 4 14C4 12.5258 4.80358 11.1938 6.07175 10.4944C6.55536 10.2277 6.73119 9.61941 6.46447 9.1358Z',
            fill: '#0C6DCD',
          }),
        }),
        flagDE = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFE62F',
                d: 'M2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3.663H2V19z',
              }),
              Object(jsx_runtime.jsx)('path', { fill: '#F05B4E', d: 'M2 15.325h20V8.663H2z' }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#494847',
                d: 'M22 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3.662h20V5z',
              }),
            ],
          }),
        }),
        flagDK = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#F05B4E',
                d: 'M21.763 3.838A2.984 2.984 0 0 0 19 2h-7.237v7.938H22V5c0-.4-.08-.795-.237-1.162zM11.763 22H19a3.034 3.034 0 0 0 1.45-.387 3.2 3.2 0 0 0 .675-.488c.223-.226.404-.487.539-.776.219-.416.333-.879.336-1.35v-5.313H11.763V22zM2 13.686V19a2.946 2.946 0 0 0 .514 1.676c.106.16.227.311.362.45.278.269.605.485.963.636C4.206 21.92 4.6 22 5 22h3.013v-8.314H2zM8.013 2H5a2.988 2.988 0 0 0-3 2.975V10h6.013V2z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                d: 'M8.013 2v7.938H2v3.75h6.013V22h3.75v-8.313H22v-3.75H11.763V2z',
              }),
            ],
          }),
        }),
        flagFR = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#F05B4E',
                d: 'M19 2h-3.663v20H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', { fill: '#FFF', d: 'M8.662 22h6.675V2H8.663z' }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#0083B7',
                d: 'M5 2a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3h3.687V2H5z',
              }),
            ],
          }),
        }),
        flagIE = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', { fill: '#FFF', d: 'M8.662 22h6.675V2H8.663z' }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#00AA6A',
                d: 'M5 2a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3h3.687V2H5z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#F6971B',
                d: 'M19 2h-3.663v20H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
            ],
          }),
        }),
        flagLV = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#BE4254',
                d: 'M2 19a2.988 2.988 0 0 0 2.975 3H19a2.986 2.986 0 0 0 3-2.974V14H2v5z',
              }),
              Object(jsx_runtime.jsx)('path', { fill: '#FFF', d: 'M2 14h20v-4H2z' }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#BE4254',
                d: 'M19 2H5a2.988 2.988 0 0 0-3 2.975V10h20V5a2.986 2.986 0 0 0-2.974-3H19z',
              }),
            ],
          }),
        }),
        flagNL = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#0083B7',
                d: 'M2 19a2.988 2.988 0 0 0 2.975 3H19a2.986 2.986 0 0 0 3-2.974V15.337H2V19z',
              }),
              Object(jsx_runtime.jsx)('path', { fill: '#FFF', d: 'M2 15.325h20V8.663H2z' }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#C84443',
                d: 'M19 2H5a2.988 2.988 0 0 0-3 2.975v3.687h20V5a2.986 2.986 0 0 0-2.974-3H19z',
              }),
            ],
          }),
        }),
        flagNO = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#F05B4E',
                d: 'M7.95 2v8H2V4.975A2.988 2.988 0 0 1 5 2h2.95zM19 2h.037A2.987 2.987 0 0 1 22 5.013v5H12V2h7zm-7 20v-7.912h10v4.937A2.988 2.988 0 0 1 19 22h-7zM2 14.087h5.95V22H4.975A2.988 2.988 0 0 1 2 19v-4.913z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                d: 'M2 13.025h6.963V22H7.95v-7.913H2v-1.062zM8.962 2v8.975H2v-.963h5.95V2h1.012zm3.075 0v8.012H22v4.075h-9.963V22h-1.025v-8.975H22v-2.05H11.012V2h1.025z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#0083B7',
                d: 'M22 13.025v-2.05H11.012V2h-2.05v8.975H2v2.05h6.963V22h2.05v-8.975z',
              }),
            ],
          }),
        }),
        flagPL = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#F05B4E',
                d: 'M2 19a2.988 2.988 0 0 0 2.975 3H19a2.986 2.986 0 0 0 3-2.974V12H2v7z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#F5F5F5',
                d: 'M19 2H5a2.988 2.988 0 0 0-3 2.975V12h20V5a2.986 2.986 0 0 0-2.974-3H19z',
              }),
            ],
          }),
        }),
        flagSE = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#0083B7',
                d: 'M21.763 3.838A2.984 2.984 0 0 0 19 2h-7.237v7.938H22V5c0-.4-.08-.795-.237-1.162zM11.763 22H19a3.034 3.034 0 0 0 1.45-.387 3.2 3.2 0 0 0 .675-.488c.223-.226.404-.487.539-.776.219-.416.333-.879.336-1.35v-5.313H11.763V22zM2 13.686V19a2.946 2.946 0 0 0 .514 1.676c.106.16.227.311.362.45.278.269.605.485.963.636.367.158.762.24 1.161.24h3.013v-8.315H2zM8.013 2H5a2.988 2.988 0 0 0-3 2.975V10h6.013V2z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFE62F',
                d: 'M8.013 2v7.937H2v3.75h6.013V22h3.75v-8.313H22v-3.75H11.763V2z',
              }),
            ],
          }),
        }),
        flagUK = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
              Object(jsx_runtime.jsx)('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
              Object(jsx_runtime.jsx)('g', {
                transform: 'translate(100 -60)',
                children: Object(jsx_runtime.jsx)('rect', {
                  width: '35',
                  height: '14',
                  x: '-21',
                  fill: '#73C144',
                  rx: '7',
                }),
              }),
              Object(jsx_runtime.jsx)('g', {
                stroke: '#B2B2B2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                children: Object(jsx_runtime.jsx)('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                stroke: '#FFF',
                strokeWidth: '2',
                d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#FFF',
                d: 'M21.995 10.425H13.56V2h1.05v6.725l7.385-4.112c.007.128.007.258 0 .387v.538l-6.723 3.75h2.362l4.361-2.5v1.787l-1.174.6h1.174v1.25zm-.1 9.325l-7.286-4.075V22h-1.05v-8.012h8.436v1.187H20.82l1.175.65v.763l-2.5-1.413h-2.399l4.9 2.738V19a2.978 2.978 0 0 1-.1.75zM2 13.987h8.373V22H9.298v-6.324l-7.21 4.049A2.464 2.464 0 0 1 2 19.113l7.036-3.988H6.66L2 17.737V15.75l1.112-.575H2v-1.188zM10.373 2v8.475H2v-1.25h1.112L2 8.6v-.963l2.837 1.588H7.2L2 6.312V4.625l7.311 4.1V2h1.062z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#C8102E',
                d: 'M17.637 9.237h-2.362L22 5.462v1.325l-4.363 2.45zm-.537 5.938h2.375L22 16.587v1.325l-4.9-2.737zM7.2 9.237H4.838L2 7.637V6.312l5.2 2.925zm-.538 5.938l2.363.037L2 19.15v-1.363l4.662-2.612zM22 13.987h-8.438V22h-3.187v-8.013H2v-3.562h8.375V2h3.187v8.425H22v3.562z',
              }),
              Object(jsx_runtime.jsx)('path', {
                fill: '#012169',
                d: 'M22 4.613l-7.387 4.112V2H19a2.998 2.998 0 0 1 3 2.613zM9.313 2v6.725L2 4.625A3 3 0 0 1 5 2h4.313zM22 9.237h-1.175L22 8.575v.662zm0 6.588l-1.175-.65H22v.65zm-19.9 3.9l7.213-4.05V22H5a3 3 0 0 1-2.9-2.275zm19.8.025A3 3 0 0 1 19 22h-4.388v-6.325L21.9 19.75zM2 15.175h1.113L2 15.8v-.625zM2 8.6l1.113.638H2V8.6z',
              }),
            ],
          }),
        }),
        ticket = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M34 138c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H12c-.552 0-1-.448-1-1v-5.5h.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5H11V139c0-.552.448-1 1-1zm0 1H12v4.55l.14.032c1.02.27 1.784 1.167 1.855 2.254L14 146c0 1.16-.79 2.135-1.86 2.418l-.14.031V153h22v-14zm-5.5 1c.245 0 .45.177.492.41l.008.09v11c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41L28 151.5v-11c0-.276.224-.5.5-.5zm-4 8c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7zm0-2.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7zm0-2.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7z',
              transform: 'translate(-11 -134)',
            }),
          }),
        }),
        account = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M157.621 145.015l1.496.374c1.715.429 3.02 1.822 3.336 3.56l1.539 8.462c.056.306-.18.589-.492.589l-5.99-.001-.01.001h-9l-.01-.001-5.99.001c-.284 0-.504-.233-.5-.507l.008-.082 1.538-8.461c.317-1.74 1.622-3.132 3.336-3.561l1.497-.374c.315-.079.621.16.621.485V157h7.999v-11.5c0-.325.307-.564.622-.485zM148 146.14l-.875.22c-1.334.333-2.349 1.416-2.595 2.769L143.098 157H148v-10.86zm10 0V157h4.902l-1.432-7.871c-.246-1.353-1.261-2.436-2.595-2.77l-.875-.219zM153 134c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
              transform: 'translate(-141 -134)',
            }),
          }),
        }),
        home = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M34.132 140.388l-9.666-5.952c-.915-.581-2.076-.581-2.992 0l-9.666 5.952c-.502.295-.81.84-.808 1.43v14.508c0 .924.737 1.674 1.646 1.674h7.87c.912 0 1.653-.747 1.661-1.674v-7.003c0-.361.288-.654.643-.654h4.639c.355 0 .643.293.643.654v7.003c.008.927.75 1.674 1.661 1.674h3.591c.91 0 1.646-.75 1.646-1.674v-14.507c-.01-.603-.343-1.152-.868-1.431zm-.194 15.938c0 .361-.288.654-.644.654h-3.59c-.359 0-.651-.29-.66-.654v-7.003c.001-.901-.7-1.641-1.585-1.674H22.82c-.909 0-1.645.75-1.645 1.674v7.003c-.009.363-.3.654-.659.654h-7.87c-.355 0-.643-.293-.643-.654v-14.507c.002-.23.12-.443.314-.564l9.725-5.89c.57-.351 1.285-.351 1.856 0l9.725 5.936c.193.12.312.333.315.563v14.462z',
              transform: 'translate(-11 -134)',
            }),
          }),
        }),
        help = Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '80',
          height: '80',
          viewBox: '0 0 80 80',
          children: Object(jsx_runtime.jsx)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: Object(jsx_runtime.jsx)('path', {
              fill: '#000',
              d: 'M345 143.133c2.688 0 4.867 2.18 4.867 4.867 0 2.688-2.18 4.867-4.867 4.867-2.688 0-4.867-2.18-4.867-4.867 0-2.688 2.18-4.867 4.867-4.867zm0 1.734c-1.73 0-3.133 1.403-3.133 3.133s1.403 3.133 3.133 3.133 3.133-1.403 3.133-3.133-1.403-3.133-3.133-3.133zm0-41.734c8.579 0 15.533 6.955 15.533 15.534 0 7.125-4.833 13.26-11.594 15.028l-.406.1v3.538c0 1.78-1.32 3.265-3.08 3.503l-.222.023-.231.008c-1.853 0-3.388-1.432-3.525-3.303l-.008-.23v-6.667c0-1.854 1.431-3.388 3.302-3.526l.535-.013c4.535-.16 8.163-3.887 8.163-8.461 0-4.676-3.791-8.467-8.467-8.467s-8.467 3.79-8.467 8.467c0 1.951-1.582 3.533-3.533 3.533-1.951 0-3.533-1.582-3.533-3.533 0-8.58 6.954-15.534 15.533-15.534zm0 1.734c-7.622 0-13.8 6.178-13.8 13.8 0 .994.806 1.8 1.8 1.8s1.8-.806 1.8-1.8c0-5.634 4.567-10.2 10.2-10.2 5.633 0 10.2 4.566 10.2 10.2 0 5.633-4.567 10.2-10.168 10.2l-.167.005c-.935.069-1.665.85-1.665 1.795v6.635l.005.167c.069.935.851 1.664 1.763 1.665l.167-.006c.935-.069 1.665-.85 1.665-1.795v-4.242c0-.416.295-.772.702-.851l.323-.063c6.35-1.32 10.975-6.942 10.975-13.51 0-7.622-6.178-13.8-13.8-13.8z',
              transform: 'translate(-305 -88)',
            }),
          }),
        }),
        StoriesDivider = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'Core/Icons', component: dist.Icon, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'icons' }, 'Icons'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Icons'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(esm.mdx)(
            'ul',
            null,
            Object(esm.mdx)('li', null, 'Icons have a size of 24px'),
            Object(esm.mdx)(
              'li',
              null,
              "Icons should in most cases be accompanied by a label to ensure the user understands it's functionality",
            ),
          ),
          Object(esm.mdx)('strong', null, 'Do:'),
          Object(esm.mdx)(
            'ul',
            null,
            Object(esm.mdx)('li', null, 'Add icons to highlighted features list.'),
            Object(esm.mdx)('li', null, 'Use icons in tabs for extra attention.'),
            Object(esm.mdx)('li', null, 'Use the correct icon created for each feature.'),
            Object(esm.mdx)('li', null, 'If there is no specific icon for the feature, use a similar one.'),
          ),
          Object(esm.mdx)('strong', null, "Don't:"),
          Object(esm.mdx)(
            'ul',
            null,
            Object(esm.mdx)('li', null, 'No icons should be used right into the body text.'),
            Object(esm.mdx)('li', null, 'Avoid using the same icon repeatedly for different features.'),
            Object(esm.mdx)('li', null, 'Avoid icons in images.'),
          ),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Icons', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                { labels: Object.keys(components_namespaceObject), mdxType: 'StoriesDivider' },
                Object.values(components_namespaceObject).map(function (value) {
                  return Object(esm.mdx)(dist.Icon, { icon: value, size: 'm', mdxType: 'Icon' });
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: dist.Icon, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Icons_stories_icons = function icons() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: Object.keys(components_namespaceObject) },
          Object.values(components_namespaceObject).map(function (value) {
            return Object(esm.mdx)(dist.Icon, { icon: value, size: 'm' });
          }),
        );
      };
      (Icons_stories_icons.displayName = 'icons'),
        (Icons_stories_icons.storyName = 'Icons'),
        (Icons_stories_icons.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={Object.keys(stenaicons)}>\n        {Object.values(stenaicons).map(value => <Icon icon={value} size="m" />)}\n      </StoriesDivider>',
          },
        });
      var componentMeta = { title: 'Core/Icons', component: dist.Icon, includeStories: ['icons'] },
        mdxStoryNameToKey = { Icons: 'icons' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1141: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'datepicker', function () {
          return DatePicker_stories_datepicker;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        jsx_runtime =
          (__webpack_require__(16),
          __webpack_require__(19),
          __webpack_require__(17),
          __webpack_require__(26),
          __webpack_require__(114),
          __webpack_require__(481),
          __webpack_require__(12),
          __webpack_require__(27),
          __webpack_require__(138),
          __webpack_require__(2));
      __webpack_require__(70),
        __webpack_require__(274),
        __webpack_require__(88),
        __webpack_require__(28),
        __webpack_require__(89);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var isDateBetweenTwoDates = function isDateBetweenTwoDates(_ref) {
          var fromDate = _ref.fromDate,
            toDate = _ref.toDate,
            givenDate = _ref.givenDate;
          return givenDate <= toDate && givenDate >= fromDate && givenDate !== toDate && givenDate !== fromDate;
        },
        dateToIntlLocale = function dateToIntlLocale(_ref2) {
          var date = _ref2.date,
            options = _ref2.options,
            _ref2$locale = _ref2.locale,
            locale = void 0 === _ref2$locale ? 'en-GB' : _ref2$locale,
            validLocale = locale.match('^[a-z][a-z][-][A-Z][A-Z]$') ? locale : 'en-GB';
          return new Intl.DateTimeFormat(validLocale, Object.assign({}, options)).format(date);
        },
        datesAreOnSameDay = function datesAreOnSameDay(first, second) {
          return (
            first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate()
          );
        },
        getTime = function getTime(date) {
          return null != date ? date.getTime() : 0;
        },
        useDaysFromDate_useDaysFromDate = function useDaysFromDate(_ref4) {
          var rest = _extends({}, _ref4),
            _useState2 = _slicedToArray(Object(react.useState)([]), 2),
            days = _useState2[0],
            setDays = _useState2[1],
            _useState4 = _slicedToArray(Object(react.useState)([]), 2),
            months = _useState4[0],
            setMonths = _useState4[1],
            onGetDays = Object(react.useCallback)(function () {
              var d = (function daysFromDate(_ref3) {
                  for (
                    var date = _ref3.date,
                      nrOfDays = _ref3.nrOfDays,
                      locale = _ref3.locale,
                      firstDay = new Date(date.getFullYear(), date.getMonth()),
                      first = firstDay.getDate() - firstDay.getDay(),
                      days = [],
                      i = 0;
                    i < nrOfDays;
                    i += 1
                  ) {
                    var nextDay = new Date(firstDay.getTime());
                    nextDay.setDate(first + i);
                    var _days,
                      monthNr = new Date(nextDay).getMonth(),
                      monthBreak = !1;
                    if (days && days.length > i - 1)
                      monthBreak =
                        0 === i ||
                        (null === (_days = days[i - 1]) || void 0 === _days ? void 0 : _days.monthNr) !== monthNr;
                    var dayInMonth = {
                      date: nextDay,
                      weekday: dateToIntlLocale({
                        locale: locale,
                        date: new Date(nextDay),
                        options: { weekday: 'short' },
                      }),
                      weekdayNr: Number(new Date(nextDay).getDay()),
                      today: datesAreOnSameDay(new Date(), nextDay),
                      day: Number(
                        dateToIntlLocale({ locale: locale, date: new Date(nextDay), options: { day: 'numeric' } }),
                      ),
                      monthFull: dateToIntlLocale({
                        locale: locale,
                        date: new Date(nextDay),
                        options: { month: 'long' },
                      }),
                      monthNr: monthNr,
                      month: dateToIntlLocale({ locale: locale, date: new Date(nextDay), options: { month: 'short' } }),
                      monthBreak: monthBreak,
                      year: Number(
                        dateToIntlLocale({ locale: locale, date: new Date(nextDay), options: { year: 'numeric' } }),
                      ),
                    };
                    days.push(dayInMonth);
                  }
                  return days;
                })(Object.assign({}, rest)),
                m = Object.values(
                  (function groupBy(arr, property, additionalProperty) {
                    return arr.reduce(function (memo, x) {
                      var prop = ''.concat(x[property], '-').concat(x[additionalProperty]);
                      return (
                        memo[prop] ||
                          ((memo[prop] = []),
                          0 !== x.weekdayNr &&
                            (memo[prop] = _toConsumableArray(new Array(x.weekdayNr)).map(function () {
                              return { empty: !0, year: x.year, monthNr: x.monthNr, monthFull: x.monthFull };
                            }))),
                        memo[prop].push(x),
                        memo
                      );
                    }, {});
                  })(
                    (function sortByDueDate(arr) {
                      return arr.sort(function (a, b) {
                        return getTime(a.date) - getTime(b.date);
                      });
                    })(d),
                    'monthNr',
                    'year',
                  ),
                );
              setDays(d), setMonths(m);
            }, []);
          return { days: days, months: months, onGetDays: onGetDays };
        };
      try {
        (isDateBetweenTwoDates.displayName = 'isDateBetweenTwoDates'),
          (isDateBetweenTwoDates.__docgenInfo = {
            description: '',
            displayName: 'isDateBetweenTwoDates',
            props: {
              fromDate: { defaultValue: null, description: '', name: 'fromDate', required: !0, type: { name: 'Date' } },
              toDate: { defaultValue: null, description: '', name: 'toDate', required: !0, type: { name: 'Date' } },
              givenDate: {
                defaultValue: null,
                description: '',
                name: 'givenDate',
                required: !0,
                type: { name: 'Date' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/calendar/src/hooks/datePicker/useDaysFromDate.tsx#isDateBetweenTwoDates'
            ] = {
              docgenInfo: isDateBetweenTwoDates.__docgenInfo,
              name: 'isDateBetweenTwoDates',
              path: 'packages/calendar/src/hooks/datePicker/useDaysFromDate.tsx#isDateBetweenTwoDates',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (dateToIntlLocale.displayName = 'dateToIntlLocale'),
          (dateToIntlLocale.__docgenInfo = {
            description: '',
            displayName: 'dateToIntlLocale',
            props: {
              date: { defaultValue: null, description: '', name: 'date', required: !0, type: { name: 'Date' } },
              locale: {
                defaultValue: { value: 'en-GB' },
                description: '',
                name: 'locale',
                required: !1,
                type: { name: 'string' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !1,
                type: {
                  name: '{ weekday?: "short" | "long"; year?: "numeric" | undefined; month?: "short" | "long" | undefined; day?: "numeric" | undefined; } | undefined',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/calendar/src/hooks/datePicker/useDaysFromDate.tsx#dateToIntlLocale'] = {
              docgenInfo: dateToIntlLocale.__docgenInfo,
              name: 'dateToIntlLocale',
              path: 'packages/calendar/src/hooks/datePicker/useDaysFromDate.tsx#dateToIntlLocale',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (useDaysFromDate_useDaysFromDate.displayName = 'useDaysFromDate'),
          (useDaysFromDate_useDaysFromDate.__docgenInfo = {
            description: '',
            displayName: 'useDaysFromDate',
            props: {
              date: { defaultValue: null, description: '', name: 'date', required: !0, type: { name: 'Date' } },
              nrOfDays: {
                defaultValue: null,
                description: '',
                name: 'nrOfDays',
                required: !0,
                type: { name: 'number' },
              },
              locale: {
                defaultValue: { value: 'en-GB' },
                description: '',
                name: 'locale',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/calendar/src/hooks/datePicker/useDaysFromDate.tsx#useDaysFromDate'] = {
              docgenInfo: useDaysFromDate_useDaysFromDate.__docgenInfo,
              name: 'useDaysFromDate',
              path: 'packages/calendar/src/hooks/datePicker/useDaysFromDate.tsx#useDaysFromDate',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(20);
      function useSelectedDates_slicedToArray(arr, i) {
        return (
          (function useSelectedDates_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useSelectedDates_iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useSelectedDates_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return useSelectedDates_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return useSelectedDates_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useSelectedDates_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function useSelectedDates_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var useSelectedDates_useSelectedDates = function useSelectedDates(_ref) {
        var _ref$defaultDates = _ref.defaultDates,
          defDates = void 0 === _ref$defaultDates ? [null, null] : _ref$defaultDates,
          _useState2 = useSelectedDates_slicedToArray(Object(react.useState)(defDates), 2),
          selectedDates = _useState2[0],
          setSelectedDates = _useState2[1],
          onSetSelectedDate = Object(react.useCallback)(function (date, dates) {
            var selectedOutDate = dates ? dates[0] : null,
              selectedHomeDate = dates.length > 0 ? dates[1] : null;
            null === selectedOutDate && null === selectedHomeDate
              ? setSelectedDates([date, null])
              : selectedOutDate && null === selectedHomeDate
              ? setSelectedDates(selectedOutDate < date ? [selectedOutDate, date] : [date, selectedOutDate])
              : selectedOutDate && selectedHomeDate && setSelectedDates([date, null]);
          }, []);
        return {
          selectedDate: selectedDates ? selectedDates[0] : null,
          selectedDates: selectedDates,
          onSetSelectedDate: onSetSelectedDate,
        };
      };
      try {
        (useSelectedDates_useSelectedDates.displayName = 'useSelectedDates'),
          (useSelectedDates_useSelectedDates.__docgenInfo = {
            description: '',
            displayName: 'useSelectedDates',
            props: {
              defaultDates: {
                defaultValue: { value: '[null, null]' },
                description: '',
                name: 'defaultDates',
                required: !1,
                type: { name: 'TDates' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/calendar/src/hooks/datePicker/useSelectedDates.tsx#useSelectedDates'] = {
              docgenInfo: useSelectedDates_useSelectedDates.__docgenInfo,
              name: 'useSelectedDates',
              path: 'packages/calendar/src/hooks/datePicker/useSelectedDates.tsx#useSelectedDates',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function useYearMonth_slicedToArray(arr, i) {
        return (
          (function useYearMonth_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useYearMonth_iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useYearMonth_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return useYearMonth_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return useYearMonth_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useYearMonth_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function useYearMonth_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var useYearMonth_useYearMonth = function useYearMonth(_ref) {
        var date = _ref.date,
          locale = _ref.locale,
          _useState2 = useYearMonth_slicedToArray(Object(react.useState)(date), 2),
          activeDate = _useState2[0],
          setActiveDate = _useState2[1],
          onSetYearAndMonthNr = Object(react.useCallback)(function (_ref2) {
            var year = _ref2.year,
              month = _ref2.month,
              newDate = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
            newDate.setFullYear(year), newDate.setMonth(month), setActiveDate(newDate);
          }, []);
        return {
          activeDate: activeDate,
          activeMonthNr: activeDate.getMonth(),
          activeYear: activeDate.getFullYear(),
          activeMonth: dateToIntlLocale({ locale: locale, date: activeDate, options: { month: 'long' } }),
          onSetYearAndMonthNr: onSetYearAndMonthNr,
        };
      };
      try {
        (useYearMonth_useYearMonth.displayName = 'useYearMonth'),
          (useYearMonth_useYearMonth.__docgenInfo = {
            description: '',
            displayName: 'useYearMonth',
            props: {
              date: { defaultValue: null, description: '', name: 'date', required: !0, type: { name: 'Date' } },
              locale: { defaultValue: null, description: '', name: 'locale', required: !0, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/calendar/src/hooks/datePicker/useYearMonth.tsx#useYearMonth'] = {
              docgenInfo: useYearMonth_useYearMonth.__docgenInfo,
              name: 'useYearMonth',
              path: 'packages/calendar/src/hooks/datePicker/useYearMonth.tsx#useYearMonth',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(485);
      var day_Day = function Day(_ref) {
        var monthNr = _ref.monthNr,
          today = _ref.today,
          day = _ref.day,
          year = _ref.year,
          month = _ref.month,
          monthBreak = _ref.monthBreak,
          date = _ref.date,
          empty = _ref.empty,
          selectedDates = _ref.selectedDates,
          onSetSelectedDate = _ref.onSetSelectedDate,
          activeMonthNr = _ref.activeMonthNr,
          activeYear = _ref.activeYear,
          monthIdentifier = _ref.monthIdentifier,
          singleDate = _ref.singleDate,
          lastInMonth = _ref.lastInMonth,
          id = monthIdentifier ? 'month-identifier-'.concat(monthNr, '-').concat(year) : '';
        if (empty)
          return react_default.a.createElement(monthIdentifier ? 'button' : 'li', {
            className: 'date-picker-day '.concat(monthIdentifier ? 'month-identifier' : ''),
            datavalue: 'empty',
            id: id,
          });
        var choosenDates = selectedDates;
        singleDate && ((choosenDates = [date, date]), (selectedDates = [selectedDates[0], selectedDates[0]]));
        var selectedOutDate = selectedDates.length > 0 ? selectedDates[0] : null,
          selectedHomeDate = selectedDates.length > 0 ? selectedDates[1] : null,
          activeMonth = activeMonthNr === monthNr && activeYear === year,
          selectedOut = !!selectedOutDate && datesAreOnSameDay(date, selectedOutDate),
          selectedHome = !!selectedHomeDate && datesAreOnSameDay(date, selectedHomeDate),
          disabled = date < new Date(),
          themeCategory = 'active';
        activeMonth && (themeCategory = 'activeMonth'),
          selectedOutDate &&
            selectedHomeDate &&
            isDateBetweenTwoDates({ fromDate: selectedOutDate, toDate: selectedHomeDate, givenDate: date }) &&
            (themeCategory = 'selectedRange'),
          (selectedOut || selectedHome) && (themeCategory = 'selected'),
          disabled && !today && (themeCategory = 'disabled');
        return Object(jsx_runtime.jsx)('li', {
          className: 'date-picker-day '.concat(monthIdentifier ? 'month-identifier' : ''),
          'data-value': themeCategory,
          children: Object(jsx_runtime.jsxs)('button', {
            'data-testid': 'datepicker-day-'.concat(themeCategory),
            id: id,
            onBlur: function onBlur() {
              return (
                lastInMonth &&
                (function onBlur() {
                  var el = document.getElementById('m-btn-next');
                  null == el || el.focus();
                })()
              );
            },
            className: 'date-picker-day-button',
            'data-value': themeCategory,
            disabled: disabled && !today,
            onClick: function onClick() {
              return onSetSelectedDate({ date: date, selectedDates: choosenDates });
            },
            children: [
              day,
              monthBreak &&
                Object(jsx_runtime.jsx)('span', { className: 'date-picker-day-month-break break', children: month }),
            ],
          }),
        });
      };
      day_Day.displayName = 'Day';
      try {
        (day_Day.displayName = 'Day'),
          (day_Day.__docgenInfo = {
            description: '',
            displayName: 'Day',
            props: {
              selectedDates: {
                defaultValue: null,
                description: '',
                name: 'selectedDates',
                required: !0,
                type: { name: 'TDates' },
              },
              onSetSelectedDate: {
                defaultValue: null,
                description: '',
                name: 'onSetSelectedDate',
                required: !0,
                type: { name: '({ date, selectedDates }: IOnSetSelectedDate) => void' },
              },
              activeYear: {
                defaultValue: null,
                description: '',
                name: 'activeYear',
                required: !0,
                type: { name: 'number' },
              },
              activeMonthNr: {
                defaultValue: null,
                description: '',
                name: 'activeMonthNr',
                required: !0,
                type: { name: 'number' },
              },
              monthIdentifier: {
                defaultValue: null,
                description: '',
                name: 'monthIdentifier',
                required: !1,
                type: { name: 'boolean' },
              },
              singleDate: {
                defaultValue: null,
                description: '',
                name: 'singleDate',
                required: !1,
                type: { name: 'boolean' },
              },
              lastInMonth: {
                defaultValue: null,
                description: '',
                name: 'lastInMonth',
                required: !0,
                type: { name: 'boolean' },
              },
              date: { defaultValue: null, description: '', name: 'date', required: !0, type: { name: 'Date' } },
              today: { defaultValue: null, description: '', name: 'today', required: !0, type: { name: 'boolean' } },
              monthNr: { defaultValue: null, description: '', name: 'monthNr', required: !0, type: { name: 'number' } },
              monthFull: {
                defaultValue: null,
                description: '',
                name: 'monthFull',
                required: !0,
                type: { name: 'string' },
              },
              month: { defaultValue: null, description: '', name: 'month', required: !0, type: { name: 'string' } },
              monthBreak: {
                defaultValue: null,
                description: '',
                name: 'monthBreak',
                required: !0,
                type: { name: 'boolean' },
              },
              weekday: { defaultValue: null, description: '', name: 'weekday', required: !0, type: { name: 'string' } },
              weekdayNr: {
                defaultValue: null,
                description: '',
                name: 'weekdayNr',
                required: !0,
                type: { name: 'number' },
              },
              day: { defaultValue: null, description: '', name: 'day', required: !0, type: { name: 'number' } },
              year: { defaultValue: null, description: '', name: 'year', required: !0, type: { name: 'number' } },
              empty: { defaultValue: null, description: '', name: 'empty', required: !1, type: { name: 'boolean' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/calendar/src/components/datePicker/day.tsx#Day'] = {
              docgenInfo: day_Day.__docgenInfo,
              name: 'Day',
              path: 'packages/calendar/src/components/datePicker/day.tsx#Day',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var datePicker_DatePicker = function DatePicker(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          dates = _ref.dates,
          onChange = _ref.onChange,
          locale = _ref.locale,
          _ref$nrOfDays = _ref.nrOfDays,
          nrOfDays = void 0 === _ref$nrOfDays ? 365 : _ref$nrOfDays,
          icons = _ref.icons,
          singleDate = _ref.singleDate,
          _ref$basic = _ref.basic,
          basic = void 0 !== _ref$basic && _ref$basic,
          date = new Date(),
          gridRef = Object(react.useRef)(null),
          _useDaysFromDate = useDaysFromDate_useDaysFromDate({ date: date, nrOfDays: nrOfDays, locale: locale }),
          days = _useDaysFromDate.days,
          months = _useDaysFromDate.months,
          onGetDays = _useDaysFromDate.onGetDays,
          _useSelectedDates = useSelectedDates_useSelectedDates({ defaultDates: dates }),
          selectedDate = _useSelectedDates.selectedDate,
          selectedDates = _useSelectedDates.selectedDates,
          _onSetSelectedDate = _useSelectedDates.onSetSelectedDate,
          _useYearMonth = useYearMonth_useYearMonth({ locale: locale, date: (dates && dates[0]) || date }),
          activeYear = _useYearMonth.activeYear,
          activeMonth = _useYearMonth.activeMonth,
          onSetYearAndMonthNr = _useYearMonth.onSetYearAndMonthNr,
          restYearMonth = _objectWithoutProperties(_useYearMonth, ['activeYear', 'activeMonth', 'onSetYearAndMonthNr']),
          monthsLength = months.length;
        Object(react.useEffect)(function () {
          onGetDays(),
            basic ||
              setTimeout(function () {
                scrollToRef({ dir: 'next', month: restYearMonth.activeMonthNr, year: activeYear });
              }, 0);
        }, []),
          Object(react.useEffect)(
            function () {
              onChange(singleDate ? selectedDate : selectedDates);
            },
            [selectedDates],
          );
        var disableButtons = function disableButtons(index) {
            var buttonEls = document.querySelectorAll('.date-picker-change-month-button');
            if (buttonEls && buttonEls.length > 1) {
              var prev = buttonEls[0],
                next = buttonEls[1];
              index < 1
                ? prev.setAttribute('disabled', 'true')
                : prev.getAttribute('disabled') && prev.removeAttribute('disabled'),
                index >= monthsLength - 1
                  ? next.setAttribute('disabled', 'true')
                  : next.getAttribute('disabled') && next.removeAttribute('disabled');
            }
          },
          renderWeekdays = days.slice(0, 7).map(function (_ref3) {
            var weekday = _ref3.weekday;
            return Object(jsx_runtime.jsx)('span', { children: weekday }, weekday);
          }),
          renderDays = function renderDays(m) {
            return null == m
              ? void 0
              : m.map(function (props, i) {
                  var _props$date;
                  return Object(jsx_runtime.jsx)(
                    day_Day,
                    Object.assign(
                      {
                        lastInMonth: i >= m.length - 1,
                        monthIdentifier: 0 === i,
                        onSetSelectedDate: function onSetSelectedDate(_ref4) {
                          var d = _ref4.date,
                            sd = _ref4.selectedDates;
                          return _onSetSelectedDate(d, sd);
                        },
                        selectedDates: selectedDates,
                        activeYear: activeYear,
                        singleDate: singleDate,
                      },
                      props,
                      restYearMonth,
                    ),
                    (null === (_props$date = props.date) || void 0 === _props$date ? void 0 : _props$date.toString()) ||
                      i,
                  );
                });
          },
          renderMonthsView =
            null == months
              ? void 0
              : months.map(function (m, index) {
                  var _ref5 = (m && m.length && m[0]) || {},
                    monthFull = _ref5.monthFull,
                    year = _ref5.year;
                  return Object(jsx_runtime.jsxs)(
                    'li',
                    {
                      'data-testid': 'datepicker-month-li',
                      className: 'date-picker-grid-li',
                      children: [
                        !basic &&
                          Object(jsx_runtime.jsx)('div', { className: 'date-picker-week', children: renderWeekdays }),
                        basic &&
                          Object(jsx_runtime.jsx)('div', {
                            className: 'date-picker-month-and-year',
                            children: Object(jsx_runtime.jsx)('span', {
                              children: ''.concat(monthFull, ' ').concat(year),
                            }),
                          }),
                        Object(jsx_runtime.jsx)('ul', { className: 'date-picker-grid-month', children: renderDays(m) }),
                      ],
                    },
                    index,
                  );
                }),
          scrollToRef = function scrollToRef(_ref6) {
            var dir = _ref6.dir,
              month = _ref6.month,
              year = _ref6.year,
              i = month || restYearMonth.activeMonthNr,
              toRefMonth = 'prev' === dir ? i - 1 : i + 1,
              toRefYear = year || activeYear;
            toRefMonth > 11
              ? ((toRefMonth = 0), (toRefYear += 1))
              : toRefMonth < 0 && ((toRefYear -= 1), (toRefMonth = 11)),
              setTimeout(function () {
                var _document,
                  el =
                    null === (_document = document) || void 0 === _document
                      ? void 0
                      : _document.getElementById('month-identifier-'.concat(toRefMonth, '-').concat(toRefYear));
                el &&
                  'function' == typeof el.scrollIntoView &&
                  (null == el || el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' }));
              }, 0);
          },
          changeMonth = function changeMonth(dir) {
            return Object(jsx_runtime.jsx)('button', {
              'data-testid': 'datepicker-change-month-'.concat(dir),
              className: 'date-picker-change-month-button '.concat(dir),
              id: 'm-btn-'.concat(dir),
              onKeyDown: function onKeyDown(_ref7) {
                return (
                  'Tab' === _ref7.key &&
                  (function onButtonTabDown() {
                    var el = document.getElementById(
                      'month-identifier-'.concat(restYearMonth.activeMonthNr, '-').concat(activeYear),
                    );
                    null == el || el.focus();
                  })()
                );
              },
              onClick: function onClick() {
                return scrollToRef({ dir: dir });
              },
              children: icons && icons.changeMonth[dir],
            });
          };
        return Object(jsx_runtime.jsxs)('div', {
          className: 'date-picker-wrapper '.concat(basic ? 'basic' : '', ' ').concat(className),
          children: [
            !basic &&
              Object(jsx_runtime.jsxs)('div', {
                className: 'date-picker-month',
                children: [
                  changeMonth('prev'),
                  Object(jsx_runtime.jsxs)('div', {
                    children: [
                      Object(jsx_runtime.jsx)('span', { className: 'date-picker-month-text', children: activeMonth }),
                      Object(jsx_runtime.jsx)('span', { className: 'date-picker-year-text', children: activeYear }),
                    ],
                  }),
                  changeMonth('next'),
                ],
              }),
            basic && Object(jsx_runtime.jsx)('div', { className: 'date-picker-week', children: renderWeekdays }),
            Object(jsx_runtime.jsx)('div', {
              className: 'date-picker-grid-wrapper ',
              ref: gridRef,
              onScroll: function onScroll() {
                return (
                  !basic &&
                  (function getActiveIndex() {
                    var _ref2 = (null == gridRef ? void 0 : gridRef.current) || {},
                      _ref2$scrollLeft = _ref2.scrollLeft,
                      scrollLeft = void 0 === _ref2$scrollLeft ? 0 : _ref2$scrollLeft,
                      _ref2$clientWidth = _ref2.clientWidth,
                      index = Number((scrollLeft / (void 0 === _ref2$clientWidth ? 0 : _ref2$clientWidth)).toFixed(0));
                    if (monthsLength > 0 && index >= 0 && index <= monthsLength) {
                      var activeM = months[index];
                      if (activeM && activeM.length) {
                        var _activeM$ = activeM[0],
                          year = _activeM$.year,
                          monthNr = _activeM$.monthNr;
                        onSetYearAndMonthNr({ year: year, month: monthNr }),
                          (index <= 1 || index >= monthsLength - 2) && disableButtons(index);
                      }
                    }
                  })()
                );
              },
              children: Object(jsx_runtime.jsx)('ul', {
                'data-testid': 'datepicker-month-ul',
                className: 'date-picker-grid-ul',
                children: months && renderMonthsView,
              }),
            }),
          ],
        });
      };
      datePicker_DatePicker.displayName = 'DatePicker';
      try {
        (datePicker_DatePicker.displayName = 'DatePicker'),
          (datePicker_DatePicker.__docgenInfo = {
            description: '',
            displayName: 'DatePicker',
            props: {
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: '(dates: TDates | Date | null) => void' },
              },
              locale: { defaultValue: null, description: '', name: 'locale', required: !0, type: { name: 'string' } },
              icons: {
                defaultValue: null,
                description: '',
                name: 'icons',
                required: !0,
                type: {
                  name: '{ changeMonth: { prev: Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>; next: Element | ReactElement<...>; }; }',
                },
              },
              nrOfDays: {
                defaultValue: { value: 365 },
                description: '',
                name: 'nrOfDays',
                required: !1,
                type: { name: 'number' },
              },
              dates: { defaultValue: null, description: '', name: 'dates', required: !1, type: { name: 'TDates' } },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              singleDate: {
                defaultValue: null,
                description: '',
                name: 'singleDate',
                required: !1,
                type: { name: 'boolean' },
              },
              basic: {
                defaultValue: { value: !1 },
                description: '',
                name: 'basic',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/calendar/src/components/datePicker/index.tsx#DatePicker'] = {
              docgenInfo: datePicker_DatePicker.__docgenInfo,
              name: 'DatePicker',
              path: 'packages/calendar/src/components/datePicker/index.tsx#DatePicker',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var StoriesDivider = __webpack_require__(24);
      function DatePicker_stories_extends() {
        return (DatePicker_stories_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function DatePicker_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function DatePicker_stories_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = DatePicker_stories_objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          DatePicker_stories_extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, {
            title: 'Calendar/Datepicker',
            component: datePicker_DatePicker,
            mdxType: 'Meta',
          }),
          Object(esm.mdx)('h1', { id: 'molecules' }, 'Molecules'),
          Object(esm.mdx)('h2', { id: 'datepicker' }, 'Datepicker'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Datepicker'),
              ' for when user needs to input dates. Can be a horizontal "one month per page" calendar or a vertical basic "infinite scrolle" calendar.',
            ),
          ),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Datepicker', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                { labels: ['Standard', 'Basic'], mdxType: 'StoriesDivider' },
                Object(esm.mdx)(datePicker_DatePicker, {
                  onChange: function onChange() {},
                  locale: 'sv-SE',
                  mdxType: 'DatePicker',
                }),
                Object(esm.mdx)(datePicker_DatePicker, {
                  onChange: function onChange() {},
                  locale: 'sv-SE',
                  basic: !0,
                  mdxType: 'DatePicker',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: datePicker_DatePicker, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var DatePicker_stories_datepicker = function datepicker() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: ['Standard', 'Basic'] },
          Object(esm.mdx)(datePicker_DatePicker, { onChange: function onChange() {}, locale: 'sv-SE' }),
          Object(esm.mdx)(datePicker_DatePicker, { onChange: function onChange() {}, locale: 'sv-SE', basic: !0 }),
        );
      };
      (DatePicker_stories_datepicker.displayName = 'datepicker'),
        (DatePicker_stories_datepicker.storyName = 'Datepicker'),
        (DatePicker_stories_datepicker.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'Standard\', \'Basic\']}>\n      <DatePicker onChange={() => {}} locale="sv-SE" />\n      <DatePicker onChange={() => {}} locale="sv-SE" basic={true} />\n    </StoriesDivider>',
          },
        });
      var componentMeta = {
          title: 'Calendar/Datepicker',
          component: datePicker_DatePicker,
          includeStories: ['datepicker'],
        },
        mdxStoryNameToKey = { Datepicker: 'datepicker' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1142: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'dropdown', function () {
          return Dropdown_stories_dropdown;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var react = __webpack_require__(0),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        StoriesDivider = __webpack_require__(24),
        jsx_runtime = (__webpack_require__(16), __webpack_require__(19), __webpack_require__(2));
      __webpack_require__(54),
        __webpack_require__(483),
        __webpack_require__(69),
        __webpack_require__(20),
        __webpack_require__(83);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var useFilterOptions_useFilterOptions = function useFilterOptions(_ref) {
        var options = _ref.options,
          _useState2 = _slicedToArray(Object(react.useState)(options), 2),
          filteredOptions = _useState2[0],
          setFilteredOptions = _useState2[1],
          _useState4 = _slicedToArray(Object(react.useState)(null), 2),
          activeOption = _useState4[0],
          setActiveOption = _useState4[1],
          onSetFilteredOptions = Object(react.useCallback)(function (value) {
            var newOptions = filteredOptions.filter(function (_ref2) {
              var _ref2$title = _ref2.title;
              return (void 0 === _ref2$title ? '' : _ref2$title).toLowerCase().includes(value);
            });
            newOptions && setFilteredOptions(newOptions);
          }, []),
          onClickFilterOptions = Object(react.useCallback)(function (pickedId) {
            var index = filteredOptions.findIndex(function (_ref3) {
              return _ref3.id === pickedId;
            });
            filteredOptions && filteredOptions[index] && setActiveOption(filteredOptions[index]);
          }, []);
        return {
          activeOption: activeOption,
          filteredOptions: filteredOptions,
          onSetFilteredOptions: onSetFilteredOptions,
          onClickFilterOptions: onClickFilterOptions,
        };
      };
      try {
        (useFilterOptions_useFilterOptions.displayName = 'useFilterOptions'),
          (useFilterOptions_useFilterOptions.__docgenInfo = {
            description: '',
            displayName: 'useFilterOptions',
            props: {
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: { name: 'IDropdownOption[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/forms/src/hooks/dropdown/useFilterOptions.tsx#useFilterOptions'] = {
              docgenInfo: useFilterOptions_useFilterOptions.__docgenInfo,
              name: 'useFilterOptions',
              path: 'packages/forms/src/hooks/dropdown/useFilterOptions.tsx#useFilterOptions',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var input = __webpack_require__(79),
        dist = __webpack_require__(37);
      __webpack_require__(486);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var dropdownOption_DropdownOption = function DropdownOption(_ref) {
        var onOptionsClick = _ref.onOptionsClick,
          activeOption = _ref.activeOption,
          open = _ref.open,
          setOpen = _ref.setOpen,
          rest = _objectWithoutProperties(_ref, ['onOptionsClick', 'activeOption', 'open', 'setOpen']),
          _ref2 = rest || {},
          disabled = _ref2.disabled,
          id = _ref2.id,
          leftIcon = _ref2.leftIcon,
          rightIcon = _ref2.rightIcon,
          iconSize = _ref2.iconSize,
          title = _ref2.title,
          onPress = function onPress() {
            onOptionsClick(Object.assign({}, rest)), setOpen();
          };
        return Object(jsx_runtime.jsx)(
          'button',
          {
            'data-testid': 'dropdown-content-button',
            tabIndex: open ? 0 : -1,
            disabled: disabled,
            onClick: function onClick() {
              return onPress();
            },
            onKeyDown: function onKeyDown(_ref3) {
              var key = _ref3.key;
              ('Enter' !== key && 'Escape' !== key) || onPress();
            },
            className: 'dropdown-content-button '.concat(
              null !== activeOption && activeOption.id === id ? 'active' : '',
            ),
            children: Object(jsx_runtime.jsx)(dist.Text, {
              className: 'title',
              size: 's',
              leftIcon: leftIcon ? { icon: leftIcon, size: iconSize || 'm' } : void 0,
              rightIcon: rightIcon ? { icon: rightIcon, size: iconSize || 'm' } : void 0,
              children: title,
            }),
          },
          id,
        );
      };
      dropdownOption_DropdownOption.displayName = 'DropdownOption';
      try {
        (dropdownOption_DropdownOption.displayName = 'DropdownOption'),
          (dropdownOption_DropdownOption.__docgenInfo = {
            description: '',
            displayName: 'DropdownOption',
            props: {
              title: { defaultValue: null, description: '', name: 'title', required: !0, type: { name: 'string' } },
              value: { defaultValue: null, description: '', name: 'value', required: !0, type: { name: 'string' } },
              id: { defaultValue: null, description: '', name: 'id', required: !0, type: { name: 'string' } },
              data: { defaultValue: null, description: '', name: 'data', required: !1, type: { name: 'string' } },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              leftIcon: {
                defaultValue: null,
                description: '',
                name: 'leftIcon',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              rightIcon: {
                defaultValue: null,
                description: '',
                name: 'rightIcon',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              iconSize: {
                defaultValue: null,
                description: '',
                name: 'iconSize',
                required: !1,
                type: { name: '"s" | "m" | "l" | "xl"' },
              },
              activeOption: {
                defaultValue: null,
                description: '',
                name: 'activeOption',
                required: !0,
                type: { name: 'IDropdownOption | null' },
              },
              onOptionsClick: {
                defaultValue: null,
                description: '',
                name: 'onOptionsClick',
                required: !0,
                type: { name: '(option: IDropdownOption) => void' },
              },
              open: { defaultValue: null, description: '', name: 'open', required: !0, type: { name: 'boolean' } },
              setOpen: {
                defaultValue: null,
                description: '',
                name: 'setOpen',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/forms/src/components/dropdown/dropdownOption.tsx#DropdownOption'] = {
              docgenInfo: dropdownOption_DropdownOption.__docgenInfo,
              name: 'DropdownOption',
              path: 'packages/forms/src/components/dropdown/dropdownOption.tsx#DropdownOption',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function dropdown_slicedToArray(arr, i) {
        return (
          (function dropdown_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function dropdown_iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function dropdown_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return dropdown_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return dropdown_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function dropdown_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function dropdown_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function dropdown_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function dropdown_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var dropdown_Dropdown = function Dropdown(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _onChange = _ref.onChange,
          options = _ref.options,
          onOptionClick = _ref.onOptionClick,
          onToggleOpen = _ref.onToggleOpen,
          rest = dropdown_objectWithoutProperties(_ref, [
            'className',
            'onChange',
            'options',
            'onOptionClick',
            'onToggleOpen',
          ]),
          _useFilterOptions = useFilterOptions_useFilterOptions({ options: options }),
          activeOption = _useFilterOptions.activeOption,
          filteredOptions = _useFilterOptions.filteredOptions,
          onSetFilteredOptions = _useFilterOptions.onSetFilteredOptions,
          onClickFilterOptions = _useFilterOptions.onClickFilterOptions,
          _useState2 = dropdown_slicedToArray(Object(react.useState)(!1), 2),
          open = _useState2[0],
          _setOpen = _useState2[1],
          title = (activeOption || {}).title,
          renderOptions = filteredOptions.map(function (_ref3) {
            var rest = _extends({}, _ref3);
            return Object(jsx_runtime.jsx)(
              'li',
              {
                children: Object(jsx_runtime.jsx)(
                  dropdownOption_DropdownOption,
                  Object.assign(
                    {
                      onOptionsClick: function onOptionsClick(option) {
                        onClickFilterOptions(option.id), onOptionClick(option);
                      },
                      activeOption: activeOption,
                      open: open,
                      setOpen: function setOpen() {
                        return _setOpen(!1);
                      },
                    },
                    rest,
                  ),
                ),
              },
              rest.id,
            );
          });
        return (
          Object(react.useEffect)(
            function () {
              return onToggleOpen && onToggleOpen(open);
            },
            [open],
          ),
          Object(jsx_runtime.jsxs)('div', {
            'data-testid': 'dropdown',
            className: 'dropdown-wrapper '
              .concat(className, ' ')
              .concat(open ? 'open' : 'close', ' ')
              .concat(rest.disabled ? 'disabled' : ''),
            children: [
              Object(jsx_runtime.jsx)(
                input.a,
                Object.assign(
                  {
                    defaultValue: title,
                    onClick: function onClick() {
                      return _setOpen(!open);
                    },
                    onChange: function onChange(event) {
                      onSetFilteredOptions(event.currentTarget.value), _onChange && _onChange(event), _setOpen(!0);
                    },
                  },
                  rest,
                ),
              ),
              Object(jsx_runtime.jsx)('div', {
                'data-testid': 'dropdown-content',
                className: 'dropdown-content '.concat(open ? 'open' : 'close'),
                children: Object(jsx_runtime.jsx)('ul', {
                  'data-testid': 'dropdown-content-ul',
                  className: 'dropdown-inner-content',
                  children: filteredOptions && renderOptions,
                }),
              }),
            ],
          })
        );
      };
      dropdown_Dropdown.displayName = 'Dropdown';
      try {
        (dropdown_Dropdown.displayName = 'Dropdown'),
          (dropdown_Dropdown.__docgenInfo = {
            description: '',
            displayName: 'Dropdown',
            props: {
              title: { defaultValue: null, description: '', name: 'title', required: !0, type: { name: 'string' } },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !0,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: '(event: ChangeEvent<HTMLInputElement>) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
              padding: { defaultValue: null, description: '', name: 'padding', required: !1, type: { name: 'string' } },
              leftIcon: {
                defaultValue: null,
                description: '',
                name: 'leftIcon',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              rightIcon: {
                defaultValue: null,
                description: '',
                name: 'rightIcon',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              height: {
                defaultValue: null,
                description: '',
                name: 'height',
                required: !1,
                type: { name: '"xs" | "s" | "m" | "l" | "xl"' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: { name: 'IDropdownOption[]' },
              },
              onOptionClick: {
                defaultValue: null,
                description: '',
                name: 'onOptionClick',
                required: !0,
                type: { name: '(option: IDropdownOption) => void' },
              },
              onToggleOpen: {
                defaultValue: null,
                description: '',
                name: 'onToggleOpen',
                required: !1,
                type: { name: '((open: boolean) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/forms/src/components/dropdown/index.tsx#Dropdown'] = {
              docgenInfo: dropdown_Dropdown.__docgenInfo,
              name: 'Dropdown',
              path: 'packages/forms/src/components/dropdown/index.tsx#Dropdown',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(1130), __webpack_require__(41);
      function Dropdown_stories_extends() {
        return (Dropdown_stories_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Dropdown_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Dropdown_stories_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = Dropdown_stories_objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          Dropdown_stories_extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'Forms/Dropdown', component: dropdown_Dropdown, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'dropdown' }, 'Dropdown'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Dropdown'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Dropdown', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                { labels: ['Standard', 'Default value', 'Disabled'], mdxType: 'StoriesDivider' },
                Object(esm.mdx)(dropdown_Dropdown, {
                  title: 'Input',
                  placeholder: 'Placeholder',
                  onChange: function onChange() {
                    return console.log();
                  },
                  onOptionClick: function onOptionClick() {
                    return console.log();
                  },
                  options: [{ title: 'Option', value: 'option0', id: 'opt0', data: '0' }],
                  mdxType: 'Dropdown',
                }),
                Object(esm.mdx)(dropdown_Dropdown, {
                  defaultValue: 'Deafult value',
                  title: 'Input',
                  placeholder: 'Placeholder',
                  onChange: function onChange() {
                    return console.log();
                  },
                  onOptionClick: function onOptionClick() {
                    return console.log();
                  },
                  options: [{ title: 'Option', value: 'option0', id: 'opt0', data: '0' }],
                  mdxType: 'Dropdown',
                }),
                Object(esm.mdx)(dropdown_Dropdown, {
                  disabled: !0,
                  title: 'Input',
                  placeholder: 'Placeholder',
                  onChange: function onChange() {
                    return console.log();
                  },
                  onOptionClick: function onOptionClick() {
                    return console.log();
                  },
                  options: [{ title: 'Option', value: 'option0', id: 'opt0', data: '0' }],
                  mdxType: 'Dropdown',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: dropdown_Dropdown, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Dropdown_stories_dropdown = function dropdown() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: ['Standard', 'Default value', 'Disabled'] },
          Object(esm.mdx)(dropdown_Dropdown, {
            title: 'Input',
            placeholder: 'Placeholder',
            onChange: function onChange() {
              return console.log();
            },
            onOptionClick: function onOptionClick() {
              return console.log();
            },
            options: [{ title: 'Option', value: 'option0', id: 'opt0', data: '0' }],
          }),
          Object(esm.mdx)(dropdown_Dropdown, {
            defaultValue: 'Deafult value',
            title: 'Input',
            placeholder: 'Placeholder',
            onChange: function onChange() {
              return console.log();
            },
            onOptionClick: function onOptionClick() {
              return console.log();
            },
            options: [{ title: 'Option', value: 'option0', id: 'opt0', data: '0' }],
          }),
          Object(esm.mdx)(dropdown_Dropdown, {
            disabled: !0,
            title: 'Input',
            placeholder: 'Placeholder',
            onChange: function onChange() {
              return console.log();
            },
            onOptionClick: function onOptionClick() {
              return console.log();
            },
            options: [{ title: 'Option', value: 'option0', id: 'opt0', data: '0' }],
          }),
        );
      };
      (Dropdown_stories_dropdown.displayName = 'dropdown'),
        (Dropdown_stories_dropdown.storyName = 'Dropdown'),
        (Dropdown_stories_dropdown.parameters = {
          storySource: {
            source:
              "<StoriesDivider labels={['Standard', 'Default value', 'Disabled']}>\n      <Dropdown title=\"Input\" placeholder=\"Placeholder\" onChange={() => console.log()} onOptionClick={() => console.log()} options={[{\n    title: 'Option',\n    value: 'option0',\n    id: 'opt0',\n    data: '0'\n  }]} />\n      <Dropdown defaultValue=\"Deafult value\" title=\"Input\" placeholder=\"Placeholder\" onChange={() => console.log()} onOptionClick={() => console.log()} options={[{\n    title: 'Option',\n    value: 'option0',\n    id: 'opt0',\n    data: '0'\n  }]} />\n      <Dropdown disabled title=\"Input\" placeholder=\"Placeholder\" onChange={() => console.log()} onOptionClick={() => console.log()} options={[{\n    title: 'Option',\n    value: 'option0',\n    id: 'opt0',\n    data: '0'\n  }]} />\n    </StoriesDivider>",
          },
        });
      var componentMeta = { title: 'Forms/Dropdown', component: dropdown_Dropdown, includeStories: ['dropdown'] },
        mdxStoryNameToKey = { Dropdown: 'dropdown' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1144: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'parameters', function () {
          return parameters;
        });
      __webpack_require__(3), __webpack_require__(139);
      var sizes = { none: 0, xsmall: 10, small: 20, medium: 30, large: 40, xlarge: 60 },
        travelColors_modernRed = '#EA143D',
        travelColors_modernBlue = '#2378CD',
        travelColors_tjara = '#000000',
        travelColors_moln = '#ffffff',
        travelColors_silver = '#949494',
        travelColors_silverLight = '#F4F4F4',
        travelColors_silverDark = '#6b6b6b',
        travelColors_shadow = 'rgba(0, 0, 0, 0.2)',
        travelColors_overlay = 'rgba(0, 0, 0, 0.75)',
        travelColors_sand = '#faf6eb',
        travelColors_snackskal = '#f7d7d1',
        travelColors_sjobod = '#b00f2e',
        travelColors_tang = '#751422',
        travelColors_himmel = '#c0d5ed',
        travelColors_hav = '#1a5a9a',
        travelColors_mussla = '#123d66',
        travelColors_modernGreen = '#74b346',
        travelColors_extra = '#28d2b9',
        xsmall = sizes.xsmall,
        small = sizes.small,
        medium = sizes.medium,
        large = sizes.large,
        xlarge = sizes.xlarge,
        style =
          (''.concat(sizes.none, 'px'),
          ''.concat(xsmall, 'px'),
          ''.concat(small, 'px'),
          ''.concat(medium, 'px'),
          ''.concat(large, 'px'),
          ''.concat(xlarge, 'px'),
          (document.documentElement || {}).style),
        packages_0 = __webpack_require__(117),
        dist = __webpack_require__(11);
      Object(packages_0.AddTheme)({
        theme: Object.assign(
          { metrics: packages_0.metrics },
          packages_0.calendarTheme,
          packages_0.coreTheme,
          packages_0.formsTheme,
          packages_0.systemTheme,
          packages_0.selectTheme,
        ),
      }),
        (function setStoriesTheme() {
          style.setProperty('--stories-size-none', ''.concat(sizes.none, 'px')),
            style.setProperty('--stories-size-xxxs', ''.concat(sizes.xxxsmall, 'px')),
            style.setProperty('--stories-size-xxs', ''.concat(sizes.xxsmall, 'px')),
            style.setProperty('--stories-size-xs', ''.concat(sizes.xsmall, 'px')),
            style.setProperty('--stories-size-s', ''.concat(sizes.small, 'px')),
            style.setProperty('--stories-size-m', ''.concat(sizes.medium, 'px')),
            style.setProperty('--stories-size-l', ''.concat(sizes.large, 'px')),
            style.setProperty('--stories-size-xl', ''.concat(sizes.xlarge, 'px')),
            style.setProperty('--stories-size-xxl', ''.concat(sizes.xxlarge, 'px')),
            style.setProperty('--stories-color-modern-red', travelColors_modernRed),
            style.setProperty('--stories-color-modern-blue', travelColors_modernBlue),
            style.setProperty('--stories-color-tjara', travelColors_tjara),
            style.setProperty('--stories-color-moln', travelColors_moln),
            style.setProperty('--stories-color-silver', travelColors_silver),
            style.setProperty('--stories-color-silver-light', travelColors_silverLight),
            style.setProperty('--stories-color-silver-dark', travelColors_silverDark),
            style.setProperty('--stories-color-shadow', travelColors_shadow),
            style.setProperty('--stories-color-overlay', travelColors_overlay),
            style.setProperty('--stories-color-sand', travelColors_sand),
            style.setProperty('--stories-color-snackskal', travelColors_snackskal),
            style.setProperty('--stories-color-sjobod', travelColors_sjobod),
            style.setProperty('--stories-color-tang', travelColors_tang),
            style.setProperty('--stories-color-himmel', travelColors_himmel),
            style.setProperty('--stories-color-hav', travelColors_hav),
            style.setProperty('--stories-color-mussla', travelColors_mussla),
            style.setProperty('--stories-color-modern-green', travelColors_modernGreen),
            style.setProperty('--stories-color-extra', travelColors_extra);
        })();
      var parameters = { docs: { theme: dist.themes.light } };
    },
    1145: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'image', function () {
          return Image_stories_image;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var react = __webpack_require__(0),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        jsx_runtime = (__webpack_require__(16), __webpack_require__(2));
      __webpack_require__(20);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var useProgressiveImg_useProgressiveImg = function useProgressiveImg(_ref) {
        var lowQualitySrc = _ref.lowQualitySrc,
          highQualitySrc = _ref.highQualitySrc,
          _useState2 = _slicedToArray(Object(react.useState)(lowQualitySrc), 2),
          newSrc = _useState2[0],
          setSrc = _useState2[1];
        return (
          Object(react.useEffect)(
            function () {
              setSrc(lowQualitySrc);
              var img = new Image();
              (img.src = highQualitySrc),
                (img.onload = function () {
                  setSrc(highQualitySrc);
                });
            },
            [lowQualitySrc, highQualitySrc],
          ),
          { newSrc: newSrc, blur: newSrc === lowQualitySrc }
        );
      };
      try {
        (useProgressiveImg_useProgressiveImg.displayName = 'useProgressiveImg'),
          (useProgressiveImg_useProgressiveImg.__docgenInfo = {
            description: '',
            displayName: 'useProgressiveImg',
            props: {
              lowQualitySrc: {
                defaultValue: null,
                description: '',
                name: 'lowQualitySrc',
                required: !0,
                type: { name: 'string' },
              },
              highQualitySrc: {
                defaultValue: null,
                description: '',
                name: 'highQualitySrc',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/hooks/image/useProgressiveImg.tsx#useProgressiveImg'] = {
              docgenInfo: useProgressiveImg_useProgressiveImg.__docgenInfo,
              name: 'useProgressiveImg',
              path: 'packages/core/src/hooks/image/useProgressiveImg.tsx#useProgressiveImg',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(1118);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var image_Image = function Image(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _ref$aspectRatio = _ref.aspectRatio,
          aspectRatio = void 0 === _ref$aspectRatio ? '21-9' : _ref$aspectRatio,
          _ref$borderRadius = _ref.borderRadius,
          borderRadius = void 0 === _ref$borderRadius ? 'm' : _ref$borderRadius,
          innerRef = _ref.innerRef,
          src = _ref.src,
          lowResSrc = _ref.lowResSrc,
          rest = _objectWithoutProperties(_ref, [
            'className',
            'aspectRatio',
            'borderRadius',
            'innerRef',
            'src',
            'lowResSrc',
          ]),
          _useProgressiveImg = useProgressiveImg_useProgressiveImg({ lowQualitySrc: lowResSrc, highQualitySrc: src }),
          newSrc = _useProgressiveImg.newSrc,
          blur = _useProgressiveImg.blur;
        return Object(jsx_runtime.jsx)('div', {
          'data-testid': 'image-wrapper',
          className: 'image '
            .concat(blur ? 'blur' : 'no-blur', ' image-border-radius-')
            .concat(borderRadius, ' image-aspect-ratio-')
            .concat(aspectRatio, ' ')
            .concat(className),
          ref: innerRef,
          children: Object(jsx_runtime.jsx)('img', Object.assign({ 'data-testid': 'image', src: newSrc }, rest)),
        });
      };
      image_Image.displayName = 'Image';
      try {
        (image_Image.displayName = 'Image'),
          (image_Image.__docgenInfo = {
            description: '',
            displayName: 'Image',
            props: {
              src: { defaultValue: null, description: '', name: 'src', required: !0, type: { name: 'string' } },
              lowResSrc: {
                defaultValue: null,
                description: '',
                name: 'lowResSrc',
                required: !0,
                type: { name: 'string' },
              },
              alt: { defaultValue: null, description: '', name: 'alt', required: !0, type: { name: 'string' } },
              aspectRatio: {
                defaultValue: { value: '21-9' },
                description: '',
                name: 'aspectRatio',
                required: !1,
                type: { name: '"2-3" | "21-9" | "30-9"' },
              },
              borderRadius: {
                defaultValue: { value: 'm' },
                description: '',
                name: 'borderRadius',
                required: !1,
                type: { name: '"xs" | "s" | "m" | "l" | "xl"' },
              },
              innerRef: {
                defaultValue: null,
                description: '',
                name: 'innerRef',
                required: !1,
                type: { name: 'RefObject<HTMLImageElement>' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/components/image/index.tsx#Image'] = {
              docgenInfo: image_Image.__docgenInfo,
              name: 'Image',
              path: 'packages/core/src/components/image/index.tsx#Image',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var StoriesDivider = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Image_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Image_stories_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = Image_stories_objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'Core/Image', component: image_Image, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'images' }, 'Images'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Images'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(esm.mdx)(
            'ul',
            null,
            Object(esm.mdx)('li', null, 'Two ratios are used, 21:9 and 2:3.'),
            Object(esm.mdx)('li', null, 'Most images should primarily be displayed in landscape.'),
            Object(esm.mdx)('li', null, 'The aspect ratios should be applied to the fullest, with few exceptions.'),
            Object(esm.mdx)(
              'li',
              null,
              'The Top Image on pages, also called Hero, can be shown either in three modes: Large, Medium and Small.',
            ),
            Object(esm.mdx)(
              'li',
              null,
              'In Hero mode the image will use 100% of the web browser width, and ratio needs to be ignored in order to not push the page content too far down.',
            ),
            Object(esm.mdx)('li', null, 'In Medium and Small mode the image should keep the aspect ratio.'),
            Object(esm.mdx)('li', null, 'Video (YouTube) should also primarily follow 21:9.'),
            Object(esm.mdx)(
              'li',
              null,
              'Upload image size: Recommended 1890x810 pixels. Minimum 1260x540 pixels. Max 2520x1080 pixel.',
            ),
          ),
          ' ',
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Image', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                {
                  labels: [
                    'Standard - 21:9',
                    '2:3',
                    '21:9',
                    '30:9',
                    'Radius - none',
                    'Radius-s',
                    'Radius-m',
                    'Radius-l',
                    'Radius-xl',
                    'Radius-round',
                  ],
                  mdxType: 'StoriesDivider',
                },
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  aspectRatio: '2-3',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  aspectRatio: '21-9',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  aspectRatio: '30-9',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  borderRadius: 'none',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  borderRadius: 's',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  borderRadius: 'm',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  borderRadius: 'l',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  borderRadius: 'xl',
                  mdxType: 'Image',
                }),
                Object(esm.mdx)(image_Image, {
                  alt: 'Alt',
                  src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
                  lowResSrc:
                    'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
                  borderRadius: 'xxl',
                  mdxType: 'Image',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: image_Image, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Image_stories_image = function image() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          {
            labels: [
              'Standard - 21:9',
              '2:3',
              '21:9',
              '30:9',
              'Radius - none',
              'Radius-s',
              'Radius-m',
              'Radius-l',
              'Radius-xl',
              'Radius-round',
            ],
          },
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            aspectRatio: '2-3',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            aspectRatio: '21-9',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            aspectRatio: '30-9',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            borderRadius: 'none',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            borderRadius: 's',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            borderRadius: 'm',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            borderRadius: 'l',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            borderRadius: 'xl',
          }),
          Object(esm.mdx)(image_Image, {
            alt: 'Alt',
            src: 'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20',
            lowResSrc:
              'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1',
            borderRadius: 'xxl',
          }),
        );
      };
      (Image_stories_image.displayName = 'image'),
        (Image_stories_image.storyName = 'Image'),
        (Image_stories_image.parameters = {
          storySource: {
            source:
              "<StoriesDivider labels={['Standard - 21:9', '2:3', '21:9', '30:9', 'Radius - none', 'Radius-s', 'Radius-m', 'Radius-l', 'Radius-xl', 'Radius-round']}>\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} aspectRatio=\"2-3\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} aspectRatio=\"21-9\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} aspectRatio=\"30-9\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} borderRadius=\"none\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} borderRadius=\"s\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} borderRadius=\"m\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} borderRadius=\"l\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} borderRadius=\"xl\" />\n      <Image alt=\"Alt\" src={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=20'} lowResSrc={'https://images.unsplash.com/photo-1553246969-7dcb4259a87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=1'} borderRadius=\"xxl\" />\n    </StoriesDivider>",
          },
        });
      var componentMeta = { title: 'Core/Image', component: image_Image, includeStories: ['image'] },
        mdxStoryNameToKey = { Image: 'image' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1146: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'tab', function () {
          return Tab_stories_tab;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var react = __webpack_require__(0),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        StoriesDivider = __webpack_require__(24),
        jsx_runtime = (__webpack_require__(20), __webpack_require__(2)),
        dist = (__webpack_require__(19), __webpack_require__(37)),
        tabOptions_TabOptions =
          (__webpack_require__(487),
          function TabOptions(_ref) {
            var _ref$options = _ref.options,
              options = void 0 === _ref$options ? [] : _ref$options,
              onOptionsClick = _ref.onOptionsClick,
              activeOption = _ref.activeOption;
            return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: options.map(function (_ref2) {
                var title = _ref2.title,
                  id = _ref2.id,
                  leftIcon = _ref2.leftIcon,
                  rightIcon = _ref2.rightIcon,
                  disabled = _ref2.disabled;
                return Object(jsx_runtime.jsx)(
                  'li',
                  {
                    'data-testid': 'tab-option-wrapper',
                    className: 'tab-content '.concat(
                      (null == activeOption ? void 0 : activeOption.id) === id ? 'active' : '',
                    ),
                    children: Object(jsx_runtime.jsx)(
                      'button',
                      {
                        'data-testid': 'tab-option',
                        disabled: disabled,
                        onClick: function onClick() {
                          return onOptionsClick({
                            title: title,
                            id: id,
                            leftIcon: leftIcon,
                            rightIcon: rightIcon,
                            disabled: disabled,
                          });
                        },
                        children: Object(jsx_runtime.jsx)(dist.Text, {
                          className: 'tab-text',
                          size: 's',
                          wrap: 'nowrap',
                          leftIcon: leftIcon,
                          rightIcon: rightIcon,
                          children: title,
                        }),
                      },
                      id,
                    ),
                  },
                  id,
                );
              }),
            });
          });
      try {
        (tabOptions_TabOptions.displayName = 'TabOptions'),
          (tabOptions_TabOptions.__docgenInfo = {
            description: '',
            displayName: 'TabOptions',
            props: {
              options: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'options',
                required: !1,
                type: { name: 'ITabOption[]' },
              },
              onOptionsClick: {
                defaultValue: null,
                description: '',
                name: 'onOptionsClick',
                required: !0,
                type: { name: '(option: ITabOption) => void' },
              },
              activeOption: {
                defaultValue: null,
                description: '',
                name: 'activeOption',
                required: !1,
                type: { name: 'ITabOption' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/select/src/components/tab/tabOptions.tsx#TabOptions'] = {
              docgenInfo: tabOptions_TabOptions.__docgenInfo,
              name: 'TabOptions',
              path: 'packages/select/src/components/tab/tabOptions.tsx#TabOptions',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var tab_Tab = function Tab(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          options = _ref.options,
          onOptionClick = _ref.onOptionClick,
          defActiveOpt = _ref.activeOption || (options ? options[0] : void 0),
          _useState2 = _slicedToArray(Object(react.useState)(defActiveOpt), 2),
          active = _useState2[0],
          setActive = _useState2[1];
        return Object(jsx_runtime.jsx)('ul', {
          'data-testid': 'tab',
          className: 'tab-wrapper '.concat(className),
          children:
            options &&
            Object(jsx_runtime.jsx)(tabOptions_TabOptions, {
              onOptionsClick: function onOptionsClick(option) {
                onOptionClick(option), setActive(option);
              },
              options: options,
              activeOption: active,
            }),
        });
      };
      tab_Tab.displayName = 'Tab';
      try {
        (tab_Tab.displayName = 'Tab'),
          (tab_Tab.__docgenInfo = {
            description: '',
            displayName: 'Tab',
            props: {
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: { name: 'ITabOption[]' },
              },
              onOptionClick: {
                defaultValue: null,
                description: '',
                name: 'onOptionClick',
                required: !0,
                type: { name: '(option: ITabOption) => void' },
              },
              activeOption: {
                defaultValue: null,
                description: '',
                name: 'activeOption',
                required: !1,
                type: { name: 'ITabOption' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/select/src/components/tab/index.tsx#Tab'] = {
              docgenInfo: tab_Tab.__docgenInfo,
              name: 'Tab',
              path: 'packages/select/src/components/tab/index.tsx#Tab',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'Select/Tab', component: tab_Tab, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'tab' }, 'Tab'),
          Object(esm.mdx)(
            'ul',
            null,
            Object(esm.mdx)('li', { parentName: 'ul' }, 'Comes both with and without icon.'),
            Object(esm.mdx)(
              'li',
              { parentName: 'ul' },
              'Active tab is ',
              Object(esm.mdx)('inlineCode', { parentName: 'li' }, 'red'),
              '.',
            ),
            Object(esm.mdx)(
              'li',
              { parentName: 'ul' },
              'When there is more tabs than fits the screen, you will be allowed to ',
              Object(esm.mdx)('inlineCode', { parentName: 'li' }, 'scroll/swipe horisontally'),
              ' to see the rest. This is indicated by a gradient-shadow located to the left/right.',
            ),
            Object(esm.mdx)(
              'li',
              { parentName: 'ul' },
              'Max ',
              Object(esm.mdx)('inlineCode', { parentName: 'li' }, '10 tabs'),
              ' are allowed on one row.',
            ),
          ),
          Object(esm.mdx)('hr', null),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Tab', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                { labels: ['Standard', 'Manipulate'], mdxType: 'StoriesDivider' },
                Object(esm.mdx)(tab_Tab, {
                  options: [
                    { title: 'Option', id: 'opt0' },
                    { title: 'Option 1', id: 'opt1' },
                  ],
                  onOptionClick: function onOptionClick() {
                    return console.log();
                  },
                  mdxType: 'Tab',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: tab_Tab, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Tab_stories_tab = function tab() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: ['Standard', 'Manipulate'] },
          Object(esm.mdx)(tab_Tab, {
            options: [
              { title: 'Option', id: 'opt0' },
              { title: 'Option 1', id: 'opt1' },
            ],
            onOptionClick: function onOptionClick() {
              return console.log();
            },
          }),
        );
      };
      (Tab_stories_tab.displayName = 'tab'),
        (Tab_stories_tab.storyName = 'Tab'),
        (Tab_stories_tab.parameters = {
          storySource: {
            source:
              "<StoriesDivider labels={['Standard', 'Manipulate']}>\n      <Tab options={[{\n    title: 'Option',\n    id: 'opt0'\n  }, {\n    title: 'Option 1',\n    id: 'opt1'\n  }]} onOptionClick={() => console.log()} />\n    </StoriesDivider>",
          },
        });
      var componentMeta = { title: 'Select/Tab', component: tab_Tab, includeStories: ['tab'] },
        mdxStoryNameToKey = { Tab: 'tab' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1147: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'price', function () {
          return Price_stories_price;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        jsx_runtime = __webpack_require__(2),
        components_text = __webpack_require__(23),
        price_Price =
          (__webpack_require__(1120),
          function Price(_ref) {
            var left = _ref.left,
              middle = _ref.middle,
              right = _ref.right,
              _ref$width = _ref.width,
              width = void 0 === _ref$width ? 'auto' : _ref$width;
            return Object(jsx_runtime.jsxs)('div', {
              className: 'price',
              children: [
                Object(jsx_runtime.jsx)(
                  components_text.a,
                  Object.assign({ className: 'left', size: 's', fontStyle: 'italic', width: width }, left.props, {
                    children: left.value,
                  }),
                ),
                Object(jsx_runtime.jsx)(
                  components_text.a,
                  Object.assign(
                    { className: 'middle', size: 'xl', fontStyle: 'italic', weight: 'bold', width: width },
                    middle.props,
                    { children: middle.value },
                  ),
                ),
                Object(jsx_runtime.jsx)(
                  components_text.a,
                  Object.assign({ className: 'right', size: 's', fontStyle: 'italic', width: width }, right.props, {
                    children: right.value,
                  }),
                ),
              ],
            });
          });
      price_Price.displayName = 'Price';
      try {
        (price_Price.displayName = 'Price'),
          (price_Price.__docgenInfo = {
            description: '',
            displayName: 'Price',
            props: {
              left: { defaultValue: null, description: '', name: 'left', required: !0, type: { name: 'IPriceColumn' } },
              middle: {
                defaultValue: null,
                description: '',
                name: 'middle',
                required: !0,
                type: { name: 'IPriceColumn' },
              },
              right: {
                defaultValue: null,
                description: '',
                name: 'right',
                required: !0,
                type: { name: 'IPriceColumn' },
              },
              width: {
                defaultValue: { value: 'auto' },
                description: '',
                name: 'width',
                required: !1,
                type: { name: '"auto" | "full"' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/components/price/index.tsx#Price'] = {
              docgenInfo: price_Price.__docgenInfo,
              name: 'Price',
              path: 'packages/core/src/components/price/index.tsx#Price',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var StoriesDivider = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'Core/Price', component: price_Price, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'price' }, 'Price'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Price'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Price', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                { labels: ['Standard', 'Same size', 'No italic'], mdxType: 'StoriesDivider' },
                Object(esm.mdx)(price_Price, {
                  left: { value: 'From' },
                  middle: { value: '$999' },
                  right: { value: '/Person' },
                  mdxType: 'Price',
                }),
                Object(esm.mdx)(price_Price, {
                  left: { value: 'From', props: { size: 'l' } },
                  middle: { value: '$999', props: { size: 'l' } },
                  right: { value: '/Person', props: { size: 'l' } },
                  mdxType: 'Price',
                }),
                Object(esm.mdx)(price_Price, {
                  left: { value: 'From', props: { fontStyle: 'normal' } },
                  middle: { value: '$999', props: { fontStyle: 'normal' } },
                  right: { value: '/Person', props: { fontStyle: 'normal' } },
                  mdxType: 'Price',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: price_Price, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Price_stories_price = function price() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: ['Standard', 'Same size', 'No italic'] },
          Object(esm.mdx)(price_Price, {
            left: { value: 'From' },
            middle: { value: '$999' },
            right: { value: '/Person' },
          }),
          Object(esm.mdx)(price_Price, {
            left: { value: 'From', props: { size: 'l' } },
            middle: { value: '$999', props: { size: 'l' } },
            right: { value: '/Person', props: { size: 'l' } },
          }),
          Object(esm.mdx)(price_Price, {
            left: { value: 'From', props: { fontStyle: 'normal' } },
            middle: { value: '$999', props: { fontStyle: 'normal' } },
            right: { value: '/Person', props: { fontStyle: 'normal' } },
          }),
        );
      };
      (Price_stories_price.displayName = 'price'),
        (Price_stories_price.storyName = 'Price'),
        (Price_stories_price.parameters = {
          storySource: {
            source:
              "<StoriesDivider labels={['Standard', 'Same size', 'No italic']}>\n      <Price left={{\n    value: 'From'\n  }} middle={{\n    value: '$999'\n  }} right={{\n    value: '/Person'\n  }} />\n      <Price left={{\n    value: 'From',\n    props: {\n      size: 'l'\n    }\n  }} middle={{\n    value: '$999',\n    props: {\n      size: 'l'\n    }\n  }} right={{\n    value: '/Person',\n    props: {\n      size: 'l'\n    }\n  }} />\n      <Price left={{\n    value: 'From',\n    props: {\n      fontStyle: 'normal'\n    }\n  }} middle={{\n    value: '$999',\n    props: {\n      fontStyle: 'normal'\n    }\n  }} right={{\n    value: '/Person',\n    props: {\n      fontStyle: 'normal'\n    }\n  }} />\n    </StoriesDivider>",
          },
        });
      var componentMeta = { title: 'Core/Price', component: price_Price, includeStories: ['price'] },
        mdxStoryNameToKey = { Price: 'price' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1148: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'checkbox', function () {
          return Checkbox_stories_checkbox;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        jsx_runtime = __webpack_require__(2),
        dist = __webpack_require__(37);
      __webpack_require__(1125);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var checkbox_Checkbox = function Checkbox(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          label = _ref.label,
          _onChange = _ref.onChange,
          rest = _objectWithoutProperties(_ref, ['className', 'label', 'onChange']);
        return Object(jsx_runtime.jsxs)('label', {
          'data-testid': 'checkbox',
          className: 'checkbox-label '.concat(className),
          children: [
            Object(jsx_runtime.jsx)(
              'input',
              Object.assign(
                {
                  'data-testid': 'input',
                  className: 'checkbox-input',
                  onChange: function onChange(event) {
                    return _onChange && _onChange(event);
                  },
                },
                rest,
                { type: 'checkbox' },
              ),
            ),
            Object(jsx_runtime.jsx)('span', { className: 'checkbox-checkmark' }),
            Object(jsx_runtime.jsx)(dist.Text, { className: 'checkbox-label', children: label }),
          ],
        });
      };
      checkbox_Checkbox.displayName = 'Checkbox';
      try {
        (checkbox_Checkbox.displayName = 'Checkbox'),
          (checkbox_Checkbox.__docgenInfo = {
            description: '',
            displayName: 'Checkbox',
            props: {
              label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: '(event: ChangeEvent<HTMLInputElement>) => void' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              checked: {
                defaultValue: null,
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/forms/src/components/checkbox/index.tsx#Checkbox'] = {
              docgenInfo: checkbox_Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'packages/forms/src/components/checkbox/index.tsx#Checkbox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var StoriesDivider = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Checkbox_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Checkbox_stories_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = Checkbox_stories_objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'Forms/Checkbox', component: checkbox_Checkbox, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'checkbox' }, 'Checkbox'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Checkbox'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Checkbox', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                {
                  labels: ['Unchecked', 'Checked', 'Unchecked - disabled', 'Checked - disabled'],
                  mdxType: 'StoriesDivider',
                },
                Object(esm.mdx)(checkbox_Checkbox, {
                  label: 'All destinations',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Checkbox',
                }),
                Object(esm.mdx)(checkbox_Checkbox, {
                  checked: !0,
                  label: 'All destinations',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Checkbox',
                }),
                Object(esm.mdx)(checkbox_Checkbox, {
                  disabled: !0,
                  label: 'All destinations',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Checkbox',
                }),
                Object(esm.mdx)(checkbox_Checkbox, {
                  checked: !0,
                  disabled: !0,
                  label: 'All destinations',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Checkbox',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: checkbox_Checkbox, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Checkbox_stories_checkbox = function checkbox() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: ['Unchecked', 'Checked', 'Unchecked - disabled', 'Checked - disabled'] },
          Object(esm.mdx)(checkbox_Checkbox, {
            label: 'All destinations',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(esm.mdx)(checkbox_Checkbox, {
            checked: !0,
            label: 'All destinations',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(esm.mdx)(checkbox_Checkbox, {
            disabled: !0,
            label: 'All destinations',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(esm.mdx)(checkbox_Checkbox, {
            checked: !0,
            disabled: !0,
            label: 'All destinations',
            onChange: function onChange() {
              return console.log();
            },
          }),
        );
      };
      (Checkbox_stories_checkbox.displayName = 'checkbox'),
        (Checkbox_stories_checkbox.storyName = 'Checkbox'),
        (Checkbox_stories_checkbox.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'Unchecked\', \'Checked\', \'Unchecked - disabled\', \'Checked - disabled\']}>\n      <Checkbox label="All destinations" onChange={() => console.log()} />\n      <Checkbox checked={true} label="All destinations" onChange={() => console.log()} />\n      <Checkbox disabled label="All destinations" onChange={() => console.log()} />\n      <Checkbox checked={true} disabled label="All destinations" onChange={() => console.log()} />\n    </StoriesDivider>',
          },
        });
      var componentMeta = { title: 'Forms/Checkbox', component: checkbox_Checkbox, includeStories: ['checkbox'] },
        mdxStoryNameToKey = { Checkbox: 'checkbox' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1149: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'radio', function () {
          return Radio_stories_radio;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8), __webpack_require__(0);
      var esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        jsx_runtime = __webpack_require__(2),
        dist = __webpack_require__(37);
      __webpack_require__(1132);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var radio_Radio = function Radio(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          label = _ref.label,
          _onChange = _ref.onChange,
          rest = _objectWithoutProperties(_ref, ['className', 'label', 'onChange']);
        return Object(jsx_runtime.jsxs)('label', {
          'data-testid': 'radio',
          className: 'radio-label '.concat(className),
          children: [
            Object(jsx_runtime.jsx)(
              'input',
              Object.assign(
                {
                  'data-testid': 'input',
                  className: 'radio-input',
                  onChange: function onChange(event) {
                    return _onChange && _onChange(event);
                  },
                  type: 'radio',
                },
                rest,
              ),
            ),
            Object(jsx_runtime.jsx)('span', { className: 'radio-checkmark' }),
            Object(jsx_runtime.jsx)(dist.Text, { className: 'radio-label', children: label }),
          ],
        });
      };
      radio_Radio.displayName = 'Radio';
      try {
        (radio_Radio.displayName = 'Radio'),
          (radio_Radio.__docgenInfo = {
            description: '',
            displayName: 'Radio',
            props: {
              label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: '(event: ChangeEvent<HTMLInputElement>) => void' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              checked: {
                defaultValue: null,
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/forms/src/components/radio/index.tsx#Radio'] = {
              docgenInfo: radio_Radio.__docgenInfo,
              name: 'Radio',
              path: 'packages/forms/src/components/radio/index.tsx#Radio',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var StoriesDivider = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function Radio_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Radio_stories_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = Radio_stories_objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'Forms/Radio', component: radio_Radio, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'radio' }, 'Radio'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Radio'),
              ' as a core element. Has the function as building block for molecules or organisms.',
            ),
          ),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Radio', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                {
                  labels: ['Unchecked', 'Checked', 'Unchecked - disabled', 'Checked - disabled'],
                  mdxType: 'StoriesDivider',
                },
                Object(esm.mdx)(radio_Radio, {
                  label: 'One way',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Radio',
                }),
                Object(esm.mdx)(radio_Radio, {
                  checked: !0,
                  label: 'One way',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Radio',
                }),
                Object(esm.mdx)(radio_Radio, {
                  disabled: !0,
                  label: 'One way',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Radio',
                }),
                Object(esm.mdx)(radio_Radio, {
                  checked: !0,
                  disabled: !0,
                  label: 'One way',
                  onChange: function onChange() {
                    return console.log();
                  },
                  mdxType: 'Radio',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: radio_Radio, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Radio_stories_radio = function radio() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: ['Unchecked', 'Checked', 'Unchecked - disabled', 'Checked - disabled'] },
          Object(esm.mdx)(radio_Radio, {
            label: 'One way',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(esm.mdx)(radio_Radio, {
            checked: !0,
            label: 'One way',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(esm.mdx)(radio_Radio, {
            disabled: !0,
            label: 'One way',
            onChange: function onChange() {
              return console.log();
            },
          }),
          Object(esm.mdx)(radio_Radio, {
            checked: !0,
            disabled: !0,
            label: 'One way',
            onChange: function onChange() {
              return console.log();
            },
          }),
        );
      };
      (Radio_stories_radio.displayName = 'radio'),
        (Radio_stories_radio.storyName = 'Radio'),
        (Radio_stories_radio.parameters = {
          storySource: {
            source:
              '<StoriesDivider labels={[\'Unchecked\', \'Checked\', \'Unchecked - disabled\', \'Checked - disabled\']}>\n      <Radio label="One way" onChange={() => console.log()} />\n      <Radio checked label="One way" onChange={() => console.log()} />\n      <Radio disabled label="One way" onChange={() => console.log()} />\n      <Radio checked disabled label="One way" onChange={() => console.log()} />\n    </StoriesDivider>',
          },
        });
      var componentMeta = { title: 'Forms/Radio', component: radio_Radio, includeStories: ['radio'] },
        mdxStoryNameToKey = { Radio: 'radio' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    1150: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'modal', function () {
          return Modal_stories_modal;
        });
      __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var react = __webpack_require__(0),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(4),
        jsx_runtime =
          (__webpack_require__(16),
          __webpack_require__(20),
          __webpack_require__(114),
          __webpack_require__(28),
          __webpack_require__(53),
          __webpack_require__(138),
          __webpack_require__(2)),
        dist = __webpack_require__(37);
      __webpack_require__(1135);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var modal_Modal = function Modal(_ref) {
        var closeIcon = _ref.closeIcon,
          title = _ref.title,
          children = _ref.children,
          _onClick = _ref.onClick,
          _ref$open = _ref.open,
          open = void 0 !== _ref$open && _ref$open,
          overlayElement = _ref.overlayElement,
          className = _ref.className,
          modalRef = Object(react.useRef)(null),
          contentRef = Object(react.useRef)(null),
          headerRef = Object(react.useRef)(null),
          _useWindowSize = (function useWindowSize() {
            var _useState2 = _slicedToArray(Object(react.useState)([0, 0]), 2),
              size = _useState2[0],
              setSize = _useState2[1];
            return (
              Object(react.useLayoutEffect)(function () {
                function updateSize() {
                  setSize([window.innerWidth, window.innerHeight]);
                }
                return (
                  window.addEventListener('resize', updateSize),
                  updateSize(),
                  function () {
                    return window.removeEventListener('resize', updateSize);
                  }
                );
              }, []),
              size
            );
          })(),
          _useWindowSize2 = _slicedToArray(_useWindowSize, 2),
          height = (_useWindowSize2[0], _useWindowSize2[1]);
        return (
          Object(react.useEffect)(function () {
            var _modalRef$current;
            return null == modalRef || null === (_modalRef$current = modalRef.current) || void 0 === _modalRef$current
              ? void 0
              : _modalRef$current.classList.add('hide');
          }, []),
          Object(react.useEffect)(
            function () {
              var _contentRef$current,
                _headerRef$current,
                _modalRef$current2,
                style = ((document && document.documentElement) || {}).style,
                _ref3$height = (
                  (null == contentRef ||
                  null === (_contentRef$current = contentRef.current) ||
                  void 0 === _contentRef$current
                    ? void 0
                    : _contentRef$current.getBoundingClientRect()) || {}
                ).height,
                contentHeight = void 0 === _ref3$height ? 3e3 : _ref3$height,
                _ref4$height = (
                  (null == headerRef ||
                  null === (_headerRef$current = headerRef.current) ||
                  void 0 === _headerRef$current
                    ? void 0
                    : _headerRef$current.getBoundingClientRect()) || {}
                ).height,
                bothHeight = contentHeight + (void 0 === _ref4$height ? 3e3 : _ref4$height),
                maxHeight = 0.95 * height,
                modalHeight = bothHeight > maxHeight ? maxHeight : bothHeight;
              if (
                (style &&
                  (style.setProperty('--modal-max-height', ''.concat(maxHeight, 'px')),
                  style.setProperty('--modal-height', ''.concat(modalHeight, 'px')),
                  style.setProperty('--modal-overlay-height', ''.concat(height - modalHeight + 40, 'px')),
                  style.setProperty('--modal-content-overflow', modalHeight >= maxHeight ? 'auto' : 'unset')),
                open)
              )
                null == modalRef ||
                  null === (_modalRef$current2 = modalRef.current) ||
                  void 0 === _modalRef$current2 ||
                  _modalRef$current2.classList.remove('hide'),
                  document && document.body && (document.body.style.overflow = 'hidden');
              else if (!open) {
                document && document.body && (document.body.style.overflow = 'auto');
                var speed = style.getPropertyValue('--modal-transition-speed') || '2000',
                  s = 1.5 * Number(speed.replace(/\D/g, ''));
                setTimeout(function () {
                  var _modalRef$current3;
                  return null == modalRef ||
                    null === (_modalRef$current3 = modalRef.current) ||
                    void 0 === _modalRef$current3
                    ? void 0
                    : _modalRef$current3.classList.add('hide');
                }, s);
              }
            },
            [open, children, height],
          ),
          Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)('div', {
                'data-testid': 'modal-overlay',
                className: 'overlay '.concat(open ? 'open' : 'close'),
                children: overlayElement,
              }),
              Object(jsx_runtime.jsxs)('div', {
                'data-testid': 'modal',
                ref: modalRef,
                className: 'modal '.concat(open ? 'open' : 'close', ' ').concat(className),
                children: [
                  Object(jsx_runtime.jsxs)('div', {
                    ref: headerRef,
                    className: 'modal-header',
                    children: [
                      title,
                      Object(jsx_runtime.jsx)(dist.Button, {
                        label: '',
                        leftIcon: closeIcon,
                        buttonType: 'icon',
                        onClick: function onClick() {
                          _onClick(!open);
                        },
                      }),
                    ],
                  }),
                  Object(jsx_runtime.jsx)('div', {
                    'data-testid': 'modal-content',
                    ref: contentRef,
                    className: 'modal-content',
                    children: children,
                  }),
                ],
              }),
            ],
          })
        );
      };
      try {
        (modal_Modal.displayName = 'Modal'),
          (modal_Modal.__docgenInfo = {
            description: '',
            displayName: 'Modal',
            props: {
              closeIcon: {
                defaultValue: null,
                description: '',
                name: 'closeIcon',
                required: !0,
                type: { name: 'IIconProps' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '(open: boolean) => void' },
              },
              open: {
                defaultValue: { value: !1 },
                description: '',
                name: 'open',
                required: !1,
                type: { name: 'boolean' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              overlayElement: {
                defaultValue: null,
                description: '',
                name: 'overlayElement',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/system/src/components/modal/index.tsx#Modal'] = {
              docgenInfo: modal_Modal.__docgenInfo,
              name: 'Modal',
              path: 'packages/system/src/components/modal/index.tsx#Modal',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var StoriesDivider = __webpack_require__(24);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          Object(esm.mdx)(blocks.Meta, { title: 'System/Modal', component: modal_Modal, mdxType: 'Meta' }),
          Object(esm.mdx)('h1', { id: 'atoms' }, 'Atoms'),
          Object(esm.mdx)('h2', { id: 'modal' }, 'Modal'),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              { parentName: 'blockquote' },
              Object(esm.mdx)('inlineCode', { parentName: 'p' }, 'Modal'),
              ' as a core element. Has the function as container for molecules or organisms.',
            ),
          ),
          Object(esm.mdx)('h1', { id: 'preview' }, 'Preview'),
          Object(esm.mdx)(
            blocks.Preview,
            { mdxType: 'Preview' },
            Object(esm.mdx)(
              blocks.Story,
              { name: 'Modal', mdxType: 'Story' },
              Object(esm.mdx)(
                StoriesDivider.a,
                { labels: ['Modal'], mdxType: 'StoriesDivider' },
                Object(esm.mdx)(
                  modal_Modal,
                  {
                    onClick: function onClick() {
                      return console.log('clicked');
                    },
                    open: !1,
                    mdxType: 'Modal',
                  },
                  Object(esm.mdx)('div', null, 'Manipulated'),
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', { id: 'props' }, 'Props'),
          Object(esm.mdx)(blocks.Props, { of: modal_Modal, mdxType: 'Props' }),
        );
      }
      (MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0);
      var Modal_stories_modal = function modal() {
        return Object(esm.mdx)(
          StoriesDivider.a,
          { labels: ['Modal'] },
          Object(esm.mdx)(
            modal_Modal,
            {
              onClick: function onClick() {
                return console.log('clicked');
              },
              open: !1,
            },
            Object(esm.mdx)('div', null, 'Manipulated'),
          ),
        );
      };
      (Modal_stories_modal.displayName = 'modal'),
        (Modal_stories_modal.storyName = 'Modal'),
        (Modal_stories_modal.parameters = {
          storySource: {
            source:
              "<StoriesDivider labels={['Modal']}>\n      <Modal onClick={() => console.log('clicked')} open={false}>\n        <div>Manipulated</div>\n      </Modal>\n    </StoriesDivider>",
          },
        });
      var componentMeta = { title: 'System/Modal', component: modal_Modal, includeStories: ['modal'] },
        mdxStoryNameToKey = { Modal: 'modal' };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
          page: function page() {
            return Object(esm.mdx)(
              blocks.AddContext,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentMeta: componentMeta },
              Object(esm.mdx)(MDXContent, null),
            );
          },
        }));
      __webpack_exports__.default = componentMeta;
    },
    116: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return SettingButton;
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        _index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_require__(0), __webpack_require__(51)),
        _obrigadosenior_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(173),
        SettingButton = function SettingButton(_ref) {
          var settingTitle = _ref.settingTitle,
            options = _ref.options,
            open = _ref.open,
            setOpen = _ref.setOpen,
            settingIcon = _ref.settingIcon,
            closeIcon = _ref.closeIcon,
            className = _ref.className,
            modalTitle = _ref.modalTitle,
            modal = Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _obrigadosenior_system__WEBPACK_IMPORTED_MODULE_3__.Modal,
              {
                title: modalTitle,
                closeIcon: closeIcon,
                onClick: function onClick() {
                  return setOpen(!1);
                },
                open: open,
                children: options,
              },
            );
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.a, {
                  'data-testid': 'setting-button',
                  label: settingTitle,
                  buttonType: 'secondary',
                  size: 'xl',
                  leftIcon: settingIcon,
                  onClick: function onClick() {
                    return setOpen(!open);
                  },
                  className: className,
                }),
                modal,
              ],
            },
          );
        };
      try {
        (SettingButton.displayName = 'SettingButton'),
          (SettingButton.__docgenInfo = {
            description: '',
            displayName: 'SettingButton',
            props: {
              settingTitle: {
                defaultValue: null,
                description: '',
                name: 'settingTitle',
                required: !0,
                type: { name: 'string' },
              },
              settingIcon: {
                defaultValue: null,
                description: '',
                name: 'settingIcon',
                required: !0,
                type: { name: 'IIconProps | undefined' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              open: { defaultValue: null, description: '', name: 'open', required: !0, type: { name: 'boolean' } },
              setOpen: {
                defaultValue: null,
                description: '',
                name: 'setOpen',
                required: !0,
                type: { name: '(open: boolean) => void' },
              },
              closeIcon: {
                defaultValue: null,
                description: '',
                name: 'closeIcon',
                required: !0,
                type: { name: 'IIconProps' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              modalTitle: {
                defaultValue: null,
                description: '',
                name: 'modalTitle',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/components/button/setting/index.tsx#SettingButton'] = {
              docgenInfo: SettingButton.__docgenInfo,
              name: 'SettingButton',
              path: 'packages/core/src/components/button/setting/index.tsx#SettingButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    117: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(480);
      __webpack_require__.o(_calendar__WEBPACK_IMPORTED_MODULE_0__, 'AddTheme') &&
        __webpack_require__.d(__webpack_exports__, 'AddTheme', function () {
          return _calendar__WEBPACK_IMPORTED_MODULE_0__.AddTheme;
        }),
        __webpack_require__.o(_calendar__WEBPACK_IMPORTED_MODULE_0__, 'calendarTheme') &&
          __webpack_require__.d(__webpack_exports__, 'calendarTheme', function () {
            return _calendar__WEBPACK_IMPORTED_MODULE_0__.calendarTheme;
          }),
        __webpack_require__.o(_calendar__WEBPACK_IMPORTED_MODULE_0__, 'coreTheme') &&
          __webpack_require__.d(__webpack_exports__, 'coreTheme', function () {
            return _calendar__WEBPACK_IMPORTED_MODULE_0__.coreTheme;
          }),
        __webpack_require__.o(_calendar__WEBPACK_IMPORTED_MODULE_0__, 'formsTheme') &&
          __webpack_require__.d(__webpack_exports__, 'formsTheme', function () {
            return _calendar__WEBPACK_IMPORTED_MODULE_0__.formsTheme;
          }),
        __webpack_require__.o(_calendar__WEBPACK_IMPORTED_MODULE_0__, 'metrics') &&
          __webpack_require__.d(__webpack_exports__, 'metrics', function () {
            return _calendar__WEBPACK_IMPORTED_MODULE_0__.metrics;
          }),
        __webpack_require__.o(_calendar__WEBPACK_IMPORTED_MODULE_0__, 'selectTheme') &&
          __webpack_require__.d(__webpack_exports__, 'selectTheme', function () {
            return _calendar__WEBPACK_IMPORTED_MODULE_0__.selectTheme;
          }),
        __webpack_require__.o(_calendar__WEBPACK_IMPORTED_MODULE_0__, 'systemTheme') &&
          __webpack_require__.d(__webpack_exports__, 'systemTheme', function () {
            return _calendar__WEBPACK_IMPORTED_MODULE_0__.systemTheme;
          });
      var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
      __webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_1__, 'AddTheme') &&
        __webpack_require__.d(__webpack_exports__, 'AddTheme', function () {
          return _core__WEBPACK_IMPORTED_MODULE_1__.AddTheme;
        }),
        __webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_1__, 'calendarTheme') &&
          __webpack_require__.d(__webpack_exports__, 'calendarTheme', function () {
            return _core__WEBPACK_IMPORTED_MODULE_1__.calendarTheme;
          }),
        __webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_1__, 'coreTheme') &&
          __webpack_require__.d(__webpack_exports__, 'coreTheme', function () {
            return _core__WEBPACK_IMPORTED_MODULE_1__.coreTheme;
          }),
        __webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_1__, 'formsTheme') &&
          __webpack_require__.d(__webpack_exports__, 'formsTheme', function () {
            return _core__WEBPACK_IMPORTED_MODULE_1__.formsTheme;
          }),
        __webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_1__, 'metrics') &&
          __webpack_require__.d(__webpack_exports__, 'metrics', function () {
            return _core__WEBPACK_IMPORTED_MODULE_1__.metrics;
          }),
        __webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_1__, 'selectTheme') &&
          __webpack_require__.d(__webpack_exports__, 'selectTheme', function () {
            return _core__WEBPACK_IMPORTED_MODULE_1__.selectTheme;
          }),
        __webpack_require__.o(_core__WEBPACK_IMPORTED_MODULE_1__, 'systemTheme') &&
          __webpack_require__.d(__webpack_exports__, 'systemTheme', function () {
            return _core__WEBPACK_IMPORTED_MODULE_1__.systemTheme;
          });
      var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(482);
      __webpack_require__.o(_forms__WEBPACK_IMPORTED_MODULE_2__, 'AddTheme') &&
        __webpack_require__.d(__webpack_exports__, 'AddTheme', function () {
          return _forms__WEBPACK_IMPORTED_MODULE_2__.AddTheme;
        }),
        __webpack_require__.o(_forms__WEBPACK_IMPORTED_MODULE_2__, 'calendarTheme') &&
          __webpack_require__.d(__webpack_exports__, 'calendarTheme', function () {
            return _forms__WEBPACK_IMPORTED_MODULE_2__.calendarTheme;
          }),
        __webpack_require__.o(_forms__WEBPACK_IMPORTED_MODULE_2__, 'coreTheme') &&
          __webpack_require__.d(__webpack_exports__, 'coreTheme', function () {
            return _forms__WEBPACK_IMPORTED_MODULE_2__.coreTheme;
          }),
        __webpack_require__.o(_forms__WEBPACK_IMPORTED_MODULE_2__, 'formsTheme') &&
          __webpack_require__.d(__webpack_exports__, 'formsTheme', function () {
            return _forms__WEBPACK_IMPORTED_MODULE_2__.formsTheme;
          }),
        __webpack_require__.o(_forms__WEBPACK_IMPORTED_MODULE_2__, 'metrics') &&
          __webpack_require__.d(__webpack_exports__, 'metrics', function () {
            return _forms__WEBPACK_IMPORTED_MODULE_2__.metrics;
          }),
        __webpack_require__.o(_forms__WEBPACK_IMPORTED_MODULE_2__, 'selectTheme') &&
          __webpack_require__.d(__webpack_exports__, 'selectTheme', function () {
            return _forms__WEBPACK_IMPORTED_MODULE_2__.selectTheme;
          }),
        __webpack_require__.o(_forms__WEBPACK_IMPORTED_MODULE_2__, 'systemTheme') &&
          __webpack_require__.d(__webpack_exports__, 'systemTheme', function () {
            return _forms__WEBPACK_IMPORTED_MODULE_2__.systemTheme;
          });
      var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
      __webpack_require__.o(_icons__WEBPACK_IMPORTED_MODULE_3__, 'AddTheme') &&
        __webpack_require__.d(__webpack_exports__, 'AddTheme', function () {
          return _icons__WEBPACK_IMPORTED_MODULE_3__.AddTheme;
        }),
        __webpack_require__.o(_icons__WEBPACK_IMPORTED_MODULE_3__, 'calendarTheme') &&
          __webpack_require__.d(__webpack_exports__, 'calendarTheme', function () {
            return _icons__WEBPACK_IMPORTED_MODULE_3__.calendarTheme;
          }),
        __webpack_require__.o(_icons__WEBPACK_IMPORTED_MODULE_3__, 'coreTheme') &&
          __webpack_require__.d(__webpack_exports__, 'coreTheme', function () {
            return _icons__WEBPACK_IMPORTED_MODULE_3__.coreTheme;
          }),
        __webpack_require__.o(_icons__WEBPACK_IMPORTED_MODULE_3__, 'formsTheme') &&
          __webpack_require__.d(__webpack_exports__, 'formsTheme', function () {
            return _icons__WEBPACK_IMPORTED_MODULE_3__.formsTheme;
          }),
        __webpack_require__.o(_icons__WEBPACK_IMPORTED_MODULE_3__, 'metrics') &&
          __webpack_require__.d(__webpack_exports__, 'metrics', function () {
            return _icons__WEBPACK_IMPORTED_MODULE_3__.metrics;
          }),
        __webpack_require__.o(_icons__WEBPACK_IMPORTED_MODULE_3__, 'selectTheme') &&
          __webpack_require__.d(__webpack_exports__, 'selectTheme', function () {
            return _icons__WEBPACK_IMPORTED_MODULE_3__.selectTheme;
          }),
        __webpack_require__.o(_icons__WEBPACK_IMPORTED_MODULE_3__, 'systemTheme') &&
          __webpack_require__.d(__webpack_exports__, 'systemTheme', function () {
            return _icons__WEBPACK_IMPORTED_MODULE_3__.systemTheme;
          });
      var _select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(484);
      __webpack_require__.o(_select__WEBPACK_IMPORTED_MODULE_4__, 'AddTheme') &&
        __webpack_require__.d(__webpack_exports__, 'AddTheme', function () {
          return _select__WEBPACK_IMPORTED_MODULE_4__.AddTheme;
        }),
        __webpack_require__.o(_select__WEBPACK_IMPORTED_MODULE_4__, 'calendarTheme') &&
          __webpack_require__.d(__webpack_exports__, 'calendarTheme', function () {
            return _select__WEBPACK_IMPORTED_MODULE_4__.calendarTheme;
          }),
        __webpack_require__.o(_select__WEBPACK_IMPORTED_MODULE_4__, 'coreTheme') &&
          __webpack_require__.d(__webpack_exports__, 'coreTheme', function () {
            return _select__WEBPACK_IMPORTED_MODULE_4__.coreTheme;
          }),
        __webpack_require__.o(_select__WEBPACK_IMPORTED_MODULE_4__, 'formsTheme') &&
          __webpack_require__.d(__webpack_exports__, 'formsTheme', function () {
            return _select__WEBPACK_IMPORTED_MODULE_4__.formsTheme;
          }),
        __webpack_require__.o(_select__WEBPACK_IMPORTED_MODULE_4__, 'metrics') &&
          __webpack_require__.d(__webpack_exports__, 'metrics', function () {
            return _select__WEBPACK_IMPORTED_MODULE_4__.metrics;
          }),
        __webpack_require__.o(_select__WEBPACK_IMPORTED_MODULE_4__, 'selectTheme') &&
          __webpack_require__.d(__webpack_exports__, 'selectTheme', function () {
            return _select__WEBPACK_IMPORTED_MODULE_4__.selectTheme;
          }),
        __webpack_require__.o(_select__WEBPACK_IMPORTED_MODULE_4__, 'systemTheme') &&
          __webpack_require__.d(__webpack_exports__, 'systemTheme', function () {
            return _select__WEBPACK_IMPORTED_MODULE_4__.systemTheme;
          });
      var _system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(173);
      __webpack_require__.o(_system__WEBPACK_IMPORTED_MODULE_5__, 'AddTheme') &&
        __webpack_require__.d(__webpack_exports__, 'AddTheme', function () {
          return _system__WEBPACK_IMPORTED_MODULE_5__.AddTheme;
        }),
        __webpack_require__.o(_system__WEBPACK_IMPORTED_MODULE_5__, 'calendarTheme') &&
          __webpack_require__.d(__webpack_exports__, 'calendarTheme', function () {
            return _system__WEBPACK_IMPORTED_MODULE_5__.calendarTheme;
          }),
        __webpack_require__.o(_system__WEBPACK_IMPORTED_MODULE_5__, 'coreTheme') &&
          __webpack_require__.d(__webpack_exports__, 'coreTheme', function () {
            return _system__WEBPACK_IMPORTED_MODULE_5__.coreTheme;
          }),
        __webpack_require__.o(_system__WEBPACK_IMPORTED_MODULE_5__, 'formsTheme') &&
          __webpack_require__.d(__webpack_exports__, 'formsTheme', function () {
            return _system__WEBPACK_IMPORTED_MODULE_5__.formsTheme;
          }),
        __webpack_require__.o(_system__WEBPACK_IMPORTED_MODULE_5__, 'metrics') &&
          __webpack_require__.d(__webpack_exports__, 'metrics', function () {
            return _system__WEBPACK_IMPORTED_MODULE_5__.metrics;
          }),
        __webpack_require__.o(_system__WEBPACK_IMPORTED_MODULE_5__, 'selectTheme') &&
          __webpack_require__.d(__webpack_exports__, 'selectTheme', function () {
            return _system__WEBPACK_IMPORTED_MODULE_5__.selectTheme;
          }),
        __webpack_require__.o(_system__WEBPACK_IMPORTED_MODULE_5__, 'systemTheme') &&
          __webpack_require__.d(__webpack_exports__, 'systemTheme', function () {
            return _system__WEBPACK_IMPORTED_MODULE_5__.systemTheme;
          });
      var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(127);
      __webpack_require__.o(_theme__WEBPACK_IMPORTED_MODULE_6__, 'AddTheme') &&
        __webpack_require__.d(__webpack_exports__, 'AddTheme', function () {
          return _theme__WEBPACK_IMPORTED_MODULE_6__.AddTheme;
        }),
        __webpack_require__.o(_theme__WEBPACK_IMPORTED_MODULE_6__, 'calendarTheme') &&
          __webpack_require__.d(__webpack_exports__, 'calendarTheme', function () {
            return _theme__WEBPACK_IMPORTED_MODULE_6__.calendarTheme;
          }),
        __webpack_require__.o(_theme__WEBPACK_IMPORTED_MODULE_6__, 'coreTheme') &&
          __webpack_require__.d(__webpack_exports__, 'coreTheme', function () {
            return _theme__WEBPACK_IMPORTED_MODULE_6__.coreTheme;
          }),
        __webpack_require__.o(_theme__WEBPACK_IMPORTED_MODULE_6__, 'formsTheme') &&
          __webpack_require__.d(__webpack_exports__, 'formsTheme', function () {
            return _theme__WEBPACK_IMPORTED_MODULE_6__.formsTheme;
          }),
        __webpack_require__.o(_theme__WEBPACK_IMPORTED_MODULE_6__, 'metrics') &&
          __webpack_require__.d(__webpack_exports__, 'metrics', function () {
            return _theme__WEBPACK_IMPORTED_MODULE_6__.metrics;
          }),
        __webpack_require__.o(_theme__WEBPACK_IMPORTED_MODULE_6__, 'selectTheme') &&
          __webpack_require__.d(__webpack_exports__, 'selectTheme', function () {
            return _theme__WEBPACK_IMPORTED_MODULE_6__.selectTheme;
          }),
        __webpack_require__.o(_theme__WEBPACK_IMPORTED_MODULE_6__, 'systemTheme') &&
          __webpack_require__.d(__webpack_exports__, 'systemTheme', function () {
            return _theme__WEBPACK_IMPORTED_MODULE_6__.systemTheme;
          });
    },
    127: function (module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(1094),
        __webpack_require__(1096),
        __webpack_require__(34),
        Object.defineProperty(exports, '__esModule', { value: !0 }),
        (exports.AddTheme = function (_ref) {
          var o = _ref.theme,
            e = (document.documentElement || {}).style,
            _ref3 = o || {},
            r = _ref3.metrics,
            t = _ref3.button,
            d = _ref3.text,
            s = _ref3.image,
            i = _ref3.input,
            l = _ref3.selectors,
            c = _ref3.datePicker,
            a = _ref3.dropdown,
            p = _ref3.tab,
            n = _ref3.price,
            b = _ref3.modal,
            _ref4 = l || {},
            y = _ref4.radio,
            P = _ref4.checkbox;
          r &&
            (function (_ref5) {
              var o = _ref5.metrics,
                e = _ref5.style;
              if (o && e) {
                var _r = o.sizes,
                  _t = o.width;
                _t && (e.setProperty('--metrics-min-width', _t.min), e.setProperty('--metrics-max-width', _t.max)),
                  _r &&
                    (e.setProperty('--system-size-none', _r.sizeNone),
                    e.setProperty('--system-size-xs', _r.sizeXs),
                    e.setProperty('--system-size-s', _r.sizeS),
                    e.setProperty('--system-size-m', _r.sizeM),
                    e.setProperty('--system-size-l', _r.sizeL),
                    e.setProperty('--system-size-xl', _r.sizeXl));
              }
            })({ metrics: r, style: e }),
            t &&
              (function (_ref6) {
                var o = _ref6.button,
                  e = _ref6.style;
                if (o && e) {
                  var _r2 = o.primary,
                    _t2 = o.flat,
                    _d = o.secondary,
                    _s = o.badge,
                    _i = o.icon;
                  _r2 &&
                    (e.setProperty('--button-primary-color', _r2.textColor),
                    e.setProperty('--button-primary-bg-color', _r2.backgroundColor),
                    e.setProperty('--button-primary-border-color', _r2.borderColor),
                    e.setProperty('--button-primary-border-radius', _r2.borderRadius),
                    e.setProperty('--button-primary-padding', _r2.padding),
                    e.setProperty('--button-primary-height', _r2.height)),
                    _t2 &&
                      (e.setProperty('--button-flat-color', _t2.textColor),
                      e.setProperty('--button-flat-bg-color', _t2.backgroundColor),
                      e.setProperty('--button-flat-border-color', _t2.borderColor),
                      e.setProperty('--button-flat-border-radius', _t2.borderRadius),
                      e.setProperty('--button-flat-padding', _t2.padding),
                      e.setProperty('--button-flat-height', _t2.height)),
                    _d &&
                      (e.setProperty('--button-secondary-color', _d.textColor),
                      e.setProperty('--button-secondary-bg-color', _d.backgroundColor),
                      e.setProperty('--button-secondary-border-color', _d.borderColor),
                      e.setProperty('--button-secondary-border-radius', _d.borderRadius),
                      e.setProperty('--button-secondary-padding', _d.padding),
                      e.setProperty('--button-secondary-height', _d.height)),
                    _s &&
                      (e.setProperty('--button-badge-color', _s.textColor),
                      e.setProperty('--button-badge-bg-color', _s.backgroundColor),
                      e.setProperty('--button-badge-border-color', _s.borderColor),
                      e.setProperty('--button-badge-border-radius', _s.borderRadius),
                      e.setProperty('--button-badge-padding', _s.padding),
                      e.setProperty('--button-badge-height', _s.height)),
                    _i &&
                      (e.setProperty('--button-icon-color', _i.textColor),
                      e.setProperty('--button-icon-bg-color', _i.backgroundColor),
                      e.setProperty('--button-icon-border-color', _i.borderColor),
                      e.setProperty('--button-icon-border-radius', _i.borderRadius),
                      e.setProperty('--button-icon-padding', _i.padding),
                      e.setProperty('--button-icon-height', _i.height));
                }
              })({ button: t, style: e }),
            i &&
              (function (_ref7) {
                var o = _ref7.input,
                  e = _ref7.style;
                o &&
                  e &&
                  (e.setProperty('--input-bg-color', o.backgroundColor),
                  e.setProperty('--input-border-color', o.borderColor),
                  e.setProperty('--input-text-color', o.textColor),
                  e.setProperty('--input-border-radius', o.borderRadius),
                  e.setProperty('--input-no-icon-padding', o.padding.noIcon),
                  e.setProperty('--input-with-icon-padding', o.padding.withIcon),
                  e.setProperty('--input-title-color', o.titleColor),
                  e.setProperty('--input-placeholder-color', o.placeholderColor),
                  e.setProperty('--input-disabled-title-color', o.disabledTitleColor),
                  e.setProperty('--input-disabled-bg-color', o.disabledBackgroundColor),
                  e.setProperty('--input-disabled-border-color', o.disabledBorderColor),
                  e.setProperty('--input-disabled-text-color', o.disabledTextColor));
              })({ input: i, style: e }),
            P &&
              (function (_ref8) {
                var o = _ref8.checkbox,
                  e = _ref8.style;
                o &&
                  e &&
                  (e.setProperty('--checkbox-bg-color', o.backgroundColor),
                  e.setProperty('--checkbox-border-color', o.borderColor),
                  e.setProperty('--checkbox-border-radius', o.borderRadius),
                  e.setProperty('--checkbox-checkmark-color', o.checkmarkColor),
                  e.setProperty('--checkbox-checkmark-disabled-bg-color', o.disabledBackgroundColor),
                  e.setProperty('--checkbox-checkmark-disabled-border-color', o.disabledBorderColor),
                  e.setProperty('--checkbox-disabled-label-color', o.disabledLabelColor),
                  e.setProperty('--checkbox-hover-color', o.hoverColor),
                  e.setProperty('--checkbox-label-color', o.labelColor));
              })({ checkbox: P, style: e }),
            y &&
              (function (_ref9) {
                var o = _ref9.radio,
                  e = _ref9.style;
                o &&
                  e &&
                  (e.setProperty('--radio-bg-color', o.backgroundColor),
                  e.setProperty('--radio-border-color', o.borderColor),
                  e.setProperty('--radio-border-radius', o.borderRadius),
                  e.setProperty('--radio-checkmark-color', o.checkmarkColor),
                  e.setProperty('--radio-checkmark-disabled-bg-color', o.disabledBackgroundColor),
                  e.setProperty('--radio-checkmark-disabled-border-color', o.disabledBorderColor),
                  e.setProperty('--radio-disabled-label-color', o.disabledLabelColor),
                  e.setProperty('--radio-hover-color', o.hoverColor),
                  e.setProperty('--radio-label-color', o.labelColor));
              })({ radio: y, style: e }),
            c &&
              (function (_ref10) {
                var o = _ref10.datePicker,
                  e = _ref10.style;
                if (o && e) {
                  e.setProperty('--date-picker-border-radius', o.borderRadius),
                    e.setProperty('--date-picker-border-color', o.borderColor);
                  var _r3 = o.day,
                    _t3 = o.week,
                    _d2 = o.month;
                  if (_r3) {
                    var _ref11 = _r3 || {},
                      _o = _ref11.borderRadius,
                      _t4 = _ref11.gap,
                      _d3 = _ref11.activeMonth,
                      _s2 = _ref11.active,
                      _i2 = _ref11.disabled,
                      _l = _ref11.selected,
                      _c = _ref11.selectedRange,
                      _a = _ref11.monthBreak,
                      _p = _ref11.width;
                    e.setProperty('--date-picker-day-border-radius', _o),
                      e.setProperty('--date-picker-day-width', _p),
                      e.setProperty('--date-picker-month-grid-gap', _t4),
                      _i2 &&
                        (e.setProperty('--date-picker-day-disabled-border-color', _i2.borderColor),
                        e.setProperty('--date-picker-day-disabled-bg-color', _i2.backgroundColor),
                        e.setProperty('--date-picker-day-disabled-text-color', _i2.textColor)),
                      _s2 &&
                        (e.setProperty('--date-picker-day-active-border-color', _s2.borderColor),
                        e.setProperty('--date-picker-day-active-bg-color', _s2.backgroundColor),
                        e.setProperty('--date-picker-day-active-text-color', _s2.textColor)),
                      _d3 &&
                        (e.setProperty('--date-picker-day-active-month-border-color', _d3.borderColor),
                        e.setProperty('--date-picker-day-active-month-bg-color', _d3.backgroundColor),
                        e.setProperty('--date-picker-day-active-month-text-color', _d3.textColor)),
                      _l &&
                        (e.setProperty('--date-picker-day-selected-border-color', _l.borderColor),
                        e.setProperty('--date-picker-day-selected-bg-color', _l.backgroundColor),
                        e.setProperty('--date-picker-day-selected-text-color', _l.textColor)),
                      _c &&
                        (e.setProperty('--date-picker-day-selected-range-border-color', _c.borderColor),
                        e.setProperty('--date-picker-day-selected-range-bg-color', _c.backgroundColor),
                        e.setProperty('--date-picker-day-selected-range-text-color', _c.textColor)),
                      _a &&
                        (e.setProperty('--date-picker-day-month-break-border-color', _a.borderColor),
                        e.setProperty('--date-picker-day-month-break-bg-color', _a.backgroundColor),
                        e.setProperty('--date-picker-day-month-break-text-color', _a.textColor));
                  }
                  if (_t3) {
                    var _ref12 = _t3 || {},
                      _o2 = _ref12.textColor,
                      _r4 = _ref12.textSize,
                      _d4 = _ref12.shadow;
                    e.setProperty('--date-picker-week-text-size', _r4),
                      e.setProperty('--date-picker-week-text-color', _o2),
                      e.setProperty('--date-picker-week-shadow', _d4);
                  }
                  if (_d2) {
                    var _ref13 = _d2 || {},
                      _o3 = _ref13.button,
                      _r5 = _ref13.textColor,
                      _t5 = _ref13.textSize,
                      _s3 = _ref13.yearSize;
                    if (
                      (e.setProperty('--date-picker-text-color', _r5),
                      e.setProperty('--date-picker-month-text-size', _t5),
                      e.setProperty('--date-picker-year-text-size', _s3),
                      _o3)
                    ) {
                      var _ref14 = _o3 || {},
                        _r6 = _ref14.borderColor,
                        _t6 = _ref14.backgroundColor,
                        _d5 = _ref14.disabledBackgroundColor,
                        _s4 = _ref14.disabledIconColor,
                        _i3 = _ref14.iconColor,
                        _l2 = _ref14.iconSize;
                      e.setProperty('--date-picker-change-month-button-border-color', _r6),
                        e.setProperty('--date-picker-change-month-button-bg-color', _t6),
                        e.setProperty('--date-picker-change-month-button-icon-color', _i3),
                        e.setProperty('--date-picker-change-month-button-icon-size', _l2),
                        e.setProperty('--date-picker-change-month-button-disabled-icon-color', _s4),
                        e.setProperty('--date-picker-change-month-button-disabled-bg-color', _d5);
                    }
                  }
                }
              })({ datePicker: c, style: e }),
            a &&
              (function (_ref15) {
                var o = _ref15.dropdown,
                  e = _ref15.style;
                if (o && e) {
                  var _r7 = o.content;
                  if (_r7) {
                    e.setProperty('--dropdown-border-radius', _r7.borderRadius),
                      e.setProperty('--dropdown-content-height', _r7.height),
                      e.setProperty('--dropdown-content-transition-speed', _r7.transitionSpeed),
                      e.setProperty('--dropdown-content-item-border-radius', _r7.borderRadius),
                      e.setProperty('--dropdown-content-bg-color', _r7.backgroundColor);
                    var _o4 = _r7.item;
                    if (_o4) {
                      e.setProperty('--dropdown-content-item-height', _o4.height);
                      var _r8 = _o4.neutral,
                        _t7 = _o4.active,
                        _d6 = _o4.disabled;
                      _r8 &&
                        (e.setProperty('--dropdown-content-item-bg-color', _r8.backgroundColor),
                        e.setProperty('--dropdown-content-item-border-color', _r8.borderColor),
                        e.setProperty('--dropdown-content-item-text-color', _r8.textColor),
                        e.setProperty('--dropdown-content-item-icon-color', _r8.iconColor)),
                        _t7 &&
                          (e.setProperty('--dropdown-content-item-active-bg-color', _t7.backgroundColor),
                          e.setProperty('--dropdown-content-item-active-border-color', _t7.borderColor),
                          e.setProperty('--dropdown-content-item-active-text-color', _t7.textColor),
                          e.setProperty('--dropdown-content-item-active-icon-color', _t7.iconColor)),
                        _d6 &&
                          (e.setProperty('--dropdown-content-item-disabled-bg-color', _d6.backgroundColor),
                          e.setProperty('--dropdown-content-item-disabled-border-color', _d6.borderColor),
                          e.setProperty('--dropdown-content-item-disabled-text-color', _d6.textColor),
                          e.setProperty('--dropdown-content-item-disabled-icon-color', _d6.iconColor));
                    }
                  }
                }
              })({ dropdown: a, style: e }),
            d &&
              (function (_ref16) {
                var o = _ref16.text,
                  e = _ref16.style;
                o &&
                  e &&
                  (e.setProperty('--text-disabled-color', o.disabledColor),
                  e.setProperty('--text-primary-color', o.primaryColor),
                  e.setProperty('--text-secondary-color', o.secondaryColor),
                  e.setProperty('--text-size-xs', o.fontSizeXs),
                  e.setProperty('--text-size-s', o.fontSizeS),
                  e.setProperty('--text-size-m', o.fontSizeM),
                  e.setProperty('--text-size-l', o.fontSizeL),
                  e.setProperty('--text-size-xl', o.fontSizeXl),
                  e.setProperty('--text-font-weight-light', o.fontWeightLight),
                  e.setProperty('--text-font-weight-regular', o.fontWeightRegular),
                  e.setProperty('--text-font-weight-medium', o.fontWeightMedium),
                  e.setProperty('--text-font-weight-bold', o.fontWeightBold));
              })({ text: d, style: e }),
            p &&
              (function (_ref17) {
                var o = _ref17.tab,
                  e = _ref17.style;
                o &&
                  e &&
                  (e.setProperty('--tab-disabled-color', o.disabledColor),
                  e.setProperty('--tab-color', o.color),
                  e.setProperty('--tab-active-color', o.activeColor),
                  e.setProperty('--tab-border-color', o.borderColor),
                  e.setProperty('--tab-gap', o.gap),
                  e.setProperty('--tab-border-width', o.borderWidth));
              })({ tab: p, style: e }),
            s &&
              (function (_ref18) {
                var o = _ref18.image,
                  e = _ref18.style;
                o && e && e.setProperty('--image-border-radius', o.borderRadius);
              })({ image: s, style: e }),
            n &&
              (function (_ref19) {
                var o = _ref19.price,
                  e = _ref19.style;
                o && e && e.setProperty('--price-padding', o.padding);
              })({ price: n, style: e }),
            b &&
              (function (_ref20) {
                var o = _ref20.modal,
                  e = _ref20.style;
                o &&
                  e &&
                  (e.setProperty('--modal-color', o.color),
                  e.setProperty('--modal-bg-color', o.backgroundColor),
                  e.setProperty('--modal-border-color', o.borderColor),
                  e.setProperty('--modal-border-radius', o.borderRadius),
                  e.setProperty('--modal-padding', o.padding),
                  e.setProperty('--modal-shadow', o.shadow),
                  e.setProperty('--modal-transition-speed', o.transitionSpeed),
                  e.setProperty('--modal-overlay-color', o.overlayColor));
              })({ modal: b, style: e });
        });
    },
    173: function (module, exports, __webpack_require__) {
      'use strict';
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      __webpack_require__(7),
        __webpack_require__(13),
        __webpack_require__(25),
        __webpack_require__(16),
        __webpack_require__(21),
        __webpack_require__(114),
        __webpack_require__(34),
        __webpack_require__(12),
        __webpack_require__(28),
        __webpack_require__(18),
        __webpack_require__(53),
        __webpack_require__(139),
        __webpack_require__(22),
        __webpack_require__(138),
        Object.defineProperty(exports, '__esModule', { value: !0 });
      var e = __webpack_require__(0),
        n = __webpack_require__(37),
        o = __webpack_require__(127);
      var a = (function t(e) {
        return e && 'object' == _typeof(e) && 'default' in e ? e : { default: e };
      })(e);
      !(function (e, n) {
        void 0 === n && (n = {});
        var o = n.insertAt;
        if ('undefined' != typeof document) {
          var t = document.head || document.getElementsByTagName('head')[0],
            a = document.createElement('style');
          (a.type = 'text/css'),
            'top' === o && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a),
            a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(document.createTextNode(e));
        }
      })(
        '.modal {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: var(--modal-bg-color);\n  border-top-left-radius: var(--modal-border-radius);\n  border-top-right-radius: var(--modal-border-radius);\n  width: 100%;\n  z-index: 6;\n  max-height: var(--modal-max-height);\n}\n.modal.open {\n  bottom: 0;\n  animation-name: fadeIn;\n  animation-duration: var(--modal-transition-speed);\n  box-shadow: 0px -15px 15px -5px var(--modal-shadow);\n  transition: all var(--modal-transition-speed);\n  height: var(--modal-height);\n}\n\n.modal.close {\n  bottom: calc(var(--modal-height) * -1);\n  animation-name: fadeOut;\n  animation-duration: var(--modal-transition-speed);\n  transition: all var(--modal-transition-speed);\n}\n\n.modal.close.hide {\n  display: none;\n}\n\n.modal .modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  padding: var(--modal-padding);\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--modal-border-color);\n}\n\n.modal .modal-content {\n  width: 100%;\n  padding: var(--modal-padding);\n  box-sizing: border-box;\n  overflow: var(--modal-content-overflow);\n}\n\n@keyframes fadeIn {\n  from {\n    bottom: calc(var(--modal-height) * -1);\n  }\n  to {\n    bottom: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    bottom: 0;\n  }\n  to {\n    bottom: calc(var(--modal-height) * -1);\n  }\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 5;\n  background-color: var(--modal-overlay-color);\n}\n\n.overlay.open {\n  transition: all var(--modal-transition-speed);\n  height: var(--modal-overlay-height);\n}\n\n.overlay.close {\n  transition: all var(--modal-transition-speed);\n  height: 0;\n}\n',
      );
      var d = { none: 0, xsmall: 10, small: 20, medium: 30, large: 40, xlarge: 60 },
        l = d.xsmall,
        i = d.small,
        s = d.medium,
        m = d.large,
        c = d.xlarge,
        u = {
          width: { min: '300px', max: '1170px' },
          sizes: {
            sizeNone: ''.concat(d.none, 'px'),
            sizeXs: ''.concat(l, 'px'),
            sizeS: ''.concat(i, 'px'),
            sizeM: ''.concat(s, 'px'),
            sizeL: ''.concat(m, 'px'),
            sizeXl: ''.concat(c, 'px'),
          },
        },
        _ref =
          {
            modernRed: '#EA143D',
            modernBlue: '#2378CD',
            tjara: '#000000',
            moln: '#ffffff',
            silver: '#949494',
            silverLight: '#F4F4F4',
            silverDark: '#6b6b6b',
            shadow: 'rgba(0, 0, 0, 0.2)',
            overlay: 'rgba(0, 0, 0, 0.75)',
            sand: '#faf6eb',
            snackskal: '#f7d7d1',
            sjobod: '#b00f2e',
            tang: '#751422',
            himmel: '#c0d5ed',
            hav: '#1a5a9a',
            mussla: '#123d66',
            modernGreen: '#74b346',
            extra: '#28d2b9',
          } || {},
        v = _ref.tjara,
        f = _ref.silver,
        _ref2 = d || {},
        g = _ref2.small,
        b = {
          metrics: u,
          modal: {
            backgroundColor: _ref.moln,
            borderColor: f,
            borderRadius: ''.concat(_ref2.xsmall, 'px'),
            color: v,
            padding: ''.concat(g, 'px'),
            shadow: f,
            transitionSpeed: '500ms',
            overlayColor: 'rgba(0,0,0,0.25)',
          },
        };
      o.AddTheme && o.AddTheme({ theme: b }),
        (exports.Modal = function (_ref3) {
          var o = _ref3.closeIcon,
            t = _ref3.title,
            d = _ref3.children,
            r = _ref3.onClick,
            _ref3$open = _ref3.open,
            l = void 0 !== _ref3$open && _ref3$open,
            i = _ref3.overlayElement,
            s = _ref3.className,
            m = e.useRef(null),
            c = e.useRef(null),
            u = e.useRef(null),
            _ref4 = (function () {
              var _e$useState2 = _slicedToArray(e.useState([0, 0]), 2),
                n = _e$useState2[0],
                o = _e$useState2[1];
              return (
                e.useLayoutEffect(function () {
                  function e() {
                    o([window.innerWidth, window.innerHeight]);
                  }
                  return (
                    window.addEventListener('resize', e),
                    e(),
                    function () {
                      return window.removeEventListener('resize', e);
                    }
                  );
                }, []),
                n
              );
            })(),
            _ref5 = _slicedToArray(_ref4, 2),
            f = (_ref5[0], _ref5[1]);
          return (
            e.useEffect(function () {
              var e;
              return null === (e = null == m ? void 0 : m.current) || void 0 === e ? void 0 : e.classList.add('hide');
            }, []),
            e.useEffect(
              function () {
                var e,
                  n,
                  o,
                  t = ((document && document.documentElement) || {}).style,
                  _ref7$height = (
                    (null === (e = null == c ? void 0 : c.current) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect()) || {}
                  ).height,
                  a = void 0 === _ref7$height ? 3e3 : _ref7$height,
                  _ref8$height = (
                    (null === (n = null == u ? void 0 : u.current) || void 0 === n
                      ? void 0
                      : n.getBoundingClientRect()) || {}
                  ).height,
                  r = a + (void 0 === _ref8$height ? 3e3 : _ref8$height),
                  i = 0.95 * f,
                  s = r > i ? i : r;
                if (
                  (t &&
                    (t.setProperty('--modal-max-height', ''.concat(i, 'px')),
                    t.setProperty('--modal-height', ''.concat(s, 'px')),
                    t.setProperty('--modal-overlay-height', f - s + 40 + 'px'),
                    t.setProperty('--modal-content-overflow', s >= i ? 'auto' : 'unset')),
                  l)
                )
                  null === (o = null == m ? void 0 : m.current) || void 0 === o || o.classList.remove('hide'),
                    document && document.body && (document.body.style.overflow = 'hidden');
                else if (!l) {
                  document && document.body && (document.body.style.overflow = 'auto');
                  var _e2 = t.getPropertyValue('--modal-transition-speed') || '2000',
                    _n2 = 1.5 * Number(_e2.replace(/\D/g, ''));
                  setTimeout(function () {
                    var e;
                    return null === (e = null == m ? void 0 : m.current) || void 0 === e
                      ? void 0
                      : e.classList.add('hide');
                  }, _n2);
                }
              },
              [l, d, f],
            ),
            a.default.createElement(
              a.default.Fragment,
              null,
              a.default.createElement(
                'div',
                { 'data-testid': 'modal-overlay', className: 'overlay ' + (l ? 'open' : 'close') },
                i,
              ),
              a.default.createElement(
                'div',
                { 'data-testid': 'modal', ref: m, className: 'modal '.concat(l ? 'open' : 'close', ' ').concat(s) },
                a.default.createElement(
                  'div',
                  { ref: u, className: 'modal-header' },
                  t,
                  a.default.createElement(n.Button, {
                    label: '',
                    leftIcon: o,
                    buttonType: 'icon',
                    onClick: function onClick() {
                      r(!l);
                    },
                  }),
                ),
                a.default.createElement(
                  'div',
                  { 'data-testid': 'modal-content', ref: c, className: 'modal-content' },
                  d,
                ),
              ),
            )
          );
        }),
        (exports.systemTheme = b);
    },
    23: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return text_Text;
      });
      __webpack_require__(16), __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var jsx_runtime = __webpack_require__(2),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        icon_Icon =
          (__webpack_require__(1111),
          function Icon(_ref) {
            var className = _ref.className,
              icon = _ref.icon,
              _ref$size = _ref.size,
              size = void 0 === _ref$size ? 'm' : _ref$size,
              color = _ref.color,
              disabled = _ref.disabled,
              iconRef = Object(react.useRef)(null);
            return (
              Object(react.useEffect)(
                function () {
                  var _iconRef$current, _iconRef$current$quer;
                  color &&
                    (null == iconRef ||
                      null === (_iconRef$current = iconRef.current) ||
                      void 0 === _iconRef$current ||
                      null === (_iconRef$current$quer = _iconRef$current.querySelector('path')) ||
                      void 0 === _iconRef$current$quer ||
                      _iconRef$current$quer.setAttribute('fill', color));
                },
                [iconRef],
              ),
              Object(jsx_runtime.jsx)('span', {
                'data-testid': 'icon',
                ref: iconRef,
                className: 'icon icon-'
                  .concat(size, ' ')
                  .concat(disabled && 'disabled', ' ')
                  .concat(className),
                children: icon,
              })
            );
          });
      icon_Icon.displayName = 'Icon';
      try {
        (icon_Icon.displayName = 'Icon'),
          (icon_Icon.__docgenInfo = {
            description: '',
            displayName: 'Icon',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !0,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              size: {
                defaultValue: { value: 'm' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: '"s" | "m" | "l" | "xl"' },
              },
              color: { defaultValue: null, description: '', name: 'color', required: !1, type: { name: 'string' } },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/components/icon/index.tsx#Icon'] = {
              docgenInfo: icon_Icon.__docgenInfo,
              name: 'Icon',
              path: 'packages/core/src/components/icon/index.tsx#Icon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(1113);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var text_Text = function Text(_ref) {
        var children = _ref.children,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 'm' : _ref$size,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? 'primary' : _ref$type,
          weight = _ref.weight,
          _ref$tag = _ref.tag,
          tag = void 0 === _ref$tag ? 'span' : _ref$tag,
          _ref$wrap = _ref.wrap,
          wrap = void 0 === _ref$wrap ? 'wrap' : _ref$wrap,
          innerRef = _ref.innerRef,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          leftIcon = _ref.leftIcon,
          rightIcon = _ref.rightIcon,
          _ref$fontStyle = _ref.fontStyle,
          fontStyle = void 0 === _ref$fontStyle ? 'normal' : _ref$fontStyle,
          _ref$width = _ref.width,
          width = void 0 === _ref$width ? 'full' : _ref$width,
          rest = _objectWithoutProperties(_ref, [
            'children',
            'size',
            'type',
            'weight',
            'tag',
            'wrap',
            'innerRef',
            'className',
            'leftIcon',
            'rightIcon',
            'fontStyle',
            'width',
          ]),
          text = react_default.a.createElement(
            tag,
            {
              className: 'text text-'
                .concat(size, ' text-')
                .concat(type, ' text-')
                .concat(weight, ' text-')
                .concat(wrap, ' text-')
                .concat(fontStyle),
              ref: innerRef,
              style: Object.assign({}, rest),
              'data-testid': 'text',
            },
            children,
          );
        return Object(jsx_runtime.jsxs)('span', {
          'data-testid': 'text-wrapper',
          className: 'text-outer text-'.concat(width, ' ').concat(className),
          children: [
            leftIcon &&
              Object(jsx_runtime.jsx)(icon_Icon, Object.assign({ className: 'left-icon '.concat(type) }, leftIcon)),
            text,
            rightIcon &&
              Object(jsx_runtime.jsx)(icon_Icon, Object.assign({ className: 'right-icon '.concat(type) }, rightIcon)),
          ],
        });
      };
      text_Text.displayName = 'Text';
      try {
        (text_Text.displayName = 'Text'),
          (text_Text.__docgenInfo = {
            description: '',
            displayName: 'Text',
            props: {
              color: { defaultValue: null, description: '', name: 'color', required: !1, type: { name: 'string' } },
              size: {
                defaultValue: { value: 'm' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: '"xs" | "s" | "m" | "l" | "xl"' },
              },
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: { name: '"light" | "regular" | "medium" | "bold"' },
              },
              type: {
                defaultValue: { value: 'primary' },
                description: '',
                name: 'type',
                required: !1,
                type: { name: '"primary" | "secondary"' },
              },
              tag: {
                defaultValue: { value: 'span' },
                description: '',
                name: 'tag',
                required: !1,
                type: { name: '"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"' },
              },
              wrap: {
                defaultValue: { value: 'wrap' },
                description: '',
                name: 'wrap',
                required: !1,
                type: { name: '"wrap" | "nowrap"' },
              },
              innerRef: {
                defaultValue: null,
                description: '',
                name: 'innerRef',
                required: !1,
                type: { name: 'RefObject<HTMLSpanElement | HTMLParagraphElement>' },
              },
              leftIcon: {
                defaultValue: null,
                description: '',
                name: 'leftIcon',
                required: !1,
                type: { name: 'IIconProps' },
              },
              rightIcon: {
                defaultValue: null,
                description: '',
                name: 'rightIcon',
                required: !1,
                type: { name: 'IIconProps' },
              },
              fontStyle: {
                defaultValue: { value: 'normal' },
                description: '',
                name: 'fontStyle',
                required: !1,
                type: { name: '"italic" | "normal"' },
              },
              width: {
                defaultValue: { value: 'full' },
                description: '',
                name: 'width',
                required: !1,
                type: { name: '"auto" | "full"' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/components/text/index.tsx#Text'] = {
              docgenInfo: text_Text.__docgenInfo,
              name: 'Text',
              path: 'packages/core/src/components/text/index.tsx#Text',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    24: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return StoriesDivider;
      });
      __webpack_require__(20), __webpack_require__(19);
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
        renderChildren =
          (__webpack_require__(0),
          __webpack_require__(1108),
          function renderChildren(_ref) {
            var children = _ref.children,
              labels = _ref.labels;
            return children.map(function (child, index) {
              return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                'div',
                {
                  className: 'flex-item',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('h3', {
                      className: 'flex-label',
                      children: labels[index],
                    }),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                      className: 'flex-child',
                      children: child,
                    }),
                  ],
                },
                index,
              );
            });
          }),
        renderChild = function renderChild(_ref2) {
          var children = _ref2.children,
            labels = _ref2.labels;
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            'div',
            {
              className: 'flex-item',
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('h3', {
                  children: labels ? labels[0] : 'No Label',
                }),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                  className: 'flex-child',
                  children: children,
                }),
              ],
            },
            '1',
          );
        };
      renderChild.displayName = 'renderChild';
      var StoriesDivider = function StoriesDivider(_ref3) {
        var children = _ref3.children,
          labels = _ref3.labels,
          _ref3$overflow = _ref3.overflow,
          overflow = void 0 === _ref3$overflow ? 'visible' : _ref3$overflow;
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
          className: 'flex-system '.concat(overflow),
          children: Array.isArray(children)
            ? renderChildren({ children: children, labels: labels })
            : renderChild({ children: children, labels: labels }),
        });
      };
      StoriesDivider.displayName = 'StoriesDivider';
    },
    37: function (module, exports, __webpack_require__) {
      'use strict';
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      __webpack_require__(7),
        __webpack_require__(13),
        __webpack_require__(25),
        __webpack_require__(16),
        __webpack_require__(9),
        __webpack_require__(21),
        __webpack_require__(3),
        __webpack_require__(34),
        __webpack_require__(12),
        __webpack_require__(18),
        __webpack_require__(78),
        __webpack_require__(139),
        __webpack_require__(22),
        Object.defineProperty(exports, '__esModule', { value: !0 });
      var t = __webpack_require__(0),
        n = __webpack_require__(173),
        e = __webpack_require__(127);
      var i = (function o(t) {
        return t && 'object' == _typeof(t) && 'default' in t ? t : { default: t };
      })(t);
      function r(t, n) {
        var e = {};
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (o = Object.getOwnPropertySymbols(t); i < o.length; i++)
            n.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[i]) && (e[o[i]] = t[o[i]]);
        }
        return e;
      }
      function a(t, n) {
        void 0 === n && (n = {});
        var e = n.insertAt;
        if (t && 'undefined' != typeof document) {
          var o = document.head || document.getElementsByTagName('head')[0],
            i = document.createElement('style');
          (i.type = 'text/css'),
            'top' === e && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i),
            i.styleSheet ? (i.styleSheet.cssText = t) : i.appendChild(document.createTextNode(t));
        }
      }
      a(
        ":root {\n  --icon-color: black;\n  --icon-disabled-color: grey;\n  --icon-size: '1rem';\n  --icon-s: 1rem;\n  --icon-m: 1.5rem;\n  --icon-l: 2rem;\n  --icon-xl: 3rem;\n}\n\n.icon {\n  display: flex;\n  width: var(--icon-size);\n  height: var(--icon-size);\n  min-width: var(--icon-size);\n  min-height: var(--icon-size);\n  border-radius: var(--icon-size);\n}\n\n.icon,\n.disabled > svg {\n  fill: var(--icon-disabled-color);\n  color: var(--icon-disabled-color);\n}\n\n.icon,\n.disabled > svg path {\n  fill: var(--icon-disabled-color);\n  color: var(--icon-disabled-color);\n}\n\n.icon-s,\n.icon-s > svg {\n  width: var(--icon-s);\n  height: var(--icon-s);\n  min-width: var(--icon-s);\n  min-height: var(--icon-s);\n}\n\n.icon-m,\n.icon-m > svg {\n  width: var(--icon-m);\n  height: var(--icon-m);\n  min-width: var(--icon-m);\n  min-height: var(--icon-m);\n}\n\n.icon-l,\n.icon-l > svg {\n  width: var(--icon-l);\n  height: var(--icon-l);\n  min-width: var(--icon-l);\n  min-height: var(--icon-l);\n}\n.icon-xl,\n.icon-xl > svg {\n  width: var(--icon-xl);\n  height: var(--icon-xl);\n  min-width: var(--icon-xl);\n  min-height: var(--icon-xl);\n}\n",
      );
      var s = function s(_ref) {
        var n = _ref.className,
          e = _ref.icon,
          _ref$size = _ref.size,
          o = void 0 === _ref$size ? 'm' : _ref$size,
          r = _ref.color,
          a = _ref.disabled,
          s = t.useRef(null);
        return (
          t.useEffect(
            function () {
              var t, n;
              r &&
                (null ===
                  (n =
                    null === (t = null == s ? void 0 : s.current) || void 0 === t ? void 0 : t.querySelector('path')) ||
                  void 0 === n ||
                  n.setAttribute('fill', r));
            },
            [s],
          ),
          i.default.createElement(
            'span',
            {
              'data-testid': 'icon',
              ref: s,
              className: 'icon icon-'
                .concat(o, ' ')
                .concat(a && 'disabled', ' ')
                .concat(n),
            },
            e,
          )
        );
      };
      a(
        ".text-outer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.text-outer h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\n.text-outer .text-auto {\n  width: auto;\n}\n\n.text-outer .text-full {\n  width: 100%;\n}\n\n.text-outer .left-icon {\n  padding-right: var(--system-size-xs);\n}\n\n.text-outer .right-icon {\n  padding-left: var(--system-size-xs);\n}\n\n.text-outer .text {\n  color: var(--text-primary-color);\n}\n\n.text-outer .text.text-primary {\n  color: var(--text-primary-color);\n}\n\n.text-outer .text.text-secondary {\n  color: var(--text-secondary-color);\n}\n\n.text-outer .text.text-xs {\n  font-size: var(--text-size-xs);\n}\n\n.text-outer .text.text-s {\n  font-size: var(--text-size-s);\n}\n\n.text-outer .text.text-m {\n  font-size: var(--text-size-m);\n}\n\n.text-outer .text.text-l {\n  font-size: var(--text-size-l);\n}\n\n.text-outer .text.text-xl {\n  font-size: var(--text-size-xl);\n}\n\n.text-outer .text.text-xxl {\n  font-size: var(--text-size-xxl);\n}\n\n.text-outer .text.text-light {\n  font-weight: var(--text-font-weight-light);\n  font-variation-settings: 'wght' var(--text-font-weight-light);\n}\n\n.text-outer .text.text-regular {\n  font-weight: var(--text-font-weight-regular);\n  font-variation-settings: 'wght' var(--text-font-weight-regular);\n}\n\n.text-outer .text.text-medium {\n  font-weight: var(--text-font-weight-medium);\n  font-variation-settings: 'wght' var(--text-font-weight-medium);\n}\n\n.text-outer .text.text-bold {\n  font-weight: var(--text-font-weight-bold);\n  font-variation-settings: 'wght' var(--text-font-weight-bold);\n}\n\n.text-outer .text.text-wrap {\n  white-space: wrap;\n}\n\n.text-outer .text.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-outer .text.text-italic {\n  font-style: italic;\n}\n",
      );
      var l = function l(t) {
        var n = t.children,
          _t$size = t.size,
          e = void 0 === _t$size ? 'm' : _t$size,
          _t$type = t.type,
          o = void 0 === _t$type ? 'primary' : _t$type,
          a = t.weight,
          _t$tag = t.tag,
          l = void 0 === _t$tag ? 'span' : _t$tag,
          _t$wrap = t.wrap,
          d = void 0 === _t$wrap ? 'wrap' : _t$wrap,
          c = t.innerRef,
          _t$className = t.className,
          u = void 0 === _t$className ? '' : _t$className,
          b = t.leftIcon,
          x = t.rightIcon,
          _t$fontStyle = t.fontStyle,
          g = void 0 === _t$fontStyle ? 'normal' : _t$fontStyle,
          _t$width = t.width,
          m = void 0 === _t$width ? 'full' : _t$width,
          h = r(t, [
            'children',
            'size',
            'type',
            'weight',
            'tag',
            'wrap',
            'innerRef',
            'className',
            'leftIcon',
            'rightIcon',
            'fontStyle',
            'width',
          ]),
          p = i.default.createElement(
            l,
            {
              className: 'text text-'
                .concat(e, ' text-')
                .concat(o, ' text-')
                .concat(a, ' text-')
                .concat(d, ' text-')
                .concat(g),
              ref: c,
              style: Object.assign({}, h),
              'data-testid': 'text',
            },
            n,
          );
        return i.default.createElement(
          'span',
          { 'data-testid': 'text-wrapper', className: 'text-outer text-'.concat(m, ' ').concat(u) },
          b && i.default.createElement(s, Object.assign({ className: 'left-icon '.concat(o) }, b)),
          p,
          x && i.default.createElement(s, Object.assign({ className: 'right-icon '.concat(o) }, x)),
        );
      };
      a(
        '.button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  cursor: pointer;\n}\n\n.button.button-primary {\n  background-color: var(--button-primary-bg-color);\n  border: 1px solid var(--button-primary-border-color);\n  border-radius: var(--button-primary-border-radius);\n  padding: var(--button-primary-padding);\n  height: var(--button-primary-height);\n}\n\n.button.button-primary .button-label span,\n.button-label p {\n  color: var(--button-primary-color);\n}\n\n.button.button-primary .icon svg > path {\n  fill: var(--button-primary-color);\n}\n\n.button.button-secondary {\n  background-color: var(--button-secondary-bg-color);\n  border: 1px solid var(--button-secondary-border-color);\n  border-radius: var(--button-secondary-border-radius);\n  padding: var(--button-secondary-padding);\n  height: var(--button-secondary-height);\n}\n\n.button.button-secondary .button-label span,\n.button-label p {\n  color: var(--button-secondary-color);\n}\n\n.button.button-secondary .icon svg > path {\n  fill: var(--button-secondary-color);\n}\n\n.button.button-flat {\n  background-color: var(--button-flat-bg-color);\n  border: 1px solid var(--button-flat-border-color);\n  border-radius: var(--button-flat-border-radius);\n  padding: var(--button-flat-padding);\n  height: var(--button-flat-height);\n}\n\n.button.button-flat .button-label span,\n.button-label p {\n  color: var(--button-flat-color);\n}\n\n.button.button-flat .icon svg > path {\n  fill: var(--button-flat-color);\n}\n\n.button.button-badge {\n  background-color: var(--button-badge-bg-color);\n  border: 1px solid var(--button-badge-border-color);\n  border-radius: var(--button-badge-border-radius);\n  padding: var(--button-badge-padding);\n  height: var(--button-badge-height);\n}\n\n.button.button-badge .button-label span,\n.button-label p {\n  color: var(--button-badge-color);\n}\n\n.button.button-badge .icon svg > path {\n  fill: var(--button-badge-color);\n}\n\n.button.button-icon {\n  background-color: var(--button-icon-bg-color);\n  border: 1px solid var(--button-icon-border-color);\n  border-radius: var(--button-icon-border-radius);\n  padding: var(--button-icon-padding);\n  height: var(--button-icon-height);\n  width: var(--button-icon-height);\n}\n\n.button.button-icon .button-label span,\n.button-label p {\n  color: var(--button-icon-color);\n}\n\n.button.button-icon .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.button.button-icon .icon svg {\n  width: 65%;\n  height: 65%;\n  min-width: 65%;\n  min-height: 65%;\n}\n\n.button.button-icon .icon svg > path {\n  fill: var(--button-icon-color);\n}\n\n.button.button--size-none {\n  height: var(--system-size-none);\n}\n\n.button.button--size-xxxs {\n  height: var(--system-size-xxxs);\n}\n\n.button.button--size-xxs {\n  height: var(--system-size-xxs);\n}\n\n.button.button--size-xs {\n  height: var(--system-size-xs);\n}\n\n.button.button--size-s {\n  height: var(--system-size-s);\n}\n\n.button.button--size-m {\n  height: var(--system-size-m);\n}\n\n.button.button--size-l {\n  height: var(--system-size-l);\n}\n\n.button.button--size-xl {\n  height: var(--system-size-xl);\n}\n\n.button.button--size-xxl {\n  height: var(--system-size-xxl);\n}\n\n.button.button-icon.button--size-none {\n  height: var(--system-size-none);\n  width: var(--system-size-none);\n}\n\n.button.button-icon.button--size-xxxs {\n  height: var(--system-size-xxxs);\n  width: var(--system-size-xxxs);\n}\n\n.button.button-icon.button--size-xxs {\n  height: var(--system-size-xxs);\n  width: var(--system-size-xxs);\n}\n\n.button.button-icon.button--size-xs {\n  height: var(--system-size-xs);\n  width: var(--system-size-xs);\n}\n\n.button.button-icon.button--size-s {\n  height: var(--system-size-s);\n  width: var(--system-size-s);\n}\n\n.button.button-icon.button--size-m {\n  height: var(--system-size-m);\n  width: var(--system-size-m);\n}\n\n.button.button-icon.button--size-l {\n  height: var(--system-size-l);\n  width: var(--system-size-l);\n}\n\n.button.button-icon.button--size-xl {\n  height: var(--system-size-xl);\n  width: var(--system-size-xl);\n}\n\n.button.button-icon.button--size-xxl {\n  height: var(--system-size-xxl);\n  width: var(--system-size-xxl);\n}\n\n.button.button--label-size-xxs {\n  font-size: var(--text-size-xxs);\n}\n\n.button.button--label-size-xs {\n  font-size: var(--text-size-xs);\n}\n\n.button.button--label-size-s {\n  font-size: var(--text-size-s);\n}\n\n.button.button--label-size-m {\n  font-size: var(--text-size-m);\n}\n\n.button.button--label-size-l {\n  font-size: var(--text-size-l);\n}\n\n.button.button--label-size-xl {\n  font-size: var(--text-size-xl);\n}\n\n.button.button-full-width {\n  width: 100%;\n}\n',
      );
      var d = function d(t) {
        var _t$className2 = t.className,
          n = void 0 === _t$className2 ? '' : _t$className2,
          e = t.label,
          o = t.buttonType,
          _t$size2 = t.size,
          a = void 0 === _t$size2 ? 'm' : _t$size2,
          _t$labelSize = t.labelSize,
          s = void 0 === _t$labelSize ? 'xs' : _t$labelSize,
          _t$fullWidth = t.fullWidth,
          d = void 0 !== _t$fullWidth && _t$fullWidth,
          c = t.leftIcon,
          u = t.rightIcon,
          b = t.innerRef,
          x = r(t, [
            'className',
            'label',
            'buttonType',
            'size',
            'labelSize',
            'fullWidth',
            'leftIcon',
            'rightIcon',
            'innerRef',
          ]);
        return i.default.createElement(
          'button',
          Object.assign(
            {
              className: 'button button-'
                .concat(o, ' button--size-')
                .concat(a, ' button--label-size-')
                .concat(s, ' ')
                .concat(d ? 'button-full-width' : '', ' ')
                .concat(n),
              ref: b,
              'data-testid': 'button',
            },
            x,
          ),
          i.default.createElement(l, { className: 'button-label', size: s, leftIcon: c, rightIcon: u }, e),
        );
      };
      a(
        '.image {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.image img {\n  width: 100%;\n  display: flex;\n  position: absolute;\n}\n\n.image.blur img {\n  filter: blur(10px);\n  transition: blur 0;\n}\n.image.no-blur img {\n  filter: none;\n  transition: filter 0.5s ease-out;\n}\n\n.image.image-border-radius-none {\n  border-radius: 0px;\n}\n\n.image.image-border-radius-s {\n  border-radius: calc(var(--image-border-radius) - 3px);\n}\n\n.image.image-border-radius-m {\n  border-radius: var(--image-border-radius);\n}\n\n.image.image-border-radius-l {\n  border-radius: calc(var(--image-border-radius) + 3px);\n}\n\n.image.image-border-radius-xl {\n  border-radius: calc(var(--image-border-radius) + 6px);\n}\n\n.image.image-border-radius-round {\n  border-radius: 50%;\n}\n\n.image.image-aspect-ratio-2-3 {\n  padding-bottom: 150%;\n}\n\n.image.image-aspect-ratio-21-9 {\n  padding-bottom: 42.7%;\n}\n\n.image.image-aspect-ratio-30-9 {\n  padding-bottom: 30%;\n}\n',
      ),
        a(
          '.price {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  flex-direction: row;\n}\n\n.price .left .middle .right {\n  width: auto;\n}\n\n.price .left {\n  padding-right: var(--price-padding);\n}\n\n.price .right {\n  padding-left: var(--price-padding);\n}\n',
        );
      var c = { none: 0, xsmall: 10, small: 20, medium: 30, large: 40, xlarge: 60 },
        b = c.xsmall,
        x = c.small,
        g = c.medium,
        m = c.large,
        h = c.xlarge,
        p = {
          width: { min: '300px', max: '1170px' },
          sizes: {
            sizeNone: ''.concat(c.none, 'px'),
            sizeXs: ''.concat(b, 'px'),
            sizeS: ''.concat(x, 'px'),
            sizeM: ''.concat(g, 'px'),
            sizeL: ''.concat(m, 'px'),
            sizeXl: ''.concat(h, 'px'),
          },
        },
        _ref2 =
          {
            modernRed: '#EA143D',
            modernBlue: '#2378CD',
            tjara: '#000000',
            moln: '#ffffff',
            silver: '#949494',
            silverLight: '#F4F4F4',
            silverDark: '#6b6b6b',
            shadow: 'rgba(0, 0, 0, 0.2)',
            overlay: 'rgba(0, 0, 0, 0.75)',
            sand: '#faf6eb',
            snackskal: '#f7d7d1',
            sjobod: '#b00f2e',
            tang: '#751422',
            himmel: '#c0d5ed',
            hav: '#1a5a9a',
            mussla: '#123d66',
            modernGreen: '#74b346',
            extra: '#28d2b9',
          } || {},
        v = _ref2.modernRed,
        f = _ref2.modernBlue,
        z = _ref2.himmel,
        w = _ref2.tjara,
        y = _ref2.silver,
        S = _ref2.moln,
        _ref3 = c || {},
        C = _ref3.none,
        N = _ref3.xsmall,
        E = _ref3.small,
        R = _ref3.medium,
        O = _ref3.xlarge,
        _ref4 = { light: 300, regular: 400, medium: 500, bold: 700 } || {},
        I = _ref4.light,
        k = _ref4.regular,
        T = _ref4.medium,
        B = _ref4.bold,
        _ref5 = { xs: '18px', s: '20px', m: '30px', l: '35px', xl: '40px' } || {},
        W = _ref5.xs,
        A = _ref5.s,
        L = _ref5.m,
        M = _ref5.l,
        P = _ref5.xl,
        q = {
          metrics: p,
          button: {
            primary: {
              backgroundColor: v,
              textColor: S,
              borderColor: v,
              borderRadius: ''.concat(_ref3.large, 'px'),
              padding: ''.concat(N, 'px ').concat(E, 'px'),
              height: ''.concat(O, 'px'),
            },
            flat: {
              backgroundColor: 'transparent',
              textColor: f,
              borderColor: 'transparent',
              borderRadius: ''.concat(C, 'px'),
              padding: ''.concat(C, 'px ').concat(C, 'px'),
              height: ''.concat(E, 'px'),
            },
            secondary: {
              backgroundColor: S,
              textColor: w,
              borderColor: w,
              borderRadius: ''.concat(E, 'px'),
              padding: ''.concat(N, 'px ').concat(E, 'px'),
              height: ''.concat(O, 'px'),
            },
            badge: {
              backgroundColor: f,
              textColor: S,
              borderColor: f,
              borderRadius: ''.concat(E, 'px'),
              padding: ''.concat(N, 'px ').concat(N, 'px'),
              height: ''.concat(E, 'px'),
            },
            icon: {
              backgroundColor: z,
              textColor: f,
              borderColor: z,
              borderRadius: ''.concat(O, 'px'),
              padding: ''.concat(N, 'px'),
              height: ''.concat(R, 'px'),
            },
          },
          text: {
            primaryColor: w,
            secondaryColor: S,
            disabledColor: y,
            fontSizeXs: W,
            fontSizeS: A,
            fontSizeM: L,
            fontSizeL: M,
            fontSizeXl: P,
            fontWeightLight: ''.concat(I),
            fontWeightRegular: ''.concat(k),
            fontWeightMedium: ''.concat(T),
            fontWeightBold: ''.concat(B),
          },
          image: { borderRadius: ''.concat(N, 'px') },
          price: { padding: ''.concat(N, 'px') },
        };
      e.AddTheme && e.AddTheme({ theme: q }),
        (exports.Button = d),
        (exports.Icon = s),
        (exports.Image = function (n) {
          var _n$className = n.className,
            e = void 0 === _n$className ? '' : _n$className,
            _n$aspectRatio = n.aspectRatio,
            o = void 0 === _n$aspectRatio ? '21-9' : _n$aspectRatio,
            _n$borderRadius = n.borderRadius,
            a = void 0 === _n$borderRadius ? 'm' : _n$borderRadius,
            s = n.innerRef,
            l = n.src,
            d = n.lowResSrc,
            c = r(n, ['className', 'aspectRatio', 'borderRadius', 'innerRef', 'src', 'lowResSrc']),
            _ref6 = (function (_ref7) {
              var n = _ref7.lowQualitySrc,
                e = _ref7.highQualitySrc,
                _t$useState2 = _slicedToArray(t.useState(n), 2),
                o = _t$useState2[0],
                i = _t$useState2[1];
              return (
                t.useEffect(
                  function () {
                    i(n);
                    var t = new Image();
                    (t.src = e),
                      (t.onload = function () {
                        i(e);
                      });
                  },
                  [n, e],
                ),
                { newSrc: o, blur: o === n }
              );
            })({ lowQualitySrc: d, highQualitySrc: l }),
            u = _ref6.newSrc,
            b = _ref6.blur;
          return i.default.createElement(
            'div',
            {
              'data-testid': 'image-wrapper',
              className: 'image '
                .concat(b ? 'blur' : 'no-blur', ' image-border-radius-')
                .concat(a, ' image-aspect-ratio-')
                .concat(o, ' ')
                .concat(e),
              ref: s,
            },
            i.default.createElement('img', Object.assign({ 'data-testid': 'image', src: u }, c)),
          );
        }),
        (exports.Price = function (_ref8) {
          var t = _ref8.left,
            n = _ref8.middle,
            e = _ref8.right,
            _ref8$width = _ref8.width,
            o = void 0 === _ref8$width ? 'auto' : _ref8$width;
          return i.default.createElement(
            'div',
            { className: 'price' },
            i.default.createElement(
              l,
              Object.assign({ className: 'left', size: 's', fontStyle: 'italic', width: o }, t.props),
              t.value,
            ),
            i.default.createElement(
              l,
              Object.assign(
                { className: 'middle', size: 'xl', fontStyle: 'italic', weight: 'bold', width: o },
                n.props,
              ),
              n.value,
            ),
            i.default.createElement(
              l,
              Object.assign({ className: 'right', size: 's', fontStyle: 'italic', width: o }, e.props),
              e.value,
            ),
          );
        }),
        (exports.SettingButton = function (_ref9) {
          var t = _ref9.settingTitle,
            e = _ref9.options,
            o = _ref9.open,
            r = _ref9.setOpen,
            a = _ref9.settingIcon,
            s = _ref9.closeIcon,
            l = _ref9.className,
            c = _ref9.modalTitle,
            u = i.default.createElement(
              n.Modal,
              {
                title: c,
                closeIcon: s,
                onClick: function onClick() {
                  return r(!1);
                },
                open: o,
              },
              e,
            );
          return i.default.createElement(
            i.default.Fragment,
            null,
            i.default.createElement(d, {
              'data-testid': 'setting-button',
              label: t,
              buttonType: 'secondary',
              size: 'xl',
              leftIcon: a,
              onClick: function onClick() {
                return r(!o);
              },
              className: l,
            }),
            u,
          );
        }),
        (exports.Text = l),
        (exports.coreTheme = q);
    },
    41: function (module, exports, __webpack_require__) {
      'use strict';
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      __webpack_require__(7),
        __webpack_require__(13),
        __webpack_require__(25),
        __webpack_require__(21),
        __webpack_require__(34),
        __webpack_require__(12),
        __webpack_require__(28),
        __webpack_require__(18),
        __webpack_require__(199),
        __webpack_require__(22),
        Object.defineProperty(exports, '__esModule', { value: !0 });
      var t = (function e(e) {
          return e && 'object' == _typeof(e) && 'default' in e ? e : { default: e };
        })(__webpack_require__(0)),
        l = t.default.createElement(
          'svg',
          { width: '25', height: '24', viewBox: '0 0 25 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('rect', {
            width: '24',
            height: '24',
            transform: 'translate(0.253601)',
            fill: 'white',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12.2536 0C18.881 0 24.2536 5.37258 24.2536 12C24.2536 18.6274 18.881 24 12.2536 24C5.62618 24 0.253601 18.6274 0.253601 12C0.253601 5.37258 5.62618 0 12.2536 0ZM10.0546 1.21983C6.36463 1.9685 3.34525 4.56422 2.00348 8H7.53811C7.97574 5.02844 8.8872 2.59408 10.0546 1.21983ZM1.2536 12C1.2536 10.9574 1.39865 9.94872 1.66966 8.99298C1.69695 8.99759 1.72499 9 1.7536 9H7.41112C7.30829 9.95886 7.2536 10.9641 7.2536 12C7.2536 13.0359 7.30829 14.0411 7.41112 15H1.7536L1.66979 15.0075C1.39869 14.0516 1.2536 13.0428 1.2536 12ZM2.00348 16C3.34525 19.4358 6.36463 22.0315 10.0546 22.7802C8.8872 21.4059 7.97574 18.9716 7.53811 16H2.00348ZM8.55271 16C9.18814 20.1182 10.7388 23 12.2536 23C13.7684 23 15.3191 20.1182 15.9545 16H8.55271ZM16.9691 16C16.5315 18.9716 15.62 21.4059 14.4526 22.7802C18.1426 22.0315 21.1619 19.4358 22.5037 16H16.9691ZM22.8375 15.007C22.8103 15.0024 22.7822 15 22.7536 15H17.0961C17.1989 14.0411 17.2536 13.0359 17.2536 12C17.2536 10.9641 17.1989 9.95886 17.0961 9H22.7536L22.8374 8.99249C23.1085 9.94838 23.2536 10.9572 23.2536 12C23.2536 13.0426 23.1086 14.0513 22.8375 15.007ZM16.0877 15H8.41953C8.31234 14.0482 8.2536 13.0422 8.2536 12C8.2536 10.9578 8.31234 9.95183 8.41953 9H16.0877C16.1949 9.95183 16.2536 10.9578 16.2536 12C16.2536 13.0422 16.1949 14.0482 16.0877 15ZM16.9691 8H22.5037C21.1619 4.56422 18.1426 1.9685 14.4526 1.21983C15.62 2.59408 16.5315 5.02844 16.9691 8ZM12.2536 1C10.7388 1 9.18814 3.88184 8.55271 8H15.9545C15.3191 3.88184 13.7684 1 12.2536 1Z',
            fill: 'black',
          }),
        ),
        C = t.default.createElement(
          'svg',
          { width: '25', height: '24', viewBox: '0 0 25 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('rect', {
            width: '24',
            height: '24',
            transform: 'translate(0.253601)',
            fill: 'white',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12.7724 0.541126C12.7965 0.250107 12.567 0.00052906 12.275 1.87077e-05L12.2536 0C5.62618 0 0.253601 5.37258 0.253601 12C0.253601 18.6274 5.62618 24 12.2536 24C17.7862 24 22.5632 20.2247 23.8926 14.9326C23.9351 14.7631 23.8862 14.5837 23.7634 14.4594C23.1202 13.8083 22.7536 12.9337 22.7536 12C22.7536 11.6967 22.7921 11.3989 22.8672 11.1115C22.9459 10.8108 22.7339 10.5119 22.4241 10.4866C20.5203 10.3317 18.9875 8.84009 18.778 6.94501C18.7499 6.69082 18.5346 6.4988 18.2788 6.49994L18.2536 6.5C15.216 6.5 12.7536 4.03757 12.7536 1C12.7536 0.846139 12.7599 0.693101 12.7724 0.541126ZM12.2536 23C6.17847 23 1.2536 18.0751 1.2536 12C1.2536 6.09243 5.91054 1.27255 11.7536 1.01116C11.7594 4.4608 14.4524 7.28017 17.8512 7.48775C18.2481 9.46886 19.8134 11.022 21.7923 11.4076C21.7666 11.6028 21.7536 11.8006 21.7536 12C21.7536 13.1002 22.1508 14.1388 22.8541 14.9486C21.547 19.6621 17.2341 23 12.2536 23ZM9.7536 7.5C9.7536 8.60457 8.85817 9.5 7.7536 9.5C6.64903 9.5 5.7536 8.60457 5.7536 7.5C5.7536 6.39543 6.64903 5.5 7.7536 5.5C8.85817 5.5 9.7536 6.39543 9.7536 7.5ZM6.7536 7.5C6.7536 8.05228 7.20132 8.5 7.7536 8.5C8.30589 8.5 8.7536 8.05228 8.7536 7.5C8.7536 6.94772 8.30589 6.5 7.7536 6.5C7.20132 6.5 6.7536 6.94772 6.7536 7.5ZM18.7536 18.5C19.8582 18.5 20.7536 17.6046 20.7536 16.5C20.7536 15.3954 19.8582 14.5 18.7536 14.5C17.649 14.5 16.7536 15.3954 16.7536 16.5C16.7536 17.6046 17.649 18.5 18.7536 18.5ZM18.7536 17.5C18.2013 17.5 17.7536 17.0523 17.7536 16.5C17.7536 15.9477 18.2013 15.5 18.7536 15.5C19.3059 15.5 19.7536 15.9477 19.7536 16.5C19.7536 17.0523 19.3059 17.5 18.7536 17.5ZM12.7536 16C12.7536 17.3807 11.6343 18.5 10.2536 18.5C8.87289 18.5 7.7536 17.3807 7.7536 16C7.7536 14.6193 8.87289 13.5 10.2536 13.5C11.6343 13.5 12.7536 14.6193 12.7536 16ZM8.7536 16C8.7536 16.8284 9.42517 17.5 10.2536 17.5C11.082 17.5 11.7536 16.8284 11.7536 16C11.7536 15.1716 11.082 14.5 10.2536 14.5C9.42517 14.5 8.7536 15.1716 8.7536 16ZM21.7536 5C23.1343 5 24.2536 3.88071 24.2536 2.5C24.2536 1.11929 23.1343 0 21.7536 0C20.3729 0 19.2536 1.11929 19.2536 2.5C19.2536 3.88071 20.3729 5 21.7536 5ZM21.7536 4C20.9252 4 20.2536 3.32843 20.2536 2.5C20.2536 1.67157 20.9252 1 21.7536 1C22.582 1 23.2536 1.67157 23.2536 2.5C23.2536 3.32843 22.582 4 21.7536 4Z',
            fill: 'black',
          }),
        ),
        a = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M13.7489 12.3347C14.5356 11.2597 15 9.9341 15 8.5C15 4.91015 12.0899 2 8.5 2C4.91015 2 2 4.91015 2 8.5C2 12.0899 4.91015 15 8.5 15C9.9341 15 11.2597 14.5356 12.3347 13.7489L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.7489 12.3347ZM8.5 13C6.01472 13 4 10.9853 4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13Z',
            fill: 'black',
          }),
        ),
        d = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M544.5 137c4.142 0 7.5 3.358 7.5 7.5l-.001-.049v-.033l.077.033c1.688.77 2.833 2.43 2.919 4.32L555 149c0 2.761-2.239 5-5 5h-14.5c-2.485 0-4.5-2.015-4.5-4.5 0-1.589.831-3.029 2.153-3.84l-.025-.093c-.064-.26-.104-.525-.12-.795L533 144.5c0-2.485 2.015-4.5 4.5-4.5.264 0 .525.023.781.068l.148.029.118-.158c1.346-1.758 3.41-2.85 5.67-2.934zm0 1c-2.218 0-4.245 1.12-5.438 2.94l-.205.311-.356-.106c-.322-.096-.658-.145-1.001-.145-1.933 0-3.5 1.567-3.5 3.5 0 .425.075.838.22 1.225l.161.426-.41.2c-1.196.581-1.971 1.795-1.971 3.149 0 1.933 1.567 3.5 3.5 3.5H550c2.21 0 4-1.79 4-4 0-1.71-1.084-3.215-2.67-3.773l-.347-.122.013-.367.004-.238c0-3.59-2.91-6.5-6.5-6.5zm-1.5 9.5c1.105 0 2 .895 2 2 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.552-.448-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-1.105.895-2 2-2zm-4.216-3.411l.07.057.646.647.646-.647c.196-.195.512-.195.708 0 .173.174.192.443.057.638l-.057.07-.647.646.647.646c.195.196.195.512 0 .708-.174.173-.443.192-.638.057l-.07-.057-.646-.647-.646.647c-.196.195-.512.195-.708 0-.173-.174-.192-.443-.057-.638l.057-.07.647-.646-.647-.646c-.195-.196-.195-.512 0-.708.174-.173.443-.192.638-.057zm7 0l.07.057.646.647.646-.647c.196-.195.512-.195.708 0 .173.174.192.443.057.638l-.057.07-.647.646.647.646c.195.196.195.512 0 .708-.174.173-.443.192-.638.057l-.07-.057-.646-.647-.646.647c-.196.195-.512.195-.708 0-.173-.174-.192-.443-.057-.638l.057-.07.647-.646-.647-.646c-.195-.196-.195-.512 0-.708.174-.173.443-.192.638-.057z',
              transform: 'translate(-531 -134)',
            }),
          ),
        ),
        n = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M12 0c4.411 0 8 3.598 8 8.021a8.047 8.047 0 0 1-1.787 5.048L12.057 24 5.74 13.004C4.633 11.645 4 9.851 4 8.021 4 3.598 7.589 0 12 0zm0 1C8.14 1 5 4.149 5 8.021c0 1.626.54 3.155 1.564 4.419l5.485 9.539 5.342-9.469C18.46 11.175 19 9.647 19 8.021 19 4.149 15.86 1 12 1zm0 1.711c2.921 0 5.298 2.382 5.298 5.31 0 2.928-2.377 5.31-5.298 5.31-2.921 0-5.298-2.382-5.298-5.31 0-2.928 2.377-5.31 5.298-5.31zm0 .999c-2.37 0-4.297 1.934-4.297 4.311 0 2.376 1.928 4.31 4.297 4.31 2.37 0 4.297-1.934 4.297-4.31 0-2.377-1.928-4.311-4.297-4.311z',
            }),
          ),
        ),
        r = t.default.createElement(
          'svg',
          { width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
            fill: '#3B5998',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 29.9826 7.31371 38.2566 16.875 39.7569V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4293 7.8125C26.6175 7.8125 28.9062 8.20312 28.9062 8.20312V13.125H26.3843C23.8998 13.125 23.125 14.6667 23.125 16.2483V20H28.6719L27.7852 25.7813H23.125V39.7569C32.6863 38.2566 40 29.9826 40 20Z',
            fill: '#1877F2',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M27.7852 25.7812L28.6719 20H23.125V16.2483C23.125 14.6667 23.8998 13.125 26.3843 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4293 7.8125C19.8609 7.8125 16.875 10.5812 16.875 15.5937V20H11.7969V25.7812H16.875V39.7569C17.8933 39.9167 18.9369 40 20 40C21.0631 40 22.1068 39.9167 23.125 39.7569V25.7812H27.7852Z',
            fill: 'white',
          }),
        ),
        i = t.default.createElement(
          'svg',
          { width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
            fill: '#55ACEE',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M15 31.6662C23.5317 31.7309 30.5017 24.8953 30.5667 16.3986C30.5684 16.3222 30.5684 16.2442 30.5667 16.1662V15.4692C31.655 14.6793 32.5934 13.7019 33.3334 12.5817C32.3384 13.0231 31.2834 13.3085 30.2 13.428C31.3484 12.7576 32.2017 11.6872 32.6 10.4243C31.525 11.0532 30.355 11.5013 29.1334 11.7519C27.0867 9.54308 23.6284 9.40368 21.4084 11.4432C20.2634 12.4954 19.6234 13.984 19.65 15.5356C19.6517 15.9538 19.6967 16.3704 19.7834 16.7803C15.3867 16.5612 11.29 14.4918 8.51669 11.0881C8.02169 11.9162 7.76169 12.8621 7.76669 13.8263C7.76669 15.6468 8.68002 17.3478 10.2 18.3568C9.33335 18.3402 8.48502 18.1062 7.73335 17.6764C7.69669 20.2951 9.53835 22.5687 12.1167 23.0865C11.645 23.2192 11.1567 23.2873 10.6667 23.2856C10.325 23.2856 9.98502 23.2541 9.65002 23.186C10.3667 25.4015 12.4134 26.92 14.75 26.9698C12.815 28.4799 10.425 29.2981 7.96669 29.2931C7.53169 29.2798 7.09669 29.24 6.66669 29.1769C9.15002 30.78 12.0417 31.643 15 31.6662',
            fill: 'white',
          }),
          t.default.createElement(
            'mask',
            {
              id: 'mask0',
              'mask-type': 'alpha',
              maskUnits: 'userSpaceOnUse',
              x: '6',
              y: '10',
              width: '28',
              height: '22',
            },
            t.default.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M15 31.6662C23.5317 31.7309 30.5017 24.8953 30.5667 16.3986C30.5684 16.3222 30.5684 16.2442 30.5667 16.1662V15.4692C31.655 14.6793 32.5934 13.7019 33.3334 12.5817C32.3384 13.0231 31.2834 13.3085 30.2 13.428C31.3484 12.7576 32.2017 11.6872 32.6 10.4243C31.525 11.0532 30.355 11.5013 29.1334 11.7519C27.0867 9.54308 23.6284 9.40368 21.4084 11.4432C20.2634 12.4954 19.6234 13.984 19.65 15.5356C19.6517 15.9538 19.6967 16.3704 19.7834 16.7803C15.3867 16.5612 11.29 14.4918 8.51669 11.0881C8.02169 11.9162 7.76169 12.8621 7.76669 13.8263C7.76669 15.6468 8.68002 17.3478 10.2 18.3568C9.33335 18.3402 8.48502 18.1062 7.73335 17.6764C7.69669 20.2951 9.53835 22.5687 12.1167 23.0865C11.645 23.2192 11.1567 23.2873 10.6667 23.2856C10.325 23.2856 9.98502 23.2541 9.65002 23.186C10.3667 25.4015 12.4134 26.92 14.75 26.9698C12.815 28.4799 10.425 29.2981 7.96669 29.2931C7.53169 29.2798 7.09669 29.24 6.66669 29.1769C9.15002 30.78 12.0417 31.643 15 31.6662',
              fill: 'white',
            }),
          ),
          t.default.createElement('g', { mask: 'url(#mask0)' }),
        ),
        h = t.default.createElement(
          'svg',
          { width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
            fill: '#C32AA3',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M19.9585 6.66699C16.3531 6.66699 15.8878 6.66699 14.4756 6.75033C13.374 6.77033 12.2841 6.97866 11.2523 7.36699C9.45627 8.04366 8.03903 9.46533 7.36448 11.267C6.97901 12.302 6.77133 13.3953 6.74973 14.5003C6.66666 15.917 6.66666 16.3837 6.66666 20.0003C6.66666 23.617 6.66666 24.0837 6.74973 25.5003C6.77133 26.6053 6.97901 27.6987 7.36448 28.7337C8.03903 30.5353 9.45627 31.9587 11.2523 32.6337C12.2791 33.0487 13.369 33.287 14.4756 33.3337H19.9585C23.5639 33.3337 24.0291 33.3337 25.4413 33.2503C26.5429 33.2303 27.6328 33.022 28.6646 32.6337C30.4606 31.9587 31.8795 30.5353 32.5524 28.7337C32.9661 27.7037 33.2037 26.6103 33.2502 25.5003C33.2502 24.0837 33.3333 23.617 33.3333 20.0003C33.3333 16.3837 33.2502 15.917 33.2502 14.5003C33.2286 13.3953 33.021 12.302 32.6355 11.267C31.9427 9.44699 30.4922 8.02199 28.6646 7.36699C27.6328 6.97866 26.5429 6.77033 25.4413 6.75033C24.0291 6.66699 23.5639 6.66699 19.9585 6.66699M19.9585 9.06699C23.514 9.06699 23.9294 9.06699 25.325 9.15033C26.1691 9.15366 27.0081 9.30533 27.8006 9.60033C28.9587 10.052 29.8758 10.972 30.3261 12.1337C30.6202 12.9287 30.7714 13.7687 30.7747 14.617C30.7747 16.017 30.8577 16.4337 30.8577 20.0003C30.8577 23.567 30.8577 23.9837 30.7747 25.3837C30.7714 26.2303 30.6202 27.072 30.3261 27.867C29.8758 29.0287 28.9587 29.9487 27.8006 30.4003C27.0081 30.6953 26.1691 30.847 25.325 30.8503C23.9294 30.8503 23.514 30.9337 19.9585 30.9337C16.4029 30.9337 15.9876 30.9337 14.5919 30.8503C13.7462 30.847 12.9088 30.6953 12.1163 30.4003C10.9583 29.9487 10.0411 29.0287 9.59087 27.867C9.29679 27.072 9.1456 26.2303 9.14227 25.3837C9.14227 23.9837 9.0592 23.567 9.0592 20.0003C9.0592 16.4337 9.0592 16.017 9.14227 14.617C9.1456 13.7687 9.29679 12.9287 9.59087 12.1337C10.0411 10.972 10.9583 10.052 12.1163 9.60033C12.9088 9.30533 13.7462 9.15366 14.5919 9.15033C15.9876 9.15033 16.4029 9.06699 19.9585 9.06699M19.9579 24.4502C17.5072 24.4502 15.5217 22.4585 15.5217 20.0002C15.5217 17.5418 17.5072 15.5502 19.9579 15.5502C22.4085 15.5502 24.394 17.5418 24.394 20.0002C24.384 22.4552 22.4052 24.4402 19.9579 24.4502M19.9578 13.1502C16.1863 13.1502 13.1292 16.2168 13.1292 20.0002C13.1292 23.7835 16.1863 26.8502 19.9578 26.8502C23.7294 26.8502 26.7865 23.7835 26.7865 20.0002C26.7865 16.2168 23.7294 13.1502 19.9578 13.1502M27.0516 11.2837C27.9321 11.2837 28.6482 12.0003 28.6482 12.8837C28.6482 13.767 27.9321 14.4837 27.0516 14.4837C26.1726 14.4837 25.4566 13.767 25.4566 12.8837C25.4566 12.0003 26.1726 11.2837 27.0516 11.2837',
            fill: 'white',
          }),
          t.default.createElement(
            'mask',
            {
              id: 'mask0',
              'mask-type': 'alpha',
              maskUnits: 'userSpaceOnUse',
              x: '6',
              y: '6',
              width: '28',
              height: '28',
            },
            t.default.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M19.9585 6.66699C16.3531 6.66699 15.8878 6.66699 14.4756 6.75033C13.374 6.77033 12.2841 6.97866 11.2523 7.36699C9.45627 8.04366 8.03903 9.46533 7.36448 11.267C6.97901 12.302 6.77133 13.3953 6.74973 14.5003C6.66666 15.917 6.66666 16.3837 6.66666 20.0003C6.66666 23.617 6.66666 24.0837 6.74973 25.5003C6.77133 26.6053 6.97901 27.6987 7.36448 28.7337C8.03903 30.5353 9.45627 31.9587 11.2523 32.6337C12.2791 33.0487 13.369 33.287 14.4756 33.3337H19.9585C23.5639 33.3337 24.0291 33.3337 25.4413 33.2503C26.5429 33.2303 27.6328 33.022 28.6646 32.6337C30.4606 31.9587 31.8795 30.5353 32.5524 28.7337C32.9661 27.7037 33.2037 26.6103 33.2502 25.5003C33.2502 24.0837 33.3333 23.617 33.3333 20.0003C33.3333 16.3837 33.2502 15.917 33.2502 14.5003C33.2286 13.3953 33.021 12.302 32.6355 11.267C31.9427 9.44699 30.4922 8.02199 28.6646 7.36699C27.6328 6.97866 26.5429 6.77033 25.4413 6.75033C24.0291 6.66699 23.5639 6.66699 19.9585 6.66699M19.9585 9.06699C23.514 9.06699 23.9294 9.06699 25.325 9.15033C26.1691 9.15366 27.0081 9.30533 27.8006 9.60033C28.9587 10.052 29.8758 10.972 30.3261 12.1337C30.6202 12.9287 30.7714 13.7687 30.7747 14.617C30.7747 16.017 30.8577 16.4337 30.8577 20.0003C30.8577 23.567 30.8577 23.9837 30.7747 25.3837C30.7714 26.2303 30.6202 27.072 30.3261 27.867C29.8758 29.0287 28.9587 29.9487 27.8006 30.4003C27.0081 30.6953 26.1691 30.847 25.325 30.8503C23.9294 30.8503 23.514 30.9337 19.9585 30.9337C16.4029 30.9337 15.9876 30.9337 14.5919 30.8503C13.7462 30.847 12.9088 30.6953 12.1163 30.4003C10.9583 29.9487 10.0411 29.0287 9.59087 27.867C9.29679 27.072 9.1456 26.2303 9.14227 25.3837C9.14227 23.9837 9.0592 23.567 9.0592 20.0003C9.0592 16.4337 9.0592 16.017 9.14227 14.617C9.1456 13.7687 9.29679 12.9287 9.59087 12.1337C10.0411 10.972 10.9583 10.052 12.1163 9.60033C12.9088 9.30533 13.7462 9.15366 14.5919 9.15033C15.9876 9.15033 16.4029 9.06699 19.9585 9.06699M19.9579 24.4502C17.5072 24.4502 15.5217 22.4585 15.5217 20.0002C15.5217 17.5418 17.5072 15.5502 19.9579 15.5502C22.4085 15.5502 24.394 17.5418 24.394 20.0002C24.384 22.4552 22.4052 24.4402 19.9579 24.4502M19.9578 13.1502C16.1863 13.1502 13.1292 16.2168 13.1292 20.0002C13.1292 23.7835 16.1863 26.8502 19.9578 26.8502C23.7294 26.8502 26.7865 23.7835 26.7865 20.0002C26.7865 16.2168 23.7294 13.1502 19.9578 13.1502M27.0516 11.2837C27.9321 11.2837 28.6482 12.0003 28.6482 12.8837C28.6482 13.767 27.9321 14.4837 27.0516 14.4837C26.1726 14.4837 25.4566 13.767 25.4566 12.8837C25.4566 12.0003 26.1726 11.2837 27.0516 11.2837',
              fill: 'white',
            }),
          ),
          t.default.createElement('g', { mask: 'url(#mask0)' }),
        ),
        c = t.default.createElement(
          'svg',
          { width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
            fill: '#FF0000',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M17.2497 24.2203V16.8934L24.4497 20.5731L17.2497 24.2203ZM33.0667 15.6235C32.9367 14.6873 32.57 13.7983 32 13.0347C31.295 12.3394 30.335 11.9454 29.3333 11.9438C25.6 11.667 20 11.667 20 11.667C20 11.667 14.4 11.667 10.6667 11.9438C9.66499 11.9454 8.70499 12.3394 7.99999 13.0347C7.42999 13.7983 7.06332 14.6873 6.93332 15.6235C6.76666 17.0237 6.67832 18.4305 6.66666 19.8405V21.8106C6.67832 23.2206 6.76666 24.6273 6.93332 26.0276C7.06166 26.9654 7.42666 27.8544 7.99999 28.6164C8.80666 29.3246 9.84832 29.7235 10.9333 29.7398C13.0667 29.9352 20 30.0003 20 30.0003C20 30.0003 25.6 30.0003 29.3333 29.7235C30.3367 29.7121 31.295 29.3149 32 28.6164C32.5717 27.8544 32.94 26.9654 33.0667 26.0276C33.2317 24.6273 33.3217 23.2206 33.3333 21.8106V19.8405C33.3217 18.4305 33.2317 17.0237 33.0667 15.6235V15.6235Z',
            fill: 'white',
          }),
          t.default.createElement(
            'mask',
            {
              id: 'mask0',
              'mask-type': 'alpha',
              maskUnits: 'userSpaceOnUse',
              x: '6',
              y: '11',
              width: '28',
              height: '20',
            },
            t.default.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M17.2497 24.2203V16.8934L24.4497 20.5731L17.2497 24.2203ZM33.0667 15.6235C32.9367 14.6873 32.57 13.7983 32 13.0347C31.295 12.3394 30.335 11.9454 29.3333 11.9438C25.6 11.667 20 11.667 20 11.667C20 11.667 14.4 11.667 10.6667 11.9438C9.66499 11.9454 8.70499 12.3394 7.99999 13.0347C7.42999 13.7983 7.06332 14.6873 6.93332 15.6235C6.76666 17.0237 6.67832 18.4305 6.66666 19.8405V21.8106C6.67832 23.2206 6.76666 24.6273 6.93332 26.0276C7.06166 26.9654 7.42666 27.8544 7.99999 28.6164C8.80666 29.3246 9.84832 29.7235 10.9333 29.7398C13.0667 29.9352 20 30.0003 20 30.0003C20 30.0003 25.6 30.0003 29.3333 29.7235C30.3367 29.7121 31.295 29.3149 32 28.6164C32.5717 27.8544 32.94 26.9654 33.0667 26.0276C33.2317 24.6273 33.3217 23.2206 33.3333 21.8106V19.8405C33.3217 18.4305 33.2317 17.0237 33.0667 15.6235V15.6235Z',
              fill: 'white',
            }),
          ),
          t.default.createElement('g', { mask: 'url(#mask0)' }),
        ),
        f = t.default.createElement(
          'svg',
          { width: '40', height: '40', viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z',
            fill: '#EA143D',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M33.3249 15.0002C32.9097 14.9925 32.5609 14.6859 32.4999 14.2752C32.1857 9.83221 28.6438 6.30102 24.1999 6.0002C23.9785 5.99426 23.7694 5.89676 23.6225 5.73092C23.4756 5.56508 23.4041 5.34575 23.4249 5.1252C23.464 4.67146 23.8445 4.32353 24.2999 4.3252C29.5788 4.68458 33.7888 8.87325 34.1749 14.1502C34.2038 14.6109 33.8598 15.0104 33.3999 15.0502L33.3249 15.0002ZM23.4245 29.7002C23.4272 30.5612 23.2483 31.413 22.8995 32.2002C22.4055 33.3986 21.2897 34.2258 19.9995 34.3502C19.0176 34.4239 18.0315 34.4239 17.0495 34.3502H14.5495C13.4344 34.3658 12.3639 33.9123 11.5995 33.1002C11.0636 32.3735 10.7588 31.5024 10.7245 30.6002V27.7252H15.4745V29.2002C15.4745 29.6752 15.4745 30.4252 16.2995 30.6002C16.9134 30.767 17.5606 30.767 18.1745 30.6002C18.5495 30.4252 18.6745 29.9752 18.7495 29.1752C18.8177 28.2014 18.8177 27.224 18.7495 26.2502C18.7168 25.6702 18.3723 25.1534 17.8495 24.9002C17.7642 24.8547 17.6572 24.7979 17.5329 24.7318L17.5328 24.7318C16.5639 24.2172 14.5408 23.1427 13.4995 22.5002C12.5482 22.049 11.7363 21.3494 11.1495 20.4752C10.8596 19.8391 10.7063 19.1492 10.6995 18.4502C10.6314 17.351 10.7241 16.2477 10.9745 15.1752C11.1493 14.4581 11.61 13.8438 12.2495 13.4752C13.6314 12.7676 15.1735 12.4316 16.7245 12.5002C18.434 12.4019 20.1435 12.6925 21.7245 13.3502C22.4679 13.861 22.9445 14.6768 23.0245 15.5752V18.3002H20.7745H18.7995V17.1002C18.7825 16.7897 18.6377 16.5001 18.3995 16.3002C17.7046 16.0502 16.9444 16.0502 16.2495 16.3002C15.6655 16.5023 15.6466 17.0677 15.6306 17.543C15.6288 17.5968 15.627 17.6494 15.6245 17.7002C15.5672 18.2521 15.7389 18.8034 16.0995 19.2252C16.4435 19.5929 17.5529 20.2195 18.7709 20.9074C20.1198 21.6693 21.6019 22.5064 22.3245 23.1502C23.1577 23.8425 23.6048 24.8949 23.5245 25.9752C23.4921 26.1049 23.4702 27.3599 23.4519 28.4032L23.4519 28.4034L23.4519 28.4036C23.4421 28.9688 23.4333 29.4718 23.4245 29.7002ZM28.4243 15.1502C28.4632 15.5763 28.8215 15.902 29.2493 15.9002C29.4685 15.8812 29.671 15.7754 29.8118 15.6064C29.9527 15.4374 30.0202 15.2192 29.9993 15.0002C29.7267 11.696 27.2256 9.00882 23.9493 8.5002H23.6743C23.4552 8.47201 23.234 8.53286 23.0601 8.66913C22.8863 8.80541 22.7743 9.00571 22.7493 9.2252C22.7046 9.67785 23.0241 10.0855 23.4743 10.1502H23.6993C26.2375 10.5306 28.188 12.5946 28.4243 15.1502Z',
            fill: 'white',
          }),
        ),
        o = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7.20586 18C6.88939 18 6.58586 17.8689 6.3635 17.6333L0.334061 11.2576C-0.118883 10.7792 -0.110648 10.0094 0.355237 9.5407C0.819945 9.07324 1.56466 9.08174 2.01878 9.56256L7.13174 14.9682L17.9153 1.44202C18.3283 0.924775 19.0695 0.850709 19.5706 1.27689C20.073 1.70307 20.1448 2.46802 19.7318 2.98648L8.1141 17.558C7.90233 17.8227 7.58939 17.9842 7.25527 17.9988C7.2388 18 7.22233 18 7.20586 18Z',
            fill: 'white',
          }),
        ),
        v = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.2383 10.647C5.2415 10.6508 5.2442 10.6548 5.24745 10.6585L8.74745 14.6585C8.9451 14.8845 9.22205 15 9.5004 15C9.73415 15 9.9688 14.9186 10.1585 14.7526C10.5742 14.3889 10.6163 13.7571 10.2526 13.3415L8.20375 11H14C14.5523 11 15 10.5523 15 10C15 9.44774 14.5523 9.00004 14 9.00004H8.20375L10.2526 6.65851C10.6163 6.24291 10.5742 5.61117 10.1585 5.24747C9.74285 4.88372 9.1111 4.92587 8.74745 5.34157L5.24745 9.34154C5.2442 9.34524 5.2415 9.34924 5.2383 9.35299C5.22835 9.36469 5.21905 9.37679 5.20965 9.38894C5.1997 9.40179 5.1898 9.41469 5.18055 9.42789C5.17195 9.44014 5.1639 9.45279 5.1559 9.46544C5.1471 9.47934 5.13845 9.49319 5.1304 9.50739C5.12305 9.52039 5.11615 9.53359 5.10935 9.54694C5.10195 9.56144 5.09485 9.57604 5.0882 9.59079C5.082 9.60459 5.0762 9.61849 5.0706 9.63259C5.0647 9.64759 5.0592 9.66269 5.054 9.67789C5.04915 9.69224 5.04445 9.70659 5.0402 9.72124C5.03555 9.73724 5.0316 9.75329 5.0278 9.76949C5.02445 9.78364 5.021 9.79774 5.01825 9.81209C5.01465 9.83084 5.01215 9.84969 5.00965 9.86854C5.00805 9.88069 5.00595 9.89264 5.0048 9.90489C4.9988 9.96819 4.9988 10.0318 5.0048 10.0951C5.00595 10.1074 5.00805 10.1193 5.00965 10.1315C5.01215 10.1503 5.01465 10.1692 5.01825 10.1879C5.021 10.2023 5.02445 10.2164 5.0278 10.2305C5.0316 10.2467 5.03555 10.2628 5.0402 10.2788C5.04445 10.2934 5.04915 10.3078 5.054 10.3221C5.0592 10.3373 5.0647 10.3524 5.0706 10.3674C5.0762 10.3815 5.082 10.3954 5.0882 10.4092C5.09485 10.424 5.10195 10.4386 5.10935 10.4531C5.11615 10.4664 5.12305 10.4796 5.1304 10.4926C5.13845 10.5068 5.1471 10.5207 5.1559 10.5346C5.1639 10.5472 5.17195 10.5599 5.18055 10.5721C5.1898 10.5854 5.1997 10.5982 5.20965 10.6111C5.21905 10.6232 5.22835 10.6354 5.2383 10.647Z',
            fill: 'black',
          }),
        ),
        m = t.default.createElement(
          'svg',
          { width: '21', height: '20', viewBox: '0 0 21 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M10.6998 16.9603C10.1694 16.5184 10.0978 15.7301 10.5397 15.1998L13.8312 11.25H4.5C3.80964 11.25 3.25 10.6904 3.25 10C3.25 9.30968 3.80964 8.75003 4.5 8.75003H13.8312L10.5397 4.80026C10.0978 4.26992 10.1694 3.48171 10.6998 3.03975C11.2301 2.5978 12.0183 2.66945 12.4603 3.1998L17.4603 9.1998C17.8466 9.66336 17.8466 10.3367 17.4603 10.8003L12.4603 16.8003C12.0183 17.3306 11.2301 17.4023 10.6998 16.9603Z',
            fill: 'black',
          }),
        ),
        s = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.00005 5.00195H3.00005C2.10915 5.00195 1.66298 3.92481 2.29294 3.29485L5.29294 0.294847C5.68347 -0.0956783 6.31663 -0.0956783 6.70716 0.294847L9.70716 3.29485C10.3371 3.92481 9.89096 5.00195 9.00005 5.00195H7.00005L7.00005 14.002C7.00005 14.5542 6.55234 15.002 6.00005 15.002C5.48722 15.002 5.06454 14.6159 5.00678 14.1186L5.00005 14.002L5.00005 5.00195ZM15.0001 10.002H17.0001C17.891 10.002 18.3371 11.0791 17.7072 11.7091L14.7072 14.7091C14.3166 15.0996 13.6835 15.0996 13.2929 14.7091L10.2929 11.7091C9.66298 11.0791 10.1091 10.002 11.0001 10.002L13.0001 10.002L13.0001 1.00195L13.0068 0.885332C13.0645 0.387993 13.4872 0.00195313 14.0001 0.00195313C14.5523 0.00195313 15.0001 0.449668 15.0001 1.00195L15.0001 10.002Z',
            fill: 'black',
          }),
        ),
        L = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14.7071 13.2929C15.0977 13.6835 15.0977 14.3166 14.7071 14.7071C14.5119 14.9024 14.256 15 14 15C13.7441 15 13.4882 14.9024 13.2929 14.7071L10 11.4142L6.70711 14.7071C6.51186 14.9024 6.25591 15 6.00001 15C5.74411 15 5.48816 14.9024 5.29291 14.7071C4.90236 14.3166 4.90236 13.6835 5.29291 13.2929L8.58581 10L5.29291 6.70711C4.90236 6.31661 4.90236 5.68346 5.29291 5.29291C5.68341 4.90236 6.31656 4.90236 6.70711 5.29291L10 8.58581L13.2929 5.29291C13.6834 4.90236 14.3166 4.90236 14.7071 5.29291C15.0977 5.68346 15.0977 6.31661 14.7071 6.70711L11.4142 10L14.7071 13.2929Z',
            fill: '#0C6DCD',
          }),
        ),
        u = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5.70711 7.29289L10 11.5858L14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L10.7071 13.7071C10.3166 14.0976 9.68342 14.0976 9.29289 13.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289Z',
            fill: '#2378CD',
          }),
        ),
        w = t.default.createElement(
          'svg',
          { width: '12', height: '12', viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5 5V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5Z',
            fill: 'black',
          }),
        ),
        g = t.default.createElement(
          'svg',
          { width: '14', height: '2', viewBox: '0 0 14 2', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M1 2H13C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z',
            fill: 'black',
          }),
        ),
        p = t.default.createElement(
          'svg',
          { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M19.1116 0.185115C19.2662 -0.00554698 19.5322 -0.0527242 19.74 0.0612919L19.8149 0.111639L23.9939 3.50002L19.8149 6.88839C19.6004 7.06231 19.2855 7.02941 19.1116 6.81492C18.957 6.62426 18.9658 6.35429 19.1204 6.1745L19.1851 6.11164L21.7884 4.00002H5.5C3.18372 4.00002 1.27619 5.75004 1.02746 8.00002H4.07644C4.52454 8.00002 4.91244 8.29698 5.03588 8.71788L5.06283 8.83562L5.42356 11H14.4884C14.496 10.9998 14.5037 10.9998 14.5113 11H16.5C16.7761 11 17 11.2239 17 11.5C17 11.7455 16.8231 11.9496 16.5899 11.992L16.5 12H15.2384L16.838 16H23.5C23.8544 16 24.0867 16.3534 23.9706 16.6699L23.9341 16.7481L20.3616 23H22.5C22.7761 23 23 23.2239 23 23.5C23 23.7455 22.8231 23.9496 22.5899 23.992L22.5 24H19.5088C19.5026 24.0001 19.4965 24.0001 19.4903 24H1H0V8.50002C0 5.53654 2.34378 3.12048 5.27879 3.00438L5.5 3.00002H21.7903L19.1851 0.888394C18.9944 0.733803 18.9473 0.467841 19.0613 0.26L19.1116 0.185115ZM5.00824 12C5.00233 12.0001 4.99644 12.0001 4.99056 12H1V14H2.5C2.77614 14 3 14.2239 3 14.5C3 14.7455 2.82312 14.9496 2.58988 14.992L2.5 15H1V23H19.2098L22.637 17H16.5C16.3248 17 16.1646 16.9086 16.0747 16.7629L16.0358 16.6857L14.1615 12H5.00824ZM4.07644 9.00002L4.40977 11H1V9.00002H4.07644ZM7.5 14C7.77614 14 8 14.2239 8 14.5C8 14.7455 7.82312 14.9496 7.58988 14.992L7.5 15H5.5C5.22386 15 5 14.7762 5 14.5C5 14.2546 5.17688 14.0504 5.41012 14.0081L5.5 14H7.5ZM13 14.5C13 14.2239 12.7761 14 12.5 14H10.5L10.4101 14.0081C10.1769 14.0504 10 14.2546 10 14.5C10 14.7762 10.2239 15 10.5 15H12.5L12.5899 14.992C12.8231 14.9496 13 14.7455 13 14.5Z',
            fill: 'black',
          }),
        ),
        H = t.default.createElement(
          'svg',
          { width: '22', height: '21', viewBox: '0 0 22 21', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.5 0H16.5C17.9096 0 19.161 0.901993 19.6068 2.23925L19.9903 3.40194L20.962 8.262L21.0172 8.32039C21.596 8.97446 21.9395 9.80373 21.9927 10.6755L22 10.9142V15.5C22 17.0345 20.9294 17.8663 19 17.9851V19.5C19 20.3284 18.3284 21 17.5 21C16.6716 21 16 20.3284 16 19.5V18H6V19.5C6 20.3284 5.32843 21 4.5 21C3.67157 21 3 20.3284 3 19.5V17.9852C1.15527 17.8721 0.0945817 17.1086 0.00503411 15.6721L0 15.5V10.9142C0 9.96471 0.345127 9.04832 0.980786 8.32303L1.037 8.262L2.02566 3.34189L2.3932 2.23925C2.81395 0.977002 3.95595 0.0964934 5.29582 0.00657544L5.5 0ZM16 17H18.5C20.2565 17 21 16.5043 21 15.5V10.9142C21 10.2083 20.7439 9.52885 20.2832 9H1.71684C1.25508 9.53001 1 10.2099 1 10.9142L0.999766 15.4847L1.00383 15.6256C1.06081 16.5374 1.81249 17 3.5 17H6H16ZM17 18V19.5C17 19.7455 17.1769 19.9496 17.4101 19.9919L17.5 20C17.7761 20 18 19.7761 18 19.5V18H17ZM4 18H5V19.5C5 19.7761 4.77614 20 4.5 20L4.41012 19.9919C4.17688 19.9496 4 19.7455 4 19.5V18ZM5.51678 0.999718L5.34619 1.00516C4.4275 1.06701 3.63414 1.67872 3.34189 2.55548L2.99029 3.59806L2.1099 8H19.8907L19.0257 3.65811L18.6581 2.55548C18.3485 1.62656 17.4792 1 16.5 1L5.51678 0.999718ZM4 15C4.55228 15 5 14.5523 5 14C5 13.4477 4.55228 13 4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15ZM18 15C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13C17.4477 13 17 13.4477 17 14C17 14.5523 17.4477 15 18 15ZM7.5 13C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14H14.5C14.7761 14 15 13.7761 15 13.5C15 13.2239 14.7761 13 14.5 13H7.5Z',
            fill: 'black',
          }),
        ),
        E = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M21.5 139c.184 0 .351.101.438.259l.036.083.886 2.658h6.64c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-.191l1.5 3H34.5c.359 0 .59.361.467.679l-.038.078L32.382 151H34.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-23c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h.947l-.39-3.9c-.054-.55.346-1.04.896-1.095l.063-.004 1.601-.001c.224 0 .417-.148.48-.357l.016-.081.336-2.686c.058-.462.425-.817.878-.87l.114-.006H18l.001-2.5c0-.245.177-.45.41-.492l.09-.008h3zm6.69 4H16.441l-.335 2.686c-.088.704-.655 1.243-1.348 1.307l-.14.007h-1.566l.4 4h17.764l2.4-4H30.5c-.158 0-.304-.074-.398-.197l-.05-.08L28.19 143zm-8.69 1c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h2zm4 0c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h2zm4 0c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h2zm-6.361-4H19l-.001 2h2.806l-.666-2z',
              transform: 'translate(-11 -134)',
            }),
          ),
        ),
        M = t.default.createElement(
          'svg',
          { width: '94', height: '24', viewBox: '0 0 94 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            d: 'M89.92 18V8.944H87.728V7.88C88.752 7.88 89.4587 7.75733 89.848 7.512C90.2373 7.26667 90.448 6.90667 90.48 6.432H91.672V18H89.92Z',
            fill: 'black',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M63.5 3H74.5C75.9096 3 77.161 3.90199 77.6068 5.23925L77.9903 6.40194L78.962 11.262L79.0172 11.3204C79.596 11.9745 79.9395 12.8037 79.9927 13.6755L80 13.9142V18.5C80 20.0345 78.9294 20.8663 77 20.9851V22.5C77 23.3284 76.3284 24 75.5 24C74.6716 24 74 23.3284 74 22.5V21H64V22.5C64 23.3284 63.3284 24 62.5 24C61.6716 24 61 23.3284 61 22.5V20.9852C59.1553 20.8721 58.0946 20.1086 58.005 18.6721L58 18.5V13.9142C58 12.9647 58.3451 12.0483 58.9808 11.323L59.037 11.262L60.0257 6.34189L60.3932 5.23925C60.814 3.977 61.9559 3.09649 63.2958 3.00658L63.5 3ZM74 20H76.5C78.2565 20 79 19.5043 79 18.5V13.9142C79 13.2083 78.7439 12.5289 78.2832 12H59.7168C59.2551 12.53 59 13.2099 59 13.9142L58.9998 18.4847L59.0038 18.6256C59.0608 19.5374 59.8125 20 61.5 20H64H74ZM75 21V22.5C75 22.7455 75.1769 22.9496 75.4101 22.9919L75.5 23C75.7761 23 76 22.7761 76 22.5V21H75ZM62 21H63V22.5C63 22.7761 62.7761 23 62.5 23L62.4101 22.9919C62.1769 22.9496 62 22.7455 62 22.5V21ZM63.5168 3.99972L63.3462 4.00516C62.4275 4.06701 61.6341 4.67872 61.3419 5.55548L60.9903 6.59806L60.1099 11H77.8907L77.0257 6.65811L76.6581 5.55548C76.3485 4.62656 75.4792 4 74.5 4L63.5168 3.99972ZM62 18C62.5523 18 63 17.5523 63 17C63 16.4477 62.5523 16 62 16C61.4477 16 61 16.4477 61 17C61 17.5523 61.4477 18 62 18ZM76 18C76.5523 18 77 17.5523 77 17C77 16.4477 76.5523 16 76 16C75.4477 16 75 16.4477 75 17C75 17.5523 75.4477 18 76 18ZM65.5 16C65.2239 16 65 16.2239 65 16.5C65 16.7761 65.2239 17 65.5 17H72.5C72.7761 17 73 16.7761 73 16.5C73 16.2239 72.7761 16 72.5 16H65.5Z',
            fill: 'black',
          }),
          t.default.createElement('path', {
            d: 'M30.88 9.856C30.88 9.08267 31.064 8.432 31.432 7.904C31.8053 7.37067 32.3013 6.96533 32.92 6.688C33.544 6.41067 34.2347 6.272 34.992 6.272C35.808 6.272 36.5307 6.38667 37.16 6.616C37.7893 6.84533 38.2827 7.184 38.64 7.632C39.0027 8.08 39.184 8.632 39.184 9.288C39.184 9.864 39.0053 10.3787 38.648 10.832C38.296 11.2853 37.7467 11.64 37 11.896C37.7307 12.0933 38.3253 12.4347 38.784 12.92C39.248 13.4053 39.48 14.0267 39.48 14.784C39.48 15.504 39.28 16.1173 38.88 16.624C38.48 17.1307 37.936 17.5173 37.248 17.784C36.5653 18.0507 35.792 18.1813 34.928 18.176C33.68 18.1653 32.68 17.8427 31.928 17.208C31.176 16.568 30.784 15.7013 30.752 14.608H32.44C32.552 15.3067 32.8347 15.8373 33.288 16.2C33.7413 16.5573 34.304 16.736 34.976 16.736C35.792 16.736 36.44 16.552 36.92 16.184C37.4 15.816 37.64 15.3387 37.64 14.752C37.64 14.1067 37.3787 13.6107 36.856 13.264C36.3333 12.9173 35.688 12.7387 34.92 12.728L33.856 12.704V11.28L34.848 11.248C35.3333 11.2373 35.7627 11.1467 36.136 10.976C36.5093 10.8 36.8027 10.5707 37.016 10.288C37.2347 10.0053 37.344 9.69333 37.344 9.352C37.344 8.888 37.1333 8.49067 36.712 8.16C36.2907 7.82933 35.7093 7.664 34.968 7.664C34.568 7.664 34.1867 7.73867 33.824 7.888C33.4667 8.03733 33.1707 8.27467 32.936 8.6C32.7067 8.92 32.5813 9.33867 32.56 9.856H30.88Z',
            fill: 'black',
          }),
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M17 5C17 2.23858 14.7614 0 12 0C9.2386 0 7.00002 2.23858 7.00002 5C7.00002 7.76142 9.2386 10 12 10C14.7614 10 17 7.76142 17 5ZM8.00002 5C8.00002 2.79086 9.79088 1 12 1C14.2092 1 16 2.79086 16 5C16 7.20914 14.2092 9 12 9C9.79088 9 8.00002 7.20914 8.00002 5ZM7.37875 11.0149L5.88244 11.389C4.16764 11.8177 2.86262 13.2106 2.54643 14.9497L1.00809 23.4106C0.952283 23.7175 1.18807 24 1.50002 24H7.50002H16.4999H16.5H22.4999C22.8118 24 23.0476 23.7175 22.9918 23.4106L21.4535 14.9497C21.1373 13.2106 19.8323 11.8177 18.1175 11.389L16.6211 11.0149C16.3056 10.936 15.9999 11.1747 15.9999 11.5V23H8.00002V11.5C8.00002 11.1747 7.69433 10.936 7.37875 11.0149ZM7.00002 12.14V23H2.09802L3.5303 15.1286C3.77623 13.7759 4.79124 12.6926 6.12497 12.3592L7.00002 12.14ZM16.9999 12.14V23H21.9019L20.4696 15.1286C20.2237 13.7759 19.2087 12.6926 17.8749 12.3592L16.9999 12.14Z',
            fill: 'black',
          }),
        ),
        V = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M20.583 144.466c.264.07.539-.074.63-.335.08-.268-.067-.552-.33-.638-.883-.283-1.848-.14-2.611.395-.233.145-.305.453-.16.69.082.138.226.225.385.237.102-.001.2-.034.285-.092.528-.366 1.194-.461 1.801-.257zm5.195 6.867l-.392.076c-1.575.318-3.198.318-4.773 0l-.39-.076c-.268-.055-.53.123-.585.394-.054.273.12.539.39.594h.375c1.713.363 3.482.363 5.195 0h.375c.268-.055.444-.32.39-.594-.054-.27-.315-.449-.585-.394zm7.956-6.397l-2.372-5.211c-.778-1.233-1.812-2.279-3.03-3.066-4.626-2.99-10.77-1.617-13.723 3.066l-2.342 5.165c-.562 1.233-.222 2.693.827 3.54l2.236 1.81c.165-5.926 1.32-9.907 3.498-11.837.85-.802 1.994-1.205 3.152-1.109l.78.137-.45.653c0 .09-1.397 2.188 0 3.494.999.59 2.109.963 3.256 1.095 2.403.502 5.12 1.063 5.12 3.433v4.073l2.221-1.81v.062c1.026-.84 1.365-2.274.827-3.495zm-4.055 1.17c0-1.427-1.785-1.915-4.308-2.432-1.333-.14-2.616-.604-3.736-1.35-1.025-1.057-1.244-2.668-.542-3.966-.585.148-1.126.44-1.575.85-1.396 1.216-3.048 4.164-3.183 11.182.135 2.947 4.818 5.577 6.665 5.577 1.876 0 6.68-2.705 6.68-5.713v-4.148zm3.828 3.116l-3.138 2.565c-1.504 2.819-4.237 4.75-7.37 5.214-3.12-.473-5.839-2.403-7.339-5.214l-3.168-2.565c-1.416-1.132-1.887-3.096-1.14-4.756l2.372-5.272c.877-1.423 2.065-2.625 3.47-3.513 5.111-3.234 11.845-1.66 15.038 3.513l2.417 5.272c.747 1.66.276 3.624-1.142 4.756zm-7.37-4.21c-.596 0-1.081.49-1.081 1.094 0 .604.485 1.094 1.082 1.094.597 0 1.081-.49 1.081-1.094 0-.604-.484-1.095-1.081-1.095zm-6.154 2.188c-.597 0-1.081-.49-1.081-1.094 0-.604.484-1.095 1.081-1.095s1.08.491 1.08 1.095-.483 1.094-1.08 1.094z',
              transform: 'translate(-11 -134)',
            }),
          ),
        ),
        x = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M151.333 146.675c0 .638-.5 1.155-1.12 1.155-.618 0-1.12-.517-1.12-1.155 0-.637.502-1.155 1.12-1.155.62 0 1.12.518 1.12 1.155zm5.35-1.155c.617.008 1.115.52 1.121 1.155 0 .638-.5 1.155-1.12 1.155-.618 0-1.12-.517-1.12-1.155 0-.637.502-1.155 1.12-1.155zm-.908 7.268c.16.228.112.546-.108.712-.677.36-1.434.53-2.196.495-.762.015-1.514-.177-2.181-.555-.168-.14-.228-.378-.149-.586.102-.261.389-.389.644-.284 1.056.572 2.316.572 3.373 0v.06c.215-.11.476-.043.617.158zm7.194-5.214c-.153.628-.629 1.119-1.238 1.276v-3.405c.912.236 1.466 1.188 1.238 2.129zm-2.213-5.984v8.82c0 3.69-3.213 6.585-7.27 6.585-4.058 0-7.272-2.895-7.272-6.585v-2.821c.618-1.758 2.188-2.973 3.999-3.089 2.328.183 4.64-.492 6.53-1.905 1.129-.948 2.56-1.423 4.013-1.335v.33zm-14.542 0c.007-3.616 2.836-6.552 6.34-6.585h1.833c3.026.005 5.634 2.195 6.254 5.25-1.611-.08-3.197.453-4.45 1.5-1.736 1.272-3.857 1.863-5.978 1.665-1.596.029-3.083.842-4 2.19v-4.02zm-1.017 7.41c-.73-.217-1.236-.898-1.251-1.68-.002-.792.511-1.486 1.25-1.695V149zm16.548-4.605v-2.805c-.006-4.19-3.297-7.582-7.358-7.59h-1.833c-4.06.008-7.35 3.4-7.357 7.59v2.91c-1.475.299-2.435 1.772-2.145 3.293.213 1.117 1.06 1.992 2.145 2.212v.345c0 4.32 3.62 7.65 8.289 7.65 4.668 0 8.304-3.33 8.304-7.59v-.511c1.28-.245 2.21-1.398 2.21-2.744.004-1.365-.949-2.533-2.255-2.76z',
              transform: 'translate(-141 -134)',
            }),
          ),
        ),
        z = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M678.002 137.244c.287-.212.653-.291 1.003-.217l4.333.78c.672.142 1.233.6 1.505 1.227.261.65.194 1.385-.18 1.977l-3.01 4.658c-.222.358-.616.574-1.038.57h-.196c-.074.013-.15.013-.225 0-1.28 4.178-3.506 8.761-7.208 8.761-3.701 0-5.943-4.613-7.267-8.747-.085.015-.171.015-.256 0h-.075c-.422.002-.814-.213-1.038-.569l-3.01-4.598c-.393-.626-.449-1.406-.15-2.082.264-.636.828-1.102 1.505-1.243l4.273-.734c.444-.09.901.07 1.189.42.17.194.28.433.316.689 2.981-.573 6.046-.573 9.027 0 .031-.355.214-.68.502-.892zm-.306 1.955c-3.11-.667-6.325-.667-9.434 0l-.647 2.322 3.656 1.497c.444.179.74.602.752 1.079v2.755c0 .79-.374 1.533-1.008 2.007l-2.196 1.648h-.166c.706 1.61 2.087 2.832 3.777 3.34v-2.352l-.662-.988c-.139-.206-.152-.47-.036-.69.116-.218.344-.356.592-.359h1.324c.25.003.477.14.593.36.116.218.102.483-.036.689l-.707 1.063v2.352c3.1-.42 4.995-5.407 5.898-8.627zm-8.32 5.736c-.599 0-1.084.483-1.084 1.079 0 .595.485 1.078 1.083 1.078.599 0 1.084-.483 1.084-1.078 0-.596-.485-1.079-1.084-1.079zm7.372 0c.598 0 1.083.483 1.083 1.079 0 .595-.485 1.078-1.083 1.078s-1.083-.483-1.083-1.078c0-.596.485-1.079 1.083-1.079zm1.926-6.874l-.061.01c-.04.012-.076.034-.105.065-.043.084-.043.184 0 .27l1.881 6.709c.02.096.098.169.196.18.095.025.195-.018.24-.105l3.01-4.658c.178-.346.166-.758-.03-1.093-.136-.338-.438-.582-.798-.644l-4.333-.734zm-11.451-.005l-.06.005-4.273.734c-.373.058-.688.309-.827.659-.168.364-.134.79.09 1.123l2.994 4.613c.045.08.136.123.226.105.098-.011.177-.084.196-.18l1.805-6.71c.052-.082.052-.187 0-.27-.05-.062-.132-.092-.21-.074z',
              transform: 'translate(-661 -134)',
            }),
          ),
        ),
        k = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M285.608 150.84c.132.24.047.548-.187.683-1.395.852-3.13.852-4.524 0-.047-.017-.09-.045-.13-.077-.215-.181-.248-.508-.073-.728.174-.223.49-.257.707-.077 1.086.653 2.43.653 3.517 0 .237-.14.539-.058.68.182l.01.017zm2.606-5.72c0 .708-.554 1.284-1.24 1.292-.695.01-1.264-.563-1.273-1.277-.007-.715.55-1.3 1.244-1.308h.013c.693 0 1.256.578 1.256 1.292zm-7.553 0c0 .714-.562 1.292-1.257 1.292-.694 0-1.257-.578-1.257-1.293 0-.714.563-1.292 1.257-1.292.695 0 1.257.578 1.257 1.292zm13.335 1.565c-.18.75-.75 1.337-1.48 1.523v-4.047c1.086.276 1.749 1.406 1.48 2.524zm-10.749 9.358c-4.587 0-8.307-3.829-8.307-8.552v-5.611c.01-3.762 2.952-6.819 6.608-6.86h3.267c3.682 0 6.667 3.07 6.667 6.86l.074 5.611c0 4.723-3.72 8.552-8.309 8.552zm-9.43-8.552c-.015.24-.015.479 0 .717-.88-.255-1.485-1.083-1.478-2.024-.007-.94.599-1.768 1.478-2.023v3.33zm18.67-4.35v-1.261c-.016-4.352-3.444-7.872-7.672-7.88h-3.267c-4.227.008-7.656 3.528-7.671 7.88v1.248c-1.634.046-2.92 1.444-2.876 3.125.045 1.68 1.404 3.005 3.038 2.959.955 5.192 5.821 8.603 10.866 7.619 3.756-.732 6.693-3.755 7.405-7.62 1.521-.14 2.688-1.454 2.69-3.027.016-1.517-1.055-2.814-2.513-3.042z',
              transform: 'translate(-271 -134)',
            }),
          ),
        ),
        F = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.9933 2.88338C10.9355 2.38604 10.5128 2 10 2C9.44771 2 9 2.44772 9 3V10L9.00867 10.1314C9.0374 10.3481 9.13661 10.5508 9.29289 10.7071L13.2929 14.7071L13.3871 14.7903C13.7794 15.0953 14.3466 15.0676 14.7071 14.7071L14.7903 14.6129C15.0953 14.2206 15.0676 13.6534 14.7071 13.2929L11 9.585V3L10.9933 2.88338Z',
            fill: '#0C6DCD',
          }),
        ),
        R = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L13.3032 1.28263C13.2968 1.28879 13.2906 1.29506 13.2844 1.30142L9.87868 4.70711L9.7796 4.79392C9.60606 4.92684 9.39259 5 9.17157 5H3.41421L1.70711 3.29289L1.6129 3.2097C1.22061 2.90468 0.653377 2.93241 0.292893 3.29289C-0.0976311 3.68342 -0.0976311 4.31658 0.292893 4.70711L2 6.41421V10.5858L0.87868 11.7071L0.743204 11.8518C0.265587 12.3971 0 13.0991 0 13.8284V19L0.00672773 19.1166C0.0644928 19.614 0.487164 20 1 20C1.55228 20 2 19.5523 2 19V13.8284L2.00867 13.697C2.0374 13.4803 2.13661 13.2776 2.29289 13.1213L3.41421 12L3.53309 11.8702C3.83351 11.5116 4 11.0573 4 10.5858V7H9.17157L9.36971 6.99346C10.093 6.94561 10.7772 6.63705 11.2929 6.12132L14.0742 3.33998L17.502 6.082L17.1669 6.41886L17.0731 6.50163C16.8115 6.70484 16.463 6.76691 16.1436 6.66044L15.2649 6.36754L15.1147 6.32383C14.1109 6.07328 13.0678 6.63447 12.7351 7.63246L12.1389 9.421L12.0896 9.59482C12.0207 9.88734 12.0184 10.1924 12.0839 10.4873L12.4201 12H6.18046L6.0155 12.0068L5.85166 12.0272C4.76212 12.2088 4.02608 13.2393 4.20767 14.3288L5.01361 19.1644L5.03941 19.2783C5.17816 19.7594 5.65854 20.0707 6.1644 19.9864C6.70917 19.8956 7.07719 19.3804 6.98639 18.8356L6.18046 14H12.8645L14.0238 19.2169L14.0557 19.3293C14.22 19.8023 14.7163 20.0874 15.2169 19.9762C15.7561 19.8564 16.096 19.3222 15.9762 18.7831L14.0363 10.0535L14.6325 8.26491L15.5111 8.5578L15.7024 8.6146C16.7276 8.88232 17.8249 8.58931 18.5811 7.83308L19.3121 7.10212L19.4151 6.9882C19.8956 6.39904 19.8613 5.52997 19.3121 4.9808C19.2523 4.92321 19.2523 4.9232 19.1885 4.87019L19.1885 4.87016L15.4971 1.91708L15.7071 1.70711L15.7903 1.6129C16.0953 1.22061 16.0676 0.653377 15.7071 0.292893Z',
            fill: '#0C6DCD',
          }),
        ),
        Z = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L13.3032 1.28263C13.2968 1.28879 13.2906 1.29506 13.2844 1.30142L9.87868 4.70711L9.7796 4.79392C9.60606 4.92684 9.39259 5 9.17157 5H3.41421L1.70711 3.29289L1.6129 3.2097C1.22061 2.90468 0.653377 2.93241 0.292893 3.29289C-0.0976311 3.68342 -0.0976311 4.31658 0.292893 4.70711L2 6.41421V10.5858L0.87868 11.7071L0.743204 11.8518C0.265587 12.3971 0 13.0991 0 13.8284V19L0.00672773 19.1166C0.0644928 19.614 0.487164 20 1 20C1.55228 20 2 19.5523 2 19V13.8284L2.00867 13.697C2.0374 13.4803 2.13661 13.2776 2.29289 13.1213L3.41421 12L3.53309 11.8702C3.83351 11.5116 4 11.0573 4 10.5858V7H9.17157L9.36971 6.99346C10.093 6.94561 10.7772 6.63705 11.2929 6.12132L14.0742 3.33998L17.502 6.082L17.1669 6.41886L17.0731 6.50163C16.8115 6.70484 16.463 6.76691 16.1436 6.66044L15.2649 6.36754L15.1147 6.32383C14.1109 6.07328 13.0678 6.63447 12.7351 7.63246L12.1389 9.421L12.0896 9.59482C12.0207 9.88734 12.0184 10.1924 12.0839 10.4873L12.4201 12H6.18046L6.0155 12.0068L5.85166 12.0272C4.76212 12.2088 4.02608 13.2393 4.20767 14.3288L5.01361 19.1644L5.03941 19.2783C5.17816 19.7594 5.65854 20.0707 6.1644 19.9864C6.70917 19.8956 7.07719 19.3804 6.98639 18.8356L6.18046 14H12.8645L14.0238 19.2169L14.0557 19.3293C14.22 19.8023 14.7163 20.0874 15.2169 19.9762C15.7561 19.8564 16.096 19.3222 15.9762 18.7831L14.0363 10.0535L14.6325 8.26491L15.5111 8.5578L15.7024 8.6146C16.7276 8.88232 17.8249 8.58931 18.5811 7.83308L19.3121 7.10212L19.4151 6.9882C19.8956 6.39904 19.8613 5.52997 19.3121 4.9808C19.2523 4.92321 19.2523 4.9232 19.1885 4.87019L19.1885 4.87016L15.4971 1.91708L15.7071 1.70711L15.7903 1.6129C16.0953 1.22061 16.0676 0.653377 15.7071 0.292893Z',
            fill: '#0C6DCD',
          }),
        ),
        B = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2 2H18C19.1046 2 20 2.89543 20 4V16C20 17.1046 19.1046 18 18 18H2C0.89543 18 0 17.1046 0 16V13C0 12.4477 0.447715 12 1 12L1.14926 11.9945C2.18412 11.9182 3 11.0544 3 10C3 8.89543 2.10457 8 1 8C0.447715 8 0 7.55228 0 7V4C0 2.89543 0.89543 2 2 2ZM9.70711 6.29289L9.6129 6.2097L9.5114 6.14038C9.12751 5.91161 8.62334 5.96245 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L10.585 10L8.29289 12.2929L8.2097 12.3871C7.90468 12.7794 7.93241 13.3466 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L12 11.415L14.2929 13.7071L14.3871 13.7903C14.7794 14.0953 15.3466 14.0676 15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929L13.415 10L15.7071 7.70711L15.7903 7.6129C16.0953 7.22061 16.0676 6.65338 15.7071 6.29289C15.3166 5.90237 14.6834 5.90237 14.2929 6.29289L12 8.585L9.70711 6.29289Z',
            fill: '#0C6DCD',
          }),
        ),
        D = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M15 2C15 3.10457 14.1046 4 13 4C11.8954 4 11 3.10457 11 2C11 0.89543 11.8954 0 13 0C14.1046 0 15 0.89543 15 2ZM16.1129 14.9938C16.7045 14.928 17.1186 14.3515 16.9701 13.7575L15.281 7H15.6459L15.7672 7.00735C16.1262 7.0511 16.4377 7.28692 16.5744 7.62861L18.0715 11.3714L18.1211 11.4772C18.3594 11.9175 18.8952 12.1189 19.3714 11.9285C19.8842 11.7234 20.1336 11.1414 19.9285 10.6286L18.4314 6.88583L18.3541 6.7093C17.8593 5.67031 16.8081 5 15.6459 5H14H12L12 5.00003L11.9995 5H9.82793C9.09859 5 8.39663 5.26559 7.85135 5.7432L7.70661 5.87868L6.2924 7.29289C5.90188 7.68342 5.90188 8.31658 6.2924 8.70711C6.65288 9.06759 7.22012 9.09532 7.61241 8.7903L7.70661 8.70711L9.12083 7.29289C9.27711 7.13661 9.47979 7.0374 9.69649 7.00867L9.82793 7H10.7185L9.02936 13.7575C8.88086 14.3515 9.29497 14.928 9.88659 14.9938L9.99951 15H10.9995V19C10.9995 19.5128 11.3855 19.9355 11.8829 19.9933L11.9995 20C12.5123 20 12.935 19.614 12.9928 19.1166L12.9995 19V14H13V19L13.007 19.1332C13.1356 20.3317 15 20.2874 15 19V15H16L16.1129 14.9938ZM2.0868 12C1.50176 12 1.04167 12.5 1.09025 13.083L1.42359 17.083C1.43303 17.1963 1.46111 17.3039 1.50466 17.4029C1.50158 17.4348 1.5 17.4672 1.5 17.5V19L1.50673 19.1166C1.56449 19.614 1.98716 20 2.5 20C3.05229 20 3.5 19.5523 3.5 19V18H4.5V19L4.50673 19.1166C4.56449 19.614 4.98716 20 5.5 20C6.05229 20 6.5 19.5523 6.5 19V17.5L6.49451 17.4048C6.53853 17.3053 6.56691 17.1971 6.57641 17.083L6.90975 13.083C6.95833 12.5 6.49824 12 5.9132 12H2.0868ZM5 9C5.55229 9 6 9.44771 6 10C6 10.5128 5.61396 10.9355 5.11662 10.9933L5 11H3C2.44772 11 2 10.5523 2 10C2 9.48716 2.38604 9.06449 2.88338 9.00673L3 9H5Z',
            fill: '#0C6DCD',
          }),
        ),
        b = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M10 0H13C13.5523 0 14 0.447715 14 1V2H16C16.5128 2 16.9355 2.38604 16.9933 2.88338L17 3V5H17.5C18.2797 5 18.9204 5.59489 18.9931 6.35554L19 6.5V9.99997C19.6426 10.4875 19.9449 11.333 19.7135 12.1427L18.04 18H19L19.1166 18.0067C19.614 18.0645 20 18.4872 20 19C20 19.5523 19.5523 20 19 20H1L0.883379 19.9933C0.38604 19.9355 0 19.5128 0 19V12L0.00672722 11.8834C0.0644923 11.386 0.487164 11 1 11L1.11662 11.0067C1.61396 11.0645 2 11.4872 2 12V18H4.95999L3.28646 12.1427L3.2485 11.9866C3.09529 11.2261 3.39859 10.4562 4 9.99997V6.5C4 5.7203 4.59489 5.07955 5.35554 5.00687L5.5 5H6V3C6 2.48716 6.38604 2.06449 6.88338 2.00673L7 2H9V1C9 0.447715 9.44771 0 10 0ZM13 4H10H8V6C8 6.51284 7.61396 6.93551 7.11662 6.99327L7 7H6V9.12297L11.1286 7.07152L11.2499 7.03179C11.4549 6.97881 11.6727 6.99205 11.8714 7.07152L17 9.12297V7H16C15.4872 7 15.0645 6.61396 15.0067 6.11662L15 6V4H13ZM15.9997 18C15.9998 17.9092 16.0123 17.8169 16.0385 17.7253L17.7905 11.5932L11.5 9.077L5.20951 11.5932L6.96152 17.7253L6.98709 17.8393C6.99592 17.8931 7.00023 17.9468 7.00026 18H15.9997Z',
            fill: '#0C6DCD',
          }),
        ),
        W = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M16.6616 0.0584885L15.0513 0.595259C13.8263 1.0036 13 2.15002 13 3.44131V7.42942C13 8.43248 13.5013 9.36918 14.3359 9.92557L16 11.035V18.9998L16.0067 19.1164C16.0645 19.6138 16.4872 19.9998 17 19.9998C17.5523 19.9998 18 19.5521 18 18.9998V10.4998V0.99979C18 0.682972 17.8559 0.409371 17.6368 0.228709C17.5685 0.172238 17.4925 0.124669 17.4108 0.0877761C17.2242 0.0032706 17.01 -0.0251305 16.7939 0.0210563C16.7486 0.0305456 16.7044 0.0430986 16.6616 0.0584885ZM9 -0.00020993C9.51284 -0.00020993 9.93551 0.38583 9.99327 0.883169L10 0.99979V6.76372C10 7.8332 9.4313 8.81628 8.51706 9.35191L8.34164 9.447L7.34164 9.947C7.23014 10.0028 7.11603 10.0511 7 10.0922V18.9998C7 19.5521 6.55228 19.9998 6 19.9998C5.48716 19.9998 5.06449 19.6138 5.00673 19.1164L5 18.9998V10.0922C4.95158 10.0751 4.90349 10.0566 4.85578 10.037L4.65836 9.947L3.65836 9.447C2.70179 8.96872 2.07683 8.02041 2.00661 6.96315L2 6.76372V0.99979C2 0.447505 2.44772 -0.00020993 3 -0.00020993C3.51284 -0.00020993 3.93551 0.38583 3.99327 0.883169L4 0.99979V6.76372C4 7.10041 4.16909 7.41141 4.4446 7.59533L4.55279 7.65815L5.55279 8.15815C5.7941 8.2788 6.07203 8.29604 6.3238 8.20986L6.44721 8.15815L7.44721 7.65815C7.74835 7.50758 7.9509 7.21726 7.9922 6.88858L8 6.76372V0.99979C8 0.447505 8.44772 -0.00020993 9 -0.00020993ZM6.99327 0.883169C6.93551 0.38583 6.51284 -0.00020993 6 -0.00020993C5.44772 -0.00020993 5 0.447505 5 0.99979V5.99979L5.00673 6.11641C5.06449 6.61375 5.48716 6.99979 6 6.99979C6.55228 6.99979 7 6.55207 7 5.99979V0.99979L6.99327 0.883169Z',
            fill: '#0C6DCD',
          }),
        ),
        A = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M19.8 5.4C17.6002 2.46692 14.2996 1 10 1C5.70038 1 2.39981 2.46692 0.199998 5.4C-0.131373 5.84183 -0.04183 6.46863 0.399998 6.8C0.841826 7.13137 1.46863 7.04183 1.8 6.6C3.60019 4.19975 6.29962 3 10 3C13.7004 3 16.3998 4.19975 18.2 6.6C18.5314 7.04183 19.1582 7.13137 19.6 6.8C20.0418 6.46863 20.1314 5.84183 19.8 5.4ZM12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17C8 15.8954 8.89543 15 10 15C11.1046 15 12 15.8954 12 17ZM10 5C12.9364 5 15.5226 6.10836 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711C14.4774 7.89164 12.3969 7 10 7C7.60306 7 5.52258 7.89164 3.7071 9.70711C3.31658 10.0976 2.68342 10.0976 2.29289 9.70711C1.90237 9.31658 1.90237 8.68342 2.29289 8.29289C4.47742 6.10836 7.0636 5 10 5ZM14.7071 11.2929C13.2006 9.78634 11.6279 9 10 9C8.37213 9 6.79944 9.78634 5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071C5.68341 13.0976 6.31658 13.0976 6.7071 12.7071C7.86722 11.547 8.9612 11 10 11C11.0388 11 12.1328 11.547 13.2929 12.7071C13.6834 13.0976 14.3166 13.0976 14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929Z',
            fill: '#0C6DCD',
          }),
        ),
        j = t.default.createElement(
          'svg',
          { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
          t.default.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M11 4C12.1046 4 13 3.10457 13 2C13 0.89543 12.1046 0 11 0C9.89543 0 9 0.89543 9 2C9 3.10457 9.89543 4 11 4ZM10 4C10.6123 4 11.0712 4.54158 10.9915 5.13148L10.9701 5.24254L9.281 12H15C15.3913 12 15.7427 12.2276 15.9056 12.5758L15.9487 12.6838L17.9487 18.6838C18.1233 19.2077 17.8402 19.774 17.3162 19.9487C16.8297 20.1109 16.3066 19.8783 16.0946 19.4247L16.0513 19.3162L14.279 14H8C7.3877 14 6.92883 13.4584 7.00851 12.8685L7.02986 12.7575L8.718 6H7.66666C7.49357 6 7.32421 6.04491 7.17476 6.12935L7.06666 6.2L3.6 8.8C3.15817 9.13137 2.53137 9.04183 2.2 8.6C1.89412 8.19216 1.94688 7.62671 2.30432 7.2815L2.4 7.2L5.86666 4.6C6.32825 4.25381 6.87858 4.04899 7.45107 4.00775L7.66666 4H10ZM6.46447 9.1358C6.19775 8.65219 5.58949 8.47636 5.10588 8.74308C3.20597 9.79091 2 11.7899 2 14C2 17.3137 4.68629 20 8 20C10.2701 20 12.3144 18.7275 13.3359 16.7461C13.5889 16.2552 13.3961 15.6521 12.9052 15.3991C12.4143 15.146 11.8112 15.3388 11.5582 15.8297C10.8765 17.152 9.51406 18 8 18C5.79086 18 4 16.2091 4 14C4 12.5258 4.80358 11.1938 6.07175 10.4944C6.55536 10.2277 6.73119 9.61941 6.46447 9.1358Z',
            fill: '#0C6DCD',
          }),
        ),
        y = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#FFE62F',
              d: 'M2 19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3.663H2V19z',
            }),
            t.default.createElement('path', { fill: '#F05B4E', d: 'M2 15.325h20V8.663H2z' }),
            t.default.createElement('path', { fill: '#494847', d: 'M22 5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v3.662h20V5z' }),
          ),
        ),
        U = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#F05B4E',
              d: 'M21.763 3.838A2.984 2.984 0 0 0 19 2h-7.237v7.938H22V5c0-.4-.08-.795-.237-1.162zM11.763 22H19a3.034 3.034 0 0 0 1.45-.387 3.2 3.2 0 0 0 .675-.488c.223-.226.404-.487.539-.776.219-.416.333-.879.336-1.35v-5.313H11.763V22zM2 13.686V19a2.946 2.946 0 0 0 .514 1.676c.106.16.227.311.362.45.278.269.605.485.963.636C4.206 21.92 4.6 22 5 22h3.013v-8.314H2zM8.013 2H5a2.988 2.988 0 0 0-3 2.975V10h6.013V2z',
            }),
            t.default.createElement('path', {
              fill: '#FFF',
              d: 'M8.013 2v7.938H2v3.75h6.013V22h3.75v-8.313H22v-3.75H11.763V2z',
            }),
          ),
        ),
        O = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#F05B4E',
              d: 'M19 2h-3.663v20H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', { fill: '#FFF', d: 'M8.662 22h6.675V2H8.663z' }),
            t.default.createElement('path', {
              fill: '#0083B7',
              d: 'M5 2a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3h3.687V2H5z',
            }),
          ),
        ),
        S = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', { fill: '#FFF', d: 'M8.662 22h6.675V2H8.663z' }),
            t.default.createElement('path', {
              fill: '#00AA6A',
              d: 'M5 2a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3h3.687V2H5z',
            }),
            t.default.createElement('path', {
              fill: '#F6971B',
              d: 'M19 2h-3.663v20H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
          ),
        ),
        I = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#BE4254',
              d: 'M2 19a2.988 2.988 0 0 0 2.975 3H19a2.986 2.986 0 0 0 3-2.974V14H2v5z',
            }),
            t.default.createElement('path', { fill: '#FFF', d: 'M2 14h20v-4H2z' }),
            t.default.createElement('path', {
              fill: '#BE4254',
              d: 'M19 2H5a2.988 2.988 0 0 0-3 2.975V10h20V5a2.986 2.986 0 0 0-2.974-3H19z',
            }),
          ),
        ),
        K = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#0083B7',
              d: 'M2 19a2.988 2.988 0 0 0 2.975 3H19a2.986 2.986 0 0 0 3-2.974V15.337H2V19z',
            }),
            t.default.createElement('path', { fill: '#FFF', d: 'M2 15.325h20V8.663H2z' }),
            t.default.createElement('path', {
              fill: '#C84443',
              d: 'M19 2H5a2.988 2.988 0 0 0-3 2.975v3.687h20V5a2.986 2.986 0 0 0-2.974-3H19z',
            }),
          ),
        ),
        N = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#F05B4E',
              d: 'M7.95 2v8H2V4.975A2.988 2.988 0 0 1 5 2h2.95zM19 2h.037A2.987 2.987 0 0 1 22 5.013v5H12V2h7zm-7 20v-7.912h10v4.937A2.988 2.988 0 0 1 19 22h-7zM2 14.087h5.95V22H4.975A2.988 2.988 0 0 1 2 19v-4.913z',
            }),
            t.default.createElement('path', {
              fill: '#FFF',
              d: 'M2 13.025h6.963V22H7.95v-7.913H2v-1.062zM8.962 2v8.975H2v-.963h5.95V2h1.012zm3.075 0v8.012H22v4.075h-9.963V22h-1.025v-8.975H22v-2.05H11.012V2h1.025z',
            }),
            t.default.createElement('path', {
              fill: '#0083B7',
              d: 'M22 13.025v-2.05H11.012V2h-2.05v8.975H2v2.05h6.963V22h2.05v-8.975z',
            }),
          ),
        ),
        P = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#F05B4E',
              d: 'M2 19a2.988 2.988 0 0 0 2.975 3H19a2.986 2.986 0 0 0 3-2.974V12H2v7z',
            }),
            t.default.createElement('path', {
              fill: '#F5F5F5',
              d: 'M19 2H5a2.988 2.988 0 0 0-3 2.975V12h20V5a2.986 2.986 0 0 0-2.974-3H19z',
            }),
          ),
        ),
        _ = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#0083B7',
              d: 'M21.763 3.838A2.984 2.984 0 0 0 19 2h-7.237v7.938H22V5c0-.4-.08-.795-.237-1.162zM11.763 22H19a3.034 3.034 0 0 0 1.45-.387 3.2 3.2 0 0 0 .675-.488c.223-.226.404-.487.539-.776.219-.416.333-.879.336-1.35v-5.313H11.763V22zM2 13.686V19a2.946 2.946 0 0 0 .514 1.676c.106.16.227.311.362.45.278.269.605.485.963.636.367.158.762.24 1.161.24h3.013v-8.315H2zM8.013 2H5a2.988 2.988 0 0 0-3 2.975V10h6.013V2z',
            }),
            t.default.createElement('path', {
              fill: '#FFE62F',
              d: 'M8.013 2v7.937H2v3.75h6.013V22h3.75v-8.313H22v-3.75H11.763V2z',
            }),
          ),
        ),
        q = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', { stroke: '#949494', d: 'M-10-64h130V66H-10z' }),
            t.default.createElement(
              'g',
              { transform: 'translate(100 -60)' },
              t.default.createElement('rect', { width: '35', height: '14', x: '-21', fill: '#73C144', rx: '7' }),
            ),
            t.default.createElement(
              'g',
              { stroke: '#B2B2B2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' },
              t.default.createElement('path', { d: 'M46-32.667L100.667 22M102-32.667L47.333 22' }),
            ),
            t.default.createElement('path', {
              fill: '#FFF',
              stroke: '#FFF',
              strokeWidth: '2',
              d: 'M19 2H5a3 3 0 0 0-3 3v14a2.988 2.988 0 0 0 2.975 3H19a2.987 2.987 0 0 0 3-2.975V5a3 3 0 0 0-3-3',
            }),
            t.default.createElement('path', {
              fill: '#FFF',
              d: 'M21.995 10.425H13.56V2h1.05v6.725l7.385-4.112c.007.128.007.258 0 .387v.538l-6.723 3.75h2.362l4.361-2.5v1.787l-1.174.6h1.174v1.25zm-.1 9.325l-7.286-4.075V22h-1.05v-8.012h8.436v1.187H20.82l1.175.65v.763l-2.5-1.413h-2.399l4.9 2.738V19a2.978 2.978 0 0 1-.1.75zM2 13.987h8.373V22H9.298v-6.324l-7.21 4.049A2.464 2.464 0 0 1 2 19.113l7.036-3.988H6.66L2 17.737V15.75l1.112-.575H2v-1.188zM10.373 2v8.475H2v-1.25h1.112L2 8.6v-.963l2.837 1.588H7.2L2 6.312V4.625l7.311 4.1V2h1.062z',
            }),
            t.default.createElement('path', {
              fill: '#C8102E',
              d: 'M17.637 9.237h-2.362L22 5.462v1.325l-4.363 2.45zm-.537 5.938h2.375L22 16.587v1.325l-4.9-2.737zM7.2 9.237H4.838L2 7.637V6.312l5.2 2.925zm-.538 5.938l2.363.037L2 19.15v-1.363l4.662-2.612zM22 13.987h-8.438V22h-3.187v-8.013H2v-3.562h8.375V2h3.187v8.425H22v3.562z',
            }),
            t.default.createElement('path', {
              fill: '#012169',
              d: 'M22 4.613l-7.387 4.112V2H19a2.998 2.998 0 0 1 3 2.613zM9.313 2v6.725L2 4.625A3 3 0 0 1 5 2h4.313zM22 9.237h-1.175L22 8.575v.662zm0 6.588l-1.175-.65H22v.65zm-19.9 3.9l7.213-4.05V22H5a3 3 0 0 1-2.9-2.275zm19.8.025A3 3 0 0 1 19 22h-4.388v-6.325L21.9 19.75zM2 15.175h1.113L2 15.8v-.625zM2 8.6l1.113.638H2V8.6z',
            }),
          ),
        ),
        T = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M34 138c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H12c-.552 0-1-.448-1-1v-5.5h.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5H11V139c0-.552.448-1 1-1zm0 1H12v4.55l.14.032c1.02.27 1.784 1.167 1.855 2.254L14 146c0 1.16-.79 2.135-1.86 2.418l-.14.031V153h22v-14zm-5.5 1c.245 0 .45.177.492.41l.008.09v11c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41L28 151.5v-11c0-.276.224-.5.5-.5zm-4 8c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7zm0-2.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7zm0-2.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7z',
              transform: 'translate(-11 -134)',
            }),
          ),
        ),
        G = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M157.621 145.015l1.496.374c1.715.429 3.02 1.822 3.336 3.56l1.539 8.462c.056.306-.18.589-.492.589l-5.99-.001-.01.001h-9l-.01-.001-5.99.001c-.284 0-.504-.233-.5-.507l.008-.082 1.538-8.461c.317-1.74 1.622-3.132 3.336-3.561l1.497-.374c.315-.079.621.16.621.485V157h7.999v-11.5c0-.325.307-.564.622-.485zM148 146.14l-.875.22c-1.334.333-2.349 1.416-2.595 2.769L143.098 157H148v-10.86zm10 0V157h4.902l-1.432-7.871c-.246-1.353-1.261-2.436-2.595-2.77l-.875-.219zM153 134c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z',
              transform: 'translate(-141 -134)',
            }),
          ),
        ),
        J = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M34.132 140.388l-9.666-5.952c-.915-.581-2.076-.581-2.992 0l-9.666 5.952c-.502.295-.81.84-.808 1.43v14.508c0 .924.737 1.674 1.646 1.674h7.87c.912 0 1.653-.747 1.661-1.674v-7.003c0-.361.288-.654.643-.654h4.639c.355 0 .643.293.643.654v7.003c.008.927.75 1.674 1.661 1.674h3.591c.91 0 1.646-.75 1.646-1.674v-14.507c-.01-.603-.343-1.152-.868-1.431zm-.194 15.938c0 .361-.288.654-.644.654h-3.59c-.359 0-.651-.29-.66-.654v-7.003c.001-.901-.7-1.641-1.585-1.674H22.82c-.909 0-1.645.75-1.645 1.674v7.003c-.009.363-.3.654-.659.654h-7.87c-.355 0-.643-.293-.643-.654v-14.507c.002-.23.12-.443.314-.564l9.725-5.89c.57-.351 1.285-.351 1.856 0l9.725 5.936c.193.12.312.333.315.563v14.462z',
              transform: 'translate(-11 -134)',
            }),
          ),
        ),
        Q = t.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '80', height: '80', viewBox: '0 0 80 80' },
          t.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            t.default.createElement('path', {
              fill: '#000',
              d: 'M345 143.133c2.688 0 4.867 2.18 4.867 4.867 0 2.688-2.18 4.867-4.867 4.867-2.688 0-4.867-2.18-4.867-4.867 0-2.688 2.18-4.867 4.867-4.867zm0 1.734c-1.73 0-3.133 1.403-3.133 3.133s1.403 3.133 3.133 3.133 3.133-1.403 3.133-3.133-1.403-3.133-3.133-3.133zm0-41.734c8.579 0 15.533 6.955 15.533 15.534 0 7.125-4.833 13.26-11.594 15.028l-.406.1v3.538c0 1.78-1.32 3.265-3.08 3.503l-.222.023-.231.008c-1.853 0-3.388-1.432-3.525-3.303l-.008-.23v-6.667c0-1.854 1.431-3.388 3.302-3.526l.535-.013c4.535-.16 8.163-3.887 8.163-8.461 0-4.676-3.791-8.467-8.467-8.467s-8.467 3.79-8.467 8.467c0 1.951-1.582 3.533-3.533 3.533-1.951 0-3.533-1.582-3.533-3.533 0-8.58 6.954-15.534 15.533-15.534zm0 1.734c-7.622 0-13.8 6.178-13.8 13.8 0 .994.806 1.8 1.8 1.8s1.8-.806 1.8-1.8c0-5.634 4.567-10.2 10.2-10.2 5.633 0 10.2 4.566 10.2 10.2 0 5.633-4.567 10.2-10.168 10.2l-.167.005c-.935.069-1.665.85-1.665 1.795v6.635l.005.167c.069.935.851 1.664 1.763 1.665l.167-.006c.935-.069 1.665-.85 1.665-1.795v-4.242c0-.416.295-.772.702-.851l.323-.063c6.35-1.32 10.975-6.942 10.975-13.51 0-7.622-6.178-13.8-13.8-13.8z',
              transform: 'translate(-305 -88)',
            }),
          ),
        );
      (exports.accessibility = j),
        (exports.account = G),
        (exports.adult = V),
        (exports.amend = B),
        (exports.arrowLeft = v),
        (exports.arrowRight = m),
        (exports.basket = Z),
        (exports.car = H),
        (exports.checkIn = D),
        (exports.checkbox = o),
        (exports.chevronDown = u),
        (exports.child = x),
        (exports.clock = F),
        (exports.close = L),
        (exports.cookie = C),
        (exports.directionalArrows = s),
        (exports.dog = z),
        (exports.facebook = r),
        (exports.ferry = E),
        (exports.ferryOut = p),
        (exports.findTerminal = b),
        (exports.flagDE = y),
        (exports.flagDK = U),
        (exports.flagFR = O),
        (exports.flagIE = S),
        (exports.flagLV = I),
        (exports.flagNL = K),
        (exports.flagNO = N),
        (exports.flagPL = P),
        (exports.flagSE = _),
        (exports.flagUK = q),
        (exports.food = W),
        (exports.globe = l),
        (exports.help = Q),
        (exports.home = J),
        (exports.infant = k),
        (exports.instagram = h),
        (exports.location = n),
        (exports.negative = g),
        (exports.pet = R),
        (exports.placeholder = d),
        (exports.positive = w),
        (exports.search = a),
        (exports.stena = f),
        (exports.ticket = T),
        (exports.traveler = M),
        (exports.twitter = i),
        (exports.wifi = A),
        (exports.youtube = c);
    },
    480: function (module, exports, __webpack_require__) {
      'use strict';
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      __webpack_require__(7),
        __webpack_require__(13),
        __webpack_require__(25),
        __webpack_require__(16),
        __webpack_require__(9),
        __webpack_require__(21),
        __webpack_require__(19),
        __webpack_require__(70),
        __webpack_require__(17),
        __webpack_require__(274),
        __webpack_require__(26),
        __webpack_require__(114),
        __webpack_require__(481),
        __webpack_require__(3),
        __webpack_require__(34),
        __webpack_require__(12),
        __webpack_require__(88),
        __webpack_require__(28),
        __webpack_require__(27),
        __webpack_require__(18),
        __webpack_require__(89),
        __webpack_require__(22),
        __webpack_require__(138),
        Object.defineProperty(exports, '__esModule', { value: !0 });
      var e = __webpack_require__(0),
        t = __webpack_require__(127);
      var n = (function a(e) {
        return e && 'object' == _typeof(e) && 'default' in e ? e : { default: e };
      })(e);
      function r(e, t) {
        var a = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]]);
        }
        return a;
      }
      var o = function o(_ref) {
          var e = _ref.date,
            t = _ref.options,
            _ref$locale = _ref.locale,
            a = void 0 === _ref$locale ? 'en-GB' : _ref$locale,
            n = a.match('^[a-z][a-z][-][A-Z][A-Z]$') ? a : 'en-GB';
          return new Intl.DateTimeFormat(n, Object.assign({}, t)).format(e);
        },
        d = function d(e, t) {
          return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
        },
        i = function i(e) {
          return null != e ? e.getTime() : 0;
        },
        l = function l(t) {
          var a = r(t, []),
            _e$useState2 = _slicedToArray(e.useState([]), 2),
            n = _e$useState2[0],
            l = _e$useState2[1],
            _e$useState4 = _slicedToArray(e.useState([]), 2),
            c = _e$useState4[0],
            s = _e$useState4[1],
            p = e.useCallback(function () {
              var e = (function (_ref2) {
                  for (
                    var n,
                      e = _ref2.date,
                      t = _ref2.nrOfDays,
                      a = _ref2.locale,
                      r = new Date(e.getFullYear(), e.getMonth()),
                      i = r.getDate() - r.getDay(),
                      l = [],
                      _e2 = 0;
                    _e2 < t;
                    _e2 += 1
                  ) {
                    var _t = new Date(r.getTime());
                    _t.setDate(i + _e2);
                    var _c = new Date(_t).getMonth(),
                      _s2 = !1;
                    l &&
                      l.length > _e2 - 1 &&
                      (_s2 = 0 === _e2 || (null === (n = l[_e2 - 1]) || void 0 === n ? void 0 : n.monthNr) !== _c);
                    var _p = {
                      date: _t,
                      weekday: o({ locale: a, date: new Date(_t), options: { weekday: 'short' } }),
                      weekdayNr: Number(new Date(_t).getDay()),
                      today: d(new Date(), _t),
                      day: Number(o({ locale: a, date: new Date(_t), options: { day: 'numeric' } })),
                      monthFull: o({ locale: a, date: new Date(_t), options: { month: 'long' } }),
                      monthNr: _c,
                      month: o({ locale: a, date: new Date(_t), options: { month: 'short' } }),
                      monthBreak: _s2,
                      year: Number(o({ locale: a, date: new Date(_t), options: { year: 'numeric' } })),
                    };
                    l.push(_p);
                  }
                  return l;
                })(Object.assign({}, a)),
                t = Object.values(
                  (function (e, t, a) {
                    return e.reduce(function (e, n) {
                      var r = ''.concat(n.monthNr, '-').concat(n.year);
                      return (
                        e[r] ||
                          ((e[r] = []),
                          0 !== n.weekdayNr &&
                            (e[r] = _toConsumableArray(new Array(n.weekdayNr)).map(function () {
                              return { empty: !0, year: n.year, monthNr: n.monthNr, monthFull: n.monthFull };
                            }))),
                        e[r].push(n),
                        e
                      );
                    }, {});
                  })(
                    e.sort(function (e, t) {
                      return i(e.date) - i(t.date);
                    }),
                  ),
                );
              l(e), s(t);
            }, []);
          return { days: n, months: c, onGetDays: p };
        };
      !(function (e, t) {
        void 0 === t && (t = {});
        var a = t.insertAt;
        if ('undefined' != typeof document) {
          var n = document.head || document.getElementsByTagName('head')[0],
            r = document.createElement('style');
          (r.type = 'text/css'),
            'top' === a && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
            r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
        }
      })(
        ":root {\n  --date-picker-wrapper-extra-padding: 40px;\n}\n\n.date-picker-wrapper {\n  width: calc(var(--date-picker-day-width) * 7 + var(--date-picker-wrapper-extra-padding));\n  border: 1px solid var(--date-picker-border-color);\n  border-radius: var(--date-picker-border-radius);\n}\n\n.date-picker-grid-wrapper {\n  width: 100%;\n  border-radius: 6px;\n  overflow: auto;\n}\n\n.date-picker-grid-ul {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.date-picker-grid-li:not(:last-child),\n.date-picker-grid-li:not(:first-child) {\n  padding: 10px;\n}\n\n.date-picker-grid-li:first-child {\n  padding-left: 10px;\n}\n\n.date-picker-grid-li:last-child {\n  padding-right: 10px;\n}\n\n/* MONTH */\n\n.date-picker-month {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 20px;\n  color: var(--date-picker-text-color);\n}\n\n.date-picker-month-text {\n  font-size: var(--date-picker-month-text-size);\n  margin-right: 10px;\n  text-transform: capitalize;\n}\n\n.date-picker-year-text {\n  font-size: var(--date-picker-year-text-size);\n}\n\n.date-picker-grid-month {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-gap: var(--date-picker-month-grid-gap);\n  padding: 0;\n  list-style-type: none;\n}\n\n.date-picker-change-month-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  width: var(--date-picker-change-month-button-icon-size);\n  height: var(--date-picker-change-month-button-icon-size);\n  border: 1px solid var(--date-picker-change-month-button-border-color);\n  background-color: var(--date-picker-change-month-button-bg-color);\n}\n\n.date-picker-change-month-button:disabled {\n  border: 1px solid var(--date-picker-change-month-button-disabled-bg-color);\n  background-color: var(--date-picker-change-month-button-disabled-bg-color);\n}\n\n.date-picker-change-month-button > span > svg path {\n  fill: var(--date-picker-change-month-button-icon-color);\n}\n\n.date-picker-change-month-button:disabled > span > svg path {\n  fill: var(--date-picker-change-month-button-disabled-icon-color);\n}\n\n/* WEEK */\n\n.date-picker-week {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(7, 1fr);\n  padding: 10px 0;\n  font-size: var(--date-picker-week-text-size);\n  color: var(--date-picker-week-text-color);\n}\n\n.date-picker-week > span {\n  text-transform: capitalize;\n}\n\n/* DAY */\n.date-picker-day {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--date-picker-day-border-radius);\n  color: var(--date-picker-day-neutral-text-color);\n  border: 1px solid transparent;\n  background: transparent;\n  height: var(--date-picker-day-width);\n  width: var(--date-picker-day-width);\n}\n\n.date-picker-day.month-identifier {\n  scroll-margin: calc(var(--date-picker-wrapper-extra-padding) / 4);\n}\n\n.date-picker-day-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--date-picker-day-border-radius);\n  cursor: pointer;\n  color: var(--date-picker-day-neutral-text-color);\n  border: 1px solid var(--date-picker-day-neutral-border-color);\n  background: var(--date-picker-day-neutral-bg-color);\n  height: 100%;\n  width: 100%;\n}\n\n.date-picker-day-button[data-value~='disabled'],\n.date-picker-day[data-value~='empty'] {\n  cursor: default;\n  color: var(--date-picker-day-disabled-text-color);\n  border: 1px solid var(--date-picker-day-disabled-border-color);\n  background: var(--date-picker-day-disabled-bg-color);\n  pointer-events: none;\n}\n\n.date-picker-day-button[data-value~='disabled']:after {\n  content: '';\n  width: 55%;\n  height: 1px;\n  border-radius: 10px;\n  background-color: var(--date-picker-day-disabled-text-color);\n  transform: rotate(-45deg);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n\n.date-picker-day-button[data-value~='active'] {\n  color: var(--date-picker-day-active-text-color);\n  border: 1px solid var(--date-picker-day-active-border-color);\n  background: var(--date-picker-day-active-bg-color);\n}\n\n.date-picker-day-button[data-value~='activeMonth'] {\n  color: var(--date-picker-day-active-month-text-color);\n  border: 1px solid var(--date-picker-day-active-month-border-color);\n  background: var(--date-picker-day-active-month-bg-color);\n}\n\n.date-picker-day-button[data-value~='selectedRange'] {\n  color: var(--date-picker-day-selected-range-text-color);\n  border: 1px solid var(--date-picker-day-selected-range-border-color);\n  background: var(--date-picker-day-selected-range-bg-color);\n}\n\n.date-picker-day-button[data-value~='selected'] {\n  color: var(--date-picker-day-selected-text-color);\n  border: 1px solid var(--date-picker-day-selected-border-color);\n  background: var(--date-picker-day-selected-bg-color);\n}\n\n.date-picker-day-month-break {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: 12px;\n  border-color: 1px solid var(--date-picker-day-month-break-border-color);\n  color: var(--date-picker-day-month-break-text-color);\n  background-color: var(--date-picker-day-month-break-bg-color);\n  border-top-right-radius: var(--date-picker-day-border-radius);\n  border-top-left-radius: var(--date-picker-day-border-radius);\n  box-sizing: border-box;\n  text-transform: capitalize;\n}\n\n.date-picker-wrapper.basic {\n  border: none;\n  width: auto;\n  height: 100%;\n}\n\n.date-picker-wrapper.basic .date-picker-month {\n  justify-content: center;\n  align-items: center;\n}\n\n.date-picker-wrapper.basic .date-picker-change-month-button {\n  display: none;\n}\n\n.date-picker-wrapper.basic .date-picker-grid-wrapper {\n  height: 100%;\n  overflow: auto;\n}\n\n.date-picker-wrapper.basic .date-picker-grid-ul {\n  flex-direction: column;\n}\n\n.date-picker-wrapper.basic .date-picker-week {\n  position: relative;\n  box-shadow: 0 10px 10px -10px var(--date-picker-week-shadow);\n  width: 100%;\n  background-color: var(--date-picker-change-month-button-bg-color);\n  padding: 10px;\n  box-sizing: border-box;\n  z-index: 1;\n}\n\n.date-picker-wrapper.basic .date-picker-month-and-year {\n  padding: 10px 0;\n  font-size: var(--date-picker-month-text-size);\n}\n",
      );
      var c = function c(_ref5) {
          var e = _ref5.monthNr,
            t = _ref5.today,
            a = _ref5.day,
            r = _ref5.year,
            o = _ref5.month,
            i = _ref5.monthBreak,
            l = _ref5.date,
            c = _ref5.empty,
            s = _ref5.selectedDates,
            p = _ref5.onSetSelectedDate,
            u = _ref5.activeMonthNr,
            m = _ref5.activeYear,
            h = _ref5.monthIdentifier,
            b = _ref5.singleDate,
            g = _ref5.lastInMonth,
            k = h ? 'month-identifier-'.concat(e, '-').concat(r) : '';
          if (c)
            return n.default.createElement(h ? 'button' : 'li', {
              className: 'date-picker-day ' + (h ? 'month-identifier' : ''),
              datavalue: 'empty',
              id: k,
            });
          var v = s;
          b && ((v = [l, l]), (s = [s[0], s[0]]));
          var y = s.length > 0 ? s[0] : null,
            f = s.length > 0 ? s[1] : null,
            x = u === e && m === r,
            w = !!y && d(l, y),
            D = !!f && d(l, f),
            N = l < new Date(),
            C = 'active';
          return (
            x && (C = 'activeMonth'),
            y &&
              f &&
              (function (_ref6) {
                var e = _ref6.fromDate,
                  t = _ref6.toDate,
                  a = _ref6.givenDate;
                return a <= t && a >= e && a !== t && a !== e;
              })({ fromDate: y, toDate: f, givenDate: l }) &&
              (C = 'selectedRange'),
            (w || D) && (C = 'selected'),
            N && !t && (C = 'disabled'),
            n.default.createElement(
              'li',
              { className: 'date-picker-day ' + (h ? 'month-identifier' : ''), 'data-value': C },
              n.default.createElement(
                'button',
                {
                  'data-testid': 'datepicker-day-'.concat(C),
                  id: k,
                  onBlur: function onBlur() {
                    return (
                      g &&
                      (function () {
                        var e = document.getElementById('m-btn-next');
                        null == e || e.focus();
                      })()
                    );
                  },
                  className: 'date-picker-day-button',
                  'data-value': C,
                  disabled: N && !t,
                  onClick: function onClick() {
                    return p({ date: l, selectedDates: v });
                  },
                },
                a,
                i && n.default.createElement('span', { className: 'date-picker-day-month-break break' }, o),
              ),
            )
          );
        },
        s = { none: 0, xsmall: 10, small: 20, medium: 30, large: 40, xlarge: 60 },
        u = s.xsmall,
        m = s.small,
        h = s.medium,
        b = s.large,
        g = s.xlarge,
        k = {
          width: { min: '300px', max: '1170px' },
          sizes: {
            sizeNone: ''.concat(s.none, 'px'),
            sizeXs: ''.concat(u, 'px'),
            sizeS: ''.concat(m, 'px'),
            sizeM: ''.concat(h, 'px'),
            sizeL: ''.concat(b, 'px'),
            sizeXl: ''.concat(g, 'px'),
          },
        },
        _ref3 =
          {
            modernRed: '#EA143D',
            modernBlue: '#2378CD',
            tjara: '#000000',
            moln: '#ffffff',
            silver: '#949494',
            silverLight: '#F4F4F4',
            silverDark: '#6b6b6b',
            shadow: 'rgba(0, 0, 0, 0.2)',
            overlay: 'rgba(0, 0, 0, 0.75)',
            sand: '#faf6eb',
            snackskal: '#f7d7d1',
            sjobod: '#b00f2e',
            tang: '#751422',
            himmel: '#c0d5ed',
            hav: '#1a5a9a',
            mussla: '#123d66',
            modernGreen: '#74b346',
            extra: '#28d2b9',
          } || {},
        v = _ref3.modernRed,
        y = _ref3.snackskal,
        f = _ref3.tjara,
        x = _ref3.silver,
        w = _ref3.silverLight,
        D = _ref3.moln,
        C = {
          metrics: k,
          datePicker: {
            borderColor: x,
            borderRadius: ''.concat((s || {}).xsmall, 'px'),
            month: {
              button: {
                borderColor: x,
                backgroundColor: D,
                disabledBackgroundColor: w,
                iconColor: f,
                disabledIconColor: x,
                iconSize: '40px',
              },
              textColor: f,
              textSize: '18px',
              yearSize: '20px',
            },
            week: { textSize: '14px', textColor: f, shadow: x },
            day: {
              borderRadius: '6px',
              gap: '1px',
              width: '50px',
              active: { backgroundColor: D, textColor: f, borderColor: w },
              activeMonth: { backgroundColor: w, textColor: f, borderColor: w },
              disabled: { backgroundColor: D, textColor: x, borderColor: w },
              selected: { backgroundColor: v, textColor: D, borderColor: v },
              selectedRange: { backgroundColor: y, textColor: v, borderColor: y },
              monthBreak: { backgroundColor: v, textColor: D, borderColor: v },
            },
          },
        };
      t.AddTheme && t.AddTheme({ theme: C }),
        (exports.DatePicker = function (_ref7) {
          var _ref7$className = _ref7.className,
            t = void 0 === _ref7$className ? '' : _ref7$className,
            a = _ref7.dates,
            d = _ref7.onChange,
            i = _ref7.locale,
            _ref7$nrOfDays = _ref7.nrOfDays,
            s = void 0 === _ref7$nrOfDays ? 365 : _ref7$nrOfDays,
            p = _ref7.icons,
            u = _ref7.singleDate,
            _ref7$basic = _ref7.basic,
            m = void 0 !== _ref7$basic && _ref7$basic,
            h = new Date(),
            b = e.useRef(null),
            _l = l({ date: h, nrOfDays: s, locale: i }),
            g = _l.days,
            k = _l.months,
            v = _l.onGetDays,
            _ref8 = (function (_ref9) {
              var _ref9$defaultDates = _ref9.defaultDates,
                a = void 0 === _ref9$defaultDates ? [null, null] : _ref9$defaultDates,
                _e$useState6 = _slicedToArray(e.useState(a), 2),
                n = _e$useState6[0],
                r = _e$useState6[1],
                o = e.useCallback(function (e, t) {
                  var a = t ? t[0] : null,
                    n = t.length > 0 ? t[1] : null;
                  null === a && null === n
                    ? r([e, null])
                    : a && null === n
                    ? r(a < e ? [a, e] : [e, a])
                    : a && n && r([e, null]);
                }, []);
              return { selectedDate: n ? n[0] : null, selectedDates: n, onSetSelectedDate: o };
            })({ defaultDates: a }),
            y = _ref8.selectedDate,
            f = _ref8.selectedDates,
            x = _ref8.onSetSelectedDate,
            w = (function (_ref10) {
              var t = _ref10.date,
                a = _ref10.locale,
                _e$useState8 = _slicedToArray(e.useState(t), 2),
                n = _e$useState8[0],
                r = _e$useState8[1],
                d = e.useCallback(function (_ref11) {
                  var e = _ref11.year,
                    t = _ref11.month,
                    a = new Date(n.getFullYear(), n.getMonth(), 1);
                  a.setFullYear(e), a.setMonth(t), r(a);
                }, []);
              return {
                activeDate: n,
                activeMonthNr: n.getMonth(),
                activeYear: n.getFullYear(),
                activeMonth: o({ locale: a, date: n, options: { month: 'long' } }),
                onSetYearAndMonthNr: d,
              };
            })({ locale: i, date: (a && a[0]) || h }),
            D = w.activeYear,
            N = w.activeMonth,
            C = w.onSetYearAndMonthNr,
            E = r(w, ['activeYear', 'activeMonth', 'onSetYearAndMonthNr']),
            z = k.length;
          e.useEffect(function () {
            v(),
              m ||
                setTimeout(function () {
                  j({ dir: 'next', month: E.activeMonthNr, year: D });
                }, 0);
          }, []),
            e.useEffect(
              function () {
                d(u ? y : f);
              },
              [f],
            );
          var S = g.slice(0, 7).map(function (_ref12) {
              var e = _ref12.weekday;
              return n.default.createElement('span', { key: e }, e);
            }),
            $ =
              null == k
                ? void 0
                : k.map(function (e, t) {
                    var _ref13 = (e && e.length && e[0]) || {},
                      a = _ref13.monthFull,
                      r = _ref13.year;
                    return n.default.createElement(
                      'li',
                      { 'data-testid': 'datepicker-month-li', className: 'date-picker-grid-li', key: t },
                      !m && n.default.createElement('div', { className: 'date-picker-week' }, S),
                      m &&
                        n.default.createElement(
                          'div',
                          { className: 'date-picker-month-and-year' },
                          n.default.createElement('span', null, ''.concat(a, ' ').concat(r)),
                        ),
                      n.default.createElement(
                        'ul',
                        { className: 'date-picker-grid-month' },
                        (function (e) {
                          return null == e
                            ? void 0
                            : e.map(function (t, a) {
                                var r;
                                return n.default.createElement(
                                  c,
                                  Object.assign(
                                    {
                                      lastInMonth: a >= e.length - 1,
                                      monthIdentifier: 0 === a,
                                      onSetSelectedDate: function onSetSelectedDate(_ref14) {
                                        var e = _ref14.date,
                                          t = _ref14.selectedDates;
                                        return x(e, t);
                                      },
                                      selectedDates: f,
                                      activeYear: D,
                                      key: (null === (r = t.date) || void 0 === r ? void 0 : r.toString()) || a,
                                      singleDate: u,
                                    },
                                    t,
                                    E,
                                  ),
                                );
                              });
                        })(e),
                      ),
                    );
                  }),
            j = function j(_ref15) {
              var e = _ref15.dir,
                t = _ref15.month,
                a = _ref15.year,
                n = t || E.activeMonthNr,
                r = 'prev' === e ? n - 1 : n + 1,
                o = a || D;
              r > 11 ? ((r = 0), (o += 1)) : r < 0 && ((o -= 1), (r = 11)),
                setTimeout(function () {
                  var e =
                    null === document || void 0 === document
                      ? void 0
                      : document.getElementById('month-identifier-'.concat(r, '-').concat(o));
                  e &&
                    'function' == typeof e.scrollIntoView &&
                    (null == e || e.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' }));
                }, 0);
            },
            A = function A(e) {
              return n.default.createElement(
                'button',
                {
                  'data-testid': 'datepicker-change-month-'.concat(e),
                  className: 'date-picker-change-month-button '.concat(e),
                  id: 'm-btn-'.concat(e),
                  onKeyDown: function onKeyDown(_ref16) {
                    return (
                      'Tab' === _ref16.key &&
                      (function () {
                        var e = document.getElementById('month-identifier-'.concat(E.activeMonthNr, '-').concat(D));
                        null == e || e.focus();
                      })()
                    );
                  },
                  onClick: function onClick() {
                    return j({ dir: e });
                  },
                },
                p && p.changeMonth[e],
              );
            };
          return n.default.createElement(
            'div',
            { className: 'date-picker-wrapper '.concat(m ? 'basic' : '', ' ').concat(t) },
            !m &&
              n.default.createElement(
                'div',
                { className: 'date-picker-month' },
                A('prev'),
                n.default.createElement(
                  'div',
                  null,
                  n.default.createElement('span', { className: 'date-picker-month-text' }, N),
                  n.default.createElement('span', { className: 'date-picker-year-text' }, D),
                ),
                A('next'),
              ),
            m && n.default.createElement('div', { className: 'date-picker-week' }, S),
            n.default.createElement(
              'div',
              {
                className: 'date-picker-grid-wrapper ',
                ref: b,
                onScroll: function onScroll() {
                  return (
                    !m &&
                    (function () {
                      var _ref17 = (null == b ? void 0 : b.current) || {},
                        _ref17$scrollLeft = _ref17.scrollLeft,
                        e = void 0 === _ref17$scrollLeft ? 0 : _ref17$scrollLeft,
                        _ref17$clientWidth = _ref17.clientWidth,
                        a = Number((e / (void 0 === _ref17$clientWidth ? 0 : _ref17$clientWidth)).toFixed(0));
                      if (z > 0 && a >= 0 && a <= z) {
                        var _e3 = k[a];
                        if (_e3 && _e3.length) {
                          var _e3$ = _e3[0],
                            _t2 = _e3$.year,
                            _n3 = _e3$.monthNr;
                          C({ year: _t2, month: _n3 }),
                            (a <= 1 || a >= z - 2) &&
                              (function M(e) {
                                var t = document.querySelectorAll('.date-picker-change-month-button');
                                if (t && t.length > 1) {
                                  var _a = t[0],
                                    _n2 = t[1];
                                  e < 1
                                    ? _a.setAttribute('disabled', 'true')
                                    : _a.getAttribute('disabled') && _a.removeAttribute('disabled'),
                                    e >= z - 1
                                      ? _n2.setAttribute('disabled', 'true')
                                      : _n2.getAttribute('disabled') && _n2.removeAttribute('disabled');
                                }
                              })(a);
                        }
                      }
                    })()
                  );
                },
              },
              n.default.createElement(
                'ul',
                { 'data-testid': 'datepicker-month-ul', className: 'date-picker-grid-ul' },
                k && $,
              ),
            ),
          );
        }),
        (exports.calendarTheme = C);
    },
    482: function (module, exports, __webpack_require__) {
      'use strict';
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      __webpack_require__(7),
        __webpack_require__(13),
        __webpack_require__(25),
        __webpack_require__(16),
        __webpack_require__(54),
        __webpack_require__(483),
        __webpack_require__(69),
        __webpack_require__(9),
        __webpack_require__(21),
        __webpack_require__(19),
        __webpack_require__(3),
        __webpack_require__(34),
        __webpack_require__(12),
        __webpack_require__(83),
        __webpack_require__(18),
        __webpack_require__(139),
        __webpack_require__(22),
        Object.defineProperty(exports, '__esModule', { value: !0 });
      var n = __webpack_require__(0),
        e = __webpack_require__(37),
        o = __webpack_require__(127);
      var r = (function t(n) {
        return n && 'object' == _typeof(n) && 'default' in n ? n : { default: n };
      })(n);
      function i(n, e) {
        var o = {};
        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && e.indexOf(t) < 0 && (o[t] = n[t]);
        if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (t = Object.getOwnPropertySymbols(n); r < t.length; r++)
            e.indexOf(t[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[r]) && (o[t[r]] = n[t[r]]);
        }
        return o;
      }
      function d(n, e) {
        void 0 === e && (e = {});
        var o = e.insertAt;
        if (n && 'undefined' != typeof document) {
          var t = document.head || document.getElementsByTagName('head')[0],
            r = document.createElement('style');
          (r.type = 'text/css'),
            'top' === o && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r),
            r.styleSheet ? (r.styleSheet.cssText = n) : r.appendChild(document.createTextNode(n));
        }
      }
      d(
        '.input-div {\n  position: relative;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  min-width: var(--metrics-min-width);\n  background: var(--input-bg-color);\n  border-radius: var(--input-border-radius);\n  border: 1px solid var(--input-border-color);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.input-div.input-height-none {\n  height: var(--system-size-none);\n}\n\n.input-div.input-height-xxxs {\n  height: var(--system-size-xxxs);\n}\n\n.input-div.input-height-xxs {\n  height: var(--system-size-xxs);\n}\n\n.input-div.input-height-xs {\n  height: var(--system-size-xs);\n}\n\n.input-div.input-height-s {\n  height: var(--system-size-s);\n}\n\n.input-div.input-height-m {\n  height: var(--system-size-m);\n}\n\n.input-div.input-height-l {\n  height: var(--system-size-l);\n}\n\n.input-div.input-height-xl {\n  height: var(--system-size-xl);\n}\n\n.input-div.input-height-xxl {\n  height: var(--system-size-xxl);\n}\n\n.input-div .icon {\n  position: absolute;\n  z-index: 1;\n}\n\n.input-div .icon-left {\n  left: 7.5px;\n}\n\n.input-div .icon-right {\n  right: 7.5px;\n}\n\n.input:disabled {\n  background: var(--input-disabled-bg-color);\n  border: 1px solid var(--input-disabled-border-color);\n  cursor: default;\n}\n\n.input-wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.input {\n  color: var(--input-text-color);\n  height: 100%;\n  width: 100%;\n  border: none;\n  border-radius: var(--input-border-radius);\n  font-size: 16px;\n  padding: var(--input-no-icon-padding) var(--input-no-icon-padding) 0px var(--input-no-icon-padding);\n  box-sizing: border-box;\n  cursor: text;\n}\n\n.input::placeholder {\n  color: var(--input-placeholder-color);\n}\n\n.input-div.disabled {\n  border-color: var(--input-disabled-border-color);\n  border-bottom: none;\n}\n\n.input-div.disabled .input::placeholder {\n  color: var(--input-disabled-text-color);\n}\n\n.input-div.disabled .icon svg path {\n  fill: var(--input-disabled-text-color);\n}\n\n.input-div.disabled .input-title {\n  color: var(--input-disabled-title-color);\n}\n\n.input-wrapper .input-title {\n  color: var(--input-title-color);\n  font-size: 14px;\n  font-weight: 100;\n  position: absolute;\n  top: 25%;\n  transform: translateY(-25%);\n  padding-left: var(--input-no-icon-padding);\n}\n\n.input.icons-left,\n.input-title.icons-left {\n  padding-left: var(--input-with-icon-padding);\n}\n\n.input.icons-right,\n.input-title.icons-right {\n  padding-right: var(--input-with-icon-padding);\n  padding-left: var(--input-no-icon-padding);\n}\n\n.input.icons-right-left,\n.input-title.icons-right-left {\n  padding-left: var(--input-with-icon-padding);\n  padding-right: var(--input-with-icon-padding);\n}\n',
      );
      var a = function a(o) {
        var t = o.title,
          d = o.leftIcon,
          a = o.rightIcon,
          _o$defaultValue = o.defaultValue,
          l = void 0 === _o$defaultValue ? '' : _o$defaultValue,
          c = o.onChange,
          _o$className = o.className,
          s = void 0 === _o$className ? '' : _o$className,
          _o$height = o.height,
          p = void 0 === _o$height ? 'xl' : _o$height,
          b = i(o, ['title', 'leftIcon', 'rightIcon', 'defaultValue', 'onChange', 'className', 'height']),
          _n$useState2 = _slicedToArray(n.useState(l), 2),
          u = _n$useState2[0],
          h = _n$useState2[1],
          g = r.default.useRef(null),
          v = '';
        return (
          d && (v = 'icons-left'),
          a && (v = 'icons-right'),
          d && a && (v = 'icons-right-left'),
          n.useEffect(
            function () {
              return h(l);
            },
            [l],
          ),
          r.default.createElement(
            'div',
            {
              'data-testid': 'input-wrapper',
              className: 'input-div input-height-'
                .concat(p, ' ')
                .concat(s, ' ')
                .concat(b.disabled ? 'disabled' : ''),
            },
            d && r.default.createElement(e.Icon, { className: 'icon-left', icon: d, size: 'm', disabled: b.disabled }),
            r.default.createElement(
              'div',
              { className: 'input-wrapper' },
              r.default.createElement(
                'label',
                { 'data-testid': 'input-title', className: 'input-title '.concat(v), htmlFor: t },
                t,
              ),
              r.default.createElement(
                'input',
                Object.assign(
                  {
                    'data-testid': 'input',
                    name: t,
                    value: u,
                    className: 'input '.concat(v),
                    ref: g,
                    onChange: function onChange(n) {
                      c && c(n), h(n.currentTarget.value);
                    },
                    onKeyDown: function onKeyDown(_ref) {
                      'Enter' === _ref.key && b.onClick && b.onClick();
                    },
                  },
                  b,
                ),
              ),
            ),
            a && r.default.createElement(e.Icon, { className: 'icon-right', icon: a, size: 'm', disabled: b.disabled }),
          )
        );
      };
      d(
        '.dropdown-wrapper {\n  height: auto;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n}\n\n.dropdown-wrapper.open {\n  z-index: 3;\n}\n\n.dropdown-wrapper.open > .input-div {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-color: transparent;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-wrapper.close > .input-div {\n  border-bottom-left-radius: var(--input-border-radius);\n  border-bottom-right-radius: var(--input-border-radius);\n  border-bottom-color: var(--input-border-color);\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-wrapper.disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.dropdown-wrapper.disabled .dropdown-content {\n  display: none;\n}\n\n.dropdown-content {\n  position: absolute;\n  height: auto;\n  width: 100%;\n  border-bottom-left-radius: var(--dropdown-border-radius);\n  border-bottom-right-radius: var(--dropdown-border-radius);\n  background-color: var(--dropdown-content-bg-color);\n  box-sizing: border-box;\n  z-index: 2;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-content.open {\n  border: 1px solid var(--input-border-color);\n  height: var(--dropdown-content-height);\n  opacity: 1;\n  transition: all var(--dropdown-content-transition-speed);\n  border-top: 0;\n  box-shadow: 0px -3px 10px -10px var(--input-border-color);\n}\n\n.dropdown-content.close {\n  border: 1px solid transparent;\n  opacity: 0.5;\n  height: 0;\n  margin-top: 0px;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-inner-content {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: transparent;\n  box-sizing: border-box;\n  list-style-type: none;\n  margin: 0;\n}\n\n.dropdown-content.open > .dropdown-inner-content {\n  padding: 10px 10px;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-content.close > .dropdown-inner-content {\n  padding: 0px 10px;\n  transition: all var(--dropdown-content-transition-speed);\n}\n\n.dropdown-content-button {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-items: center;\n  width: 100%;\n  height: var(--dropdown-content-item-height);\n  border: none;\n  border-radius: var(--dropdown-content-item-border-radius);\n  border: 1px solid var(--dropdown-content-item-border-color);\n  background-color: var(--dropdown-content-item-bg-color);\n  color: var(--dropdown-content-item-text-color);\n  margin-bottom: 2.5px;\n  cursor: pointer;\n}\n\n.dropdown-content-button .title {\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n  width: 100%;\n  text-align: left;\n  height: 100%;\n}\n\n.dropdown-content-button .icon svg path {\n  fill: var(--dropdown-content-item-icon-color);\n}\n\n.dropdown-content-button.active {\n  background-color: var(--dropdown-content-item-active-bg-color);\n  border: 1px solid var(--dropdown-content-item-active-border-color);\n  color: var(--dropdown-content-item-active-text-color);\n}\n\n.dropdown-content-button.active .title span,\n.title p {\n  background-color: var(--dropdown-content-item-active-bg-color);\n  border: 1px solid var(--dropdown-content-item-active-border-color);\n  color: var(--dropdown-content-item-active-text-color);\n}\n\n.dropdown-content-button.active .icon svg path {\n  fill: var(--dropdown-content-item-active-icon-color);\n}\n\n.dropdown-content-button:disabled input {\n  background-color: var(--dropdown-content-item-disabled-bg-color);\n  border: 1px solid var(--dropdown-content-item-disabled-border-color);\n  color: var(--dropdown-content-item-disabled-color);\n  cursor: default;\n  user-select: none;\n  pointer-events: none;\n}\n\n.dropdown-content-button:disabled {\n  background-color: var(--dropdown-content-item-disabled-bg-color);\n  border: 1px solid var(--dropdown-content-item-disabled-border-color);\n  color: var(--dropdown-content-item-disabled-color);\n  cursor: default;\n  user-select: none;\n  pointer-events: none;\n}\n\n.dropdown-content-button:disabled svg path {\n  fill: var(--dropdown-content-item-disabled-icon-color);\n}\n\n.dropdown-content-button:disabled .title {\n  background-color: var(--dropdown-content-item-disabled-bg-color);\n  border: 1px solid var(--dropdown-content-item-disabled-border-color);\n  color: var(--dropdown-content-item-disabled-color);\n}\n',
      );
      var l = function l(n) {
        var o = n.onOptionsClick,
          t = n.activeOption,
          d = n.open,
          a = n.setOpen,
          l = i(n, ['onOptionsClick', 'activeOption', 'open', 'setOpen']),
          _ref2 = l || {},
          c = _ref2.disabled,
          s = _ref2.id,
          p = _ref2.leftIcon,
          b = _ref2.rightIcon,
          u = _ref2.iconSize,
          h = _ref2.title,
          g = function g() {
            o(Object.assign({}, l)), a();
          };
        return r.default.createElement(
          'button',
          {
            'data-testid': 'dropdown-content-button',
            tabIndex: d ? 0 : -1,
            disabled: c,
            key: s,
            onClick: function onClick() {
              return g();
            },
            onKeyDown: function onKeyDown(_ref3) {
              var n = _ref3.key;
              ('Enter' !== n && 'Escape' !== n) || g();
            },
            className: 'dropdown-content-button ' + (null !== t && t.id === s ? 'active' : ''),
          },
          r.default.createElement(
            e.Text,
            {
              className: 'title',
              size: 's',
              leftIcon: p ? { icon: p, size: u || 'm' } : void 0,
              rightIcon: b ? { icon: b, size: u || 'm' } : void 0,
            },
            h,
          ),
        );
      };
      d(
        ":root {\n  --checkbox-width: 20px;\n  --checkbox-height: 20px;\n}\n\n.checkbox-checkmark {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: var(--checkbox-height);\n  width: var(--checkbox-width);\n  border-radius: var(--checkbox-border-radius);\n  border: 2px solid var(--checkbox-border-color);\n}\n\n.checkbox-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  height: var(--checkbox-height);\n  user-select: none;\n  cursor: pointer;\n  color: var(--checkbox-label-color);\n  padding-left: 10px;\n}\n\n.checkbox-input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkbox-input:checked + .checkbox-checkmark {\n  background-color: var(--checkbox-bg-color);\n  border: 2px solid var(--checkbox-bg-color);\n}\n\n.checkbox-input:checked + .checkbox-checkmark:after {\n  content: '';\n  position: absolute;\n  width: 30%;\n  height: 60%;\n  border: solid var(--checkbox-checkmark-color);\n  border-width: 0 2.5px 2.5px 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n  margin-bottom: 5px;\n}\n\n.checkbox-input:disabled {\n  background-color: var(--checkmark-disabled-bg-color);\n  cursor: default;\n  color: var(--checkbox-disabled-label-color);\n}\n\n.checkbox-input:disabled + .checkbox-checkmark {\n  background-color: var(--checkbox-checkmark-disabled-bg-color);\n  border: 2px solid var(--checkbox-checkmark-disabled-border-color);\n  cursor: default;\n}\n\n.checkbox-input:disabled ~ .checkbox-label {\n  color: var(--checkbox-disabled-label-color);\n  cursor: default;\n}\n\n.checkbox-input:disabled:not(:checked) + .checkbox-checkmark {\n  background-color: transparent;\n  border: 2px solid var(--checkbox-checkmark-disabled-border-color);\n}\n\n.checkbox-input:hover:not(:disabled) + .checkbox-checkmark ~ .checkbox-label {\n  color: var(--checkbox-hover-color);\n}\n\n.checkbox-input:hover:not(:disabled) + .checkbox-checkmark {\n  opacity: 0.75;\n}\n",
      ),
        d(
          ":root {\n  --radio-width: 20px;\n  --radio-height: 20px;\n}\n\n.radio-checkmark {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  height: var(--radio-height);\n  width: var(--radio-width);\n  border-radius: var(--radio-border-radius);\n  border: 2px solid var(--radio-border-color);\n}\n\n.radio-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  height: var(--radio-height);\n  user-select: none;\n  cursor: pointer;\n  color: var(--radio-label-color);\n  padding-left: 10px;\n}\n\n.radio-input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.radio-input:checked + .radio-checkmark {\n  background-color: var(--radio-bg-color);\n  border: 2px solid var(--radio-bg-color);\n}\n\n.radio-input:checked + .radio-checkmark:after {\n  content: '';\n  width: 53%;\n  height: 53%;\n  background-color: var(--radio-checkmark-color);\n  border-radius: var(--radio-border-radius);\n}\n\n.radio-input:disabled {\n  background-color: var(--radio-checkmark-disabled-bg-color);\n  cursor: default;\n  color: var(--radio-disabled-label-color);\n}\n\n.radio-input:disabled + .radio-checkmark {\n  background-color: var(--radio-checkmark-disabled-bg-color);\n  border: 2px solid var(--radio-checkmark-disabled-border-color);\n  cursor: default;\n}\n\n.radio-input:disabled ~ .radio-label {\n  color: var(--radio-disabled-label-color);\n  cursor: default;\n}\n\n.radio-input:disabled:not(:checked) + .radio-checkmark {\n  background-color: transparent;\n  border: 2px solid var(--radio-checkmark-disabled-border-color);\n}\n\n.radio-input:hover:not(:disabled) + .radio-checkmark ~ .radio-label {\n  opacity: 0.75;\n}\n\n.checkbox-input:hover:not(:disabled) + .radio-checkmark {\n  opacity: 0.75;\n}\n",
        );
      var c = { none: 0, xsmall: 10, small: 20, medium: 30, large: 40, xlarge: 60 },
        p = c.xsmall,
        b = c.small,
        u = c.medium,
        h = c.large,
        g = c.xlarge,
        v = {
          width: { min: '300px', max: '1170px' },
          sizes: {
            sizeNone: ''.concat(c.none, 'px'),
            sizeXs: ''.concat(p, 'px'),
            sizeS: ''.concat(b, 'px'),
            sizeM: ''.concat(u, 'px'),
            sizeL: ''.concat(h, 'px'),
            sizeXl: ''.concat(g, 'px'),
          },
        },
        _ref4 =
          {
            modernRed: '#EA143D',
            modernBlue: '#2378CD',
            tjara: '#000000',
            moln: '#ffffff',
            silver: '#949494',
            silverLight: '#F4F4F4',
            silverDark: '#6b6b6b',
            shadow: 'rgba(0, 0, 0, 0.2)',
            overlay: 'rgba(0, 0, 0, 0.75)',
            sand: '#faf6eb',
            snackskal: '#f7d7d1',
            sjobod: '#b00f2e',
            tang: '#751422',
            himmel: '#c0d5ed',
            hav: '#1a5a9a',
            mussla: '#123d66',
            modernGreen: '#74b346',
            extra: '#28d2b9',
          } || {},
        m = _ref4.modernRed,
        x = _ref4.tjara,
        k = _ref4.silver,
        f = _ref4.silverLight,
        w = _ref4.moln,
        _ref5 = c || {},
        C = _ref5.xsmall,
        y = _ref5.small,
        O = _ref5.large,
        z = _ref5.xlarge,
        E = {
          metrics: v,
          input: {
            backgroundColor: w,
            textColor: x,
            borderColor: k,
            borderRadius: ''.concat(C, 'px'),
            disabledBackgroundColor: f,
            disabledTextColor: k,
            disabledBorderColor: f,
            disabledTitleColor: k,
            titleColor: x,
            placeholderColor: k,
            padding: { noIcon: ''.concat(y, 'px'), withIcon: ''.concat(O, 'px') },
          },
          selectors: {
            checkbox: {
              backgroundColor: m,
              disabledBackgroundColor: k,
              checkmarkColor: w,
              hoverColor: k,
              labelColor: x,
              disabledLabelColor: k,
              borderRadius: ''.concat(C, 'px'),
              borderColor: k,
              disabledBorderColor: k,
            },
            radio: {
              backgroundColor: m,
              disabledBackgroundColor: k,
              checkmarkColor: w,
              hoverColor: k,
              labelColor: x,
              disabledLabelColor: k,
              borderRadius: ''.concat(z, 'px'),
              borderColor: k,
              disabledBorderColor: k,
            },
          },
          dropdown: {
            content: {
              borderRadius: ''.concat(C, 'px'),
              height: '300px',
              transitionSpeed: '0.5s',
              backgroundColor: w,
              item: {
                height: '40px',
                neutral: { backgroundColor: w, borderColor: w, textColor: x, iconColor: x },
                active: { backgroundColor: m, borderColor: m, textColor: w, iconColor: w },
                disabled: { backgroundColor: f, borderColor: f, textColor: f, iconColor: f },
              },
            },
          },
        };
      o.AddTheme && o.AddTheme({ theme: E }),
        (exports.Checkbox = function (n) {
          var _n$className = n.className,
            o = void 0 === _n$className ? '' : _n$className,
            t = n.label,
            d = n.onChange,
            a = i(n, ['className', 'label', 'onChange']);
          return r.default.createElement(
            'label',
            { 'data-testid': 'checkbox', className: 'checkbox-label '.concat(o) },
            r.default.createElement(
              'input',
              Object.assign(
                {
                  'data-testid': 'input',
                  className: 'checkbox-input',
                  onChange: function onChange(n) {
                    return d && d(n);
                  },
                },
                a,
                { type: 'checkbox' },
              ),
            ),
            r.default.createElement('span', { className: 'checkbox-checkmark' }),
            r.default.createElement(e.Text, { className: 'checkbox-label' }, t),
          );
        }),
        (exports.Dropdown = function (e) {
          var _e$className = e.className,
            o = void 0 === _e$className ? '' : _e$className,
            t = e.onChange,
            d = e.options,
            c = e.onOptionClick,
            s = e.onToggleOpen,
            p = i(e, ['className', 'onChange', 'options', 'onOptionClick', 'onToggleOpen']),
            _ref6 = (function (_ref8) {
              var e = _ref8.options,
                _n$useState6 = _slicedToArray(n.useState(e), 2),
                o = _n$useState6[0],
                t = _n$useState6[1],
                _n$useState8 = _slicedToArray(n.useState(null), 2),
                r = _n$useState8[0],
                i = _n$useState8[1],
                d = n.useCallback(function (n) {
                  var e = o.filter(function (_ref9) {
                    var _ref9$title = _ref9.title;
                    return (void 0 === _ref9$title ? '' : _ref9$title).toLowerCase().includes(n);
                  });
                  e && t(e);
                }, []),
                a = n.useCallback(function (n) {
                  var e = o.findIndex(function (_ref10) {
                    return _ref10.id === n;
                  });
                  o && o[e] && i(o[e]);
                }, []);
              return { activeOption: r, filteredOptions: o, onSetFilteredOptions: d, onClickFilterOptions: a };
            })({ options: d }),
            b = _ref6.activeOption,
            u = _ref6.filteredOptions,
            h = _ref6.onSetFilteredOptions,
            g = _ref6.onClickFilterOptions,
            _n$useState4 = _slicedToArray(n.useState(!1), 2),
            v = _n$useState4[0],
            m = _n$useState4[1],
            x = (b || {}).title,
            k = u.map(function (n) {
              var e = i(n, []);
              return r.default.createElement(
                'li',
                { key: e.id },
                r.default.createElement(
                  l,
                  Object.assign(
                    {
                      onOptionsClick: function onOptionsClick(n) {
                        g(n.id), c(n);
                      },
                      activeOption: b,
                      open: v,
                      setOpen: function setOpen() {
                        return m(!1);
                      },
                    },
                    e,
                  ),
                ),
              );
            });
          return (
            n.useEffect(
              function () {
                return s && s(v);
              },
              [v],
            ),
            r.default.createElement(
              'div',
              {
                'data-testid': 'dropdown',
                className: 'dropdown-wrapper '
                  .concat(o, ' ')
                  .concat(v ? 'open' : 'close', ' ')
                  .concat(p.disabled ? 'disabled' : ''),
              },
              r.default.createElement(
                a,
                Object.assign(
                  {
                    defaultValue: x,
                    onClick: function onClick() {
                      return m(!v);
                    },
                    onChange: function onChange(n) {
                      h(n.currentTarget.value), t && t(n), m(!0);
                    },
                  },
                  p,
                ),
              ),
              r.default.createElement(
                'div',
                { 'data-testid': 'dropdown-content', className: 'dropdown-content ' + (v ? 'open' : 'close') },
                r.default.createElement(
                  'ul',
                  { 'data-testid': 'dropdown-content-ul', className: 'dropdown-inner-content' },
                  u && k,
                ),
              ),
            )
          );
        }),
        (exports.Input = a),
        (exports.Radio = function (n) {
          var _n$className2 = n.className,
            o = void 0 === _n$className2 ? '' : _n$className2,
            t = n.label,
            d = n.onChange,
            a = i(n, ['className', 'label', 'onChange']);
          return r.default.createElement(
            'label',
            { 'data-testid': 'radio', className: 'radio-label '.concat(o) },
            r.default.createElement(
              'input',
              Object.assign(
                {
                  'data-testid': 'input',
                  className: 'radio-input',
                  onChange: function onChange(n) {
                    return d && d(n);
                  },
                  type: 'radio',
                },
                a,
              ),
            ),
            r.default.createElement('span', { className: 'radio-checkmark' }),
            r.default.createElement(e.Text, { className: 'radio-label' }, t),
          );
        }),
        (exports.formsTheme = E);
    },
    484: function (module, exports, __webpack_require__) {
      'use strict';
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      __webpack_require__(7),
        __webpack_require__(13),
        __webpack_require__(25),
        __webpack_require__(21),
        __webpack_require__(19),
        __webpack_require__(34),
        __webpack_require__(12),
        __webpack_require__(18),
        __webpack_require__(139),
        __webpack_require__(22),
        Object.defineProperty(exports, '__esModule', { value: !0 });
      var e = __webpack_require__(0),
        t = __webpack_require__(37),
        n = __webpack_require__(127);
      var o = (function a(e) {
        return e && 'object' == _typeof(e) && 'default' in e ? e : { default: e };
      })(e);
      !(function (e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if ('undefined' != typeof document) {
          var a = document.head || document.getElementsByTagName('head')[0],
            o = document.createElement('style');
          (o.type = 'text/css'),
            'top' === n && a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o),
            o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e));
        }
      })(
        '.tab-wrapper {\n  display: flex;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  list-style-type: none;\n  padding: 0;\n}\n\n.tab-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.tab-content {\n  align-items: center;\n  justify-items: center;\n  background-color: transparent;\n  margin: 0;\n}\n.tab-content button {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  border: none;\n  background-color: transparent;\n  padding: var(--system-size-xs) var(--system-size-l);\n  margin: 0;\n  height: 100%;\n  border-bottom: var(--tab-border-width) solid var(--tab-border-color);\n}\n\n.tab-content.active button {\n  border-bottom: var(--tab-border-width) solid var(--tab-active-color);\n}\n\n.tab-content.active button .tab-text {\n  color: var(--tab-active-color);\n}\n\n.tab-content.active button svg path {\n  fill: var(--tab-active-color);\n}\n\n.tab-content button:disabled {\n  border-bottom: var(--tab-border-width) solid var(--tab-disabled-color);\n}\n\n.tab-content button:disabled .tab-text {\n  color: var(--tab-disabled-color);\n}\n\n.tab-content button:disabled .icon svg path {\n  fill: var(--tab-disabled-color);\n}\n',
      );
      var r = function r(_ref3) {
          var _ref3$options = _ref3.options,
            e = void 0 === _ref3$options ? [] : _ref3$options,
            n = _ref3.onOptionsClick,
            a = _ref3.activeOption;
          return o.default.createElement(
            o.default.Fragment,
            null,
            e.map(function (_ref4) {
              var e = _ref4.title,
                r = _ref4.id,
                i = _ref4.leftIcon,
                l = _ref4.rightIcon,
                d = _ref4.disabled;
              return o.default.createElement(
                'li',
                {
                  'data-testid': 'tab-option-wrapper',
                  key: r,
                  className: 'tab-content ' + ((null == a ? void 0 : a.id) === r ? 'active' : ''),
                },
                o.default.createElement(
                  'button',
                  {
                    'data-testid': 'tab-option',
                    disabled: d,
                    key: r,
                    onClick: function onClick() {
                      return n({ title: e, id: r, leftIcon: i, rightIcon: l, disabled: d });
                    },
                  },
                  o.default.createElement(
                    t.Text,
                    { className: 'tab-text', size: 's', wrap: 'nowrap', leftIcon: i, rightIcon: l },
                    e,
                  ),
                ),
              );
            }),
          );
        },
        i = { none: 0, xsmall: 10, small: 20, medium: 30, large: 40, xlarge: 60 },
        d = i.xsmall,
        s = i.small,
        c = i.medium,
        b = i.large,
        m = i.xlarge,
        p = {
          width: { min: '300px', max: '1170px' },
          sizes: {
            sizeNone: ''.concat(i.none, 'px'),
            sizeXs: ''.concat(d, 'px'),
            sizeS: ''.concat(s, 'px'),
            sizeM: ''.concat(c, 'px'),
            sizeL: ''.concat(b, 'px'),
            sizeXl: ''.concat(m, 'px'),
          },
        },
        _ref =
          {
            modernRed: '#EA143D',
            modernBlue: '#2378CD',
            tjara: '#000000',
            moln: '#ffffff',
            silver: '#949494',
            silverLight: '#F4F4F4',
            silverDark: '#6b6b6b',
            shadow: 'rgba(0, 0, 0, 0.2)',
            overlay: 'rgba(0, 0, 0, 0.75)',
            sand: '#faf6eb',
            snackskal: '#f7d7d1',
            sjobod: '#b00f2e',
            tang: '#751422',
            himmel: '#c0d5ed',
            hav: '#1a5a9a',
            mussla: '#123d66',
            modernGreen: '#74b346',
            extra: '#28d2b9',
          } || {},
        _ref2 = i || {},
        x = _ref2.xsmall,
        y = {
          metrics: p,
          tab: {
            color: _ref.tjara,
            disabledColor: _ref.silverLight,
            activeColor: _ref.modernRed,
            borderColor: _ref.silver,
            gap: ''.concat(_ref2.small, 'px'),
            borderWidth: ''.concat(x, 'px'),
          },
        };
      n.AddTheme && n.AddTheme({ theme: y }),
        (exports.Tab = function (_ref5) {
          var _ref5$className = _ref5.className,
            t = void 0 === _ref5$className ? '' : _ref5$className,
            n = _ref5.options,
            a = _ref5.onOptionClick,
            l = _ref5.activeOption || (n ? n[0] : void 0),
            _e$useState2 = _slicedToArray(e.useState(l), 2),
            d = _e$useState2[0],
            s = _e$useState2[1];
          return o.default.createElement(
            'ul',
            { 'data-testid': 'tab', className: 'tab-wrapper '.concat(t) },
            n &&
              o.default.createElement(r, {
                onOptionsClick: function onOptionsClick(e) {
                  a(e), s(e);
                },
                options: n,
                activeOption: d,
              }),
          );
        }),
        (exports.selectTheme = y);
    },
    485: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1107);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    486: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1129);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    487: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(72),
        content = __webpack_require__(1134);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    498: function (module, exports, __webpack_require__) {
      __webpack_require__(499),
        __webpack_require__(662),
        __webpack_require__(663),
        __webpack_require__(819),
        __webpack_require__(1036),
        __webpack_require__(1069),
        __webpack_require__(1072),
        __webpack_require__(1075),
        __webpack_require__(1087),
        __webpack_require__(1089),
        (module.exports = __webpack_require__(1097));
    },
    51: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Button;
      });
      __webpack_require__(16), __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2),
        _text__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_require__(0), __webpack_require__(23));
      __webpack_require__(1115), __webpack_require__(116);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var Button = function Button(_ref) {
        var _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          label = _ref.label,
          buttonType = _ref.buttonType,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 'm' : _ref$size,
          _ref$labelSize = _ref.labelSize,
          labelSize = void 0 === _ref$labelSize ? 'xs' : _ref$labelSize,
          _ref$fullWidth = _ref.fullWidth,
          fullWidth = void 0 !== _ref$fullWidth && _ref$fullWidth,
          leftIcon = _ref.leftIcon,
          rightIcon = _ref.rightIcon,
          innerRef = _ref.innerRef,
          rest = _objectWithoutProperties(_ref, [
            'className',
            'label',
            'buttonType',
            'size',
            'labelSize',
            'fullWidth',
            'leftIcon',
            'rightIcon',
            'innerRef',
          ]);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          'button',
          Object.assign(
            {
              className: 'button button-'
                .concat(buttonType, ' button--size-')
                .concat(size, ' button--label-size-')
                .concat(labelSize, ' ')
                .concat(fullWidth ? 'button-full-width' : '', ' ')
                .concat(className),
              ref: innerRef,
              'data-testid': 'button',
            },
            rest,
            {
              children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                _text__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  className: 'button-label',
                  size: labelSize,
                  leftIcon: leftIcon,
                  rightIcon: rightIcon,
                  children: label,
                },
              ),
            },
          ),
        );
      };
      Button.displayName = 'Button';
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => void' },
              },
              buttonType: {
                defaultValue: null,
                description: '',
                name: 'buttonType',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"primary"' },
                    { value: '"secondary"' },
                    { value: '"badge"' },
                    { value: '"icon"' },
                    { value: '"flat"' },
                  ],
                },
              },
              size: {
                defaultValue: { value: 'm' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: '"xs" | "s" | "m" | "l" | "xl"' },
              },
              labelSize: {
                defaultValue: { value: 'xs' },
                description: '',
                name: 'labelSize',
                required: !1,
                type: { name: '"xs" | "s" | "m" | "l" | "xl"' },
              },
              fullWidth: {
                defaultValue: { value: !1 },
                description: '',
                name: 'fullWidth',
                required: !1,
                type: { name: 'boolean' },
              },
              leftIcon: {
                defaultValue: null,
                description: '',
                name: 'leftIcon',
                required: !1,
                type: { name: 'IIconProps' },
              },
              rightIcon: {
                defaultValue: null,
                description: '',
                name: 'rightIcon',
                required: !1,
                type: { name: 'IIconProps' },
              },
              innerRef: {
                defaultValue: null,
                description: '',
                name: 'innerRef',
                required: !1,
                type: { name: 'RefObject<HTMLButtonElement>' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/components/button/index.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'packages/core/src/components/button/index.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (SettingButton.displayName = 'SettingButton'),
          (SettingButton.__docgenInfo = {
            description: '',
            displayName: 'SettingButton',
            props: {
              settingTitle: {
                defaultValue: null,
                description: '',
                name: 'settingTitle',
                required: !0,
                type: { name: 'string' },
              },
              settingIcon: {
                defaultValue: null,
                description: '',
                name: 'settingIcon',
                required: !0,
                type: { name: 'IIconProps | undefined' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              open: { defaultValue: null, description: '', name: 'open', required: !0, type: { name: 'boolean' } },
              setOpen: {
                defaultValue: null,
                description: '',
                name: 'setOpen',
                required: !0,
                type: { name: '(open: boolean) => void' },
              },
              closeIcon: {
                defaultValue: null,
                description: '',
                name: 'closeIcon',
                required: !0,
                type: { name: 'IIconProps' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              modalTitle: {
                defaultValue: null,
                description: '',
                name: 'modalTitle',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/core/src/components/button/index.tsx#SettingButton'] = {
              docgenInfo: SettingButton.__docgenInfo,
              name: 'SettingButton',
              path: 'packages/core/src/components/button/index.tsx#SettingButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    572: function (module, exports) {},
    663: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(371);
    },
    79: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Input;
      });
      __webpack_require__(16), __webpack_require__(9), __webpack_require__(3), __webpack_require__(8);
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2),
        _obrigadosenior_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37),
        react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
      __webpack_require__(1127);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var Input = function Input(_ref) {
        var title = _ref.title,
          leftIcon = _ref.leftIcon,
          rightIcon = _ref.rightIcon,
          _ref$defaultValue = _ref.defaultValue,
          defaultValue = void 0 === _ref$defaultValue ? '' : _ref$defaultValue,
          _onChange = _ref.onChange,
          _ref$className = _ref.className,
          className = void 0 === _ref$className ? '' : _ref$className,
          _ref$height = _ref.height,
          height = void 0 === _ref$height ? 'xl' : _ref$height,
          rest = _objectWithoutProperties(_ref, [
            'title',
            'leftIcon',
            'rightIcon',
            'defaultValue',
            'onChange',
            'className',
            'height',
          ]),
          _useState2 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_6__.useState)(defaultValue), 2),
          val = _useState2[0],
          setVal = _useState2[1],
          inputRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.useRef(null),
          iconClass = '';
        return (
          leftIcon && (iconClass = 'icons-left'),
          rightIcon && (iconClass = 'icons-right'),
          leftIcon && rightIcon && (iconClass = 'icons-right-left'),
          Object(react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(
            function () {
              return setVal(defaultValue);
            },
            [defaultValue],
          ),
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)('div', {
            'data-testid': 'input-wrapper',
            className: 'input-div input-height-'
              .concat(height, ' ')
              .concat(className, ' ')
              .concat(rest.disabled ? 'disabled' : ''),
            children: [
              leftIcon &&
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  _obrigadosenior_core__WEBPACK_IMPORTED_MODULE_5__.Icon,
                  {
                    className: 'icon-left',
                    icon: leftIcon,
                    size: 'm',
                    disabled: rest.disabled,
                  },
                ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)('div', {
                className: 'input-wrapper',
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('label', {
                    'data-testid': 'input-title',
                    className: 'input-title '.concat(iconClass),
                    htmlFor: title,
                    children: title,
                  }),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                    'input',
                    Object.assign(
                      {
                        'data-testid': 'input',
                        name: title,
                        value: val,
                        className: 'input '.concat(iconClass),
                        ref: inputRef,
                        onChange: function onChange(event) {
                          _onChange && _onChange(event), setVal(event.currentTarget.value);
                        },
                        onKeyDown: function onKeyDown(_ref2) {
                          'Enter' === _ref2.key && rest.onClick && rest.onClick();
                        },
                      },
                      rest,
                    ),
                  ),
                ],
              }),
              rightIcon &&
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  _obrigadosenior_core__WEBPACK_IMPORTED_MODULE_5__.Icon,
                  {
                    className: 'icon-right',
                    icon: rightIcon,
                    size: 'm',
                    disabled: rest.disabled,
                  },
                ),
            ],
          })
        );
      };
      Input.displayName = 'Input';
      try {
        (Input.displayName = 'Input'),
          (Input.__docgenInfo = {
            description: '',
            displayName: 'Input',
            props: {
              title: { defaultValue: null, description: '', name: 'title', required: !0, type: { name: 'string' } },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !0,
                type: { name: 'string' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: '(event: ChangeEvent<HTMLInputElement>) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
              padding: { defaultValue: null, description: '', name: 'padding', required: !1, type: { name: 'string' } },
              leftIcon: {
                defaultValue: null,
                description: '',
                name: 'leftIcon',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              rightIcon: {
                defaultValue: null,
                description: '',
                name: 'rightIcon',
                required: !1,
                type: {
                  name: 'Element | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<...>)>',
                },
              },
              height: {
                defaultValue: { value: 'xl' },
                description: '',
                name: 'height',
                required: !1,
                type: { name: '"xs" | "s" | "m" | "l" | "xl"' },
              },
              className: {
                defaultValue: { value: '' },
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              defaultValue: {
                defaultValue: { value: '' },
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/forms/src/components/input/index.tsx#Input'] = {
              docgenInfo: Input.__docgenInfo,
              name: 'Input',
              path: 'packages/forms/src/components/input/index.tsx#Input',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
  [[498, 1, 2]],
]);
//# sourceMappingURL=main.38247e7c50eca82de0b9.bundle.js.map
