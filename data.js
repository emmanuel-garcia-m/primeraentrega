let cursos = [
      {
        id: 01, 
        nombre: 'Calculo I',
        duracion: '30 Horas',
        valor: 400000
     },
     {
        id: 02, 
        nombre: 'Calculo II',
        duracion: '35 Horas',
        valor: 30000
     },
     {
      id: 03, 
      nombre: 'Física II',
      duracion: '40 Horas',
      valor: 35000
      }
   ];


     
let listar = () => {      
   console.log('\n LISTA DE CURSOS: \n')
   var offset = 0;
    cursos.forEach(function(curso){    
      setTimeout(function(){
        console.log('Id: '+ curso.id +' Nombre: ' + curso.nombre +' Duracion: ' + curso.duracion + ' Valor:' + curso.valor);
      }, offset);    
     offset += 2000;
    });
};

let findOne = (id) => cursos.find( curso => curso.id == id);

module.exports = {
   listar,
   findOne
};
