function iniciar(){
	
	var xdni = localStorage.dni;
	
	$("#usuario").val(localStorage.correo);
	$("#pa2").val(localStorage.pass);
	
	
	
	if ((typeof xdni == 'undefined') || (xdni == "")){
		
		//$.mobile.changePage("#pagina2", {transition: "slide"},true,true);
		
		}else{
		location.href="app.html";
		}
	
	}