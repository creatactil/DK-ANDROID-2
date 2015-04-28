function diario(){
	
	var xdni = localStorage.dni;


 $.ajax({
           type: "POST",
           url: "http://gusyluz.creatactil.com/diariomañana.php",
           data: ({dni: xdni }),
                      cache: false,
                      dataType: "text",
                      success:  function(data){
						  
						  
						   $.each(data, function(index, item){
							
							      					var biberon1 = item.biberon;
							var pelota1 = item.pelota;
							var pañal1 = item.pañal;
							var corazon1 = item.corazon;
						  	
							
							$("#nombre").text(item.nombre);	
							$("#fecha").text(item.fecha);
							$("#carro1").attr("src", item.carro);
							$("#biberon1").attr("src", item.biberon);
							$("#pelota1").attr("src", item.pelota);
							$("#pañal1").attr("src", item.pañal);
							$("#corazon1").attr("src", item.corazon);
										
							
						   });
						  
						 }
		}); //fin ajax
        
         /*  function onSuccess(data)
            {
             
    		
            }  */







}