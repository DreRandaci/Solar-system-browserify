'use strict';

const getMercury = 
{
		'Discovered': 'Prehistory',
		'Mass': '3.3011x10^23 kg',
		'Volume': '6.083x10^10',
		'Orbital distance': '57 million km',
		'Atmosphere': ['oxygen', 'sodium', 'hydrogen', 'helium', 'potassium', 'trace gases'],
		'Satellites': 'none',
		'Probes': ['Mariner 10', 'MESSENGER']
};

const outputMercury = (output) => {
    output.innerHTML += `<div id='mercury' class='planetCard'>`;
    for (let key in getMercury) {
        output.innerHTML += `<p>${key}: ${getMercury[key]}</p>`;
    }   
    output.innerHTML += `</div>`;   
};

module.exports = outputMercury;
