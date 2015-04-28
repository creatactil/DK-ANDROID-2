sessionStorage.numero = 0;
function nombresalu(){
	
	var xdni = localStorage.dni;
	var n=1;				
	
 			$.ajax({
           	type: "GET",
           	url: "http://ci.creatactil.com/php/dmanana2.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({dni: xdni }),
            cache: false,
            
            success:  function(data){
						  
						  
						   $.each(data, function(index, item){
														
							var todonombre = item.nombre_alumno;								
							$("#nombrealumno"+n).val(todonombre);
							$("#nombre"+n).text(todonombre);	
							
							var dias = new Array ("01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
							var meses = new Array ("00","01","02","03","04","05","06","07","08","09","10","11");
							var f = new Date();
							
							$("#fecha1").text(dias[f.getDate() -1] + "-" +  meses[f.getMonth() +1] + "-" + f.getFullYear());
							$("#fecha2").text(dias[f.getDate() -1] + "-" +  meses[f.getMonth() +1] + "-" + f.getFullYear());
							
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

function buscarobserva1() {
			
		var xdniobserva = localStorage.dni;
	    var n=1;
				
        $.ajax({
		url: 'http://ci.creatactil.com/php/buscaobserva.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		data: {dni: xdniobserva},
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
		
		});
			
			
		

  }

