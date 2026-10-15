function processarNumero(numero, callback) {
  callback(numero);
}

processarNumero(3, (num) => {
  console.log(`O triplo de ${num} é: ${num * 3}`);
});

processarNumero(5, (num) => {
  console.log(`O triplo de ${num} é: ${num * 3}`);
});

processarNumero(10, (num) => {
  console.log(`O triplo de ${num} é: ${num * 3}`);
});