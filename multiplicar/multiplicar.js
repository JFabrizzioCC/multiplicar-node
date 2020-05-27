const fs =  require('fs'); 
const colors = require('colors'); 

let listarTabla = (base, limite=10)  =>{

    console.log('=======================================');
    console.log(`Tabla de multiplicar de ${base}`.green); 
    console.log('======================================='); 
    for (let i=1; i<=limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`); 
    }
    
}

let crearArchivo=(base, limite = 10)=>{
   return new Promise((resolve,reject) =>{
       if(!Number(base)){
           reject(`el valor introducido ${base}, no es un numero`);
           return;
       }
    let contenido = ''; 

    for (let i=1; i<=limite; i++) {
        contenido += `${base} * ${i} = ${base * i}\n`; 
    }
    
    
    fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, contenido, (err) => {
        if (err) reject(err);
        else{
            resolve(`tabla-${base} al ${limite}.txt`.green);
        }
        
      });
    
   });

}

module.exports={
    crearArchivo: crearArchivo, 
    listarTabla: listarTabla
}


