"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSpring = require("react-spring");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var number = [{
  value: 0,
  active: [0, 1, 2, 4, 5, 6]
}, {
  value: 1,
  active: [2, 6]
}, {
  value: 2,
  active: [1, 2, 3, 4, 5]
}, {
  value: 3,
  active: [1, 2, 3, 5, 6]
}, {
  value: 4,
  active: [0, 2, 3, 6]
}, {
  value: 5,
  active: [0, 1, 3, 5, 6]
}, {
  value: 6,
  active: [0, 1, 3, 4, 5, 6]
}, {
  value: 7,
  active: [1, 2, 6]
}, {
  value: 8,
  active: [0, 1, 2, 3, 4, 5, 6]
}, {
  value: 9,
  active: [0, 1, 2, 3, 5, 6]
}, {
  value: "-",
  active: [3]
}];
var lineArray = ["40,80 60,60 80,80 80,160 60,180 40,160", "63,57 83,37 147,37 167,57 147,77 83,77", "150,80 170,60 190,80 190,160 170,180 150,160", "63,183 83,163 147,163 167,183 147,204 83,204", "40,206 60,187 80,207 80,287  60,307 40,287", "63,310 83,290 147,290 167,310 147,330 83,330", "150,206 169,187 190,207 190,287  170,307 150,287"];

var DigitalNumber = function DigitalNumber(_ref) {
  var nums = _ref.nums,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "100%" : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "100%" : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#FF0000" : _ref$color,
      _ref$unActiveColor = _ref.unActiveColor,
      unActiveColor = _ref$unActiveColor === void 0 ? "#22221e" : _ref$unActiveColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? "#000" : _ref$backgroundColor,
      _ref$transition = _ref.transition,
      transition = _ref$transition === void 0 ? "none" : _ref$transition,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? false : _ref$transform,
      _ref$transformDuratio = _ref.transformDuration,
      transformDuration = _ref$transformDuratio === void 0 ? 600 : _ref$transformDuratio;
  var numsArray = nums ? nums.split("") : [1, 2, 3];
  numsArray = numsArray.filter(function (item) {
    return /[0-9.-]/g.test(item);
  }); // const props = useSpring({ number: 1, from: { number: 0 } })

  var renderPoint = function renderPoint() {
    return /*#__PURE__*/_react["default"].createElement("svg", {
      /* eslint-disable-next-line react/no-array-index-key */
      key: "point",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 228 376",
      width: "40%",
      height: "100%",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("polygon", {
      points: "80,500 80,420 160,420 160,500",
      style: {
        fill: color
      }
    })));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: backgroundColor,
      display: "flex",
      width: width,
      height: height,
      transition: transition ? transition : "none"
    }
  }, numsArray.map(function (item, index) {
    if (item === ".") {
      return renderPoint();
    }

    return /*#__PURE__*/_react["default"].createElement(_reactSpring.Spring, {
      key: "".concat(item, "-").concat(index),
      from: {
        number: 0
      },
      to: {
        number: parseInt(item, 10)
      },
      config: {
        duration: transformDuration
      }
    }, function (props) {
      return /*#__PURE__*/_react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 228 376",
        width: "100%",
        height: "100%",
        xmlnsXlink: "http://www.w3.org/1999/xlink"
      }, /*#__PURE__*/_react["default"].createElement("g", null, lineArray.map(function (line, lineIndex) {
        return /*#__PURE__*/_react["default"].createElement("polygon", {
          key: line,
          points: line,
          style: {
            fill: number[transform ? Math.ceil(props.number) : item].active.includes(lineIndex) ? color : unActiveColor
          }
        });
      })));
    });
  }));
}; // Render app


var _default = DigitalNumber;
exports["default"] = _default;