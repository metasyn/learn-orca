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
