'use strict';

const getUranus = 
{
        "Name": "Uranus",
        "Discovered": "1782",
        "Mass": "8.6810 x 10^25 kg",
        "Volume": "6.833 x 10^13 km³",
        "Orbit": "2.9 billion km",
        "Atmosphere": ["hydrogen", "helium", "methane", "trace gases"],
        "Moons": ["Ariel", "Umbriel", "Titania", "Oberon", "Miranda", "Cordelia", "Ophelia", "Bianca", "Cressida", "Desdemona", "Juliet", "Portia", "Rosalind", "Belinda", "Puck", "Caliban", "Sycorax", "Prospero", "Setebos", "Stephano", "Trinculo", "Francisco", "Margaret", "Ferdinand", "Perdita", "Mab", "Cupid"],
        "Probes": ["Voyager 2"]
};

const outputUranus = (output) => {
    output.innerHTML += `<div id='uranus class='planetCard''>`;
    for (let key in getUranus) {
        output.innerHTML += `<p>${key}: ${getUranus[key]}</p>`;
    }   
    output.innerHTML += `</div>`;   
};

module.exports = outputUranus;