'use strict';

let getEarth = { 
	'Name': 'Earth',
	'Discovered': 'Undiscovered',
	'Mass': '5.9724 x 10^24 kg',
	'Volume': '1.0832 x 10^12 km^3',
	'Orbital distance': '150 million km',
	'Atmosphere': ['Nitrogen', ' oxygen', ' water', ' argon', ' CO2'],
	'Satellites': 'Moon',
	'Probes': 'Everything ever created by humans'
};

const outputEarth = (output) => {
	output.innerHTML += `<div class='col-md-4 col-sm-6 planetCard'>`;
	for (let key in getEarth) {
		output.innerHTML += `<h4>${key}: ${getEarth[key]}</h4>`;
	}	
	output.innerHTML += `</div>`;	
};

module.exports = outputEarth;
