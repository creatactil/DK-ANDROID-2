var xusuario = "";
var xusuario2 = "";
var xpa2 = "";

function loginVal2(){
		
		var xusuario = $("#usuario").val();
		var xpa2 = $("#pa2").val().toUpperCase();				

		if (xpa2 == ""){
			alert("Introduzca la contraseña"); 
			document.form2.pa2.focus();
						
		}else
	
	$.ajax({
		url: 'http://ci.creatactil.com/php/login2.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		data: {usuario: xusuario, pa2: xpa2},
		error: function() {
       	 alert("Ha surgido un error.\nPor favor compruebe su conexión a internet o el correo y la contraseña.");
		 $.mobile.changePage("#pagina0");
		 
   		},
		success: function(data, response){

			if (response == 'success'){
    
			$.each(data, function(i,item){
		
				var xusuario2 = item.correo;
				var xnombrefam = item.nombre_familiar;
				var xmovilfam = item.movil;
				var xdnifam = item.dni;
				var xelcorreofam = item.correo;
				var xparentescofam = item.parentesco;
				
				localStorage.nombre_familiar = xnombrefam;
				localStorage.telefono = xmovilfam;
				localStorage.dni = xdnifam;
				localStorage.correo = xelcorreofam;
				localStorage.parentesco = xparentescofam;
				localStorage.pa2 = xpa2;
				
				$.mobile.changePage("#pagina1");
				globo();
				nhijos();
				nombresalu();
				dmanana();
				dmediodia();
				dtarde();

			});
			}
		},
		

});
}

function comprobarid(){
	
	var xregid = $("#regId").val();
	var xdni = localStorage.dni;
	
	
	$.ajax({
		url: 'http://ci.creatactil.com/php/comprobarid.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {regid: xregid, dni: xdni},
		
			});
	
	
	}


