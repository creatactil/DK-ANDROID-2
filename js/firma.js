function firma(){
	
	var xdni4 = localStorage.dni;
	var xregistro4 = $("#registrofirma").text();
	var xcodigo4 = $("#codigofirma").text();
	var xcial4 = $("#cialfirma").text();
	var xnombrefirma = $("#nombrefirma").text();
	var xparentesco4 = localStorage.parentesco;
	

			
	$.ajax({
		url: 'http://ci.creatactil.com/php/firma.php',
		type: 'POST',
		timeout: 5000,
		data: {dni: xdni4, registro: xregistro4, cial: xcial4, codigo: xcodigo4, parentesco: xparentesco4 },
		cache: false,
		dataType: "text",
		success: onSuccess
		
		
		
		
		});
		
		 function onSuccess(data)
            {
           	globo();
			$.mobile.changePage("#pagina3");
		    }
				

	}
	
