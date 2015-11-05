'use strict';
var ultimoURL='http://127.0.0.1/datos2.php';
var app = {
	init: function() {
		// DATOS INICIALES
		$('#btnReconectar').click(function(e){
			e.preventDefault();
			app.prueba();
		});
		app.prueba();
	},
	efecto: function(obj) {
		$(obj).fadeOut();
	},
	prueba: function(){
		ultimoURL=prompt('URL',ultimoURL)
		$.ajax({
			url: ultimoURL,
			data: {},
			dataType: 'json'
		}).done(function(datos){
			console.log(datos);
			var salida = '';
			for(var i = 0;i<datos.registros.length;i++){
				salida += datos.registros[i].nombre + ' <img onclick="app.efecto(this)" width="32px" height="32px" src="' +datos.registros[i].img+'"><br>';
			}
			$('#divOutput').html(salida);
		}).fail(function(){
			$('#divOutput').html('Error al conectar');
		});
		//divOutput
	}
	
}


window.onload=function(){
	app.init();
};
