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
    for (let key in getMars) {
        output.innerHTML += `<h4>${key}: ${getMars[key]}</h4>`;
    }      
    output.innerHTML += `<img class='planetImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'>`;     
};

module.exports = outputMars;