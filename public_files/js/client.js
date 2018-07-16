$(document).ready(function(){
	const socket = io('http://localhost:8081');

	socket.on('connect', function (socket) {
	    console.log('Connected!');
	});
	socket.on('event', (event) => {
	    if ( event.action == true){
	    	$('.hdimg').show();
	    }
	    else {
	    	$('.hdimg').hide();
	    }
	});

})