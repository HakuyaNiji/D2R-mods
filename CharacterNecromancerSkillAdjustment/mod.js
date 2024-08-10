function getEnabledMinions() {
	let minions = [];
	if (config.necskeletonhitbox) {
		minions = [...minions, 'necroskeleton'];
	}
	if (config.necmagehitbox) {
		minions = [...minions, 'necromage'];
	}
	if (config.necgolemshitbox) {
		minions = [...minions, 'claygolem', 'bloodgolem', 'irongolem', 'firegolem'];
	}
	return minions;
}
const minions = getEnabledMinions();

const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const monstats2Filename = 'global\\excel\\monstats2.txt';
const monstats2 = D2RMM.readTsv(monstats2Filename);

// skills.txt
skills.rows.forEach((row) => {
// Necromancer
	// Summon Resist
	if (row.skill == 'Summon Resist') {
		if (row.Param1 > config.necSumResMax) {
			row.Param1 = config.necSumResMax
		}
		row.Param2 = config.necSumResMax
	}
	// Bone Spear
	if (row.skill == 'Bone Spear') {
		if (config.necBoneSpearToTeeth) {
			row.srvdofunc = 8
			row.srvmissile = ''
			row.srvmissilea = 'bonespear'
			row.cltdofunc = 17
			row.cltmissile = ''
			row.cltmissilea = 'bonespear'
			row.cltmissileb = 'bonespear'
			row.calc1 = 'min(ln12,24)'
			row.calc2 = 'par3'
			row.cal3 = 0
			row.Param1 = 2
			row.Param2 = 1
			row.Param3 = 0
		}
	}
	// Lower Resist
	if (row.skill == 'Lower Resist') {
		row.Param6 = config.necLowerResist
	}
});
D2RMM.writeTsv(skillsFilename, skills);

// monstats2.txt
// Necromancer
monstats2.rows.forEach(row => {
	if (minions.includes(row.Id)) {
		row.SizeX = 0;
		row.SizeY = 0;
	}
});
D2RMM.writeTsv(monstats2Filename, monstats2);