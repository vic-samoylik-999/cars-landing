$(function(){
	$('.carousel__body').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 841,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,
				}
			},
	]
	});

	// Scroll to Anchor - Uses data-href and simple #-hrefs

	$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
		e.preventDefault();
		var time = 1500;
		var data = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(data).offset().top }, time);
  });
});