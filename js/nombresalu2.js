function nombresalu2(){
	
	var xdni = localStorage.dni;
	var n=1;				
	
 			$.ajax({
           	type: "GET",
           	url: "http://gusyluz.creatactil.com/dmediodia2.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({dni: xdni }),
            cache: false,
            
            success:  function(data){
						  
						  
						   $.each(data, function(index, item){
														
							var todonombre = item.nombre;								
							$("#nombrealumno1").val(todonombre);
							$("#nombre1").text(todonombre);	
							
							$("#nombrealumno2").val(todonombre);
							$("#nombre2").text(todonombre);	


							n= n+1;

							
						   });//fin each
					
						 	var elnombre1 = $("#nombrealumno1").val();
							var elnombre2 = $("#nombrealumno2").val();
							$("#elprimerhijo").val(elnombre1);	
							$("#elsegundohijo").val(elnombre2);	
							var elprimero = $("#elprimerhijo").val();
							var elsegundo = $("#elsegundohijo").val();


						 }//fin function
		}); //fin ajax
		
							
		//$("div.hijos1").attr('id') + elnombre1;
		
}// fin dmañana
