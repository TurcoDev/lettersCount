const misLetras = ['a', 'b', 'a', 'c', 'd', 'b', 's', 'd', 'd', 'a'];
const resultLetras = []; // [[a, 3], [b, 2], [c, 1], [d, 3]...] 


function contarLetras(letras) {
    const result = [];
    //Itera sobre cada letra del arreglo de entrada.
    for (let i = 0; i < letras.length; i++) {
        const letra = letras[i];
        // Para cada letra, verifica si ya la has contado antes.
        let esta = letraEsta(result, letra);
        // Si es nueva, agrégala a tu estructura de almacenamiento.
        if (!esta) {
            result.push([letra, 1])
        }
        // Si ya existe, incrementa su conteo. 
        else {
            incrementarCantidad(result, letra);
        }
    }
    return result;
}

console.log(contarLetras(misLetras));



function letraEsta(array, letra) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]; // ['a', 1]
        if (letra == element[0])
            return true;
    }
    return false;
}

// console.log(letraEsta([['a', 3], ['b', 2], ['c', 1], ['d', 3]], 'c'));

function incrementarCantidad(array, letra) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i]; // ['a', 1]
        if (letra == element[0])
            element[1]++;
    }
    return array;
}

// console.log(incrementarCantidad([['a', 3], ['b', 2], ['c', 1], ['d', 3]], 'c'));