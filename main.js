"use strict";

/* globals */
// generatedExamples - from examples.js
var examples;

window.addEventListener("load", function () {
  console.log("Patching Orca <--> Enfer!");

  const orcaClient = document.getElementById("orca-iframe").contentWindow
    .orcaClient;
  const enferClient = document.getElementById("enfer-iframe").contentWindow
    .enferClient;

  const enferBridge = {
    send: (msg) => {
      enferClient.io.onMessage({ data: msg });
    },
    name: "enferBridge",
  };

  orcaClient.io.midi.outputDevice = () => enferBridge;

  window.orcaClient = orcaClient;
  window.enferClient = enferClient;

  examples = loadExamples()
  const sorted = Object.keys(examples).sort()

  const dropDown = document.getElementById('examples-content');
  sorted.forEach(item => {
    // Create anchor
    const a = document.createElement('a');  
    const link = document.createTextNode(item);
    a.appendChild(link);  
    a.href=`javascript:loadExample('${item}')`

    // Append
    dropDown.appendChild(a);
  })

});

function loadExamples() {
  return {
    ...generatedExamples,
    simpleBeat: `
  .............
  .............
  ....D4.......
  .....:00cf...
  .............
  ...5U8.......
  ....*:00a3...
  .............
  ...2U4.......
  .....:00g5...
  .............
  ...2D8.......
  .....:00hf...
  .............
  ....D........
  .....:10e....
  .............
  .............
  `
  }
}

function loadExample(name) {
  orcaClient.orca.reset();
  orcaClient.toggleGuide(false);
  orcaClient.orca.writeBlock(2, 2, examples[name])
}

function makeOperatorExample(el, a, b, c) {
  debugger;
}
