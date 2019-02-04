$(document).ready(function (){
	var owl = $('.owl-carousel');
	owl.owlCarousel({
    items:1,
    loop:true,
    nav: true,
    navText: ['<img src="./img/arrows/chevron-left.svg"/>','<img src="img/arrows/chevron-right.svg"/>'],
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
	});
	
});

