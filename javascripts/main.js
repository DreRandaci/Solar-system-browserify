'use strict';

let outputContainer = document.getElementById('DOMoutput');

const earth = require('./earth'); 
const jupiter = require('./jupiter'); 
const mars = require('./mars'); 
const mercury = require('./mercury'); 
const neptune = require('./neptune'); 
const saturn = require('./saturn'); 
const uranus = require('./uranus'); 
const venus = require('./venus'); 

mercury(document.getElementById('mercuryContainer'));
venus(document.getElementById('venusContainer'));
earth(document.getElementById('earthContainer'));
mars(document.getElementById('marsContainer'));
jupiter(document.getElementById('jupiterContainer'));
saturn(document.getElementById('saturnContainer'));
uranus(document.getElementById('uranusContainer'));
neptune(document.getElementById('venusContainer'));