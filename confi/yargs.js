const opciones ={
    base: {
        demand: true, 
        alias : 'b', 
    }, 
    limite: {
    alias: 'l',
    default : 10
  }
}
           //manera de optimizar todo
const argv = require('yargs')
                          .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
                          .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
                          .help()
                          .argv; 

                      
                        module.exports ={
                            argv: argv
                        }
                          /*manera muy larga
                          const argv = require('yargs')
                          .command('listar', 'imprime en consola la tabla de multiplicar', {
                              base: {
                                  demand: true, 
                                  alias : 'b', 
                              }, 
                              limite: {
                              alias: 'l',
                              default : 10
                            }
                          })
                          .command('crear', 'Genera un archivo con la tabla de multiplicar', {
                            base: {
                                demand: true, 
                                alias : 'b', 
                            }, 
                            limite: {
                            alias: 'l',
                            default : 10
                          }
                        })
                          .help()
                          .argv; 
                          */