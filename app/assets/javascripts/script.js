
$(document).ready(function() {
	
	var currentPage = "home";
	
	//intial logo display
	$("#mainbar").slideDown(1200, function(){
		$("#homebtn-container").animate({ height: "show"}, 1400);
	});
	
	//change the background
	var changeBg = function(oldPage, newPage) {
		$("#" + oldPage + "bg").fadeOut("slow");
		$("#" + newPage + "bg").fadeIn("slow");
	};
	
	//move mainbar and toggle content div
	var moveMainbar = function(oldPage, newPage) {
		if (oldPage == "home") {
			$("#mainbar").animate({ "left": "25%" }, 600);
			$("#content").animate({ width: "show"}, 2000);
		}
		else if (newPage == "home") {
			$("#content").animate({ width: "hide" }, 800);
			$("#mainbar").animate({ "left": "50%" }, 1200);
		}
	};
	
	var changeLink = function(oldPage, newPage) {
		$("#" + oldPage + "btn").css( "color", "#FFF" );
		$("#" + oldPage + "btn").mouseover(function() {
			$("#" + oldPage + "btn").css( "color", "#CC0000" );
		});
		$("#" + oldPage + "btn").mouseleave(function() {
			$("#" + oldPage + "btn").css( "color", "#FFF" );
		});
		
		$("#" + newPage + "btn").css( "color", "#CC0000" );
		$("#" + newPage + "btn").mouseover(function() {
			$("#" + newPage + "btn").css( "color", "#CC0000" );
		});
		$("#" + newPage + "btn").mouseleave(function() {
			$("#" + newPage + "btn").css( "color", "#CC0000" );
		});
	}
	
	//home link
	$("#homebtn").click(function() {
		if (currentPage != "home") {
			changeLink(currentPage, "home");
			moveMainbar(currentPage, "home");
			changeBg(currentPage, "home");
			currentPage = "home";
		}
	});
	
	//locations link
	$("#locationsbtn").click(function() {
		if (currentPage != "locations") {
			changeLink(currentPage, "locations");
			moveMainbar(currentPage, "locations");
			changeBg(currentPage, "locations");
			currentPage = "locations";
		}
	});
	
	//menu link
	$("#menubtn").click(function() {
		if (currentPage != "menu") {
			changeLink(currentPage, "menu");
			moveMainbar(currentPage, "menu");
			changeBg(currentPage, "menu");
			currentPage = "menu";
		}
	});

});