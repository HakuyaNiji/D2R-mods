let cubemainFilename = "global\\excel\\cubemain.txt";
let cubemain = D2RMM.readTsv(cubemainFilename);

cubemain.rows.push({
	description: "1 Stamina Potion (Any) - > Key of Terror",
	enabled: 1,
	version: 100,
	numinputs: 1,
	"input 1": "spot,qty=1",
	output: "pk1",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "2 Stamina Potions (Any) -> Key of Hate",
	enabled: 1,
	version: 100,
	numinputs: 2,
	"input 1": "spot,qty=2",
	output: "pk2",
	"*eol/r": 0,
});
cubemain.rows.push({
	description: "3 Stamina Potions (Any) -> Key of Destruction",
	enabled: 1,
	version: 100,
	numinputs: 3,
	"input 1": "spot,qty=3",
	output: "pk3",
	"*eol/r": 0,
});

D2RMM.writeTsv(cubemainFilename, cubemain);