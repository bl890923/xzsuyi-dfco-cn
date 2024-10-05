$(function() {

	var a = $(window).height();
	var k = 87 + $(".mid_top").height() + $(".mid_mid").height() + $(window).width()*0.315625 + 240;
	if($(window).scrollTop() >= k - a) {
		b();
	}
	$(window).scroll(function() {
		var e = $(window).scrollTop();
		if(e >= k - a) {
			b()
		}
	});

	function b() {
		$('.nub').eq(0).XNumber(12, true);
		$('.nub').eq(1).XNumber(20, true);
		$('.nub').eq(2).XNumber(2000, true);
		$('.nub').eq(3).XNumber(99, true)
	};

});
//number
(function(d) {
	d.fn.XNumber = function(e, c) {
		var g = String(e),
			f = g.length,
			b = d(this);
		if(!b.html()) {
			for(var h = ["NumGe", "NumShi", "NumBai", "NumQian", "NumWan"], k = "", l = "", m = 0; 2 > m; m++)
				for(var a = 0; 10 > a; a++) k = k + '<div class="Txt">' + a + "</div>";
			for(a = 0; a < f; a++) l = l + '<div class="' + h[f - 1 - a] + '">' + k + "</div>";
			b.append('<div class="NumContent">' + l + "</div>")
		}
		$height = b.find(".Txt").height();
		h = [];
		for(a = 0; a < f; a++) h[a] = g.substring(a, a + 1);
		if(!0 === c)
			for(b.children(".NumContent").removeClass("active"), a = 0; a < f; a++) b.children(".NumContent").children().eq(a).css({
				transform: "translateY(" +
					-(parseInt(h[a]) + 10) * $height + "px)",
				opacity: "1"
			});
		else if(!1 === c) b.children(".NumContent").addClass("active"), b.children(".NumContent").children().css({
			transform: "translateY(0px)",
			opacity: "0"
		});
		else return !1
	}
})(jQuery);