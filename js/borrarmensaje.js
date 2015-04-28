function borrarMensaje(){
	
		var zid_aux = $('#id_aux3').text();       
        
		
	$.ajax({
		type: "GET",
        url: "http://ci.creatactil.com/php/borrarmensaje.php",
		data: ({id_aux: zid_aux }),
		cache: false,
        dataType: "text",
        success: onSuccess
                     
		});
	
	function onSuccess(data)
            {
              		
			//alert(data);
			if (data == "Mensaje Borrado"){
				$('#pagina3 ul').empty();
				$('#lista2').listview('refresh', true);
				$('#lista3').listview('refresh', true);
				crearLista();
				
			}
		
	}
}