
$(document).ready(function() {
	
	//intial logo display
	$("#mainbar").slideDown(1200, function(){
		//$("#linksmenu").animate({ height: "show"}, 1400);
		$("#homebtn-container").animate({ height: "show" }, 1400);
		$("#mainbar-content").animate({ height: "show" }, 2400);
	});
	
	//move mainbar and toggle content div
	var moveMainbar = function(newPage) {
		if (newPage == "home") {
			$("#locations-container").animate({ width: "hide" }, 1200, function() {
				$("#menu-container").animate({ width: "hide" }, 1200, function() {
					$("#mainbar").animate({ left: "50%" }, 1200);
				});
			});
		}
		else if (newPage == "locations") {
			$("#mainbar").animate({ left: "25%" }, 1200, function() {
				$("#locations-container").animate({ width: "show" }, 2000);
				$("#menu-container").animate({ width: "hide" }, 1200);
			});
		}
		else if (newPage == "menu") {
			$("#mainbar").animate({ left: "25%" }, 1200, function() {
				$("#menu-container").animate({ width: "show" }, 2000);
				$("#locations-container").animate({ width: "hide" }, 1200);
			});
		}
	};
	
	var changeLink = function(oldPage, newPage) {
		$("#" + oldPage + "btn").css( "color", "#FFF" );
		$("#" + oldPage + "btn").hover(function() {
			$("#" + oldPage + "btn").css( "color", "#CC0000" )}, function() {
			$("#" + oldPage + "btn").css( "color", "#FFF" )});
		
		$("#" + newPage + "btn").css( "color", "#CC0000" );
		$("#" + newPage + "btn").hover(function() {
			$("#" + newPage + "btn").css( "color", "#CC0000" )}, function() {
			$("#" + newPage + "btn").css( "color", "#CC0000" )});
	};
	
	//change the background
	var changeBg = function(oldPage, newPage) {
		$("#" + oldPage + "-bg").fadeOut(1400);
		$("#" + newPage + "-bg").fadeIn(1400);
	};
	
	var changeMenu = function(newMenu) {
		$("#" + newMenu + "-menu").attr('class', 'menu-header-active');
		$("#" + currentMenu + "-menu").attr('class', 'menu-header');
		
		$("#" + currentMenu + "-menu-content").fadeOut("slow", function() {
			$("#" + newMenu + "-menu-content").fadeIn("slow");
		});
		
		currentMenu = newMenu;
	};
	
	var currentPage = "home";
	var currentMenu = "ramen";
	
	//home link
	$("#homebtn").click(function() {
		if (currentPage != "home") {
			changeLink(currentPage, "home");
			moveMainbar("home");
			changeBg(currentPage, "home");
			currentPage = "home";
		}
	});
	
	//locations link
	$("#locationsbtn").click(function() {
		if (currentPage != "locations") {
			changeLink(currentPage, "locations");
			moveMainbar("locations");
			changeBg(currentPage, "locations");
			currentPage = "locations";
		}
	});
	
	//menu link
	$("#menubtn").click(function() {
		if (currentPage != "menu") {
			changeLink(currentPage, "menu");
			moveMainbar("menu");
			changeBg(currentPage, "menu");
			currentPage = "menu";
		}
	});
	
	//menu animations
	$("#ramen-btn").click(function () {
		if (currentMenu != "ramen") {
			changeMenu("ramen");
		}
	});
	
	$("#sushi-btn").click(function () {
		if (currentMenu != "sushi") {
			changeMenu("sushi");
		}
	});
	
	$("#app-btn").click(function () {
		if (currentMenu != "app") {
			changeMenu("app");
		}
	});
	
	$("#lunch-btn").click(function () {
		if (currentMenu != "lunch") {
			changeMenu("lunch");
		}
	});

});