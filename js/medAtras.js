function medAtras(Ndia){

	
	$("#mecarro1").attr("src", "imagenes/blanco.png");
	$("#mebiberon1").attr("src", "imagenes/blanco.png");
	$("#mepelota1").attr("src", "imagenes/blanco.png");
	$("#mepanal1").attr("src", "imagenes/blanco.png");
	$("#mecorazon1").attr("src", "imagenes/blanco.png");	
	$("#mecarro2").attr("src", "imagenes/blanco.png");
	$("#mebiberon2").attr("src", "imagenes/blanco.png");
	$("#mepelota2").attr("src", "imagenes/blanco.png");
	$("#mepanal2").attr("src", "imagenes/blanco.png");
	$("#mecorazon2").attr("src", "imagenes/blanco.png");
	
	var xdni = localStorage.dni;
	var xnumero = localStorage.numero;
	
	
	var ndia = parseInt(xnumero) + parseInt(Ndia);
	localStorage.numero = ndia; 
	
	var n=1;				
	
	
 			$.ajax({
           	type: "GET",
           	url: "http://ci.creatactil.com/php/mediodiaback.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({dni: xdni, ndia: ndia }),
            cache: false,
            
            success:  function(data){
						  
						  
						   $.each(data, function(index, item){
							
							var carpeta = "imagenes/"
							
							var menombre = item.nombre;
							var mefecha = item.fecha;
							var mecarro = item.carro;
							var mebiberon = item.biberon;
							var mepelota = item.pelota;
							var mepanal = item.panal;
							var mecorazon = item.corazon;
							
							var elprimero1 = $("#elprimerhijo").val();
							var elsegundo1 = $("#elsegundohijo").val();
	
							if(elprimero1 == menombre){	
							$("#fecha1").text(mefecha);							
									$("#mecarro1").attr("src", carpeta.concat(mecarro));
									$("#mebiberon1").attr("src", carpeta.concat(mebiberon));
									$("#mepelota1").attr("src", carpeta.concat(mepelota));
									$("#mepanal1").attr("src", carpeta.concat(mepanal));
									$("#mecorazon1").attr("src", carpeta.concat(mecorazon));	
	
							
							}
							
							if(elsegundo1 == menombre) {	
							$("#fecha2").text(mefecha);								
									$("#mecarro2").attr("src", carpeta.concat(mecarro));
									$("#mebiberon2").attr("src", carpeta.concat(mebiberon));
									$("#mepelota2").attr("src", carpeta.concat(mepelota));
									$("#mepanal2").attr("src", carpeta.concat(mepanal));
									$("#mecorazon2").attr("src", carpeta.concat(mecorazon));	
	
							}
							n= n+1;
							
						   });//fin each
						 
						  
						 }//fin function
		}); //fin ajax
		
							
		
		
}// fin dmañana

