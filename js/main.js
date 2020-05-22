// /////////////////////////
/* globals                */
/* loaded via script tags */
// /////////////////////////
let generatedExamples;
let vt;

// //////////
/* globals */
// //////////

let examples;

// ////////
/* ORCA */
// ////////

function patchOrcaToEnfer() {
  console.log('Patching Orca <--> Enfer!');

  const { orcaClient } = document.getElementById('orca-iframe').contentWindow;
  const { enferClient } = document.getElementById('enfer-iframe').contentWindow;

  const enferBridge = {
    send: (msg) => {
      enferClient.io.onMessage({ data: msg });
    },
    name: 'enferBridge',
  };

  orcaClient.io.midi.outputDevice = () => enferBridge;

  window.orcaClient = orcaClient;
  window.enferClient = enferClient;
}

function loadOrca(string) {
  window.orcaClient.orca.reset();
  window.orcaClient.toggleGuide(false);
  window.orcaClient.orca.writeBlock(2, 2, string);
}

function addOrcaSnippetListeners() {
  document.querySelectorAll('pre.orca').forEach((thing) => thing.addEventListener('click', (event) => {
    loadOrca(event.target.innerText);
  }));
}

// ////////////
/* examples */
// ////////////

function loadExamples() {
  examples = {
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
  `,
  };

  const sorted = Object.keys(examples).sort();

  const dropDown = document.getElementById('examples-content');
  sorted.forEach((item) => {
    // Create anchor
    const a = document.createElement('a');
    const link = document.createTextNode(item);
    a.appendChild(link);
    a.href = `javascript:loadExample('${item}')`;

    // Append
    dropDown.appendChild(a);
  });
}

// this is used via a href
// eslint-disable-next-line
function loadExample(name) {
  loadOrca(examples[name]);
}

// ////////////
/* Operators */
// ////////////

function newCell() {
  const div = document.createElement('div');
  div.classList.add('operator-cell');
  return div;
}

function addText(el, text) {
  const p = document.createElement('p');
  const child = document.createTextNode(text);
  p.appendChild(child);
  el.appendChild(p);
}

function emptyCell() {
  const cell = newCell();
  addText(cell, '.');
  return cell;
}

function emptyCells(n) {
  const cells = [];
  for (let i = 0; i < n; i += 1) {
    cells.push(emptyCell());
  }
  return cells;
}

function tooltipCell(value, text) {
  const cell = newCell();
  cell.classList.add('tooltip');
  addText(cell, value);

  const span = document.createElement('span');
  span.classList.add('tooltiptext');
  addText(span, text);
  cell.appendChild(span);

  return cell;
}

function argumentCell(value, text) {
  const cell = tooltipCell(value, text);
  cell.classList.add('argument');
  return cell;
}

function outputCell(value, text) {
  const cell = tooltipCell(value, text);
  cell.classList.add('output');
  return cell;
}

function makeRow(cells) {
  const row = document.createElement('div');
  row.classList.add('operator-row');
  cells.forEach((cell) => {
    row.appendChild(cell || emptyCell());
  });
  return row;
}

const operatorData = {
  C: {
    length: 3,
    rows: [
      null,
      [
        argumentCell('2', 'the first input: the rate'),
        tooltipCell('C', 'the operator'),
        argumentCell('7', 'the second input: the modulo'),
      ],
      [null, outputCell('4', 'the output: the clock value'), null],
    ],
  },
  D: {
    length: 3,
    rows: [
      null,
      [
        argumentCell('8', 'the first input: the rate'),
        tooltipCell('D', 'the operator'),
        argumentCell('2', 'the second input: the modulo'),
      ],
      [null, outputCell('*', 'the output: a bang'), null],
    ],
  },
  J: {
    length: 3,
    rows: [
      [null, argumentCell('9', 'the input: some value'), null],
      [null, tooltipCell('J', 'the operator'), null],
      [null, outputCell('9', 'the output: the input value'), null],
    ],
  },
  R: {
    length: 3,
    rows: [
      null,
      [
        argumentCell('a', 'the first input: the minimum random value'),
        tooltipCell('R', 'the operator'),
        argumentCell('z', 'the second input: the maximum random value'),
      ],
      [null, outputCell('t', 'the output: a random value'), null],
    ],
  },
  T: {
    length: 5,
    rows: [
      null,
      [
        argumentCell('1', 'the index of the selected number on the right side'),
        argumentCell('2', 'the total number of arguments on the right side'),
        tooltipCell('T', 'the operator'),
        argumentCell('E', 'the argument at index 0'),
        argumentCell('A', 'the argument at index 1'),
      ],
      [
        null,
        null,
        outputCell('A', 'the output: the value of the selected argument'),
        null,
        null,
      ],
    ],
  },
  X: {
    length: 4,
    rows: [
      null,
      [
        argumentCell('1', 'an x coordinate relative to the operator'),
        argumentCell('1', 'an y coordinate relative to the operator'),
        tooltipCell('X', 'the operator'),
        argumentCell('7', 'the argument'),
      ],
      null,
      [...emptyCells(3), outputCell('7', 'the input value offset by x, -y')],
    ],
  },
  Y: {
    length: 3,
    rows: [
      null,
      [
        argumentCell('3', 'the input: some value'),
        tooltipCell('Y', 'the operator'),
        outputCell('3', 'the output: the input value'),
      ],
      null,
    ],
  },
  ':': {
    length: 6,
    rows: [
      null,
      [
        tooltipCell(':', 'the operator'),
        argumentCell(
          'A',
          'a midi channel to send messages on (A = channel 10)',
        ),
        argumentCell('2', 'an octave'),
        argumentCell('F', 'a note value'),
        argumentCell('5', 'a velocity value'),
        argumentCell('1', 'a duration value'),
      ],
      null,
    ],
  },
};

function makeOperatorExample(operator) {
  const name = operator.getAttribute('data-operator');
  const data = operatorData[name];
  data.rows.forEach((item) => {
    const row = item || emptyCells(data.length);
    operator.appendChild(makeRow(row));
  });
}

function loadOperatorExamples() {
  const operators = document.getElementsByClassName('operator');
  Array.from(operators).forEach((op) => {
    op.classList.add('operator-example');
    makeOperatorExample(op);
  });
}

// /////////
/* Vanity */
// /////////

function addTilt() {
  vt.init(document.querySelectorAll('div.operator-example'));
  vt.init(document.querySelectorAll('div.operator'));
  vt.init(document.querySelectorAll('section > table'));
}

window.onload = () => {
  // eslint-disable-next-line
  vt = VanillaTilt;
  generatedExamples = window.examples;

  patchOrcaToEnfer();
  addOrcaSnippetListeners();
  loadExamples();
  addTilt();
  loadOperatorExamples();
};
