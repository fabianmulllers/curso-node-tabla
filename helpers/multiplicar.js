
const fs = require('fs');
const colors = require('colors');

// async await
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {   

    
        let salida = '';
    
        for (let index = 1; index <= hasta; index++) {
    
            salida += ` ${ base } x ${ index} = ${ base * index}\n`;
        
        }
        
        if( listar ){ 

            console.log('==========');
            console.log(' tabla del ', base );
            console.log('==========');
            console.log(salida);

        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida, 'utf8');
    
        return (`tabla-${ base }.txt`);
        
    } catch (error) {
        throw('error',error);
    }

};


// promesa

// const crearArchivo = (base = 5) => {

//     return new Promise( ( resolve, reject ) =>  {
//         try {   

//             console.log('==========');
//             console.log(' tabla del ', base);
//             console.log('==========');
        
//             let salida = '';
        
//             for (let index = 1; index <= 10; index++) {
        
//                 salida += ` ${ base } x ${ index} = ${ base * index}\n`;
            
//             }
        
//             console.log(salida);
        
//             fs.writeFileSync(`tabla-${ base }.txt`, salida );
        
//             resolve(`tabla-${ base }.txt`);
            
//         } catch (error) {
//             reject(error);
//         }

//     });
// };

module.exports = {
    crearArchivo
};