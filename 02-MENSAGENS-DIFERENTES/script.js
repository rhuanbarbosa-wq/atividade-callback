function mostrarBoasvindas() {
    console.log('seja bem vindo!!!');
}


function mostrarDespedida() {
    console.log('até logo!!');
}


function executarMensagem(callback) {
    callback();
}


executarMensagem(mostrarBoasvindas);
executarMensagem(mostrarDespedida);