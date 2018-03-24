


$( document ).ready(function() {
	
	// scroll to top when scroll to top is clicked
	$("#scroll-top").on("click", function() {
		$("body").scrollTop(0);
	});

	// only show the scroll to top button if we are not on the top of the page
	//$(window).scroll(function(e){ 
	//  if($("body").scrollTop() == 0) {
	//	  $("#scroll-top").addClass("hide")
	//  }
	//  else{
	//	  $("#scroll-top").removeClass("hide")
	//  }
	//});
	
	// Collapse all and Expand all button click for the accordions
	$("#expand-collapse-all").on("click", function() {
		if($("#expand-collapse-all").text().indexOf("Expand") > -1){
				$("#collapseOne").collapse('show');
				$("#collapseTwo").collapse('show');
				$("#collapseThree").collapse('show');
				$("#collapseFour").collapse('show');
				//$("collapseFive").collapse('show');
			$("#expand-collapse-all").text("Collapse All")
		}
		else{
			$("#collapseOne").collapse('hide');
			$("#collapseTwo").collapse('hide');
			$("#collapseThree").collapse('hide');
			$("#collapseFour").collapse('hide');
			//$("collapseFive").collapse('hide');
			$("#expand-collapse-all").text("Expand All")
		}
	});

});