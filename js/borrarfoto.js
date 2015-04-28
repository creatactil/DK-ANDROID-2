function borrarFoto(){
	
		var zid_aux = $('#id_aux4').text();       
        
		
	$.ajax({
		type: "GET",
        url: "http://ci.creatactil.com/php/borrarmensaje.php",
		data: ({id_aux: zid_aux }),
		cache: false,
        dataType: "text"
        
                     
		});
	
		
		
		$('#pagina4 ul').empty();
		$('#lista').listview('refresh', true);
		$('#lista1').listview('refresh', true);
		listaFotos();
		
	}