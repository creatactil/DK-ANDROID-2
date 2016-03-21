function crearLista(data) {
		
		
		//var xdni = $("#dni").val().toUpperCase();		
    	var xdni = localStorage.dni;
		$.mobile.changePage("#pagina3", {transition: "slide"},
            true,
            true);
			
			$('#pagina3 ul').empty();
			
			fichero = $('<center><img src="imagenes/31.gif" id="gif" style="margin-top:20%;"/></center>');
            ficherosel(fichero);           
								
		$.ajax({
		url: 'http://ci.creatactil.com/php/listamensajes.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,		
		data: {dni: xdni},
		success: function(data){			

	    $.each(data, function(index, item) {
			
			 $(".elgif").hide();
			
			var registro = item.registro;
            var codigo = item.codigo;
			var estado = item.estado;
			var id_aux = item.id_aux;
			var cial = item.cial;
			var idbueno = item.id;
			
			
			if(estado==0){
				var tema = "a";
				var listo = "#lista2";
				
				}else{	
				var tema = "b";
				var listo = "#lista3";
				}
									
			$(listo).append(			
			
			
    	'<li class="ui-li-has-alt ui-first-child ui-last-child""><a href="#" class="ui-btn" onclick="changePage(id_' + index + '), contador(\''+registro+'\');" style="height: 60px; padding:0; background-color:#FFF; " >'+
       	'<h2 style="margin-left:9px; margin-top:2px; margin-bottom: 0px; font-size:12px;">'+item.titulo+'</h2>'+
		'<p style="margin-left:9px; padding:0;margin-top: 0px;margin-bottom: 0px; font-size:10px;">'+'Alumno:  '+item.nombre_alumno+'</p>'+
    	'<p style="margin-left:9px; padding:0;margin-top: 0px;margin-bottom: 0px; font-size:10px;">'+'Nº Registro:  '+item.registro+'</p>'+
    	'<p style="margin-left:9px; padding:0;margin-top: 0px;margin-bottom: 0px; font-size:10px;">'+'Fecha: '+''+item.fecha+'</p>'+
		
        '<a href="#purchase3" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-a" title="" onClick="borrar(\''+item.id_aux+'\' );" style="height: 62px; background-color:#FFF;">'+
		'</a>'+
    	'</li>'

			
		);
									
		 /*Pagina dinamica*/
		    content = '<div data-role="page"  style="background:#FFFFFF;" id="id_' + index + '" data-url="id_' + index + '" data-theme="a" >' +
					'<div data-role="header">' + 
					'<a href="#pagina3" data-role="button" data-icon="back" onclick="crearLista()" class="ui-link ui-btn-left ui-btn ui-icon-back ui-btn-icon-left ui-shadow ui-corner-all" role="button">Atrás</a>'+
					
					'<h1>' + item.titulo + '</h1>' +
					'</div>' +
								
					
					'<div data-role="content" id="contenido" >' +
					'<p>' +
                    '<div data-role="fieldcontain" class="result">' +
                                  '<p align="left">Nº de Registro: '+item.registro+'</p>'+
                                  '<p align="left">Fecha: '+item.fecha+'</p>'+
                                  '<p>CIRCULAR: ' + item.texto + '</p>' +
								  '<p><strong>'+item.nombre+'</strong></p>'+
								  '<a href="" onclick="descargarArchivo(\''+item.enlace+'\')" >'+item.enlace+'</a>'+
								  '<br>'+
								  '<br>'+
								  '<br>'+
								  '<a href="#page11" style="color:#900"  data-rel="dialog" onClick="globo(), textofirma(\''+item.registro+'\' ), textofirma2(\''+item.nombre_alumno+'\' ), textofirma3(\''+item.cial+'\' ), textofirma4(\''+item.codigo+'\' ) ">'+item.firma+'</a>'+
								   
                                  '</div>' +
                                '</p>' +
								'</div>';
	   
			
			 $('body').append(content).trigger('refresh');
			
			$(index).page();
			
			
		}); 
		}
		
		});
		
		$("#piedepagina").append(
		
		 '<div data-role="navbar" class="ui-navbar" role="navigation">'+
         '<ul class="ui-grid-c">'+
         '<li class="ui-block-a"><a  data-role="button" data-icon="home" onclick="init()" class="ui-link ui-btn ui-icon-home ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#fa8ea5">Inicio</a></li>'+
         '<li class="ui-block-b"><a id="menu"  data-role="button" data-icon="mail" onclick="crearLista()" class="ui-link ui-btn ui-icon-mail ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#8cc63e"><img  class="globo" style="float:left">  Mensajes</a></li>'+
         '<li class="ui-block-c"><a   data-role="button" data-icon="camera" onclick="listaFotos()" class="ui-link ui-btn ui-icon-camera ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#9dcde3"><img  class="globofoto" style="float:left"> Fotos</a></li>'+
         '<li class="ui-block-d"><a id="menu" href="#pagina6" data-role="button" data-icon="plus" class="ui-link ui-btn ui-icon-plus ui-btn-icon-top ui-shadow ui-corner-all" role="button" style="background-color:#e8df58" >Más...</a></li>'+
		 '</ul></div>'
		
		
		
		
		);
		
	
			
		  	$('#lista2').listview('refresh', true);
			$('#lista3').listview('refresh', true);
			
			$('#menu').navbar();
			globo();
			
			
			
    }  


function ficherosel(fichero){
   $(".elgif").html("").show();
   $(".elgif").html(fichero);
}
 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
//Camabia el estado del mensaje de no leido a leido
function modificaEstado(registro){
	
	var registro2 = registro;
	var xdni2 = localStorage.dni;
	var xparentesco = localStorage.parentesco;
	
	$.ajax({
		url: 'http://ci.creatactil.com/php/modificaestado.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni2, registro: registro2, parentesco: xparentesco},
		success: function(data){}
		
		});
		
		globo();
	}
	
//Añade al contador de mensaje
function contador(registro){
	
	var registro3 = registro;
	var xdni3 = localStorage.dni;
	
	
	$.ajax({
		url: 'http://ci.creatactil.com/php/contador.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni3, registro: registro3},
		success: function(data){}
		
		});
	modificaEstado(registro3);
	}
	

function textofirma(registro){
	
	$("#registrofirma").text(registro);

	}
	
function textofirma2(nombre){
	
	$("#nombrefirma").text(nombre);
	
	}
	
function textofirma3(cial){
	$("#cialfirma").text(cial);

	}
	
function textofirma4(codigo){
	$("#codigofirma").text(codigo);

	}
	
function borrar(id_aux){
	
	$("#id_aux3").text(id_aux);

	}
	
	
//DESCARGA DE ARCHIVO AL MOVIL FILE TRANSFER
function descargarArchivo(nombre){
				
	            
                var server = "http://creatactil.com/centrosinfantiles/web/files/"
                var filename = nombre;
                var uri = encodeURI(server + filename);
                abrirfichero(uri); 
				
				
				window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onErrorCallback);

                function onFileSystemSuccess(fileSystem) {
                    
                    // alert("got filesystem");

                    fileSystem.root.getDirectory('DiarioKid',
                        { create:true },
                        transferFile,
                        onErrorCallback
                    );

                }                

                // console.log(uri);
                //alert("here");

                function transferFile(dir){
                    
                    // alert("got dir");
                    console.log(dir.toURL());
                    console.log(uri);
					
					  //modificacion por path  
					
                    path = dir.toURL() + '/' + filename;//AQUI ES EL CAMBIO de fullpath por toURL()
					
                    var fileTransfer = new FileTransfer();

                    fileTransfer.download(
                        uri,
                        path,
                        function(entry) {
                            console.log("download complete: " + entry.toURL());
                                                
                        },
                        function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code " + error.code);
                        }
                    );
               
	

            }

            // a generic error callback function
            function onErrorCallback(error) {
                alert("Error!" + error.code);
                console.log(error);
            }
 

}

function abrirfichero(ruta3){
	
	console.log(ruta3);
	window.open (ruta3, '_system', 'location = yes, closebuttoncaption = done, enableViewportScale = yes');
	
	
	}