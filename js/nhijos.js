function nhijos(){
	
	var xdni = localStorage.dni;
					
	
 			$.ajax({
           	type: "GET",
           	url: "http://ci.creatactil.com/php/nhijos.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({dni: xdni }),
            cache: false,
            
            success:  function(data){
						  
						  
						   $.each(data, function(index, item){
							
										
							var nhijos = item.n_hijos;
							
							if (nhijos=="2"){											
							$("#hijo2").attr("style", "");	
							}
							
							
						   });//fin each
						 
						  
						 }//fin function
		}); //fin ajax
		
							
		
		
}// fin dmañana

