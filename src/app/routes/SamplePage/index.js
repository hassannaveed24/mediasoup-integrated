import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import { func } from 'prop-types';
import { useState, useEffect } from 'react';


function SamplePage(props) {
  var wsUri = "wss://echo.websocket.org/";
  var websocket = null;
  const [InitFnc, setInitFnc] = useState(testWebSocket());

  function testWebSocket() {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function (evt) { onOpen(evt) };
    websocket.onclose = function (evt) { onClose(evt) };
    websocket.onmessage = function (evt) { onMessage(evt) };
    websocket.onerror = function (evt) { onError(evt) };
  }

  function onOpen(evt) {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
  }

  function onClose(evt) {
    websocket.close();
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt) {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
    websocket.close();
  }

  function onError(evt) {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message) {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    var output = document.getElementById("output")
    output.appendChild(pre);
  }

  return (
    <div className="app-wrapper">
      <h1>WebSocket Test</h1>
      <div id="output"></div>
    </div>
  );
}

export default SamplePage;