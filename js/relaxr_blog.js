
$('#signup a').on('click',function(){
	event.preventDefault();
	alert('We are not currently taking sign ups');
	$('#signup a').html('No Sign Ups!')
});

$(document).ready(function(){
	$('#blogpost_more1').hide();
	$('#blogpost_more2').hide();
	$('#blogpost_readless1').hide();
	$('#blogpost_readless2').hide();
	$('#sidebar_hidden').hide();

});

$('#blogpost_readmore1').on('click',function(){
	event.preventDefault();
	$('#blogpost_more1').slideDown();
	$('#blogpost_readless1').show();
	$('#blogpost_readmore1').hide();
});

$('#blogpost_readmore2').on('click',function(){
	event.preventDefault();
	$('#blogpost_more2').slideDown();
	$('#blogpost_readless2').show();
	$('#blogpost_readmore2').hide();
});

$('#blogpost_readless1').on('click',function(){
	event.preventDefault();
	$('#blogpost_more1').slideUp();
	$('#blogpost_readless1').hide();
	$('#blogpost_readmore1').show();
});

$('#blogpost_readless2').on('click',function(){
	event.preventDefault();
	$('#blogpost_more2').slideUp();
	$('#blogpost_readless2').hide();
	$('#blogpost_readmore2').show();
});

$('#learnmorebutton').on('click',function(){
	event.preventDefault();
	$('#sidebar_hidden').slideDown();
	$('#learnmorebutton').hide();
});


