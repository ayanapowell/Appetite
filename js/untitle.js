$(document).ready(function(){

var win = $(window),
	post = $(".post"),
	button= $(".scrollTop"),
	caption = $(".post__caption"),
	fade = $('.fade'),
	el,
	scroll;

	
	post.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
      	el.addClass("show");
      } 
	});

	function fadeHeader() {
		scroll= win.scrollTop();
		if (scroll > 52) {
			$('.top_bar__subtitle, .title, #subtitle_2').addClass("hide");
		} else {
			$('.top_bar__subtitle, .title, #subtitle_2').removeClass("hide");
		};
	};

	function fadePost() {
		post.each(function(i,el) {
			el = $(el);
			if (el.visible(true)) {
            	el.addClass("show"); 
      		} else if (el.visible(false)){
      			el.removeClass("show");
    		}
		});
	}

	function fadeCaption() {
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
		};
		});    
	}

	function fadeTitle() {
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
	}

	win.on('scroll', function(){
		fadeHeader();
		fadePost();
		fadeCaption();
		fadeTitle();
	})


});


