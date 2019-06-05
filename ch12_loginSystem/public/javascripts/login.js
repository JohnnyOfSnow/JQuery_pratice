var repdata = {};

$('#submit_button').click(function(){
	
	var newId = $('#loginForm').find ($('#userId')).val ();
	var newMsg = $('#loginForm').find ($('#userMessage')).val ();
	
	reqdata = {'id': newId, 'message': newMsg};// Boxed the data that be converted.
	
	//Give data to the backend.
	$.ajax({
		url: '/restful/login',
		type: 'post',
		data: reqdata
	}).done (function (result){ // result => A web page.
		alert('ok!');
		//$('#ajaxData').html(reqdata.message);
		//$('#itemset').html (result);
	});
})

