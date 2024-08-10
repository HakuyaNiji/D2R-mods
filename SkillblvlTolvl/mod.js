const skillsFileName = 'global\\excel\\skills.txt';
const skills = D2RMM.readTxt(skillsFileName);

const Newskills = skills.replace(/blvl/g, "lvl");

D2RMM.writeTxt(skillsFileName, Newskills);

const skilldescFileName = 'global\\excel\\skilldesc.txt';
const skilldesc = D2RMM.readTxt(skilldescFileName);

const Newskilldesc = skilldesc.replace(/blvl/g, "lvl");

D2RMM.writeTxt(skilldescFileName, Newskilldesc);

const missilesFileName = 'global\\excel\\missiles.txt';
const missiles = D2RMM.readTxt(missilesFileName);

const Newmissiles = missiles.replace(/blvl/g, "lvl");

D2RMM.writeTxt(missilesFileName, Newmissiles);