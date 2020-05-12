"use strict";

/* globals */
// generatedExamples - from examples.js
// VanillaTilt - tilty

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

  addOrcaPreListeners()
  loadExamples()
  addTilt()

});

function addOrcaPreListeners() {
  document.querySelectorAll('pre.orca').forEach(
    thing => thing.addEventListener('click', event => {
      loadOrca(event.target.innerText)
    })
  )
}

function loadExamples() {
  const examples = {
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
}

function addTilt() {
  VanillaTilt.init(document.querySelectorAll(".operator-example"));
  VanillaTilt.init(document.querySelectorAll("#base36-numbers > table"));
}

function loadOrca(string) {
  orcaClient.orca.reset();
  orcaClient.toggleGuide(false);
  orcaClient.orca.writeBlock(2, 2, string)
}

function loadExample(name) {
  loadOrca(exampes[name])
}

function makeOperatorExample(el, a, b, c) {
  debugger;
}
