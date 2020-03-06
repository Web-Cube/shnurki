$(()=>{
	
	$(".js-play").click(function(){
        var video = $(this).data("video");
        $(this).find(".js-video").html(video);
    });
	
	$(".js-remove-video").click(function(){
        $(".js-video").html('');
    });
	
	$(".js-scroll-to").click(function() {
        var attr_href = $(this).attr("href");
        var data_href = $(this).data("href");
        if ( data_href ) {
            attr_href = data_href;
        }
		$("html, body").animate({
            scrollTop: $(attr_href).offset().top + "px"
        }, {
            duration: 1000
        });
        return false;
    });
	
	$(window).scroll(function(){
		var window_height = $(window).height();
    	var scroll_top = $(window).scrollTop();
		if ( scroll_top > window_height ) {
			$(".header_fixed").addClass("is-active");
		} else {
			$(".header_fixed").removeClass("is-active");
		}
	});
	
})