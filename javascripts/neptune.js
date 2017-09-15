'use strict';

const getNeptune = 
{
		'Discovered': '1846 by Johann Galle and Urbain Le Verrier',
		'Mass': '1.0243 x 10^26 kg',
		'Volume': '6.254 x 10^13 km^3',
		'Orbital distance': '4.5 billion km',
		'Atmosphere': ['hydrogen', 'helium', 'methane', 'trace gases'],
		'Satellites': ['14 known - Naiad', 'Thalassa', 'Despina', 'Galatea', 'Larissa', 'Proteus', 'Triton', 'Nereid', 'Halimede', 'Sao', 'Laomedeia', 'Psamathe', 'Neso', '1 unnamed'],
		'Probes': 'Voyager 2'
};

const outputSaturn = (output) => {
    output.innerHTML += `<div id='neptune class='planetCard''>`;
    for (let key in getNeptune) {
        output.innerHTML += `<p>${key}: ${getNeptune[key]}</p>`;
    }   
    output.innerHTML += `</div>`;   
};

module.exports = outputSaturn;