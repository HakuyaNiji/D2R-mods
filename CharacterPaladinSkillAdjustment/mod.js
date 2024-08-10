const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const statesFilename = 'global\\excel\\states.txt';
const states = D2RMM.readTsv(statesFilename);
const statesIDnum = states.rows.length;


// skills.txt
skills.rows.forEach((row) => {
// Paladin
	// Aura Speed
	if (row.charclass == 'pal') {
		if (row.perdelay !== '') {
			row.perdelay = config.palperDelay;
		}
	}
	// Resist Fire passive
	if (row.skill == 'Resist Fire') {
		row.passivestat2 = "fireresist";
		row.passivecalc2 = "dm34";
	}
	// Resist Cold passive
	if (row.skill == 'Resist Cold') {
		row.passivestat2 = "coldresist";
		row.passivecalc2 = "dm34";
	}
	// Resist Lightning passive
	if (row.skill == 'Resist Lightning') {
		row.passivestat2 = "lightresist";
		row.passivecalc2 = "dm34";
	}
	// Defiance passive
	if (row.skill == 'Defiance') {
		row.passivestate = "passive_defiance"
		row.passivestat1 = "skill_armor_percent";
		row.passivecalc1 = "ln34";
	}
	// Vigor passive
	if (row.skill == 'Vigor') {
		row.passivestate = "passive_vigor"
		row.passivestat1 = "velocitypercent";
		row.passivecalc1 = "dm56";
	}
	// Conviction
	if (row.skill == 'Conviction') {
		row.aurastatcalc2 = -300;
		row.aurastatcalc3 = -300;
		row.aurastatcalc4 = -300;
	}
});
D2RMM.writeTsv(skillsFilename, skills);

// states.txt
states.rows.forEach((row) => {
	if (row["*ID"] == (statesIDnum - 1)) {
		// Defiance
		states.rows.push (
			{
				...row,
				"state": "passive_defiance",
				"*ID": (statesIDnum),
				"group": "",
				"attblue": "",
				"noclear": "",
				"overlay1": ""
			}
		);
		// Vigor
		states.rows.push (
			{
				...row,
				"state": "passive_vigor",
				"*ID": (statesIDnum + 1),
				"group": "",
				"attblue": "",
				"noclear": "",
				"overlay1": ""
			}
		);
	}
});
D2RMM.writeTsv(statesFilename, states);