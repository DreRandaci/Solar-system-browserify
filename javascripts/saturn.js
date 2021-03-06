'use strict';

const getSaturn = 
{
        "Name": "Saturn",
        "Discovered": "Prehistory",
        "Mass": "5.6836 x 10^26 kg",
        "Volume": "8.2713 x 10^14 km³",
        "Orbit": "1.4 billion km",
        "Atmosphere": ["Hydrogen", " Helium", " Methane", " Trace Gases"],
        "Moons": ["Mimas", " Enceladus", " Tethys", " Dione", " Rhea", " Titan", " Hyperion", " Iapetus", " Phoebe", " Janus", " Epimetheus", " Helene", " Telesto", " Calypso", " Atlas", " Prometheus", " Pandora", " Pan", " Ymir", " Paaliaq", " Tarvos", " Ijiraq", " Suttungr", " Kiviuq", " Mundilfari", " Albiorix", " Skathi", " Erriapus", " Siarnaq", " Thrymr", " Narvi", " Methone", " Pallene", " Polydeuces", " Daphnis", " Aegir", " Bebhionn", " Bergelmir", " Bestla", " Farbauti", " Fenrir", " Fornjot", " Hati", " Hyrrokkin", " Kari", " Loge", " Skoll", " Surtur", " Anthe", " Jarnsaxa", " Greip", " Tarqeq", " Aegaeon", " 9 more unnamed"],
        "Probes": ["Pioneer 11", " Voyager 1 and 2", " Cassini"]
};

const outputSaturn = (output) => {
    for (let key in getSaturn) {
        output.innerHTML += `<h4>${key}: ${getSaturn[key]}</h4>`;
    }
    output.innerHTML += `<img class='planetImg' src='http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'>`;      
};

module.exports = outputSaturn;