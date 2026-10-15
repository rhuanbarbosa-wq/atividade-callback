function somar (a,b) {
    return a + b;
}

function subtrair (a,b) {
    return a * b;
}
function calcular (a,b,operação) {
    return resultado(a, b);
    console.log('O resultado da operação é: ' + resultado);
    return resultado;

}

console.log("calcular soma")
calcular(15, 15, somar);

console.log("calcular mulriplicação")
calcular(5,3, multiplicar);