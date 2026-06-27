function getEnabledMinions() {
	let minions = [];
	if (config.spiritwolfHitbox) {
		minions = [...minions, 'spiritwolf'];
	}
	if (config.fenrisHitbox) {
		minions = [...minions, 'fenris'];
	}
	if (config.grizzlypetmaxparam) {
		minions = [...minions, 'druidbear'];
	}
	return minions;
}
const minions = getEnabledMinions();

const petsFilename = 'global\\excel\\pettype.txt';
const pets = D2RMM.readTsv(petsFilename);

const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const monstats2Filename = 'global\\excel\\monstats2.txt';
const monstats2 = D2RMM.readTsv(monstats2Filename);

const missilesFilename = 'global\\excel\\missiles.txt';
const missiles = D2RMM.readTsv(missilesFilename);

// pettype.txt
// All spirits
if (config.allspirits) {
	pets.rows.forEach((row) => {
		if (['vine'].indexOf(row['pet type']) !== -1) {
			row.baseicon = 'oaksage';
			row.mclass1 = 422;
			row.micon1 = 'oaksage';
			row.mclass2 = '';
			row.micon2 = '';
		}
	});
	// heartofwolverine
	pets.rows.push({
		'pet type': 'heartofwolverine',
		basemax: 0,
		warp: 1,
		partysend: 1,
		unsummon: 1,
		automap: 1,
		name: 'strUI14',
		drawhp: 1,
		icontype: 3,
		baseicon: 'heartofwolverine',
		mclass1: 423,
		micon1: 'heartofwolverine'
	});
	// spiritofbarbs
	pets.rows.push({
		'pet type': 'spiritofbarbs',
		basemax: 0,
		warp: 1,
		partysend: 1,
		unsummon: 1,
		automap: 1,
		name: 'strUI14',
		drawhp: 1,
		icontype: 3,
		baseicon: 'spiritofbarbs',
		mclass1: 424,
		micon1: 'spiritofbarbs'
	});
	// Save changes
	D2RMM.writeTsv(petsFilename, pets);
}
//All vines
if (config.allvines) {
	pets.rows.forEach((row) => {
		if (['vine'].indexOf(row['pet type']) !== -1) {
			row.baseicon = 'plaguepoppy';
			row.mclass1 = 425;
			row.micon1 = 'plaguepoppy';
			row.mclass2 = '';
			row.micon2 = '';
		}
	});
	// cycleoflife
	pets.rows.push({
		'pet type': 'cycleoflife',
		basemax: 0,
		warp: 1,
		partysend: 1,
		unsummon: 1,
		automap: 1,
		name: 'strUI13',
		drawhp: 1,
		icontype: 3,
		baseicon: 'cycleoflife',
		mclass1: 426,
		micon1: 'cycleoflife'
	});
	// vines
	pets.rows.push({
		'pet type': 'vines',
		basemax: 0,
		warp: 1,
		partysend: 1,
		unsummon: 1,
		automap: 1,
		name: 'strUI13',
		drawhp: 1,
		icontype: 3,
		baseicon: 'vines',
		mclass1: 427,
		micon1: 'vines'
	});
	D2RMM.writeTsv(petsFilename, pets);
}

// skills.txt
skills.rows.forEach((row) => {
// Druid
	// Cycle of Life
	if (['Cycle of Life'].indexOf(row.skill) !== -1){
		if (config.allvines) {
			row.pettype = 'cycleoflife';
		}
	// Vines
	} else if (['Vines'].indexOf(row.skill) !== -1){
		if (config.allvines) {
			row.pettype = 'vines';
		}
	// Heart of wolverine
	} else if (['Heart of Wolverine'].indexOf(row.skill) !== -1){
		if (config.allspirits) {
			row.pettype = 'heartofwolverine';
		}
	// Spirit of Barbs
	} else if (['Spirit of Barbs'].indexOf(row.skill) !== -1){
		if (config.allspirits) {
			row.pettype = 'spiritofbarbs';
		}
	}
	// Spirit Wolf PetMax
	if (row.skill == 'Summon Spirit Wolf') {
		row.Param3 = config.spiritwolfpetmaxparam
	}
	// Fenris PetMax
	if (row.skill == 'Summon Fenris') {
		row.Param3 = config.fenrispetmaxparam
	}
	// Grizzly PetMax
	if (row.skill == 'Summon Grizzly') {
		row.petmax = 'min(lvl,par3)'
		row.Param3 = config.grizzlypetmaxparam
	}
	// Raven
	if (row.skill == 'Raven') {
		row.Param2 = config.druRavenPetmax
		if (config.infiniteRaven) {
			row.calc3 = "65535";
			row.Param5 = "";
			row.Param6 = "";
		}
	}
	// Wearwolf
	if (row.skill == 'Wearwolf') {
		row.Param4 = config.druWearwolfIAS
	}
	// Feral Rage
	if (row.skill == 'Feral Rage') {
		row.Param1 = config.druFeralRageDruation
		row.Param4 = config.druFeralRageRunSpeed
	}
	// Maul
	if (row.skill == 'Maul') {
		row.Param4 = config.druMaulDruation
	}
	// Fire Claws bug correction
	if (config.fireclawbugcorrect) {
		if (row.skill == 'Fire Claws') {
			row.EDmgSymPerCalc = "min((skill('Firestorm'.lvl)+skill('Volcano'.lvl)), 120)*par8"
		}
	}
	// Firestorm
	if (row.skill == 'Firestorm') {
		row.Param1 = config.druFirestormNum
	}
	// Armageddon
	if (row.skill == 'Armageddon') {
		row.Param1 = config.druArmageddonDuration
	}
	// Twister
	if (row.skill == 'Twister') {
		row.Param1 = config.druTwisterNum
	}
	// Tornado
	if (row.skill == 'Tornado') {
		row.Param1 = config.druTornadoRate
		row.Param2 = config.druTornadoRange
	}
	// Hurricane
	if (row.skill == 'Hurricane') {
		row.Param1 = config.druHurricaneDuration
		row.Param3 = config.druHurricaneRange
		row.Param4 = config.druHurricaneDmgRate
	}
});
D2RMM.writeTsv(skillsFilename, skills);


// missiles.txt
missiles.rows.forEach((row) => {
	// Rabies
	if (row.Missile == 'rabiesplague') {
		row.Param2 = config.druRabiesRadius
	}
	// Firestorm
	if (row.Missile == 'firestormmaker') {
		row.Vel = config.druFirestormVel
		row.MaxVel = config.druFirestormVel
	}
	// Twister
	if (row.Missile == 'twister') {
		row.Vel = config.druTwisterVel
		row.MaxVel = config.druTwisterVel
	}
	// Tornado
	if (row.Missile == 'tornado') {
		row.Vel = config.druTornadoVel
		row.MaxVel = config.druTornadoVel
	}
});
D2RMM.writeTsv(missilesFilename, missiles);


// monstat2.txt
monstats2.rows.forEach(row => {
	if (minions.includes(row.Id)) {
		row.SizeX = 0;
		row.SizeY = 0;
	}
});
D2RMM.writeTsv(monstats2Filename, monstats2);