function globo(){
	
  var conta1 = "0";
  
  var xdni3 = localStorage.dni;
			
	$.ajax({
		type: "GET",
		url: 'http://ci.creatactil.com/php/containicio.php',
		dataType: "jsonp",
    	crossDomain:true,
		jsonp: 'jsoncallback',
		//dataType: "text",
		data: {dni: xdni3},
		
		success:  function(data){
						  
						  var carpeta = "imagenes/"
						 
							
							var conta1 = data;
							
						
							if(conta1 <= 5){	
									
							$(".globo").attr("src", carpeta.concat(conta1+".png"));
							}else{
							$(".globo").attr("src", carpeta.concat("5mas.png"));
							}
				
						  
						 }//fin function
		}); //fin ajax
		
		setTimeout("globo()", 900000);
	 	//$.mobile.changePage("#pagina1");
	 	globofoto();					
		
		
}// fin globo		
	
	

function globofoto(){
	
	var conta2 = "0";
  
  var xdni3 = localStorage.dni;
			
	$.ajax({
		type: "GET",
		url: 'http://ci.creatactil.com/php/containiciofoto.php',
		dataType: "jsonp",
        crossDomain:true,
		jsonp: 'jsoncallback',
		//dataType: "text",
		data: {dni: xdni3},
		success: function(data2){
						  
						  var carpeta = "imagenes/"
						  
						  var conta2 = data2;
							
							
							if(conta2 <= 5){	
							$(".globofoto").attr("src", carpeta.concat(conta2+".png"));
							}else{
							$(".globofoto").attr("src", carpeta.concat("5mas.png"));
							}
						 
						 }//fin function
		}); //fin ajax
			
}// fin globofoto		
	