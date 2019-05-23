const cursos = require('./data');
let fs = require('fs');


const opciones = {
    id_curso :{
        demand: true,
        alias: 'id'
    },
    nombre_interesado :{
        demand: true,
        alias: 'nombre'
    },
    cedula: {
        demand :true,
        alias: 'cc'
    }
};

let crearArchivo = (curso, cc, nombre) => {    
    let texto = 'el estudiante ' + nombre + ' identificado con cc ' + cc + '\n' +
    ' Se incribió en el curso de Id: '+ curso.id +' Nombre: ' + curso.nombre +' Duracion: ' + curso.duracion + ' Valor:' + curso.valor;
   
    fs.writeFile('incripcion.txt',texto, (err)=>{
        if(err) throw err;
        console.log('EL usuario se Incribió en el curso correctamente');
    });
}

const argv = require('yargs')
                    .command('inscribir', 'realizar inscripcion', opciones,  function (argv) {                                            
                        if(cursos.findOne(argv.id_curso) != undefined){
                            crearArchivo(cursos.findOne(argv.id_curso), argv.cedula, argv.nombre_interesado);                           
                        }
                        else{
                            console.log('No se encontro curso asociado al ID');
                        }
    
                    }).argv;

module.exports = {
    argv
};
                    

                    

