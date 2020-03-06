$(()=>{
	
	$(".js-slider").each(function(){
		
        $(this).owlCarousel({
            nav:false,
            loop:true,
			items:3,
			mouseDrag : false,
			dots: false,
            responsiveClass:true,
            responsive:{
				0:{
                    items:1,
                },
                1380:{
                    items:3,
					center:true,
					mouseDrag : false
                }
            }
        });
		
    });
	
	$(".slider__arrow_prev").click(function(){
		var slider_name = $(this).closest(".js-slider");
		slider_name.trigger('prev.owl.carousel',[500]);
	});
	
	$(".slider__arrow_next").click(function(){
		var slider_name = $(this).closest(".js-slider");
		slider_name.trigger('next.owl.carousel',[500]);
	});
	
	$(".js-video-slider").on('change.owl.carousel', function(event) {
		$(".js-video").html('');
	});
	
})