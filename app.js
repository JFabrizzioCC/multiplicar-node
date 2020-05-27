const argv = require('./confi/yargs.js').argv; 
const colors = require('colors'); 



const {crearArchivo, listarTabla}= multiplicar = require('./multiplicar/multiplicar.js');

let comando = argv._[0]; //

switch(comando){

   case  'listar':
             //console.log('Listar');
             listarTabla(argv.base, argv.limite); 
             break;
   case   'crear': 
             //console.log('Crear');
             crearArchivo(argv.base, argv.limite)
.then(archivo => console.log(`archivo creado : ${archivo}`))
.catch(e => console.log(e));
             break;
    default : console.log('comando no reconocido'); 
}


//let argv2 = process.argv;
//console.log('limite', argv.limite); 

/*let parametro = argv[2]; 
let base = parametro.split('=')[1];
*/
//console.log(base); 

/*crearArchivo(base)
.then(archivo => console.log(`archivo creado : ${archivo}`))
.catch(e => console.log(e));

  //console.log(multiplicar); 
//console.log(process.argv); 
*/