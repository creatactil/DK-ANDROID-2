//localStorage.numero = 0;

function pagAtras(Ndia){
	
	
	
	$("#mcarro1").attr("src", "imagenes/blanco.png");
	$("#mbiberon1").attr("src", "imagenes/blanco.png");
	$("#mpelota1").attr("src", "imagenes/blanco.png");
	$("#mpanal1").attr("src", "imagenes/blanco.png");
	$("#mcorazon1").attr("src", "imagenes/blanco.png");	
	$("#mcarro2").attr("src", "imagenes/blanco.png");
	$("#mbiberon2").attr("src", "imagenes/blanco.png");
	$("#mpelota2").attr("src", "imagenes/blanco.png");
	$("#mpanal2").attr("src", "imagenes/blanco.png");
	$("#mcorazon2").attr("src", "imagenes/blanco.png");
	
	var xdni = localStorage.dni;
	var xnumero = localStorage.numero;
	
	
	var ndia = parseInt(xnumero) + parseInt(Ndia);
	localStorage.numero = ndia; 
	
	var n=1;				
	
	
 			$.ajax({
           	type: "GET",
           	url: "http://ci.creatactil.com/php/dmananaback.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({dni: xdni, ndia: ndia }),
            cache: false,
            
            success:  function(data){
						  
						  
						   $.each(data, function(index, item){
							
							var carpeta = "imagenes/"
							
							var mnombre = item.nombre;
							var mfecha = item.fecha;
							var mcarro = item.carro;
							var mbiberon = item.biberon;
							var mpelota = item.pelota;
							var mpanal = item.panal;
							var mcorazon = item.corazon;
							
							var elprimero1 = $("#elprimerhijo").val();
							var elsegundo1 = $("#elsegundohijo").val();
							
							if(elprimero1 == mnombre){
								$("#fecha1").text(mfecha);							
									$("#mcarro1").attr("src", carpeta.concat(mcarro));
									$("#mbiberon1").attr("src", carpeta.concat(mbiberon));
									$("#mpelota1").attr("src", carpeta.concat(mpelota));
									$("#mpanal1").attr("src", carpeta.concat(mpanal));
									$("#mcorazon1").attr("src", carpeta.concat(mcorazon));	
	
							
							}
							
							if(elsegundo1 == mnombre) {
								$("#fecha2").text(mfecha);							
									$("#mcarro2").attr("src", carpeta.concat(mcarro));
									$("#mbiberon2").attr("src", carpeta.concat(mbiberon));
									$("#mpelota2").attr("src", carpeta.concat(mpelota));
									$("#mpanal2").attr("src", carpeta.concat(mpanal));
									$("#mcorazon2").attr("src", carpeta.concat(mcorazon));	
	
							}
							n= n+1;
							
						   });//fin each
						 
						  
						 }//fin function
		}); //fin ajax
		
							
		
		
}// fin dmañana

