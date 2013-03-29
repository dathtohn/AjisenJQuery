
$(document).ready(function() {
	
	var currentPage = "home";
	
	$("#home").click(function() {
		if (currentPage != "home")
			$("#mainbar").animate({"left": "50%"}, "slow")
		
		$("#" + currentPage + "bg").fadeOut(function() {
					setTimeout(function() {
						$("#headertxt").css({"display" : "block"});
						animating = false;
					}, 500);
				});

		$("#homebg").fadeIn('slow', function() {
					    // Animation complete.
		});
				
		currentPage = "home";
	});
	
	
	//Locations
	$("#locations").click(function() {
		if (currentPage == "home")
			$("#mainbar").animate({"left": "25%"}, "slow")
		else {
		};
		
		$("#" + currentPage + "bg").fadeOut('slow', function() {
		    // Animation complete.
		});
		
		//$("#locationsbg").css({ "z-index": 1; });
		
		$("#menubg").fadeIn('slow', function() {
			    // Animation complete.
		});
		
		currentPage = "locations";
	});

});