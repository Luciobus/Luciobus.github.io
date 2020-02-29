$(".open-btn").click(function() {
	$(this).parent().children('.tags').toggleClass('disabled');
	$(this).parent().children('.tags').toggleClass('enabled');
	console.log(this);
});