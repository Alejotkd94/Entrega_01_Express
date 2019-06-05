const {listarCursos,buscar,generarInscripcion,argv}= require('./datos')

console.log(argv);

//Se reciben los parametros de la consola
if(argv._[0]=='inscribir'){

	//Se manda a buscar el curso
	let result = buscar(argv.i);

	//Se verifica si existe
	if(result === undefined){
		console.log('No se encontro un curso con el id ingresado');
	}
	else
	{
		//Se manda a generar la inscripcion
		generarInscripcion(argv,result);

		//Se muestra el curso seleccionado
		console.log(result);
	}

}else
{
	listarCursos(0);
}

