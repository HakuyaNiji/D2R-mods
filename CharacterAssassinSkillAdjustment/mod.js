const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const statesFilename = 'global\\excel\\states.txt';
const states = D2RMM.readTsv(statesFilename);

// skills.txt
skills.rows.forEach((row) => {
// Assassin
	if (row.skill == 'Claw Mastery') {
		if (row.Param5 > config.assClawMax) {
			row.Param5 = config.assClawMax
		}
		row.Param6 = config.assClawMax
	}
	if (row.skill == 'Weapon Block') {
		if (row.Param1 > config.assBlockMax) {
			row.Param1 = config.assBlockMax
		}
		row.Param2 = config.assBlockMax
	}
	// Shadow Warrior PetMax
	if (row.skill == 'Shadow Warrior') {
		row.petmax = config.assShadowWarriorPetmax
	}
	// Shadow Master PetMax
	if (row.skill == 'Shadow Master') {
		row.petmax = config.assShadowMasterPetmax
	}
	// Sentry
	if (row.skill == 'Charged Bolt Sentry') {
		row.petmax = config.assSentryPetMax
		if (config.assSentryNoInsight) {
			row.LineOfSight = ''
		}
	}
	if (row.skill == 'Wake of Fire Sentry') {
		row.petmax = config.assSentryPetMax
		if (config.assSentryNoInsight) {
			row.LineOfSight = ''
		}
	}
	if (row.skill == 'Lightning Sentry') {
		row.petmax = config.assSentryPetMax
		if (config.assSentryNoInsight) {
			row.LineOfSight = ''
		}
	}
	if (row.skill == 'Inferno Sentry') {
		row.petmax = config.assSentryPetMax
		if (config.assSentryNoInsight) {
			row.LineOfSight = ''
		}
	}
	if (row.skill == 'Death Sentry') {
		row.petmax = config.assSentryPetMax
		if (config.assSentryNoInsight) {
			row.LineOfSight = ''
		}
	}
	// Quickness
	if (row.skill == 'Quickness') {
		row.Param2 = config.assQuicknessVelocityMax
		row.Param4 = config.assQuicknessAttackSpeedMax
		row.Param6 = config.assFadeQuicknessTime
	}
	// Fade
	if (row.skill == 'Fade') {
		row.Param2 = config.assFadeElementalResistanceMax
		row.Param6 = config.assFadeQuicknessTime
	}
	// 技能聚气时间
	if (row.charclass === 'ass') {
		if (row.Param3 === '375') {
			row.Param3 = config.assGas
		}
		if (row.auralencalc === '375') {
		row.auralencalc = config.assGas
		}
	}
	// Blade of Ice
	if (row.skill == 'Blades of Ice') {
		row.Param1 = config.assBladesOfIceDamageRange
		row.Param2 = config.assBladesOfIceFreezeRange
	}
});
D2RMM.writeTsv(skillsFilename, skills);

// states.txt
// Assassin Fade Quickness
if (config.assFadeAndQuickness) {
	states.rows.forEach(row => {
		if (row.state == 'quickness') {
			row.group = ""
		}
		if (row.state == 'fade') {
			row.group = ""
		}
	});
D2RMM.writeTsv(statesFilename, states);
}