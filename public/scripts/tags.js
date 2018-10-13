SystemJS.import('../scripts/thumbs.js').then(function(m){
	// console.log(m)
	var thumb = new m.default.ThumbsUp($(".palm"))

  $.fn.extend({
		"thumb": thumb
	});

	$(".palm").on('click',throttle(100, function () {
		$(".palm").thumb.clickEvent()
	}))

})

// 函数防抖
function throttle (delay, fn) {
	var timer = null
	return function () {
		var context = this
		var args = arguments
		if (timer) {
			clearTimeout(timer)
			timer = null
		}
		timer = setTimeout(() => {
			fn.apply(context, args)
		}, delay);
	}
}