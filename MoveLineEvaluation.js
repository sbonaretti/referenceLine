//comment things like java

var yAxis = 20;//52; /** represents the Y position of the upper left corner of the Scout View Canvas window. doesnt change **/
var lastYCoor = 200; /**represents the position of the reference line in the Scout View Canvas (with respect to the whole screen).
lastYCoor - yAxis will give you Y position of the reference line with respect to the scout view canvas window **/
var xAxis = 609; /**represents the X position of the uppler left corner of the scout view canvas window. doesnt change **/
var lWidth = 1; /** width of the reference line **/
var lLength = 512; /** length of the reference line **/
var exactColour = "#66ff00"; /** color of the text when you have an exact line, and the green reference line */
var okColour = "#ffa500";
var outofRangeColour = "#ff0000";
var feedbackRImage = "url('inputData/radius/1_TE_radius.jpg') no-repeat";
var feedbackTImage = "url('inputData/tibia/1_TE_tibia.jpg') no-repeat";
var feedbackCorrect;
var feedbackRCorrect = (111.3131 - 80) * (434 / (154.112 - 80 ));
var feedbackTCorrect  = (75.7421 - 60) * (496 / (144.724 - 60));
var numImagesR = 112;
var numImagesT = 112;


$("#resizeHeader").width(330);
//$("#resizeHeader2").width("98%");

//$("#resizeTraining").width("75%");
//$("#resizeEval").width("75%");

var onRadius = -1;
var onTraining = 0;
var inSet;
var lineVisible = 0;
var img = new Image();
var setNum;
var curCorrectLine = -1;
var allSetsRT = [];
var allSetsRE = [];
var allSetsTT = [];
var allSetsTE = [];
var curSet;
var allSetsR;
var allSetsT;
var countSet = 1;
var curImgNumber;
var coorDiffs = [];
coorDiffs[0] = "DO NOT OPEN";
coorDiffs[1] = 0;
coorDiffs[2] = 0;
coorDiffs[3] = 0;
coorDiffs[4] = 0;
coorDiffs[5] = 0;
coorDiffs[6] = 0;
coorDiffs[7] = 0;
coorDiffs[8] = 0;

var jsonRImages = JSON.parse(radiusText);
//document.getElementById("demo2").innerHTML = jsonRImages.radii[1].grTruth + " " + jsonRImages.radii[1].number;

//og var set1RT = JSON.parse(set1TextRT);

var pixelsR = JSON.parse(pixelInfoR);
var pixelsT = JSON.parse(pixelInfoT);
//document.getElementById("demo2").innerHTML = pixels[1][4];

var imgPixelsR = ["dummy", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var imgPixelsT = ["dummy", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function grabPixels(imgNum, pixelsHere) {
	var index = 0;
	var fillThis = ["dummy"];
	while (index < pixelsHere.length) {
		fillThis.push(pixelsHere[index][imgNum]);
		index++;
	}
	return fillThis;
}

//var TryThis = grabPixels(26, pixelsT);
//imgPixelsT[26] = TryThis;
//document.getElementById("demo2").innerHTML = imgPixelsT[26] + "<br> " + imgPixelsT[26].length + " hee</br>";

function binarySearch(searchHere, findThis) {
	return "a better function";
}

function slowSearch(searchHere, findThis) {
	for (var i = 0; i < searchHere.length; i++) {
		if (searchHere[i] == findThis) {
			return i;
		}
	}
	return null;
}

var set1RT = JSON.parse(set1TextRT);
var set2RT = JSON.parse(set2TextRT);
var set3RT = JSON.parse(set3TextRT);
var set4RT = JSON.parse(set4TextRT);
var set5RT = JSON.parse(set5TextRT);
var set6RT = JSON.parse(set6TextRT);
var set7RT = JSON.parse(set7TextRT);
var set8RT = JSON.parse(set8TextRT);
var set9RT = JSON.parse(set9TextRT);
var set10RT = JSON.parse(set10TextRT);
var set11RT = JSON.parse(set11TextRT);
var set12RT = JSON.parse(set12TextRT);
var set13RT = JSON.parse(set13TextRT);
var set14RT = JSON.parse(set14TextRT);
var set15RT = JSON.parse(set15TextRT);

var set1RE = JSON.parse(set1TextRE);
var set2RE = JSON.parse(set2TextRE);
var set3RE = JSON.parse(set3TextRE);
var set4RE = JSON.parse(set4TextRE);
var set5RE = JSON.parse(set5TextRE);
var set6RE = JSON.parse(set6TextRE);
var set7RE = JSON.parse(set7TextRE);
var set8RE = JSON.parse(set8TextRE);
var set9RE = JSON.parse(set9TextRE);
var set10RE = JSON.parse(set10TextRE);
var set11RE = JSON.parse(set11TextRE);
var set12RE = JSON.parse(set12TextRE);
var set13RE = JSON.parse(set13TextRE);
var set14RE = JSON.parse(set14TextRE);
var set15RE = JSON.parse(set15TextRE);

allSetsRT[0] = "DO NOT OPEN";
// og allSetsR[1] = set1RT;
allSetsRT[1] = set1RT;
allSetsRT[2] = set2RT;
allSetsRT[3] = set3RT;
allSetsRT[4] = set4RT;
allSetsRT[5] = set5RT;
allSetsRT[6] = set6RT;
allSetsRT[7] = set7RT;
allSetsRT[8] = set8RT;
allSetsRT[9] = set9RT;
allSetsRT[10] = set10RT;
allSetsRT[11] = set11RT;
allSetsRT[12] = set12RT;
allSetsRT[13] = set13RT;
allSetsRT[14] = set14RT;
allSetsRT[15] = set15RT;

allSetsRE[0] = "DO NOT OPEN";
allSetsRE[1] = set1RE;
allSetsRE[2] = set2RE;
allSetsRE[3] = set3RE;
allSetsRE[4] = set4RE;
allSetsRE[5] = set5RE;
allSetsRE[6] = set6RE;
allSetsRE[7] = set7RE;
allSetsRE[8] = set8RE;
allSetsRE[9] = set9RE;
allSetsRE[10] = set10RE;
allSetsRE[11] = set11RE;
allSetsRE[12] = set12RE;
allSetsRE[13] = set13RE;
allSetsRE[14] = set14RE;
allSetsRE[15] = set15RE;

var radiusImages = [];
radiusImages[0] = new Image();
radiusImages[0].src = "DO NOT OPEN";
radiusImages[1] = new Image();
radiusImages[1].src = jsonRImages.radii[1].src;
radiusImages[2] = new Image();
radiusImages[2].src = jsonRImages.radii[2].src;
radiusImages[3] = new Image();
radiusImages[3].src = jsonRImages.radii[3].src;
radiusImages[4] = new Image();
radiusImages[4].src = jsonRImages.radii[4].src;
radiusImages[5] = new Image();
radiusImages[5].src = jsonRImages.radii[5].src;
radiusImages[6] = new Image();
radiusImages[6].src = jsonRImages.radii[6].src;
radiusImages[7] = new Image();
radiusImages[7].src = jsonRImages.radii[7].src;
radiusImages[8] = new Image();
radiusImages[8].src = jsonRImages.radii[8].src;
radiusImages[9] = new Image();
radiusImages[9].src = jsonRImages.radii[9].src;
radiusImages[10] = new Image();
radiusImages[10].src = jsonRImages.radii[10].src;
radiusImages[11] = new Image();
radiusImages[11].src = jsonRImages.radii[11].src;
radiusImages[12] = new Image();
radiusImages[12].src = jsonRImages.radii[12].src;
radiusImages[13] = new Image();
radiusImages[13].src = jsonRImages.radii[13].src;
radiusImages[14] = new Image();
radiusImages[14].src = jsonRImages.radii[14].src;
radiusImages[15] = new Image();
radiusImages[15].src = jsonRImages.radii[15].src;
radiusImages[16] = new Image();
radiusImages[16].src = jsonRImages.radii[16].src;
radiusImages[17] = new Image();
radiusImages[17].src = jsonRImages.radii[17].src;
radiusImages[18] = new Image();
radiusImages[18].src = jsonRImages.radii[18].src;
radiusImages[19] = new Image();
radiusImages[19].src = jsonRImages.radii[19].src;
radiusImages[20] = new Image();
radiusImages[20].src = jsonRImages.radii[20].src;
radiusImages[21] = new Image();
radiusImages[21].src = jsonRImages.radii[21].src;
radiusImages[22] = new Image();
radiusImages[22].src = jsonRImages.radii[22].src;
radiusImages[23] = new Image();
radiusImages[23].src = jsonRImages.radii[23].src;
radiusImages[24] = new Image();
radiusImages[24].src = jsonRImages.radii[24].src;
radiusImages[25] = new Image();
radiusImages[25].src = jsonRImages.radii[25].src;
radiusImages[26] = new Image();
radiusImages[26].src = jsonRImages.radii[26].src;
radiusImages[27] = new Image();
radiusImages[27].src = jsonRImages.radii[27].src;
radiusImages[28] = new Image();
radiusImages[28].src = jsonRImages.radii[28].src;
radiusImages[29] = new Image();
radiusImages[29].src = jsonRImages.radii[29].src;
radiusImages[30] = new Image();
radiusImages[30].src = jsonRImages.radii[30].src;
radiusImages[31] = new Image();
radiusImages[31].src = jsonRImages.radii[31].src;
radiusImages[32] = new Image();
radiusImages[32].src = jsonRImages.radii[32].src;
radiusImages[33] = new Image();
radiusImages[33].src = jsonRImages.radii[33].src;
radiusImages[34] = new Image();
radiusImages[34].src = jsonRImages.radii[34].src;
radiusImages[35] = new Image();
radiusImages[35].src = jsonRImages.radii[35].src;
radiusImages[36] = new Image();
radiusImages[36].src = jsonRImages.radii[36].src;
radiusImages[37] = new Image();
radiusImages[37].src = jsonRImages.radii[37].src;
radiusImages[38] = new Image();
radiusImages[38].src = jsonRImages.radii[38].src;
radiusImages[39] = new Image();
radiusImages[39].src = jsonRImages.radii[39].src;
radiusImages[40] = new Image();
radiusImages[40].src = jsonRImages.radii[40].src;
radiusImages[41] = new Image();
radiusImages[41].src = jsonRImages.radii[41].src;
radiusImages[42] = new Image();
radiusImages[42].src = jsonRImages.radii[42].src;
radiusImages[43] = new Image();
radiusImages[43].src = jsonRImages.radii[43].src;
radiusImages[44] = new Image();
radiusImages[44].src = jsonRImages.radii[44].src;
radiusImages[45] = new Image();
radiusImages[45].src = jsonRImages.radii[45].src;
radiusImages[46] = new Image();
radiusImages[46].src = jsonRImages.radii[46].src;
radiusImages[47] = new Image();
radiusImages[47].src = jsonRImages.radii[47].src;
radiusImages[48] = new Image();
radiusImages[48].src = jsonRImages.radii[48].src;
radiusImages[49] = new Image();
radiusImages[49].src = jsonRImages.radii[49].src;
radiusImages[50] = new Image();
radiusImages[50].src = jsonRImages.radii[50].src;
radiusImages[51] = new Image();
radiusImages[51].src = jsonRImages.radii[51].src;
radiusImages[52] = new Image();
radiusImages[52].src = jsonRImages.radii[52].src;
radiusImages[53] = new Image();
radiusImages[53].src = jsonRImages.radii[53].src;
radiusImages[54] = new Image();
radiusImages[54].src = jsonRImages.radii[54].src;
radiusImages[55] = new Image();
radiusImages[55].src = jsonRImages.radii[55].src;
radiusImages[56] = new Image();
radiusImages[56].src = jsonRImages.radii[56].src;
radiusImages[57] = new Image();
radiusImages[57].src = jsonRImages.radii[57].src;
radiusImages[58] = new Image();
radiusImages[58].src = jsonRImages.radii[58].src;
radiusImages[59] = new Image();
radiusImages[59].src = jsonRImages.radii[59].src;
radiusImages[60] = new Image();
radiusImages[60].src = jsonRImages.radii[60].src;
radiusImages[61] = new Image();
radiusImages[61].src = jsonRImages.radii[61].src;
radiusImages[62] = new Image();
radiusImages[62].src = jsonRImages.radii[62].src;
radiusImages[63] = new Image();
radiusImages[63].src = jsonRImages.radii[63].src;
radiusImages[64] = new Image();
radiusImages[64].src = jsonRImages.radii[64].src;
radiusImages[65] = new Image();
radiusImages[65].src = jsonRImages.radii[65].src;
radiusImages[66] = new Image();
radiusImages[66].src = jsonRImages.radii[66].src;
radiusImages[67] = new Image();
radiusImages[67].src = jsonRImages.radii[67].src;
radiusImages[68] = new Image();
radiusImages[68].src = jsonRImages.radii[68].src;
radiusImages[69] = new Image();
radiusImages[69].src = jsonRImages.radii[69].src;
radiusImages[70] = new Image();
radiusImages[70].src = jsonRImages.radii[70].src;
radiusImages[71] = new Image();
radiusImages[71].src = jsonRImages.radii[71].src;
radiusImages[72] = new Image();
radiusImages[72].src = jsonRImages.radii[72].src;
radiusImages[73] = new Image();
radiusImages[73].src = jsonRImages.radii[73].src;
radiusImages[74] = new Image();
radiusImages[74].src = jsonRImages.radii[74].src;
radiusImages[75] = new Image();
radiusImages[75].src = jsonRImages.radii[75].src;
radiusImages[76] = new Image();
radiusImages[76].src = jsonRImages.radii[76].src;
radiusImages[77] = new Image();
radiusImages[77].src = jsonRImages.radii[77].src;
radiusImages[78] = new Image();
radiusImages[78].src = jsonRImages.radii[78].src;
radiusImages[79] = new Image();
radiusImages[79].src = jsonRImages.radii[79].src;
radiusImages[80] = new Image();
radiusImages[80].src = jsonRImages.radii[80].src;
radiusImages[81] = new Image();
radiusImages[81].src = jsonRImages.radii[81].src;
radiusImages[82] = new Image();
radiusImages[82].src = jsonRImages.radii[82].src;
radiusImages[83] = new Image();
radiusImages[83].src = jsonRImages.radii[83].src;
radiusImages[84] = new Image();
radiusImages[84].src = jsonRImages.radii[84].src;
radiusImages[85] = new Image();
radiusImages[85].src = jsonRImages.radii[85].src;
radiusImages[86] = new Image();
radiusImages[86].src = jsonRImages.radii[86].src;
radiusImages[87] = new Image();
radiusImages[87].src = jsonRImages.radii[87].src;
radiusImages[88] = new Image();
radiusImages[88].src = jsonRImages.radii[88].src;
radiusImages[89] = new Image();
radiusImages[89].src = jsonRImages.radii[89].src;
radiusImages[90] = new Image();
radiusImages[90].src = jsonRImages.radii[90].src;
radiusImages[91] = new Image();
radiusImages[91].src = jsonRImages.radii[91].src;
radiusImages[92] = new Image();
radiusImages[92].src = jsonRImages.radii[92].src;
radiusImages[93] = new Image();
radiusImages[93].src = jsonRImages.radii[93].src;
radiusImages[94] = new Image();
radiusImages[94].src = jsonRImages.radii[94].src;
radiusImages[95] = new Image();
radiusImages[95].src = jsonRImages.radii[95].src;
radiusImages[96] = new Image();
radiusImages[96].src = jsonRImages.radii[96].src;
radiusImages[97] = new Image();
radiusImages[97].src = jsonRImages.radii[97].src;
radiusImages[98] = new Image();
radiusImages[98].src = jsonRImages.radii[98].src;
radiusImages[99] = new Image();
radiusImages[99].src = jsonRImages.radii[99].src;
radiusImages[100] = new Image();
radiusImages[100].src = jsonRImages.radii[100].src;
radiusImages[101] = new Image();
radiusImages[101].src = jsonRImages.radii[101].src;
radiusImages[102] = new Image();
radiusImages[102].src = jsonRImages.radii[102].src;
radiusImages[103] = new Image();
radiusImages[103].src = jsonRImages.radii[103].src;
radiusImages[104] = new Image();
radiusImages[104].src = jsonRImages.radii[104].src;
radiusImages[105] = new Image();
radiusImages[105].src = jsonRImages.radii[105].src;
radiusImages[106] = new Image();
radiusImages[106].src = jsonRImages.radii[106].src;
radiusImages[107] = new Image();
radiusImages[107].src = jsonRImages.radii[107].src;
radiusImages[108] = new Image();
radiusImages[108].src = jsonRImages.radii[108].src;
radiusImages[109] = new Image();
radiusImages[109].src = jsonRImages.radii[109].src;
radiusImages[110] = new Image();
radiusImages[110].src = jsonRImages.radii[110].src;
radiusImages[111] = new Image();
radiusImages[111].src = jsonRImages.radii[111].src;
radiusImages[112] = new Image();
radiusImages[112].src = jsonRImages.radii[112].src;

var jsonTImages = JSON.parse(tibiaText);
//document.getElementById("demo3").innerHTML = set1RT.imageNums[0]+ " " + set1RT.imageNums[1] + " " + jsonTImages.tibiae[111].src;

var set1TT = JSON.parse(set1TextTT);
var set2TT = JSON.parse(set2TextTT);
var set3TT = JSON.parse(set3TextTT);
var set4TT = JSON.parse(set4TextTT);
var set5TT = JSON.parse(set5TextTT);
var set6TT = JSON.parse(set6TextTT);
var set7TT = JSON.parse(set7TextTT);
var set8TT = JSON.parse(set8TextTT);
var set9TT = JSON.parse(set9TextTT);
var set10TT = JSON.parse(set10TextTT);
var set11TT = JSON.parse(set11TextTT);
var set12TT = JSON.parse(set12TextTT);
var set13TT = JSON.parse(set13TextTT);
var set14TT = JSON.parse(set14TextTT);
var set15TT = JSON.parse(set15TextTT);

var set1TE = JSON.parse(set1TextTE);
var set2TE = JSON.parse(set2TextTE);
var set3TE = JSON.parse(set3TextTE);
var set4TE = JSON.parse(set4TextTE);
var set5TE = JSON.parse(set5TextTE);
var set6TE = JSON.parse(set6TextTE);
var set7TE = JSON.parse(set7TextTE);
var set8TE = JSON.parse(set8TextTE);
var set9TE = JSON.parse(set9TextTE);
var set10TE = JSON.parse(set10TextTE);
var set11TE = JSON.parse(set11TextTE);
var set12TE = JSON.parse(set12TextTE);
var set13TE = JSON.parse(set13TextTE);
var set14TE = JSON.parse(set14TextTE);
var set15TE = JSON.parse(set15TextTE);

allSetsTT[0] = "DO NOT OPEN";
allSetsTT[1] = set1TT;
allSetsTT[2] = set2TT;
allSetsTT[3] = set3TT;
allSetsTT[4] = set4TT;
allSetsTT[5] = set5TT;
allSetsTT[6] = set6TT;
allSetsTT[7] = set7TT;
allSetsTT[8] = set8TT;
allSetsTT[9] = set9TT;
allSetsTT[10] = set10TT;
allSetsTT[11] = set11TT;
allSetsTT[12] = set12TT;
allSetsTT[13] = set13TT;
allSetsTT[14] = set14TT;
allSetsTT[15] = set15TT;

allSetsTE[0] = "DO NOT OPEN";
allSetsTE[1] = set1TE;
allSetsTE[2] = set2TE;
allSetsTE[3] = set3TE;
allSetsTE[4] = set4TE;
allSetsTE[5] = set5TE;
allSetsTE[6] = set6TE;
allSetsTE[7] = set7TE;
allSetsTE[8] = set8TE;
allSetsTE[9] = set9TE;
allSetsTE[10] = set10TE;
allSetsTE[11] = set11TE;
allSetsTE[12] = set12TE;
allSetsTE[13] = set13TE;
allSetsTE[14] = set14TE;
allSetsTE[15] = set15TE;

var tibiaImages = [];
tibiaImages[0] = new Image();
tibiaImages[0].src = "DO NOT OPEN";
tibiaImages[1] = new Image();
tibiaImages[1].src = jsonTImages.tibiae[1].src;
tibiaImages[2] = new Image();
tibiaImages[2].src = jsonTImages.tibiae[2].src;
tibiaImages[3] = new Image();
tibiaImages[3].src = jsonTImages.tibiae[3].src;
tibiaImages[4] = new Image();
tibiaImages[4].src = jsonTImages.tibiae[4].src;
tibiaImages[5] = new Image();
tibiaImages[5].src = jsonTImages.tibiae[5].src;
tibiaImages[6] = new Image();
tibiaImages[6].src = jsonTImages.tibiae[6].src;
tibiaImages[7] = new Image();
tibiaImages[7].src = jsonTImages.tibiae[7].src;
tibiaImages[8] = new Image();
tibiaImages[8].src = jsonTImages.tibiae[8].src;
tibiaImages[9] = new Image();
tibiaImages[9].src = jsonTImages.tibiae[9].src;
tibiaImages[10] = new Image();
tibiaImages[10].src = jsonTImages.tibiae[10].src;
tibiaImages[11] = new Image();
tibiaImages[11].src = jsonTImages.tibiae[11].src;
tibiaImages[12] = new Image();
tibiaImages[12].src = jsonTImages.tibiae[12].src;
tibiaImages[13] = new Image();
tibiaImages[13].src = jsonTImages.tibiae[13].src;
tibiaImages[14] = new Image();
tibiaImages[14].src = jsonTImages.tibiae[14].src;
tibiaImages[15] = new Image();
tibiaImages[15].src = jsonTImages.tibiae[15].src;
tibiaImages[16] = new Image();
tibiaImages[16].src = jsonTImages.tibiae[16].src;
tibiaImages[17] = new Image();
tibiaImages[17].src = jsonTImages.tibiae[17].src;
tibiaImages[18] = new Image();
tibiaImages[18].src = jsonTImages.tibiae[18].src;
tibiaImages[19] = new Image();
tibiaImages[19].src = jsonTImages.tibiae[19].src;
tibiaImages[20] = new Image();
tibiaImages[20].src = jsonTImages.tibiae[20].src;
tibiaImages[21] = new Image();
tibiaImages[21].src = jsonTImages.tibiae[21].src;
tibiaImages[22] = new Image();
tibiaImages[22].src = jsonTImages.tibiae[22].src;
tibiaImages[23] = new Image();
tibiaImages[23].src = jsonTImages.tibiae[23].src;
tibiaImages[24] = new Image();
tibiaImages[24].src = jsonTImages.tibiae[24].src;
tibiaImages[25] = new Image();
tibiaImages[25].src = jsonTImages.tibiae[25].src;
tibiaImages[26] = new Image();
tibiaImages[26].src = jsonTImages.tibiae[26].src;
tibiaImages[27] = new Image();
tibiaImages[27].src = jsonTImages.tibiae[27].src;
tibiaImages[28] = new Image();
tibiaImages[28].src = jsonTImages.tibiae[28].src;
tibiaImages[29] = new Image();
tibiaImages[29].src = jsonTImages.tibiae[29].src;
tibiaImages[30] = new Image();
tibiaImages[30].src = jsonTImages.tibiae[30].src;
tibiaImages[31] = new Image();
tibiaImages[31].src = jsonTImages.tibiae[31].src;
tibiaImages[32] = new Image();
tibiaImages[32].src = jsonTImages.tibiae[32].src;
tibiaImages[33] = new Image();
tibiaImages[33].src = jsonTImages.tibiae[33].src;
tibiaImages[34] = new Image();
tibiaImages[34].src = jsonTImages.tibiae[34].src;
tibiaImages[35] = new Image();
tibiaImages[35].src = jsonTImages.tibiae[35].src;
tibiaImages[36] = new Image();
tibiaImages[36].src = jsonTImages.tibiae[36].src;
tibiaImages[37] = new Image();
tibiaImages[37].src = jsonTImages.tibiae[37].src;
tibiaImages[38] = new Image();
tibiaImages[38].src = jsonTImages.tibiae[38].src;
tibiaImages[39] = new Image();
tibiaImages[39].src = jsonTImages.tibiae[39].src;
tibiaImages[40] = new Image();
tibiaImages[40].src = jsonTImages.tibiae[40].src;
tibiaImages[41] = new Image();
tibiaImages[41].src = jsonTImages.tibiae[41].src;
tibiaImages[42] = new Image();
tibiaImages[42].src = jsonTImages.tibiae[42].src;
tibiaImages[43] = new Image();
tibiaImages[43].src = jsonTImages.tibiae[43].src;
tibiaImages[44] = new Image();
tibiaImages[44].src = jsonTImages.tibiae[44].src;
tibiaImages[45] = new Image();
tibiaImages[45].src = jsonTImages.tibiae[45].src;
tibiaImages[46] = new Image();
tibiaImages[46].src = jsonTImages.tibiae[46].src;
tibiaImages[47] = new Image();
tibiaImages[47].src = jsonTImages.tibiae[47].src;
tibiaImages[48] = new Image();
tibiaImages[48].src = jsonTImages.tibiae[48].src;
tibiaImages[49] = new Image();
tibiaImages[49].src = jsonTImages.tibiae[49].src;
tibiaImages[50] = new Image();
tibiaImages[50].src = jsonTImages.tibiae[50].src;
tibiaImages[51] = new Image();
tibiaImages[51].src = jsonTImages.tibiae[51].src;
tibiaImages[52] = new Image();
tibiaImages[52].src = jsonTImages.tibiae[52].src;
tibiaImages[53] = new Image();
tibiaImages[53].src = jsonTImages.tibiae[53].src;
tibiaImages[54] = new Image();
tibiaImages[54].src = jsonTImages.tibiae[54].src;
tibiaImages[55] = new Image();
tibiaImages[55].src = jsonTImages.tibiae[55].src;
tibiaImages[56] = new Image();
tibiaImages[56].src = jsonTImages.tibiae[56].src;
tibiaImages[57] = new Image();
tibiaImages[57].src = jsonTImages.tibiae[57].src;
tibiaImages[58] = new Image();
tibiaImages[58].src = jsonTImages.tibiae[58].src;
tibiaImages[59] = new Image();
tibiaImages[59].src = jsonTImages.tibiae[59].src;
tibiaImages[60] = new Image();
tibiaImages[60].src = jsonTImages.tibiae[60].src;
tibiaImages[61] = new Image();
tibiaImages[61].src = jsonTImages.tibiae[61].src;
tibiaImages[62] = new Image();
tibiaImages[62].src = jsonTImages.tibiae[62].src;
tibiaImages[63] = new Image();
tibiaImages[63].src = jsonTImages.tibiae[63].src;
tibiaImages[64] = new Image();
tibiaImages[64].src = jsonTImages.tibiae[64].src;
tibiaImages[65] = new Image();
tibiaImages[65].src = jsonTImages.tibiae[65].src;
tibiaImages[66] = new Image();
tibiaImages[66].src = jsonTImages.tibiae[66].src;
tibiaImages[67] = new Image();
tibiaImages[67].src = jsonTImages.tibiae[67].src;
tibiaImages[68] = new Image();
tibiaImages[68].src = jsonTImages.tibiae[68].src;
tibiaImages[69] = new Image();
tibiaImages[69].src = jsonTImages.tibiae[69].src;
tibiaImages[70] = new Image();
tibiaImages[70].src = jsonTImages.tibiae[70].src;
tibiaImages[71] = new Image();
tibiaImages[71].src = jsonTImages.tibiae[71].src;
tibiaImages[72] = new Image();
tibiaImages[72].src = jsonTImages.tibiae[72].src;
tibiaImages[73] = new Image();
tibiaImages[73].src = jsonTImages.tibiae[73].src;
tibiaImages[74] = new Image();
tibiaImages[74].src = jsonTImages.tibiae[74].src;
tibiaImages[75] = new Image();
tibiaImages[75].src = jsonTImages.tibiae[75].src;
tibiaImages[76] = new Image();
tibiaImages[76].src = jsonTImages.tibiae[76].src;
tibiaImages[77] = new Image();
tibiaImages[77].src = jsonTImages.tibiae[77].src;
tibiaImages[78] = new Image();
tibiaImages[78].src = jsonTImages.tibiae[78].src;
tibiaImages[79] = new Image();
tibiaImages[79].src = jsonTImages.tibiae[79].src;
tibiaImages[80] = new Image();
tibiaImages[80].src = jsonTImages.tibiae[80].src;
tibiaImages[81] = new Image();
tibiaImages[81].src = jsonTImages.tibiae[81].src;
tibiaImages[82] = new Image();
tibiaImages[82].src = jsonTImages.tibiae[82].src;
tibiaImages[83] = new Image();
tibiaImages[83].src = jsonTImages.tibiae[83].src;
tibiaImages[84] = new Image();
tibiaImages[84].src = jsonTImages.tibiae[84].src;
tibiaImages[85] = new Image();
tibiaImages[85].src = jsonTImages.tibiae[85].src;
tibiaImages[86] = new Image();
tibiaImages[86].src = jsonTImages.tibiae[86].src;
tibiaImages[87] = new Image();
tibiaImages[87].src = jsonTImages.tibiae[87].src;
tibiaImages[88] = new Image();
tibiaImages[88].src = jsonTImages.tibiae[88].src;
tibiaImages[89] = new Image();
tibiaImages[89].src = jsonTImages.tibiae[89].src;
tibiaImages[90] = new Image();
tibiaImages[90].src = jsonTImages.tibiae[90].src;
tibiaImages[91] = new Image();
tibiaImages[91].src = jsonTImages.tibiae[91].src;
tibiaImages[92] = new Image();
tibiaImages[92].src = jsonTImages.tibiae[92].src;
tibiaImages[93] = new Image();
tibiaImages[93].src = jsonTImages.tibiae[93].src;
tibiaImages[94] = new Image();
tibiaImages[94].src = jsonTImages.tibiae[94].src;
tibiaImages[95] = new Image();
tibiaImages[95].src = jsonTImages.tibiae[95].src;
tibiaImages[96] = new Image();
tibiaImages[96].src = jsonTImages.tibiae[96].src;
tibiaImages[97] = new Image();
tibiaImages[97].src = jsonTImages.tibiae[97].src;
tibiaImages[98] = new Image();
tibiaImages[98].src = jsonTImages.tibiae[98].src;
tibiaImages[99] = new Image();
tibiaImages[99].src = jsonTImages.tibiae[99].src;
tibiaImages[100] = new Image();
tibiaImages[100].src = jsonTImages.tibiae[100].src;
tibiaImages[101] = new Image();
tibiaImages[101].src = jsonTImages.tibiae[101].src;
tibiaImages[102] = new Image();
tibiaImages[102].src = jsonTImages.tibiae[102].src;
tibiaImages[103] = new Image();
tibiaImages[103].src = jsonTImages.tibiae[103].src;
tibiaImages[104] = new Image();
tibiaImages[104].src = jsonTImages.tibiae[104].src;
tibiaImages[105] = new Image();
tibiaImages[105].src = jsonTImages.tibiae[105].src;
tibiaImages[106] = new Image();
tibiaImages[106].src = jsonTImages.tibiae[106].src;
tibiaImages[107] = new Image();
tibiaImages[107].src = jsonTImages.tibiae[107].src;
tibiaImages[108] = new Image();
tibiaImages[108].src = jsonTImages.tibiae[108].src;
tibiaImages[109] = new Image();
tibiaImages[109].src = jsonTImages.tibiae[109].src;
tibiaImages[110] = new Image();
tibiaImages[110].src = jsonTImages.tibiae[110].src;
tibiaImages[111] = new Image();
tibiaImages[111].src = jsonTImages.tibiae[111].src;
tibiaImages[112] = new Image();
tibiaImages[112].src = jsonTImages.tibiae[112].src;

var gradient = document.getElementById("gradient");
var grad = gradient.getContext("2d");
var grd = grad.createLinearGradient(0, 0, 0, 385);
grd.addColorStop(0, "white");
grd.addColorStop(1, "black");
grad.fillStyle = grd;
grad.fillRect(0, 0, 21, 383);

var trafficLight = document.getElementById('trafficLight');
var goGreen = trafficLight.getContext('2d');
var radius = 40;

function greenLight() {

	goGreen.beginPath();
	goGreen.arc(60 + 220, 60, radius, 0, 2 * Math.PI, false);
	goGreen.fillStyle = exactColour;
	goGreen.fill();
	goGreen.lineWidth = 5;
	goGreen.strokeStyle = exactColour;
	goGreen.stroke();
}

function orangeLight() {
	goGreen.beginPath();
	goGreen.arc(60 + 110, 60, radius, 0, 2 * Math.PI, false);
	goGreen.fillStyle = okColour;
	goGreen.fill();
	goGreen.lineWidth = 5;
	goGreen.strokeStyle = okColour;
	goGreen.stroke();
}

function redLight() {
	goGreen.beginPath();
	goGreen.arc(60, 60, radius, 0, 2 * Math.PI, false);
	goGreen.fillStyle = outofRangeColour;
	goGreen.fill();
	goGreen.lineWidth = 5;
	goGreen.strokeStyle = outofRangeColour;
	goGreen.stroke();
}

$(document).ready(function(){ //function will run when page is there
        $("a#close-panel").click(function(){
          $("#lightbox, #lightbox-panel").fadeOut(300);
          //will make link close panel when clicked, lightboxpanel
          //and its gray opaqueness background disappears
        })
      });

$(document).ready(function(){ //function will run when page is there
        $("a#close-preWindow").click(function(){
        	if (TESelected) { 
          		$("#lightbox2, #preWindow").fadeOut(300);
          	} else {
          		alert("you must select Training or Evaluation");
          	}
          //will make link close panel when clicked, lightboxpanel
          //and its gray opaqueness background disappears
        })
      });

//$("#lightbox2, #preWindow").fadeIn(300);

var scout = document.getElementById("scoutScan");
var refline = scout.getContext("2d");
var checkboxRand = document.getElementById("checkRandom");

var pls = document.getElementById("lbCanvas");
var feedback = pls.getContext("2d");

var lines = ["dummy", 1, 2, 3, 4, 5, 6, 7, 8];

var colours = ["dummy", "#66ff00", "#66ff00", "#66ff00", "#66ff00", "#66ff00", "#66ff00", "#66ff00", "#66ff00"];

/*var feedbackImg = new Image();
feedbackImg.onload = function () {
  feedback.drawImage(feedbackImg, 0, 0);
}
feedbackImg.src = "image.jpg";*/

//scout.addEventListener("mousemove", showCoords);
//scout.addEventListener("mousemove", onLine);

//scout.addEventListener("mousedown", dragLine);
//$("#nextImg").button().click(nextImage);

$("#getSet").prop("disabled", true);
$("#dropSetButton").prop("disabled", true);
$("#set").submit(drawImg);
//$("#dropSet").submit(drawImg);
$("#getLine").prop("disabled", true);
$("#confirmLine").prop("disabled", true);
$("#nextImg").prop("disabled", true);
$("#dropSet").prop("disabled", true);

$("#chooseBones input").on('change', allowSet);
$("#chooseTE input").on('change', chooseTrainingorEval);
var TESelected = false;

$("#rButton").click(function(){
    $("#rButton").addClass("active");
    $("#tButton").removeClass("active");
});

$("#tButton").click(function(){
    $("#tButton").addClass("active");
    $("#rButton").removeClass("active");
});

function chooseBones(bone) {
	onRadius = bone;
	allowSet();
}

function allowSet() {
  //onRadius = $('input[name=bones]:checked', '#chooseBones').val();
  selectDummyDropDown();
  forbidSetLine();
  //$("#getSet").prop("disabled", false);
  $("#dropSetButton").prop("disabled", false);
  $("#getSet").prop("disabled", false);
  $("#dropSet").prop("disabled", false);
}

function coverChooseTE(mode) {
	if (mode == "training") {
		onTraining = 1;
		document.getElementById("mode").innerHTML = "Training";
		window.open('reflineTraining.html');
	} else {
		onTraining = 0;
		document.getElementById("mode").innerHTML = "Evaluation";
		window.open('refline.html');
	}
	//$("#coverpage").addClass('animated bounceOutLeft');
	//chooseTrainingorEval();
}
chooseTrainingorEval();
function chooseTrainingorEval() {
  //onTraining = $('input[name=mode]:checked', '#chooseTE').val();
  TESelected = true;
  if (onTraining == 1) {
  	document.getElementById("mode").innerHTML = "Training";
    allSetsR = allSetsRT;
    allSetsT = allSetsTT;
  } else {
  	document.getElementById("mode").innerHTML = "Evaluation";
    allSetsR = allSetsRE;
    allSetsT = allSetsTE;
  }
  //$("#getSet").prop("disabled", false); OUTDATED
  //$("#dropSet").prop("disabled", false);
  //forbidSetLine();
  //selectDummyDropDown();
}

/** Displays the coordinates of the mouse in a paragraph below the canvas
 *  in real time. Returns the y coordinate. */
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    //document.getElementById("demo").innerHTML = coords;
    return y;
}

function dragLine() { //OUTDATED
  var canDrag = onLine(event);
  scout.addEventListener("mouseup", stopDrag);
  if (canDrag) {
    scout.addEventListener("mousemove", upDateLine);
  }
}

function stopDrag() {
  scout.removeEventListener("mousemove", upDateLine);
  $("#confirmLine").prop("disabled", false);
  return false;
}

function startLine() {
  $('.progresso').removeClass('invisible');
  $("#getSet").prop("disabled", true);
  $("#dropSetButton").prop("disabled", true);
  $("#dropSet").prop("disabled", true);
  $("#tibia").prop("disabled", true);
  $("#radius").prop("disabled", true);
  $("#tButton").prop("disabled", true);
  $("#rButton").prop("disabled", true);
  $("#training").prop("disabled", true);
  $("#evaluation").prop("disabled", true);
  //$("#confirmLine").prop("disabled", false); UNCOMMENT if you dont care about confirming line without click to place it
  //$("#getLine").prop("disabled", true);
  scout.addEventListener("mousemove", upDateLine);
  scout.addEventListener("mousedown", stopDrag);
  lineVisible = 1;
  if (onRadius == 1 && imgPixelsR[curImgNumber] == 0) {
  	imgPixelsR[curImgNumber] = grabPixels(curImgNumber, pixelsR);
  }
  if (onRadius == 0 && imgPixelsT[curImgNumber] == 0) {
  	imgPixelsT[curImgNumber] = grabPixels(curImgNumber, pixelsT);
  }
  drawLine(lastYCoor - yAxis);
}

function upDateLine() {
  lastYCoor = showCoords(event);
  $("#confirmLine").prop("disabled", true);
  //document.getElementById("hi").innerHTML = "lastYCoor = " + lastYCoor;
  var imgHeight;
  if (lastYCoor < 20 + yAxis) { //change number 487 later to the image height
    lastYCoor = 20 + yAxis;
    return;
  }
  if (onRadius == 1) {
    imgHeight = 434 + yAxis;
  } else {
    imgHeight = 496 + yAxis;
  }
  if (lastYCoor > imgHeight) { //change number 487 later to the image height DONE
    lastYCoor = imgHeight;
    return;
  } else {
    drawLine(lastYCoor - yAxis);
  }
}

function onLine(event) { // OUTDATED (no more dragging)
	var x = event.clientX;
    var y = event.clientY;
    if (x >= xAxis && x <= xAxis + lLength
          && y >= lastYCoor - (lWidth/2 + 5) && y <= lastYCoor + lWidth/2 + 3) {
      //$("#here").fadeIn(700);
      return true;
    } else {
      //$("#here").fadeOut(700);
      return false;
    }
  }

function yCoorInPixels(num) {
  return Math.round((80 + (0.17076497695 * num)) * 1000) / 1000;
}

function drawLine(y) {
  refline.clearRect(0, 0, scout.width, scout.height);
  drawImg();
  refline.beginPath();
  refline.moveTo(0, y);
  refline.lineTo(lLength, y);
  refline.strokeStyle = "#66ff00";
  refline.lineWidth = lWidth;
  refline.stroke();
  refline.closePath();
  var yInPixels;
  var bottomLine;
  var topCm;
  var bottomCm;
  if (onRadius == 1) {
    yInPixels = imgPixelsR[curImgNumber][y];
    bottomLine = 432.5;
    topCm = "80.000"
    bottomCm = "154.112"
  } else {
    yInPixels = imgPixelsT[curImgNumber][y];
    bottomLine = 494.5;
    topCm = "60.000"
    bottomCm = "144.724"
  }

  refline.beginPath();
  refline.moveTo(477, 1.250);
  refline.lineTo(512, 1.25);
  refline.strokeStyle = "#ff0800";
  refline.lineWidth = 1.5;
  refline.stroke();
  refline.closePath();

  refline.beginPath();
  refline.moveTo(477, bottomLine);
  refline.lineTo(512, bottomLine);
  refline.strokeStyle = "#ff0800";
  refline.lineWidth = 1.5;
  refline.stroke();
  refline.closePath();

  refline.font = "12px Arial";
  refline.fillStyle = '#ff0800';
  refline.fillText(topCm, 475, 14);

  refline.font = "12px Arial";
  refline.fillStyle = '#ff0800';
  refline.fillText(bottomCm, 467, bottomLine - 5);

  refline.font = "12px Arial";
  refline.fillStyle = '#66ff00';
  refline.fillText(yInPixels + "mm", 11, y - 3);

  refline.font = "12px Arial";
  refline.fillStyle = '#66ff00';
  refline.fillText("110 Slices, 9.020mm, 2.8min", 200, 506);

}

function updateSetDropDown() {
	if (checkboxRand.checked) {
		$("#dropSet").prop("disabled", true);
	} else {
		$("#dropSet").prop("disabled", false);
	}
}

function getRandomSet(numImages) {
	var randomImgNums = [];
	randomImgNums[0] = "dummy";

	for (var i = 1; i < 9; i++) {
		randomImgNums[i] = Math.floor(Math.random() * numImages + 1);
		//alert(randomImgNums[i]);
	};

	var randomSet = {imageNums:randomImgNums};

	return randomSet;
}

function forbidSetLine() {
	$("#scoutScan").css("background-color", "#0033ff");
	refline.clearRect(0, 0, scout.width, scout.height);
	$("#getLine").prop("disabled", true);
}

/*function pickRSet() {
	Math.random() */


function drawImgSelected(selected) {
	if (lineVisible == 0) {
		inSet = Math.floor(Math.random() * (15 - 1 + 1)) + 1;;
		alert(inSet);
		drawImg();
	}
}

function drawImg() {
  if (lineVisible == 0) {
    //var inSet = document.forms["set"]["setHere"].value;

    //var dropdownSet = document.getElementById("dropSet");
	//var mySet = dropdownSet.options[dropdownSet.selectedIndex].value;
	//alert(inSet);
	//inSet = mySet;

	var onRandom;

	if (inSet == "random") {
		onRandom = 1;
	} else {
		onRandom = 0;
	}

    setNum = parseInt(inSet);
    //setNum = mySet;
    if (isNaN(setNum) && onRandom == 0) {
      alert(inSet);
      curSet = "dummy";
      forbidSetLine();
      return;
    }
    if (setNum > 15 || setNum <= 0) {
      alert("Not a valid set number");
      return;
    }
    if (onRandom == 1) {
  	if (onRadius == 1) {
  		curSet = getRandomSet(numImagesR);
  	} else {
  		curSet = getRandomSet(numImagesT);
  	}
  } else {
	  if (onRadius == 1) {
	    curSet = allSetsR[setNum];
	  } else {
	    curSet = allSetsT[setNum];
	  }
  }
  }

 
  //alert("done");
  curImgNumber = curSet.imageNums[countSet];
  //alert("yolo" + curImgNumber);
  if (onRadius == 1) {
    img = radiusImages[curImgNumber];
  } else {
    img = tibiaImages[curImgNumber];
  }
  $("#scoutScan").css("background-color", "black");
  if (lineVisible == 0) {
    $("#getLine").prop("disabled", false);
  }
  refline.clearRect(0, 0, scout.width, scout.height);
  refline.drawImage(img, 0, 0);
  return false;
}

function refreshImg(myImage) {

  $("#getLine").prop("disabled", false);
  $("#confirmLine").prop("disabled", true);
  refline.drawImage(myImage, 0, 0);
  return false;
}

function checkPos() {
  scout.removeEventListener("mousemove", upDateLine);
  scout.removeEventListener("mousedown", stopDrag);
  checkLinePos();
  updateProgressBar();
  countSet++;

  $("#nextImg").prop("disabled", false);
  $("#confirmLine").prop("disabled", true);
  $("#getLine").prop("disabled", true);
  $("#confirmLine").addClass("invisible");
  $("#nextImg").removeClass("invisible");
  //fix later
}

function updateProgressBar() {
  if (countSet == 1) {
  	$("#bar").animate({
    width: "12.5%"
	}, 1000);
  } else {
	  $("#bar").animate({
	    width: "+=12.5%"
	  }, 1000);
	}
  document.getElementById("bar").innerHTML = countSet + "/8";
}

function resetProgressBar() {
	$('.progresso').addClass('invisible');
	$("#bar").width(0);
	document.getElementById("bar").innerHTML = "0/8";
}

/**var exactColour = "#66ff00";
var okColour = "#ffa500";
var outofRangeColour = "#ff0000";**/

function showFeedBack() {

  feedback.clearRect(0, 0, scout.width, scout.height);

  if (onRadius == 1) {
    $("#lbCanvas").css("background", feedbackRImage);
    feedbackCorrect = feedbackRCorrect;
  } else {
    $("#lbCanvas").css("background", feedbackTImage);
    feedbackCorrect = feedbackTCorrect;
  }

  var above = 0;
  var below = 0;
  var exact = 0;
  var ok = 0;
  var outOfRange = 0;

  for (i = 1; i < 9; i++) {
    //alert(coorDiffs[i]);

    if (coorDiffs[i] < 0) {
      above++;
    }
    if (coorDiffs[i] > 0) {
      below++;
    }

    if (Math.abs(coorDiffs[i]) > 2) {
      outOfRange++;
      colours[i] = outofRangeColour;
    } else if (coorDiffs[i] == 0) {
        colours[i] = exactColour;
        exact++;
    } else {
        ok++;
        colours[i] = okColour;
    }

    lines[i] = coorDiffs[i] + feedbackCorrect;
  }

  $("#lightbox, #lightbox-panel").fadeIn(300);

  document.getElementById("feedBackText1").innerHTML = "Exact: " + exact;
  document.getElementById("feedBackText2").innerHTML = "Good: " + ok;
  document.getElementById("feedBackText3").innerHTML = "Out of range: " + outOfRange;

  document.getElementById("aboveBelow").innerHTML = 
    "Number distal (above) to the correct position: " + above +
      "<br>Number proximal (below) to the correct position: " + below + "</br>";

  feedback.beginPath();
  feedback.moveTo(0, lines[1]);
  feedback.lineTo(lLength, lines[1]);
  feedback.strokeStyle = colours[1];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, lines[2]);
  feedback.lineTo(lLength, lines[2]);
  feedback.strokeStyle = colours[2];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, lines[3]);
  feedback.lineTo(lLength, lines[3]);
  feedback.strokeStyle = colours[3];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, lines[4]);
  feedback.lineTo(lLength, lines[4]);
  feedback.strokeStyle = colours[4];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, lines[5]);
  feedback.lineTo(lLength, lines[5]);
  feedback.strokeStyle = colours[5];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, lines[6]);
  feedback.lineTo(lLength, lines[6]);
  feedback.strokeStyle = colours[6];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, lines[7]);
  feedback.lineTo(lLength, lines[7]);
  feedback.strokeStyle = colours[7];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, lines[8]);
  feedback.lineTo(lLength, lines[8]);
  feedback.strokeStyle = colours[8];
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();

  feedback.beginPath();
  feedback.moveTo(0, feedbackCorrect);
  feedback.lineTo(lLength, feedbackCorrect);
  feedback.strokeStyle = "#0033ff";
  feedback.lineWidth = lWidth;
  feedback.stroke();
  feedback.closePath();
}

function selectDummyDropDown() {
	var element = document.getElementById('dropSet');
    element.value = "dummy";
}

function nextImage() {
	goGreen.clearRect(0, 0, trafficLight.width, trafficLight.height);
	document.getElementById("traffic").innerHTML = "";
	$(".alert").hide();
	$("#confirmLine").removeClass("invisible");
 	$("#nextImg").addClass("invisible");
  if (countSet > 8) { //what happens when you reach the end of the set
    //alert("end of set!");
    refline.clearRect(0, 0, scout.width, scout.height);

    showFeedBack();
    //plusplus = plusplus + 200;
    //colour = "#77223f";
    $("#getLine").prop("disabled", true);
    $("#confirmLine").prop("disabled", true);
    $("#scoutScan").css("background-color", "#0033ff");
    $("#getSet").prop("disabled", false);
    $("#dropSetButton").prop("disabled", false);
    $("#dropSet").prop("disabled", false);
    $("#tibia").prop("disabled", false);
    $("#training").prop("disabled", false);
    $("#evaluation").prop("disabled", false);
    $("#radius").prop("disabled", false);
    $("#nextImg").prop("disabled", true);
    $("#tButton").prop("disabled", false);
  	$("#rButton").prop("disabled", false);
    lineVisible = 0;
    resetProgressBar();
    countSet = 1;
    onRandom = 0;
    selectDummyDropDown();
    //scout.addEventListener("mousedown", dragLine);
    return;
  }

  refline.clearRect(0, 0, scout.width, scout.height);
  curImgNumber = curSet.imageNums[countSet];
  if (onRadius == 1) {
    refreshImg(radiusImages[curImgNumber]);
  } else {
    refreshImg(tibiaImages[curImgNumber]);
  }
  $("#nextImg").prop("disabled", true);
  //scout.addEventListener("mousedown", dragLine);
}

function checkLinePos() { //fixed
  var correctCmPos;

  if (onRadius == 1) {
    correctCmPos = jsonRImages.radii[curImgNumber].grTruth;
  } else {
    correctCmPos = jsonTImages.tibiae[curImgNumber].grTruth;
  }

  //alert(correctCmPos);

  var correctPixels;

  if (onRadius == 1) {
    //correctStart = 80;
    //correctEnd = 154.112;
    //alert(correctCmPos);
    correctPixels = slowSearch(imgPixelsR[curImgNumber], correctCmPos);
    //alert(correctPixels);

  } else {
    //correctStart = 60;
    //correctEnd = 144.724;
    correctPixels = slowSearch(imgPixelsT[curImgNumber], correctCmPos);
    //correctPixels = (correctCmPos - 60) * (496 / (144.724 - 60));
  }

  refline.beginPath();
  refline.moveTo(0, correctPixels);
  refline.lineTo(lLength, correctPixels);
  refline.strokeStyle = "#0033ff";
  refline.lineWidth = lWidth;
  refline.stroke();
  refline.closePath();

  refline.font = "12px Arial";
  refline.fillStyle = '#0033ff';
  refline.fillText(correctCmPos, 460, correctPixels - 6);

  y = lastYCoor - yAxis;
  if (onRadius == 1) {
  	//alert(y);
    pixelY = imgPixelsR[curImgNumber][y];
  } else {
    pixelY = imgPixelsT[curImgNumber][y];
  }

  coorDiffs[countSet] = y - correctPixels;

  var ok;
  var textColor;

  if (Math.abs(y - correctPixels) > 2) {
  	redLight();
  	ok = "Out of range";
  	textColor = outofRangeColour;
  	$("#badLine").fadeIn(100);
  } else if ((y - correctPixels) == 0) {
  	greenLight();
  	ok = "Exact";
  	textColor = exactColour;
  	$("#goodLine").fadeIn(100);
  } else {
  	orangeLight();
  	ok = "Good";
  	$("#okLine").fadeIn(100);
  	textColor = okColour;
  }

  if (pixelY == correctCmPos) {
    //alert("CORRECT");
    document.getElementById("goodLine").innerHTML = "<strong>" + ok +"!</strong> Diff = 0.0000mm";
  } else {
    var result = pixelY - correctCmPos;
    result = Number((result).toFixed(4));
    document.getElementById("traffic").innerHTML = "Diff = " + result + "mm</br>" + ok;
    document.getElementById("okLine").innerHTML = "<strong>" + ok +"!</strong> Diff = " + result +"mm";
    document.getElementById("badLine").innerHTML = "<strong>" + ok +"!</strong> Diff = " + result+"mm";
    document.getElementById("goodLine").innerHTML = "<strong>" + ok +"!</strong> Diff = " + result+"mm";
    $("#traffic").css("color", textColor);
  }
}
