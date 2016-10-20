var SolarSystem = (function(oldSolarSystem) {
	var activeSpacecraft = [];

	oldSolarSystem.addSpacecraft = function(spacecraft) {
		activeSpacecraft.push(spacecraft);
	}

	oldSolarSystem.getSpacecraft = function() {
		return activeSpacecraft;
	}

	return oldSolarSystem;
	
})(SolarSystem);
