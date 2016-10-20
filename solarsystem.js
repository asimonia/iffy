// Immediately invoked function expressions
// Does not pollute the global namespace

var SolarSystem = function (newSpacecraft) {
	// private state
	var planets = ["Mercury", "Venus", "Earth", "Mars"];
	var spacecraft = ["Voyager I"];

	// public methods
	return {
		getSpacecraft: function () {
			// getters
			return spacecraft;
		},
		addSpacecraft: function (newSpacecraft) {
			// setters
			spacecraft.push(newSpacecraft);
		}
	};
}();

SolarSystem.addSpacecraft("Cassini");
console.log('spacecraft', SolarSystem.getSpacecraft());