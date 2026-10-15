
function verificarNota(nota, callback) {
  callback(nota);
}

function checarStatus(nota) {
  if (nota >= 6) {
    console.log(`Nota ${nota}: Aprovado`);
  } else {
    console.log(`Nota ${nota}: Recuperação`);
  }
}

verificarNota(7.5, checarStatus); 
verificarNota(4.0, checarStatus); 