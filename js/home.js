$(document).ready(function(){ 


  $(".background_image").fadeIn(3000);

  setTimeout(function(){
    $("#pop-up").fadeIn("fast");
    $("#pop-up").animate({
      "width": "450px",
      "height":"200px",
  },700);
  },900);


  setTimeout(function(){
   $(".intro").fadeIn("slow"); 
 },1800);
  
  setTimeout(function(){
    console.log(20);
    $(".title").fadeOut("200");
    $( ".subtitle" ).slideUp("slow");
    },3600)

  setTimeout(function(){
    $("#pop-up").animate({
        "height":"0px",
        "border-style":"none", 
        "transition":"0.5s ease"});
    $(".background_image").fadeOut(900); 
    },4200); 

  setTimeout(function(){
    $(".intro_slides, .overlay").fadeIn(1500);
  },5100);

 setTimeout(function(){
  $(".nav_city, .about_icon, .fa-facebook, .fa-envelope-o, .fa-instagram").slideDown("slow");
  $(".intro_2").fadeIn("800");
 },7100);
 
  var index=0;
  setTimeout(function mySlideshow(event){
    var i;
    var x=document.getElementsByClassName("my_slides");      
    for (i=0 ; i < x.length; i++){
      x[i].style.display="none";
    }
    index++;
      if (index > x.length) {index=1}
        x[index-1].style.display="block";
      setTimeout(mySlideshow,5000)

    },6100);

  
});

		
  




	