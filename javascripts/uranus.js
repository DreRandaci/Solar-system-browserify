'use strict';

const getUranus = 
{
        "Name": "Uranus",
        "Discovered": "1782",
        "Mass": "8.6810 x 10^25 kg",
        "Volume": "6.833 x 10^13 km³",
        "Orbit": "2.9 billion km",
        "Atmosphere": ["Hydrogen", " Helium", " Methane", " Trace Gases"],
        "Moons": ["Ariel", " Umbriel", " Titania", " Oberon", " Miranda", " Cordelia", " Ophelia", " Bianca", " Cressida", " Desdemona", " Juliet", " Portia", " Rosalind", " Belinda", " Puck", " Caliban", " Sycorax", " Prospero", " Setebos", " Stephano", " Trinculo", " Francisco", " Margaret", " Ferdinand", " Perdita", " Mab", " Cupid"],
        "Probes": "Voyager 2"
};

const outputUranus = (output) => {
    for (let key in getUranus) {
        output.innerHTML += `<h4>${key}: ${getUranus[key]}</h4>`;
    } 
    output.innerHTML += `<img class='planetImg' src='https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'>`;           
};

module.exports = outputUranus;