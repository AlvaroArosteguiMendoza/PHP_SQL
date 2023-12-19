

function agregardatos(nombre,tipo){

	cadena="nombre=" + nombre + 
			"&tipo=" + tipo;
			

	$.ajax({
		type:"POST",
		url:"php/agregarDatos.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tabla.php');
				alertify.success("agregado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function agregaform(datos){

	d=datos.split('||');

	$('#idpersona').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#tipou').val(d[2]);
}

function actualizaDatos(){
    id = $('#idpersona').val();
    nombre = $('#nombreu').val();
    tipo = $('#tipou').val(); // Aquí se corrigió la variable tipo

    cadena = "id=" + id +
             "&nombre=" + nombre + 
             "&tipo=" + tipo;

    $.ajax({
        type: "POST",
        url: "php/actualizaDatos.php",
        data: cadena,
        success: function(r) {
            if (r == 1) {
                $('#tabla').load('componentes/tabla.php');
                alertify.success("Actualizado con exito :)");
            } else {
                alertify.error("Fallo el servidor :(");
            }
        }
    });
}


function preguntarSiNo(id){
	alertify.confirm('Eliminar Datos', '¿Esta seguro de eliminar este registro?', 
					function(){ eliminarDatos(id) }
                , function(){ alertify.error('Se cancelo')});
}

function eliminarDatos(id){

	cadena="id=" + id;

		$.ajax({
			type:"POST",
			url:"php/eliminarDatos.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tabla.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}