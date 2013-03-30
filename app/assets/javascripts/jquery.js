/*
$(document).ready(function() {
	
	var currentPage = "home";
	//$("#content").animate({ width: "toggle"}, "slow");
	
	$("#mainbar").slideDown(1200, function(){
		$("#homebtn-container").slideDown("slow");
	});
	
	//change the background
	var changeBg = function(oldPage, newPage) {
		$("#" + oldPage + "bg").fadeOut("slow");
		$("#" + newPage + "bg").fadeIn("slow");
	};
	
	//move mainbar and toggle content div
	var moveMainbar = function(oldPage, newPage) {
		if (oldPage == "home") {
			$("#mainbar").animate({ "left": "25%" }, 1000);
			//$("#content").animate({ width: "show"}, 1000);
		}
		else if (newPage == "home") {
			//$("#content").animate({ width: "hide" }, 1000);
			$("#mainbar").animate({ "left": "50%" }, 1000);
		}
	};
	
	//home link
	$("#homebtn").click(function() {
		if (currentPage != "home") {
			moveMainbar(currentPage, "home");
			changeBg(currentPage, "home");
			currentPage = "home";
		}
	});
	
	//locations link
	$("#locationsbtn").click(function() {
		if (currentPage != "locations") {
			moveMainbar(currentPage, "locations");
			changeBg(currentPage, "locations");
			currentPage = "locations";
		}
	});
	
	//menu link
	$("#menubtn").click(function() {
		if (currentPage != "menu") {
			moveMainbar(currentPage, "menu");
			changeBg(currentPage, "menu");
			currentPage = "menu";
		}
	});

});