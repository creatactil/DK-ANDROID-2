function registrarAlumno() {
				
								                  
			    var xcial = $("#cial").val().toUpperCase();
				var xnombre = $("#nombre_alumno").val().toUpperCase();
    		  	
				var apellidos = $("#apellidos").val().toUpperCase();
				var xapellidos = $.trim( apellidos );
				
				var xcodigo = "P11111111";
    			//var xcurso = $("#curso").val();
				//var xcomedor = $("#comedor").val();
				
				
				var xdni = localStorage.dni;
				
				
				var letra = xcial.substring(0, 1);
				
				alert(xcial);
						
		if(document.formulario1.nombre_alumno.value.length == ""){
		alert("Escriba el nombre del alumno");
		document.formulario1.nombre_alumno.focus();
		return false;
		
		}else if(document.formulario1.apellidos.value.length ==  ""){
		alert("Escriba los apellidos ");
		document.formulario1.apellidos.focus();
		return false;
		
		}else if(document.formulario1.cial.value.length ==  ""){
		alert("Escriba nº de matricula ");
		document.formulario1.cial.focus();
		return false;
		
		
		/*}else if(document.formulario1.curso.value.length == ""){
		alert("Seleccione el curso ");
		document.formulario2.curso.focus();
		return false;*/
		
		}else if(letra != "G"){
		alert("ERROR nº de matricula no valido");
		document.formulario1.cial.focus();
		return false;
		
		}else		
			//localStorage.cial = document.formulario1.cial.value;	
			alert("alumnos");
           $.ajax({
           type: "GET",
           url: "http://ci.creatactil.com/registroalu.php",
		   dataType: "jsonp",
    	   crossDomain:true,
		   jsonp: 'jsoncallback',
           data: ({nombre_alumno: xnombre, apellidos: xapellidos,  cial: xcial, codigo: xcodigo, dni_familiar: xdni }),
           cache: false,
           success: onSuccess
                    });
        

           

            function onSuccess(data)
            {
             
    		alert(data);
			$("#lnkDialog").click();
			//$.mobile.changePage("#page12");
            }
		Aviso();
		
  }
  
function Aviso() {
				
    		                                  
			var xcial = $("#cial").val().toUpperCase();
			var xnombre = localStorage.nombre_familiar;
			var xdni = localStorage.dni;
			
		$.ajax({
		url: 'http://ci.creatactil.com/aviso.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {cial: xcial, nombre: xnombre, dni: xdni},
		
			});
			
	
}  