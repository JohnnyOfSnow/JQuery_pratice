$('document').ready(function(){
	var repdata = {};
	$('#submit_button').click(function(){
		var getId = $('#loginForm').find ($('#userId')).val ();
		var getMsg = $('#loginForm').find ($('#userMessage')).val ();
		console.log ('Id is: ' + getId);
		console.log ('userMessage is: ' + getMsg);
		
		reqdata = {'id': getId, 'message': getMsg}// Boxed the data that be converted.
		
		//Give data to the backend.
		$.ajax({
			url: '/restful/todo',
			type: 'post',
			data: reqdata
		}).done (function (result){
			alert('ok!');
			//$('#itemset').html (result);
		});
	})
})

