# Solar-system-browserify

### You'll be creating a web page that will display important scientific data about all eight planets in our solar system. 

- [x] The information about each planet will be separate modules.
- [x] Each module will export a single function named outputTo that will accept a single argument. That argument's value will be the DOM element reference into which it will insert information about a planet.

### Each module should output the following information.

Name
Year discovered
Mass
Size
Distance from Sun
Atmosphere composition
Satellites
Name of any probes/orbiters/explorers that have visited or landed on that planet

- [x] Create a main module that uses require to include each planet's module as a dependency and then subsequently calls the outputTo() method for each one, in the right order.