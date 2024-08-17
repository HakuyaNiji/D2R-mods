const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const skillsdescFileName = 'global\\excel\\skilldesc.txt';
const skillsdesc = D2RMM.readTsv(skillsdescFileName);

const missilesdescFileName = 'global\\excel\\missiles.txt';
const missilesdesc = D2RMM.readTsv(missilesdescFileName);

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
		row.Param7 = config.barFrenzyTime * 25;
	}
});
D2RMM.writeTsv(skillsFilename, skills);

// missiles.txt
missilesdesc.rows.forEach((row) => {
	// Battle Cry
	if (row.Missile == 'battlecry') {
		row.Vel = config.barBattleCryRange * 3
		row.MaxVel = config.barBattleCryRange * 3
		row.Range = config.barBattleCryRange
	}
	// War Cry
	if (row.Missile == 'warcry') {
		row.Vel = config.barWarCryRange * 3
		row.MaxVel = config.barWarCryRange * 3
		row.Range = config.barWarCryRange
	}
});
D2RMM.writeTsv(missilesdescFileName, missilesdesc);

// skilldesc.txt
skillsdesc.rows.forEach((row) => {
	// Battle Cry
	if (row.skilldesc == 'battle cry') {
		row.desccalca4 = config.barBattleCryRange
	}
	// War Cry
	if (row.skilldesc == 'war cry') {
		row.desccalca4 = config.barWarCryRange
	}
});
D2RMM.writeTsv(skillsdescFileName, skillsdesc);