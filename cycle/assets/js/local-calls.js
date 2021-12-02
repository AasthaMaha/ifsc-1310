$(document).ready(function() {

// Your code goes here...

$('.gallery').cycle({
	fx: 'shuffle',
	sync:0,
    delay: -4000  // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});

});