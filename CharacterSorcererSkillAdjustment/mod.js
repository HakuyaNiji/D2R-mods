const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const statesFilename = 'global\\excel\\states.txt';
const states = D2RMM.readTsv(statesFilename);

// skills.txt
skills.rows.forEach((row) => {
// Sorcerer
	// Static Field
	if (config.sorStaticField) {
		if (row.skill == 'Static Field') {
			row.LineOfSight = ''
		}
	}
	// Fire Wall
	if (config.sorFireWall) {
		if (row.skill == 'Fire Wall') {
			row.LineOfSight = ''
		}
	}
	// Meteor
	if (config.sorMeteor) {
		if (row.skill == 'Meteor') {
			row.LineOfSight = ''
		}
	}
	// Blizzard
	if (config.sorBlizzard) {
		if (row.skill == 'Blizzard') {
			row.LineOfSight = ''
		}
	}
	// Hydra
	if (config.sorHydra) {
		if (row.skill == 'Hydra') {
			row.LineOfSight = ''
		}
	}
	// Glacial Spike
	if (row.skill == 'Glacial Spike') {
		row.Param1 = config.sorGlacialSpikeRadius
	}
	// Chain Lightning
	if (row.skill == 'Chain Lightning') {
		row.Param5 = config.sorChainLightningTargets
	}
	// Cold Mastery
	if (row.skill == 'Cold Mastery') {
		row.Param2 = config.sorColdMastery
		if (config.sorColdMasteryPowerUp) {
			row.passivestat2 = "passive_fire_pierce"
			row.passivecalc2 = "ln12"
			row.passivestat3 = "passive_ltng_pierce"
			row.passivecalc3 = "ln12"
			row.passivestat4 = "passive_mag_pierce"
			row.passivecalc4 = "ln12"
		}
	}
	// Fire Mastery and Lightning Mastery
	if (config.sorFireAndLightningMasteryAlsoCold) {
		if(row.skill == 'Fire Mastery') {
			row.passivestat2 = "passive_cold_mastery"
			row.passivecalc2 = "ln12/2"
		}
		if(row.skill == 'Lightning Mastery') {
			row.passivestat2 = "passive_cold_mastery"
			row.passivecalc2 = "ln12/2"
		}
	}
});
D2RMM.writeTsv(skillsFilename, skills);

// states.txt
// Sorcerer three armor
if (config.sorArmorStack) {
	states.rows.forEach(row => {
		if (row.state == 'frozenarmor') {
			row.group = ""
		}
		if (row.state == 'chillingarmor') {
			row.group = ""
		}
		if (row.state == 'shiverarmor') {
			row.group = ""
		}
	});
D2RMM.writeTsv(statesFilename, states);
}