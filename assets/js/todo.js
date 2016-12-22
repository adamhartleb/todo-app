// Cross-out specific to-dos
$("ul").on("click", "li", function(){
	$(this).find(".input-span").toggleClass("completed");
});

// Click on X to delete to-do
$("ul").on("click", ".icon-span", function(evt){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(evt) {
	var input = $(this).val();
	if (evt.which == 13) {
		$("ul").append("<li><span class=\"icon-span\"><i class=\"fa fa-trash\"></i></span> <span class=\"input-span\">" + input + "</span></li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(evt) {
	$("input[type='text']").fadeToggle(400, "linear");
});
