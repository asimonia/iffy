var SolarSystem = (function() {
	var planets = [];
	var activeSpacecraft = [];

	planets.push("mercury", "venus", "earth", "mars");
	planets.push("jupiter", "saturn", "uranus", "neptune");

	return {
		getPlanets: function() {
			return planets;
		},
		setPlanetsLandedOn: function(count) {
			if (count < 0 || count > planets.length) {
				throw `I don't think so. There are only ${planets.length} planets.`;
			} else {
				planetsLandedOn = count;
			}
		},
		getPlanetsLandedOn: function() {
			return planetsLandedOn;
		}
	};
})();

console.log("First SolarSystem", SolarSystem);
