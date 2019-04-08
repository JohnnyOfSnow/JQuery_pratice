$('document').ready(function(){
	$('#submit_button').click(function(){
		
		//var userId = $("#userId").val();
		//var userMessage = $("#userMessage").val();
		var reqdata = $('#loginForm').find ($('#userMessage')).val ();
		//alert("Name: " + userName + " ,Password: " + userPassword);
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

