'use strict';

const getVenus = 
{
        "Name": "Venus",
        "Discovered": "Prehistory",
        "Mass": "4.8675 x 10^24 kg",
        "Volume": "9.2843 x 10^11 km³",
        "Orbit": "108 million km",
        "Atmosphere": ["carbon dioxide", "nitrogen", "trace gases"],
        "Moons": ["none"],
        "Probes": ["various Venera and Mariner", "Vega 1 and 2", "Magellan", "Venus Express", "Akatsuki", "IKAROS"]
};

const outputVenus = (output) => {
    output.innerHTML += `<div id='venus class='planetCard''>`;
    for (let key in getVenus) {
        output.innerHTML += `<p>${key}: ${getVenus[key]}</p>`;
    }   
    output.innerHTML += `</div>`;   
};

module.exports = outputVenus;    