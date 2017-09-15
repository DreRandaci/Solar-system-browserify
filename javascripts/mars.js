'use strict';

 const getMars =  
{
        "Name": "Earth",
        "Discovered": "Prehistory",
        "Mass": "5.9724 x 10^24 kg",
        "Volume": "1.0832 x 10^12 km³",
        "Orbit": "150 million km",
        "Atmosphere": ["nitrogen", "oxygen", "water", "argon", "CO2"],
        "Moons": ["Moon"],
        "Probes": ["Classified"]
};

const outputMars = (output) => {
    output.innerHTML += `<div id='mars' class='planetCard'>`;
    for (let key in getMars) {
        output.innerHTML += `<p>${key}: ${getMars[key]}</p>`;
    }   
    output.innerHTML += `</div>`;   
};

module.exports = outputMars;