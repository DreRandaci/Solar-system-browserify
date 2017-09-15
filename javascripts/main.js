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

mercury(outputContainer);
venus(outputContainer);
earth(outputContainer);
mars(outputContainer);
jupiter(outputContainer);
saturn(outputContainer);
uranus(outputContainer);
neptune(outputContainer);