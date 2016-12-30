console.log('overview js page');

$(document).ready(function(){
	$("#div1").addClass("invisible");

	$("#toggle").click(function(){
		if($("#div1").hasClass("invisible")) {
			$("#div1").removeClass("invisible");
			$("#div1").addClass("visible");	
			$("#div1").text("Visible!");
		}
		else {
			$("#div1").removeClass("visible");
			$("#div1").addClass("invisible");		
			$("#div1").text("Hiding from you");
		}
	});
});