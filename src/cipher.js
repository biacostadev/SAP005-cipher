const cipher = {
  encode(offset, mensagem) {
    let palavraCifrada = "";
    if (offset == null || !mensagem){
      throw new TypeError("Erro!");
      }else{
        for (let i = 0; i < mensagem.length; i++) {
          const cifrar = mensagem.charCodeAt(i);
          let codificado = ((cifrar - 65 + offset) % 26) + 65;
          if (cifrar <= 64 || cifrar >= 91) {
            codificado = cifrar;
          } palavraCifrada += String.fromCharCode(codificado);
        }
      return palavraCifrada;
    }
  },

  decode(offsetDec, mensagemDec) {
    let palavraDecifrada = "";
    if (offsetDec == null || !mensagemDec) {
      throw new TypeError("Erro!");
      } else {
        for (let i = 0; i < mensagemDec.length; i++) {
          const decifrar = mensagemDec.charCodeAt(i);
          let decodificado = ((decifrar - 65 -(offsetDec % 26) + 26) % 26) + 65;
          if (decifrar <= 64 || decifrar >= 91) {
            decodificado = decifrar;
          } palavraDecifrada += String.fromCharCode(decodificado);
        }
        return palavraDecifrada;
    }
  }
};

export default cipher;
