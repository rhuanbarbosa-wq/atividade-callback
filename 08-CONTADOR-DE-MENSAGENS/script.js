function repetirAcao(vezes, callback) {
  for (let i = 1; i <= vezes; i++) {
    callback(i);
  }
}

function mostrarExecucao(numero) {
  console.log(`Execução número ${numero}`);
}

repetirAcao(4, mostrarExecucao);