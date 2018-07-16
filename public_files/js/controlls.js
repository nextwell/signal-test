$(document).ready(function(){
	$('button').click(function(){
		var value = $(this).html();
		fetch('/api/post/' + value);
	})
})