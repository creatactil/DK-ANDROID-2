function portada(){
	
		var vdni = localStorage.dni;
		
	
		$.ajax({
           type: "GET",
           url: "http://ci.creatactil.com/php/portada.php",
		  	dataType: "jsonp",
    	   crossDomain:true,
		   jsonp: 'jsoncallback',
           data: ({dni: vdni}),
           cache: false,
                      //dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
            
    		var vcodigo = data;
			$("#portada").attr("src", "http://ci.creatactil.com/imagenes/" + vcodigo + ".jpg");
			
            }
	
	
	
	
			
	}
	