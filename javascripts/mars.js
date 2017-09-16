'use strict';

 const getMars =  
{
        "Name": "Mars",
        "Discovered": "Prehistory",
        "Mass": "5.9724 x 10^24 kg",
        "Volume": "1.0832 x 10^12 km³",
        "Orbit": "150 million km",
        "Atmosphere": ["Nitrogen", " Oxygen", " Water", " Argon", " CO2"],
        "Moons": ["Moon"],
        "Probes": ["Classified"]
};

const outputMars = (output) => {
    output.innerHTML += `<div class='col-md-4 col-sm-6 planetCard'>`;
    for (let key in getMars) {
        output.innerHTML += `<h4>${key}: ${getMars[key]}</h4>`;
    }   
    output.innerHTML += `</div>`;   
};

module.exports = outputMars;