const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const skillsdescFileName = 'global\\excel\\skilldesc.txt';
const skillsdesc = D2RMM.readTsv(skillsdescFileName);

const missilesdescFileName = 'global\\excel\\missiles.txt';
const missilesdesc = D2RMM.readTsv(missilesdescFileName);

// skills.txt
skills.rows.forEach((row) => {
// Amazon
	// Critical Strike
	if (row.skill == 'Critical Strike') {
		if (row.Param1 > config.amaCritMax) {
			row.Param1 = config.amaCritMax
		}
		row.Param2 = config.amaCritMax
	}
	// Dodge
	if (row.skill == 'Dodge') {
		if (row.Param1 > config.amaDodgeMax) {
			row.Param1 = config.amaDodgeMax
		}
		row.Param2 = config.amaDodgeMax
	}
	// Avoid
	if (row.skill == 'Avoid') {
		if (row.Param1 > config.amaAvoidMax) {
			row.Param1 = config.amaAvoidMax
		}
		row.Param2 = config.amaAvoidMax
	}
	// Evade
	if (row.skill == 'Evade') {
		if (row.Param1 > config.amaEvadeMax) {
			row.Param1 = config.amaEvadeMax
		}
		row.Param2 = config.amaEvadeMax
	}
	// Pierce
	if (row.skill == 'Pierce') {
		if (row.Param1 > config.amaPierMax) {
			row.Param1 = config.amaPierMax
		}
		row.Param2 = config.amaPierMax
	}
	// Valkyrie
	if (row.skill == 'Valkyrie') {
		row.petmax = config.amaValkyriePetMax
	}
	// Multiple Shot
	if (row.skill == 'Multiple Shot') {
		if (config.amaMultipleShotDmgBonus) {
			row.calc5 = `(skill('Guided Arrow'.lvl) + skill('Multiple Shot'.lvl)) * par4`
		}
	}
	// Freezing Arrow
	if (row.skill == 'Freezing Arrow') {
		row.Param1 = config.amaFreezingArrowRadius
	}
});
D2RMM.writeTsv(skillsFilename, skills);

// skilldesc.txt
skillsdesc.rows.forEach((row) => {
	// Multiple Shot
	if (row.skilldesc == 'multiple shot') {
		if (config.amaMultipleShotDmgBonus) {
			row.dsc2calca1 = `(96*100/128) + (skill('Guided Arrow'.lvl) + skill('Multiple Shot'.lvl)) * par4`
		}
	}
});
D2RMM.writeTsv(skillsdescFileName, skillsdesc);

// missiles.txt
missilesdesc.rows.forEach((row) => {
	// Freezing Arrow
	if (row.Missile == 'freezingarrowexp3') {
		if (config.amaMultipleShotDmgBonus) {
			row.sHitPar1 = config.amaFreezingArrowRadius
		}
	}
});
D2RMM.writeTsv(missilesdescFileName, missilesdesc);