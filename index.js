var curTab = 0;

function launchWebApp() {
	window.open('coverpage.html');
}

function showTab(num) {
	//alert('buyo');
	if (curTab == 1) {
		$('#aboutInfo').addClass('invisible');
	}
	if (curTab == 2) {
		$('#docInfo').addClass('invisible');
	}
	if (curTab == 3) {
		$('#citeInfo').addClass('invisible');
	}
	if (curTab == 4) {
		$('#docInfo').addClass('invisible');
	}
	if (num == 1) {
		$('#aboutInfo').removeClass('invisible');
		$('#docInfo').addClass('invisible');
		$('#citeInfo').addClass('invisible');
		$('#contactInfo').addClass('invisible');
		$('#tab1').css("opacity", "1");
		$('#tab2').css("opacity", "0.8");
		$('#tab3').css("opacity", "0.8");
		$('#tab4').css("opacity", "0.8");
	} else if (num == 2) {
		$('#docInfo').removeClass('invisible');
		$('#aboutInfo').addClass('invisible');
		$('#citeInfo').addClass('invisible');
		$('#contactInfo').addClass('invisible');
		$('#tab1').css("opacity", "0.8");
		$('#tab2').css("opacity", "1");
		$('#tab3').css("opacity", "0.8");
		$('#tab4').css("opacity", "0.8");
	} else if (num == 3) {
		$('#citeInfo').removeClass('invisible');
		$('#aboutInfo').addClass('invisible');
		$('#docInfo').addClass('invisible');
		$('#contactInfo').addClass('invisible');
		$('#tab1').css("opacity", "0.8");
		$('#tab2').css("opacity", "0.8");
		$('#tab3').css("opacity", "1");
		$('#tab4').css("opacity", "0.8");
	} else {
		$('#contactInfo').removeClass('invisible');
		$('#aboutInfo').addClass('invisible');
		$('#docInfo').addClass('invisible');
		$('#citeInfo').addClass('invisible');
		$('#tab1').css("opacity", "0.8");
		$('#tab2').css("opacity", "0.8");
		$('#tab3').css("opacity", "0.8");
		$('#tab4').css("opacity", "1");
	}
}