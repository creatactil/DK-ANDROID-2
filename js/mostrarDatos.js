function mostrarDatos(){
	
	
	var vnombre = localStorage.nombre_familiar;
	var vtelefono = localStorage.telefono;
	var vdni = localStorage.dni;
	var vcorreo = localStorage.correo;
	var vparentesco =localStorage.parentesco;
	
	$("#nombre_familiar").val(vnombre);
	$("#telefono").val(vtelefono);
	//$("#dni").val(vdni);
	$("#correo").val(vcorreo);
	$("#parentesco").val(vparentesco);
	
	
	
	}

