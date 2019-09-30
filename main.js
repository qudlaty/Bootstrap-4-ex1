// toggle main nav bg color
$(function () {
	$(document).scroll(function() {
		let nav = $("#topnav");
		nav.toggleClass("navbg", $(this).scrollTop() > nav.height())
	})
})