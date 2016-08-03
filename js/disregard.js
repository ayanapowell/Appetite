$(document).ready(function(){

/* ------------- Scroll to top ------------- */
var win = $(window),
	post = $(".post"),
	button= $("#scroll_to"),
	caption = $(".post__caption"),
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
		scroll = $(this).scrollTop();
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
	  });

/*------- scroll fade ------ */
console.log(post);
post.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("show");
  } 
});

win.scroll(function(event) {
  post.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("show"); 
    } else if (el.visible(false)){
      el.removeClass("show");
    } 
  });
  
});

/* ------ caption fade in/out ------ */


win.scroll(function(){
	caption.each(function(i,el){
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
})


/*------ new title fade in/out -------- */


var el = $('.fade');
win.scroll(function(){
	el.each(function(i,el){
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
})
	


});


