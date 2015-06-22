function listaweb() {
			
		var xdni = localStorage.dni;
			
			$.ajax({
		url: 'http://ci.creatactil.com/php//listaweb.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		data: ({dni: xdni}),
        timeout: 5000,
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
		var web = item.web;
			
		window.open(web,'_system','location=no','closebuttoncaption=Return');	
				 
		});
		
		}
		
		});
		
} 