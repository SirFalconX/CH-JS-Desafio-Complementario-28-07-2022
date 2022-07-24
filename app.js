
let maxN = 3
let palabra
let suma = 0

for (let i = 1 ; i <= maxN ; i++) {

    switch ( i ) {  
        case 1:
            palabra = "primera";
            break;
            
        case 2:
            palabra = "segunda";
            break;

        case 3:
            palabra = "tercera";
            break;
            
        default:
            break;
    }
    let edad = prompt ("Ingrese la " + palabra + " edad")
    suma += parseInt(edad)

}

alert ("La suma de sus edades es igual a " + suma)