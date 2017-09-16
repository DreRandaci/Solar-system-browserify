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
    // let container += `<div class='col-md-4 col-sm-6 planetCard'>`;
    for (let key in getMercury) {
        container += `<h4>${key}: ${getMercury[key]}</h4>`;
    }   
    // container += `</div>`;
    output.innerHTML += container;   
};

module.exports = outputMercury;
