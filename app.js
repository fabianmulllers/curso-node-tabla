const fs = require('fs');



const base = 7;
let salida = '';

console.clear();
console.log('==========');
console.log(' tabla del ', base);
console.log('==========');

for (let index = 1; index <= 10; index++) {

    salida += ` ${ base } x ${ index} = ${ base * index}\n`;

}

console.log(salida);

// fs.writeFile(`tabla-${ base }.txt`, salida , (err) =>{

//     if (err) throw err;
//     console.log(`La tabla del ${ base }`);

// } );

fs.writeFileSync(`tabla-${ base }.txt`, salida );

console.log(`La tabla del ${ base }`);