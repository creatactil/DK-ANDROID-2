function init(){
var xdni = localStorage.dni;
if (typeof xdni == 'undefined'){
		$.mobile.changePage("#pagina0");
				
}else{
		$.mobile.changePage("#pagina1", {transition: "slide"},
            true,
            true);
		
		nhijos();
		nombresalu();
		dmanana();
		dmediodia();
		dtarde();
		buscarobserva1();
		comprobarid()
		globo();
		
}
	}