let cubemainFilename = "global\\excel\\cubemain.txt";
let cubemain = D2RMM.readTsv(cubemainFilename);

cubemain.rows.push({
	description: "1 Stamina Potion - > K6 Keys",
	enabled: 1,
	version: 100,
	numinputs: 1,
	"input 1": "spot,qty=1",
	output: "pk1",
	"output b": "pk2",
	"output c": "pk3",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "2 Stamina Potions -> A1 A2 A4 Essence",
	enabled: 1,
	version: 100,
	numinputs: 2,
	"input 1": "spot,qty=2",
	output: "tes",
	"output b": "ceh",
	"output c": "bet",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "3 Stamina Potions -> 3 A5 Essence",
	enabled: 1,
	version: 100,
	numinputs: 3,
	"input 1": "spot,qty=3",
	output: "fed",
	"output b": "fed",
	"output c": "fed",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "4 Stamina Potions -> 3BB A1-3",
	enabled: 1,
	version: 100,
	numinputs: 4,
	"input 1": "spot,qty=4",
	output: "ua1",
	"output b": "ua2",
	"output c": "ua3",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "5 Stamina Potions -> 3BB A4-5",
	enabled: 1,
	version: 100,
	numinputs: 5,
	"input 1": "spot,qty=5",
	output: "ua4",
	"output b": "ua5",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "Jewel + Chipped Skull -> 40dmg + 15ias",
	enabled: 1,
	version: 100,
	numinputs: 2,
	"input 1": "jewl",
	"input 2": "skc",
	output: "jewl,mag,pre=198,suf=171",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "Jewel + Chipped Diamond -> 15res + 15ias",
	enabled: 1,
	version: 100,
	numinputs: 2,
	"input 1": "jewl",
	"input 2": "gcw",
	output: "jewl,mag,pre=337,suf=171",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "Jewel + Chipped Ruby -> 30res-fire + 15ias",
	enabled: 1,
	version: 100,
	numinputs: 2,
	"input 1": "jewl",
	"input 2": "gcr",
	output: "jewl,mag,pre=376,suf=171",
	"*eol/r": 0,
});
if (config.BugJewl) {
	cubemain.rows.push({
		description: "Jewel + Diamond -> 45res + 7fhr",
		enabled: 1,
		version: 100,
		numinputs: 2,
		"input 1": "jewl",
		"input 2": "gsw",
		output: "jewl,mag,pre=337,suf=268",
		"mod 1": "res-all",
		"mod 1 min": 30,
		"mod 1 max": 30,
		"mod 2": "pierce-mag",
		"mod 2 min": 30,
		"mod 2 max": 30,
		"*eol/r": 0,
	});
}

const rune = config.CraftIngredient;
cubemain.rows.push({
	description: "Craft Amulet + rune -> Caster Amulet",
	enabled: 1,
	version: 100,
	numinputs: 2,
	"input 1": "amul,crf",
	"input 2": rune,
	output: "usetype,crf",
	plvl: 60,
	ilvl: 60,
	"mod 1": "regen-mana",
	"mod 1 min": 10,
	"mod 1 max": 10,
	"mod 2": "mana",
	"mod 2 min": 20,
	"mod 2 max": 20,
	"mod 3": "cast1",
	"mod 3 min": 10,
	"mod 3 max": 10,
	"output b": rune,
	"*eol/r": 0,
});

D2RMM.writeTsv(cubemainFilename, cubemain);




let magicprefixFilename = "global\\excel\\magicprefix.txt";
let magicprefix = D2RMM.readTsv(magicprefixFilename);
let magicsuffixFilename = "global\\excel\\magicsuffix.txt";
let magicsuffix = D2RMM.readTsv(magicsuffixFilename);

const targetModCodesPre = ['stam', 'light', 'dmg-to-mana', 'mag%', 'res-fire', 'res-cold', 'res-ltng', 'res-pois', 'skilltab', 'att'];
const targetModCodesSuf = ['cold-min', 'att-skill', 'charged', 'dex/lvl', 'dmg-max', 'dmg-min', 'dmg-pois', 'fire-min', 'gethit-skill', 'gold%', 'half-freeze', 'light', 'ltng-min', 'mag%', 'pois-min', 'res-pois-len', 'res-cold/lvl', 'res-fire/lvl', 'res-pois/lvl', 'enr', 'red-dmg', 'red-mag', 'regen'];

if (config.RemoveRubbishPrefixSuffix) {
	magicprefix.rows.forEach((row) => {
		if (targetModCodesPre.includes(row.mod1code)) {
			['itype1', 'itype2', 'itype3', 'itype4', 'itype5', 'itype6', 'itype7'].forEach((col) => {
				if (row[col] === 'amul') {
					row[col] = '';
				}
			});
		}
	});
	magicsuffix.rows.forEach((row) => {
		if (targetModCodesSuf.includes(row.mod1code)) {
			['itype1', 'itype2', 'itype3', 'itype4', 'itype5', 'itype6', 'itype7'].forEach((col) => {
				if (row[col] === 'amul') {
					row[col] = '';
				}
			});
		}
	});
}

D2RMM.writeTsv(magicprefixFilename, magicprefix);
D2RMM.writeTsv(magicsuffixFilename, magicsuffix);
