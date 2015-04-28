localStorage.numero = 0;

function fechanext(Ndia){

	var xnumero = localStorage.numero;

	var ndia = parseInt(xnumero) + parseInt(Ndia);
	localStorage.numero = ndia; 
	
	var n=1;				
	
	
 			$.ajax({
           	type: "GET",
           	url: "http://ci.creatactil.com/php/fechaback.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({ndia: ndia}),
            cache: false, 
            success:  function(data){

								$("#fecha1").text(data);							
								$("#fecha2").text(data);							

						 
						  
						 }//fin function
		}); //fin ajax
		
							
		
		
}// fin dmañana

function buscarobserva3(Ndia2){

	var xnumero2 = localStorage.numero;
	var xdniobserva = localStorage.dni;
	var ndia2 = parseInt(xnumero2) + parseInt(Ndia2);
	localStorage.numero = ndia2; 
	
	var n=1;				
	
	
 			$.ajax({
           	type: "GET",
           	url: "http://ci.creatactil.com/php/buscaobserva2.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({dni: xdniobserva, ndia: ndia2}),
            cache: false, 
            success:  function(data, response){
  						  
						   $.each(data, function(index, item){
							
							var onombre = item.nombre;
							var observa = item.observacion;
							
							var elprimeroO = $("#elprimerhijo").val();
							var elsegundoO = $("#elsegundohijo").val();
							
							if(elprimeroO == onombre){
								$("#observaciones").text(observa);							
									
							}
							
							if(elsegundoO == onombre) {
								$("#observaciones2").text(observa);
	
							}
							n= n+1;
							
							
							
						   });//fin each
						   
					
						 }//fin function
		}); //fin ajax
		
							
		
		
}// fin dmañana