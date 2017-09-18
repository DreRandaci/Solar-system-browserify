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
	for (let key in getJupiter) {
		output.innerHTML += `<h4>${key}: ${getJupiter[key]}</h4>`;
	}
	output.innerHTML += `<img class='planetImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg">`;				
};

module.exports = outputJupiter;
