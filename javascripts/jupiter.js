'use strict';

const getJupiter = 
{ 		'Name': 'Jupiter',
		'Discovered': 'Prehistory',
		'Mass': '1.8986 x 10^27 kg',
		'Volume': '1.4313 x 10^15 km^3',
		'Orbital distance': '778 million km',
		'Atmosphere': ['Hydrogen', ' Helium', ' Methane', ' Ammonia', ' Trace Gases'],
		'Satellites': ['69 known - Io', ' Europa', ' Ganymede', ' Callisto', ' Amalthea', ' Himalia', ' Elara', ' Pasiphae', ' Sinope', ' Lysithea', ' Carme', ' Ananke', ' Leda', ' Thebe', ' Adrastea', ' Metis', ' Callirrhoe', ' Themisto', ' Megaclite', ' Taygete', ' Chaldene', ' Harpalyke', ' Kalyke', ' Iocaste', ' Erinome', ' Isonoe', ' Praxidike', ' Autonoe', ' Thyone', ' Hermippe', ' Aitne', ' Eurydome', ' Euanthe', ' Euporie', ' Orthosie', ' Sponde', ' Kale', ' Pasithee', ' Hegemone', ' Mneme', ' Aoede', ' Thelxinoe', ' Arche', ' Kallichore', ' Helike', ' Carpo', ' Eukelade', ' Cyllene', ' Kore', ' Herse', ' Dia', ' 18 more unnamed'],
		'Probes': [' Pioneer 10 and 11', ' Voyager 1 and 2', ' Ulysses', ' Galileo', ' Cassini', ' New Horizons', ' Juno']
};

const outputJupiter = (output) => {
	output.innerHTML += `<div class='col-md-4 col-sm-6 planetCard'>`;
	for (let key in getJupiter) {
		output.innerHTML += `<h4>${key}: ${getJupiter[key]}</h4>`;
	}	
	output.innerHTML += `</div>`;	
};

module.exports = outputJupiter;
