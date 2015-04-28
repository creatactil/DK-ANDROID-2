 function registrarFamiliar() {

			  
			   
				var xnombre = $("#nombre_familiar").val().toUpperCase();
    		  	var xtelefono = $("#telefono").val();
				var xdni = xtelefono+xnombre.substring(0, 1).toUpperCase();
				var xcorreo = $("#correo").val();
				var xcontrase = $("#pa1").val();
				var xparentesco = $("#parentesco").val();
				
							
				var xcial = $("#cial").val().toUpperCase();
				var xnombrealu = $("#nombre_alumno").val().toUpperCase();
    		  	var apellidos = $("#apellidos").val().toUpperCase();
				var xapellidos = $.trim( apellidos );
				
				var xregid = $("#regId").val();
				
		
		
		if(document.formulario1.nombre_familiar.value.length == ""){
		alert("Escriba su nombre y apellido");
		$.mobile.changePage("#pagina2");
		document.formulario1.nombre_familiar.focus();
		return false;
		
		}else if(document.formulario1.telefono.value.length ==  ""){
		alert("Escriba su número movil ");
		$.mobile.changePage("#pagina2");
		document.formulario1.telefono.focus();
		return false;
		
		}else if(document.formulario1.correo.value.length ==  ""){
		alert("Escriba su correo eléctronico ");
		$.mobile.changePage("#pagina2");
		document.formulario1.correo.focus();
		return false;
		
		}else if(document.formulario1.pa1.value.length == ""){
		alert("Escriba su contraseña ");
		$.mobile.changePage("#pagina2");
		document.formulario1.pa1.focus();
		return false;
		
		}else if(document.formulario1.parentesco.value.length == ""){
		alert("Elija su parentesco");
		$.mobile.changePage("#pagina2");
		document.formulario1.parentesco.focus();
		return false;
		
		}else if(document.formulario1.nombre_alumno.value.length == ""){
		alert("Escriba nombre alumno/a");
		$.mobile.changePage("#pagina2");
		document.formulario1.nombre_alumno.focus();
		return false;	
		
		}else if(document.formulario1.apellidos.value.length == ""){
		alert("Escriba apellidos del alumno/a");
		$.mobile.changePage("#pagina2");
		document.formulario1.apellidos.focus();
		return false;
		
		}else if(document.formulario1.cial.value.length == ""){
		alert("Escriba su codigo");
		$.mobile.changePage("#pagina2");
		document.formulario1.cial.focus();
		return false;	
		
		}else		
			
			
			var r=confirm("Confirmar que ha leido, dar el consentimiento y acepta Ley de Protección de Datos y condiciones de uso")
			
			if (r==true){
			
           $.ajax({
           type: "GET",
           url: "http://ci.creatactil.com/php/registrofam.php",
		  // dataType: "jsonp",
    	   crossDomain:true,
		   jsonp: 'jsoncallback',
           data: ({nombre_familiar: xnombre, telefono: xtelefono,  dni: xdni, correo: xcorreo, parentesco: xparentesco, cial: xcial, nombre_alumno: xnombrealu, apellidos: xapellidos, regid: xregid, pass1: xcontrase}),
           cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
            
    		alert(data);
			
            }
			
		localStorage.nombre_familiar = xnombre;
		localStorage.telefono = xtelefono;
		localStorage.dni = xdni;
		localStorage.correo = xcorreo;
		localStorage.parentesco = xparentesco;	
		
				
		$.mobile.changePage("#pagina12");
		
		
		}else{
		
		$.mobile.changePage("#pagina2");
		}
  }