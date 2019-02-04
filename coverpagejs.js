$("#resizeHeader2").width("100%");

$("#resizeTraining").width("20%");
$("#resizeEval").width("20%");

$(".progress-bar").animate({
    width: "70%"
}, 2500);

function coverChooseTE(mode) {
	if (mode == "training") {
		onTraining = 1;
		//document.getElementById("mode").innerHTML = "Training";
		window.open('reflineTraining.html', "Training", "width=900, height=950");
	} else {
		onTraining = 0;
		//document.getElementById("mode").innerHTML = "Evaluation";
		window.open('reflineEvaluation.html', "Evaluation", "width=900, height=950");
	}
	//$("#coverpage").addClass('animated bounceOutLeft');
}

/*FAQ CODE STARTS HERE!*/

var q1 = "During a scan, HR-pQCT operators acquire an anterior-posterior 2D projection (scout view image) of radius and tibia, where they visually identify an anatomical landmark that determines the region to be scanned. Visual identification of anatomical landmark and positioning of reference line can vary for a given operator as well as between operators, affecting location of the region of interest, and thus measurements of bone parameters. This has large effect especially in multicenter and cross-sectional studies, where multiple HR-pQCT operators acquire images on different scanners.";
var q2 = "In HR-pQCT images we focus on the articular surface of the radius in the radiocarpal joints of the wrist. <br><img src='img/radiusjoint.png' id = 'rResize' /></br><br style ='text-align:left;'>Anatomy of the radius in the wrist joint. (Modified from http://www.msdlatinamerica.com/ebooks/HandSurgery/sid905608.html)</br>";
var q3a = "In simple cases (a), where a crest is clearly visible in the scout view image (red dot), we position the reference line (green line) so that it intersects the peak of the crest at the edge of the joint surface. In more complicated cases, where there is no visible crest in the scout view images (b), we consider the mid-point of the curve that traces the articular surface of the radius (red dot at the midpoint of the red line). For both cases the articular surface is identified as the edge in the image where there is a clear transition between the radiolucent (dark signal) joint space and radiopaque (bright signal) subchondral bone. The red lines tracing the articular surface directly overlay that edge. The reference line is positioned so that it intersects this curve.";
var q3b = "<br><img src = 'img/radiuslandmarks.png' id ='landmarks'/><br><br>Three examples for the identification of the anatomic landmark in the radius, where the crest is clearly visible (a), and where the crest is not visible (b). For each example, see scout view image, landmark identification (red line with red dot), and corresponding position of the reference line (green line).</br>";
var q3c = "<br>When a crest is present in the scout image, we can use the Swiss hiker analogy to describe the correct location to intersect this curve  simple analogy can be used: the. Imagine a hiker walking along the surface represented by this curve. The crest is like a small hill that he must climb over as he treks across the joint surface. At the peak of this hill he wants to plant a flag to commemorate his accomplishment. The location where the hiker plants the flag is analogous to the point on the curve that must be crossed by the reference line, when correctly positioned.</br>";
var q3d = "<br><img src='img/hiker.png' id='hiker'></br><br>Caption: Consider the articular surface of the radius (a) as a hiking path (b). The hiker walks along this path (c) until he reaches the peak of the hill where he plants his flag (d).</br>";
var q4 = "In HR-pQCT images we focus on the articulating surface of the tibia, specifically the tibial plafond.<br><img src='img/anatibia.png' id='anatibia' /></br><br><br>Anatomy of the tibia in the ankle joint.</br>(Modified from http://www.rci.rutgers.edu/~uzwiak/AnatPhys/APFallLect10.html)</br>";
var q5a = "When the tibial plafond is flat ((a), red line), we position the reference line (green line) so that it overlays the thin, high-intensity plateau of the plafond. When there is a crest in the tibial plafond (b), we identify the landmark as the peak of the crest in the tibial plafond (red dot), and we position the reference line (green line) so that it intersects the thin, high intensity margin at this peak of the tibial plafond. Note that for the tibia the reference line cuts through the center of the high intensity plateau rather than the surface crest as in the radius.";
var q5b = "<br><img src='img/tlandmarks.png' id='tlandmarks' /></br><br>Three examples for the identification of the anatomic landmark in the tibia, with flat plateau (a), and with a crest in the plateau (b). For each example, we show scout view image, landmark identification (red line and red dot), and corresponding position of the reference line (green line).</br>";
var q6 = "Each HR-pQCT operator has to train on all the 15 training sets for each bone before moving to the evaluation part. In details:<ul><li>The operator can choose the way s/he wants to train, the only constrain is that s/he trains on all the 15 training sets per bone site before moving to the evaluation step. Thus, the operator can train separately first for the radius and then for the tibia, or vice versa, or alternate between radial and tibial datasets.</li><li>After training on the 15 training sets, the operator is allowed to move to the evaluation step. However if s/he wants to practice more before the evaluation to meet the required criteria (see following paragraph), he/she can continue practicing until needed.</li></ul>";
var q7a = "After training on all the training sets of radius and tibia, the HR-pQCT operator can move to the evaluation step.<br>Here are some details:</br>";
var q7b = '<ul><li>The operator must succeed on at least on 3 sets for the radius and 3 sets for the tibia. In order to succeed, the sum of “Exact” and “Good” positioning has to be 7, thus the number of “Out of range” positioning has to be 1.</li><li>The operator will have to keep track of the number of successful evaluation sets, because the GUI does not save it in memory.</li><li>If the operator has issues at succeeding in the evaluation or feels otherwise underprepared, s/he may go back to more training before doing new evaluation.</li></ul>';

/* how to add HTML image: <img src='img/tlandmarks.png' id='tlandmarks' /> */

var q1vis = 0;
var q2vis = 0;
var q3vis = 0;
var q4vis = 0;
var q5vis = 0;
var q6vis = 0;
var q7vis = 0;


function showFAQ(q) {
	//alert(q);
	normalsizeFAQ();
	if (q == 2) {
		if (q2vis == 0) {
			//document.getElementById("fillTitle").innerHTML = "Why a reference line positioning tool?";
			document.getElementById("q2").innerHTML = "<p>" + q2 +"</p>";
			$('#q2').removeClass('invisible');
			$("#rResize").width("50%");
			$("a#qa2").addClass('faqh');
			q2vis = 1;
		} else {
			$('#q2').addClass('invisible');
			$("a#qa2").removeClass('faqh');
			//document.getElementById("q1").innerHTML = "";
			q2vis = 0;
		}
	} else if (q == 1) {
		if (q1vis == 0) {
			//document.getElementById("fillTitle").innerHTML = "Why a reference line positioning tool?";
			document.getElementById("q1").innerHTML = "<p>" + q1 +"</p>";
			$('#q1').removeClass('invisible');
			$("a#qa1").addClass('faqh');
			q1vis = 1;
		} else {
			$('#q1').addClass('invisible');
			$("a#qa1").removeClass('faqh');
			//$("#ql1").css("color", "#178ccb");
			//document.getElementById("q1").innerHTML = "";
			q1vis = 0;
		}
		//$('#q1').addClass('animated fadeInDown');
	} else if (q == 3) {
		if (q3vis == 0) {
			//document.getElementById("fillTitle").innerHTML = "Why a reference line positioning tool?";
			document.getElementById("q3").innerHTML = "<p>" + q3a + q3b + q3c + q3d +"</p>";
			$('#q3').removeClass('invisible');
			q3vis = 1;
			$("#landmarks").width("50%");
			$("#hiker").width("50%");
			$("a#qa3").addClass('faqh');
		} else {
			$('#q3').addClass('invisible');
			$("a#qa3").removeClass('faqh');
			//document.getElementById("q1").innerHTML = "";
			q3vis = 0;
		}
	} else if (q==4) {
		if (q4vis == 0) {
			//document.getElementById("fillTitle").innerHTML = "Why a reference line positioning tool?";
			document.getElementById("q4").innerHTML = "<p>" + q4 +"</p>";
			$('#q4').removeClass('invisible');
			$("#anatibia").width("54%");
			$("a#qa4").addClass('faqh');
			q4vis = 1;
		} else {
			$("a#qa4").removeClass('faqh');
			$('#q4').addClass('invisible');
			//document.getElementById("q1").innerHTML = "";
			q4vis = 0;
		}
	} else if (q==5) {
		if (q5vis == 0) {
			//document.getElementById("fillTitle").innerHTML = "Why a reference line positioning tool?";
			document.getElementById("q5").innerHTML = "<p>" + q5a + q5b +"</p>";
			$('#q5').removeClass('invisible');
			$("a#qa5").addClass('faqh');
			$("#tlandmarks").width("60%"); //resizes image
			q5vis = 1;
		} else {
			$('#q5').addClass('invisible');
			$("a#qa5").removeClass('faqh');
			//document.getElementById("q1").innerHTML = "";
			q5vis = 0;
		}
	} else if (q==6) {
		if (q6vis == 0) {
			//document.getElementById("fillTitle").innerHTML = "Why a reference line positioning tool?";
			document.getElementById("q6").innerHTML = "<p>" + q6 +"</p>";
			$('#q6').removeClass('invisible');
			$("a#qa6").addClass('faqh');
			q6vis = 1;
		} else {
			$('#q6').addClass('invisible');
			$("a#qa6").removeClass('faqh');
			//document.getElementById("q1").innerHTML = "";
			q6vis = 0;
		}
	} else if (q==7) {
		if (q7vis == 0) {
			//document.getElementById("fillTitle").innerHTML = "Why a reference line positioning tool?";
			document.getElementById("q7").innerHTML = "<p>" + q7a + q7b +"</p>";
			$('#q7').removeClass('invisible');
			$("a#qa7").addClass('faqh');
			q7vis = 1;
		} else {
			$('#q7').addClass('invisible');
			$("a#qa7").removeClass('faqh');
			//document.getElementById("q1").innerHTML = "";
			q7vis = 0;
		}
	}
	// new question, q (your question number). else if (q == (what you call from refline.html))
}

function normalsizeFAQ() {
	$("#faqBanner").css("height", "73%");
	$("#faqfill").css("font-size", "16px");
	$("#footer").css("top", "130%");
}

/*FAQ CODE ENDS HERE*/