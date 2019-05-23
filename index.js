const {argv} = require('./inscribir.js');
const cursos = require('./data');


if(argv._[0]=='inscribir'){

}
else{
    cursos.listar();
}