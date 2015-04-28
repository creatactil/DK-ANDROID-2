function tarAvanza(Ndia){
	
	$("#tcarro1").attr("src", "imagenes/blanco.png");
	$("#tbiberon1").attr("src", "imagenes/blanco.png");
	$("#tpelota1").attr("src", "imagenes/blanco.png");
	$("#tpanal1").attr("src", "imagenes/blanco.png");
	$("#tcorazon1").attr("src", "imagenes/blanco.png");	
	$("#tcarro2").attr("src", "imagenes/blanco.png");
	$("#tbiberon2").attr("src", "imagenes/blanco.png");
	$("#tpelota2").attr("src", "imagenes/blanco.png");
	$("#tpanal2").attr("src", "imagenes/blanco.png");
	$("#tcorazon2").attr("src", "imagenes/blanco.png");
	
	var xdni = localStorage.dni;
	var xnumero = localStorage.numero;
	
	
	var ndia = parseInt(xnumero) + parseInt(Ndia);
	localStorage.numero = ndia; 

	
	var n=1;				
				
	
	
 			$.ajax({
           	type: "GET",
           	url: "http://ci.creatactil.com/php/tardeback.php",
          	dataType: 'jsonp',
			jsonp: 'jsoncallback',
			timeout: 5000,
		  	data: ({dni: xdni, ndia: ndia }),
            cache: false,
            
            success:  function(data){
						  
						  
						   $.each(data, function(index, item){
							
							var carpeta = "imagenes/"
							
							var tnombre = item.nombre;
							var tfecha = item.fecha;
							var tcarro = item.carro;
							var tbiberon = item.biberon;
							var tpelota = item.pelota;
							var tpanal = item.panal;
							var tcorazon = item.corazon;
							
							var elprimero1 = $("#elprimerhijo").val();
							var elsegundo1 = $("#elsegundohijo").val();
							
							if(elprimero1 == tnombre){	
							$("#fecha1").text(tfecha);								
									$("#tcarro1").attr("src", carpeta.concat(tcarro));
									$("#tbiberon1").attr("src", carpeta.concat(tbiberon));
									$("#tpelota1").attr("src", carpeta.concat(tpelota));
									$("#tpanal1").attr("src", carpeta.concat(tpanal));
									$("#tcorazon1").attr("src", carpeta.concat(tcorazon));	
	
							
							}
							
							if(elsegundo1 == tnombre) {	
							$("#fecha2").text(tfecha);							
									$("#tcarro2").attr("src", carpeta.concat(tcarro));
									$("#tbiberon2").attr("src", carpeta.concat(tbiberon));
									$("#tpelota2").attr("src", carpeta.concat(tpelota));
									$("#tpanal2").attr("src", carpeta.concat(tpanal));
									$("#tcorazon2").attr("src", carpeta.concat(tcorazon));	
	
							}
							n= n+1;
							
						   });//fin each
						 
						  
						 }//fin function
		}); //fin ajax
		
							
		
		
}// fin tarde