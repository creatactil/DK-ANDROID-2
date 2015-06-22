function listacorreo() {
			
			
		var xdni = localStorage.dni;
			
			$.ajax({
		url: 'http://ci.creatactil.com/php//listacorreo.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		data: ({dni: xdni}),
        timeout: 5000,
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
		var correo = 'mailto:'+item.email;
		
		window.location.href = correo;
		
		
		});
		
		}
		
		});
		
} 