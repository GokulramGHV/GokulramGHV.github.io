const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	easing: 'easeInOutQuad',
});

function RndInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dark = false;
let imgs = [1, 2, 3, 4, 5, 6, 7];

$(document).ready(function () {
	$('.wip').click(function () {
		alert("Work in Progress: I'm currently working on this section...");
	});

	$('#backdrop').css(
		'background-image',
		'linear-gradient(100deg,rgba(54, 50, 50, 0.521),rgba(77, 77, 75, 0.562)),url(/assets/backdrops/resized/' +
			String(RndInt(1, 7)) +
			'.jpg)'
	);

	$('.dark-toggle-btn').click(function () {
		if (!dark) {
			$('html').addClass('dark');
			$('#moon').hide();
			$('#sun').show();
			dark = true;
		} else {
			$('html').removeClass('dark');
			$('#sun').hide();
			$('#moon').show();
			dark = false;
		}
	});
});
