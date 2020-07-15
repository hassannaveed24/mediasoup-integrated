"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

const rootEl = document.getElementById('app-site'); // Create a reusable render method that we can call more than once

let render = () => {
  // Dynamically import our main App component, and render it
  const MainApp = require('./MainApp').default;

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(MainApp, null), rootEl);
};

if (module.hot) {
  module.hot.accept('./MainApp', () => {
    const MainApp = require('./MainApp').default;

    render( /*#__PURE__*/_react.default.createElement(MainApp, null), rootEl);
  });
}

render();