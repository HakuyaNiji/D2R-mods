const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

// skills.txt
skills.rows.forEach((row) => {
// Barbarian
	if (row.skill == 'Blade Mastery') {
		if (row.Param5 > config.barPassiveCriticalChanceMax) {
			row.Param5 = config.barPassiveCriticalChanceMax
		}
		row.Param6 = config.barPassiveCriticalChanceMax
	}
	if (row.skill == 'Axe Mastery') {
		if (row.Param5 > config.barPassiveCriticalChanceMax) {
			row.Param5 = config.barPassiveCriticalChanceMax
		}
		row.Param6 = config.barPassiveCriticalChanceMax
	}
	if (row.skill == 'Mace Mastery') {
		if (row.Param5> config.barPassiveCriticalChanceMax) {
			row.Param5 = config.barPassiveCriticalChanceMax
		}
		row.Param6 = config.barPassiveCriticalChanceMax
	}
	if (row.skill == 'Pole Arm Mastery') {
		if (row.Param5 > config.barPassiveCriticalChanceMax) {
			row.Param5 = config.barPassiveCriticalChanceMax
		}
		row.Param6 = config.barPassiveCriticalChanceMax
	}
	if (row.skill == 'Throwing Mastery') {
		if (row.Param5 > config.barPassiveCriticalChanceMax) {//crit
			row.Param5 = config.barPassiveCriticalChanceMax
		}
		row.Param6 = config.barPassiveCriticalChanceMax
		if (row.Param7 > config.barThroPierMax) {//pierce
			row.Param7 = config.barThroPierMax
		}
		row.Param8 = config.barThroPierMax
		if (row.Param9 > config.barThroNoMax) {//no consume
			row.Param9 = config.barThroNoMax
		}
		row.Param10 = config.barThroNoMax
	}
	if (row.skill == 'Spear Mastery') {
		if (row.Param5 > config.barPassiveCriticalChanceMax) {
			row.Param5 = config.barPassiveCriticalChanceMax
		}
		row.Param6 = config.barPassiveCriticalChanceMax
	}
	if (row.skill == 'Natural Resistance') {
		if (row.Param1 > config.barResistMax) {
			row.Param1 = config.barResistMax
		}
		row.Param2 = config.barResistMax
	}
	// Frenzy Time
	if (row.skilldesc === 'frenzy') {
		row.Param7 = config.frenzy * 25;
	}
});
D2RMM.writeTsv(skillsFilename, skills);