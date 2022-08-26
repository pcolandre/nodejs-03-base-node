const fs = require('fs');


const multiplicar = async (base,listar = false, hasta = 10) => 
{
    let salida = "";

    for (let i = 0; i <= hasta; i++) {
        salida += (`${base} X ${i} = ${base*i} \n`);
    }

    if(listar)
    {
        console.log('======================')
        console.log('Tabla del: ',base)
        console.log('======================')
        console.log(salida);
    }    
    
    try 
    {
        fs.writeFileSync(`tabla-${base}.txt`,salida);
    } 
    catch (error) 
    {
        throw error;
    }
    return (`tabla-${base}.txt`);
}

const multiplicarpromesa =  (base) => 
{

    return  promesa = new Promise ((resolve,rejects) =>{
        
        console.log('======================')
        console.log('Tabla del: ',base)
        console.log('======================')
    
        let salida = "";
    
        for (let i = 0; i <= 10; i++) 
        {
            salida += (`${base} X ${i} = ${base*i} \n`);
        }
                
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        resolve(`tabla-${base}.txt`);
        
    })    
}

module.exports = 
{
    multiplicar,
    multiplicarpromesa
}