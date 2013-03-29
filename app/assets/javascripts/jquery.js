
$(document).ready(function() {
	
	var currentPage = "home";
	
	//change the background
	var changeBg = function(oldPage, newPage) {
		//$("#" + oldPage).css({ "display" : "block", "z-index" : -1 });
		//$("#" + newPage).css({ "display" : "block", "z-index" : 0 });
		
		$("#" + oldPage + "bg").fadeOut("slow");
		$("#" + newPage + "bg").fadeIn("slow");
	};
	
	//move mainbar
	var moveMainbar = function(oldPage, newPage) {
		if (oldPage == "home")
			$("#mainbar").animate({"left": "25%"}, "slow")
		else if (newPage == "home")
			$("#mainbar").animate({"left": "50%"}, "slow")
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