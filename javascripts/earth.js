'use strict';

let getEarth = { 
	'Name': 'Earth',
	'Discovered': 'Undiscovered',
	'Mass': '5.9724 x 10^24 kg',
	'Volume': '1.0832 x 10^12 km^3',
	'Orbital distance': '150 million km',
	'Atmosphere': ['Nitrogen', 'oxygen', 'water', 'argon', 'CO2'],
	'Satellites': 'Moon',
	'Probes': 'Everything ever created by humans'
};

const outputEarth = (output) => {
	output.innerHTML += `<div id='earth class='planetCard''>`;
	for (let key in getEarth) {
		output.innerHTML += `<p>${key}: ${getEarth[key]}</p>`;
	}	
	output.innerHTML += `</div>`;	
};

module.exports = outputEarth;
