$(document).ready(function(){

var win = $(window),
	post = $(".post"),
	button= $(".scrollTop"),
	caption = $(".post__caption"),
	fade = $('.fade'),
	scroll;

button.click(function(){ 
	$("html,body").animate({scrollTop:0},"slow");
	return false;
})

/* ------------ Top bar title and subtitle fadeIn/fadeOut ----------- */
// win.on('scroll', function() {

// 	hideHeader();
// 	if (whatever === whatever) {
// 		scrollFade();
// 	}
// 	function3();	
// 	function4();

// });




	win.scroll(function(){




		scroll = $(this).scrollTop();  // 1st header fade in/out 
	    if (scroll > 52)  {
	        $('.top_bar__subtitle, .title, #subtitle_2').addClass("hide");
	    } else {
	        $('.top_bar__subtitle, .title, #subtitle_2').removeClass("hide");
	    };
	    if (scroll > 5000){
	    	button.css({
	    		"opacity":"1"
	    	});
	    } else {
	    	button.css({
	    		"opacity":"0"
	    	});
	    };
	    post.each(function(i, el) { // Each picture fades in on scroll
        	var el = $(el);
            if (el.visible(true)) {
            	el.addClass("show"); 
      		} else if (el.visible(false)){
      			el.removeClass("show");
    		} 
        });
	    caption.each(function(i,el){ // caption fade in/out on scroll
		var el = $(el);
		if (win.scrollTop() > el.position().top - 100) {
			el.css ({
				"opacity" : "0",
				"transition" : "0.5s"
			});
		} else {
			el.css ({
				"opacity" : "1",
				"transition" : "0.5s ease"
			});
		}
	}) 
	    fade.each(function(i,el){ // header of new section fade in/out 
		var el = $(el);
		if (win.scrollTop() > el.position().top - 100) {
			el.css({
				"opacity": "0",
				"transition" : "0.5s ease"
			});
		} else {
			el.css({
				"opacity":"1",
				"transition" : "0.5s ease"
			});
		}

	})
	  });

console.log(post);  // shows first picture 
post.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("show");
  } 
});


	


});


