'use strict';

const getVenus = 
{
        "Name": "Venus",
        "Discovered": "Prehistory",
        "Mass": "4.8675 x 10^24 kg",
        "Volume": "9.2843 x 10^11 km³",
        "Orbit": "108 million km",
        "Atmosphere": ["carbon dioxide", " nitrogen", " trace gases"],
        "Moons": ["none"],
        "Probes": ["Venera and Mariner", " Vega 1 and 2", " Magellan", " Venus Express", " Akatsuki", " IKAROS"]
};

const outputVenus = (output) => {
    for (let key in getVenus) {
        output.innerHTML += `<h4>${key}: ${getVenus[key]}</h4>`;
    }
    output.innerHTML += `<img class='planetImg' src='https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'>`;   
};

module.exports = outputVenus;    