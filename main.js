'use strict'


window.addEventListener('load', function () {

  console.log('Patching Orca <--> Enfer!')
  const orcaClient = document.getElementById('orca-iframe').contentWindow.orcaClient
  const enferClient = document.getElementById('enfer-iframe').contentWindow.enferClient;

  const enferBridge = {
    send: (msg) => {
      enferClient.io.onMessage({data: msg})
    }
  }

  orcaClient.io.midi.outputDevice = () => enferBridge
})


function toggle(id) {
  var x = document.getElementById(id);
  debugger;
  if (!x.style.display || x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
