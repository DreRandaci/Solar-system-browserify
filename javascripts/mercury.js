'use strict';

const getMercury = 
{
		'Name': 'Mercury',
		'Discovered': 'Prehistory',
		'Mass': '3.3011x10^23 kg',
		'Volume': '6.083x10^10',
		'Orbital distance': '57 million km',
		'Atmosphere': ['oxygen', ' sodium', ' hydrogen', ' helium', ' potassium', ' trace gases'],
		'Satellites': 'none',
		'Probes': ['Mariner 10', ' MESSENGER']
};

const outputMercury = (output) => {
    for (let key in getMercury) {
        output.innerHTML += `<h4>${key}: ${getMercury[key]}</h4>`;
    }
    output.innerHTML += `<img class='planetImg' src='https://www.nasa.gov/sites/default/files/mercury_1.jpg'>`;      
};

module.exports = outputMercury;
