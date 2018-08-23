
$(document).ready(function(){
	$('#title .title').hide();
	$('#title .title').each(function(i) {
		$(this).delay((i++) * 500).fadeTo(1500, 1); })

	$('.dwn').hide();
	$('.dwn').delay(1000).fadeTo(1000, 1);

		//Menu

		$('.menu').hide();
		$('.slide_menu').on('click', function(){
			$('.menu').slideToggle(1000);
		}
		);

		$('.slide_menu').on('click', function(){
			$('.without_click').toggleClass('click_on_menu');
		}
		);

	
	});




