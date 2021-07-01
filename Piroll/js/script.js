$(function () {

	var myVideo = document.getElementById("video");

	$('.video__btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);

		setTimeout(function () {
			if (myVideo.paused) {
				myVideo.play();
				$this.css({
					'display': 'none'
				})
			} else {
				myVideo.pause();
			}
		}, 100);
	});

	$(document).on('click', function (e) {
		var $this = $(e.target);

		if (myVideo.play) {
			myVideo.pause();
			$('.video__btn').css({
				'display': 'block'
			})
		}

	});

});

//slider for section testimonials

$(function () {
	$('.testimonials__list').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		startPosition: 1
	});
});

//slider for section clients

$(function () {
	$('.clients__list').owlCarousel({
		items: 5,
		loop: true,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			580: {
				items: 3
			},
			992: {
				items: 5
			},
		}
	});


});

//smooth scrolling

function slowScroll(id) {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}

//check form

$(document).ready(function () {
	$("#done").click(function () {
		$('#message-erorr').hide();
		var name = $("#name").val(),
			email = $("#email").val(),
			subject = $("#subject").val(),
			message = $("#message").val(),
			fail = "";

		if (name.length < 3)
			fail = "Name less than three characters";
		else if (email.split('@').length - 1 == 0 || email.split('.').length - 1 == 0)
			fail = "You have entered an incorrect email";
		else if (subject.length < 5)
			fail = "message subject is at least 5 characters long";
		else if (message.length < 10)
			fail = "message at least 10 characters";

		if (fail != "") {
			$('#message-erorr').html(fail + "<div class='clear'><br></div>");
			$('#message-erorr').show();
			return false;
		}

		$.ajax({
			url: '../ajax/feedback.php',
			type: 'POST',
			cache: false,
			data: { 'name': name, 'email': email, 'subject': subject, 'message': message },
			dataType: 'html',
			success: function (data) {
				$('#message-success').html(data + "<div class='clear'><br></div>");
				$('#message-success').show();
			}
		});
	});
});

//button up

$(function () {
	$('.fixed-btn').on('click', function () {
		$('html, body').animate({
			'scrollTop': 0
		}, 1000);
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 250) {
			$('.fixed-btn').addClass('fixed-btn__active');
		} else {
			$('.fixed-btn').removeClass('fixed-btn__active');
		}
	});
});

//ibg
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//burger menu

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');

	});

	$('.menu__link').click(function (event) {
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});
});