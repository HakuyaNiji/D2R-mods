const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

const missilesFilename = 'global\\excel\\missiles.txt';
const missiles = D2RMM.readTsv(missilesFilename);

const skilldescFilename = 'global\\excel\\skilldesc.txt';
const skilldescA = D2RMM.readTsv(skilldescFilename);

const overlayFilename = 'global\\excel\\overlay.txt';
const overlayA = D2RMM.readTsv(overlayFilename);

// skills.txt
skills.rows.forEach((row) => {
	// Flame Wave
	if (row.skill == 'Flame Wave') {
		row.Param2 = config.FlameWaveWidth
		row.Param3 = config.FlameWaveDelay
	}
	// Apocalypse
	if (row.skill == 'Apocalypse') {
		row.aurastatcalc1 = config.ApocalypseFirePierceMax
		if (config.Apocalypselos) {
			row.LineOfSight = ''
		}
	}
	// Abyss
	if (row.skill == 'Abyss') {
		if (config.Abysslos) {
			row.LineOfSight = ''
		}
	}
	// Levitate
	if (row.skill == 'Levitate') {
		row.Param2 = config.LevitationMasteryCrit
	}
	// Cleave
	if (row.skill == 'Cleave') {
		row.Param4 = config.CleaveAttackSpeed
	}
	// Mirrored Blades
	if (row.skill == 'Mirrored Blades') {
		row.Param4 = config.MirroredBladesAttackSpeed
	}
	// Demonic Mastery
	if (config.DemonicMasteryAttackSpeed) {
		// Summon Goatman
		if (row.skill == 'Summon Goatman') {
			if (config.GoatmanAttackSpeed) {
				row.aurastatcalc1 = "ln21+(skill('Demonic Mastery'.ln12))"
			}
			else {
				row.aurastatcalc1 = "min(ln21, 25)+(skill('Demonic Mastery'.ln12))"
			}
		}
		// Summon Tainted
		if (row.skill == 'Summon Tainted') {
			if (config.TaintedAttackSpeed) {
				row.aurastatcalc1 = "ln21+(skill('Demonic Mastery'.ln12))"
			}
			else {
				row.aurastatcalc1 = "min(ln21, 25)+(skill('Demonic Mastery'.ln12))"
			}
		}
		// Summon Defiler
		if (row.skill == 'Summon Defiler') {
			row.aurastatcalc1 = "(skill('Demonic Mastery'.ln12))"
		}
		// Bind Demon
		if (row.skill == 'Bind Demon') {
			row.aurastatcalc1 = "(skill('Demonic Mastery'.ln12))"
		}
	}
});
D2RMM.writeTsv(skillsFilename, skills);

missiles.rows.forEach((row) => {
	// Enhanced Entropy
	if (row.Missile == 'miasmachainscloud') {
		if (config.EnhancedEntropyMiasmaRadius) {
			row.Radius = "(2+skill('Enhanced Entropy'.lvl)/4)"
			row.SrvCalc1 = "(2+skill('Enhanced Entropy'.lvl)/4)"
		}
		if (config.EnhancedEntropyMiasmaRange) {
			row.Range = "par2+((skill('Enhanced Entropy'.lvl)>0)?(skill('Enhanced Entropy'.lvl)*par3):0)"
		}
	}
	if (row.Missile == 'miasmaboltcloud') {
		if (config.EnhancedEntropyMiasmaRadius) {
			row.Radius = "(2+skill('Enhanced Entropy'.lvl)/4)"
		}
		if (config.EnhancedEntropyMiasmaRange) {
			row.Range = "par4+((skill('Enhanced Entropy'.lvl)>0)?(skill('Enhanced Entropy'.lvl)*par5):0)"
		}
	}
	if (config.EnhancedEntropyAbyssRadius) {
		if (row.Missile == 'abysscenter') {
			row.Radius = "(par3+(sksrc('Enhanced Entropy'.lvl)/par5))"
		}
		if (row.Missile == 'abyssexplode') {
			row.Radius = "(par3+(sksrc('Enhanced Entropy'.lvl)/par5))"
		}
	}
	// Apocalypse
	if (config.ApocalypseFCR) {
		if (row.Missile == 'apocalypse') {
			row.Param1 = 5
		}
	}
});
D2RMM.writeTsv(missilesFilename, missiles);



skilldescA.rows.forEach((row) => {
	// Enhanced Entropy
	if (row.skilldesc == 'enhanced entropy') {
		if (config.EnhancedEntropyMiasmaRadius) {
			row.desccalca4 = "(2+lvl/4)"
		}
		if (config.EnhancedEntropyAbyssRadius) {
			row.desccalca1 = "lvl"
		}
		if (config.EnhancedEntropyMiasmaRange) {
			row.desccalca3 = "lvl*5"
		}
	}
	// Demonic Mastery
	if (config.DemonicMasteryAttackSpeed) {
		if (row.skilldesc == 'demonic mastery') {
			row.desccalca3 = "ln12"
		}
	}
});
D2RMM.writeTsv(skilldescFilename, skilldescA);


overlayA.rows.forEach((row) => {
	// Apocalypse
	if (config.ApocalypseFCR) {
		if (row.overlay == 'apocalypse') {
			row.AnimRate = 160
		}
	}
});
D2RMM.writeTsv(overlayFilename, overlayA);
