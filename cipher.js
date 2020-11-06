const alfabetoMaiusculo = 65;
const alfabetoMinusculo = 97;
const tamanhoAlfabeto = 26;

const cipher = {
  encode(offset, mensagem) {
    let letrasCifradas;
    let palavraCifrada = "";

    if (offset == null || !mensagem) throw new TypeError("Por favor, verifique sua mensagem ou sua chave de criptografia!");

    for (let i = 0; i < mensagem.length; i++) {
      const cifrar = mensagem.charCodeAt(i);
      if (cifrar >= 65 && cifrar <= 90) {
        if (offset > 0) {
          letrasCifradas = ((cifrar - alfabetoMaiusculo) + offset) % tamanhoAlfabeto + alfabetoMaiusculo;
        } else {
          letrasCifradas = ((cifrar - alfabetoMaiusculo) + (tamanhoAlfabeto + offset % tamanhoAlfabeto)) % tamanhoAlfabeto + alfabetoMaiusculo;
        }
      } else if (cifrar >= 97 && cifrar <= 122) {
        if (offset > 0) {
          letrasCifradas = ((cifrar - alfabetoMinusculo) + offset) % tamanhoAlfabeto + alfabetoMinusculo;
        } else {
          letrasCifradas = ((cifrar - alfabetoMinusculo) + (tamanhoAlfabeto + offset % tamanhoAlfabeto)) % tamanhoAlfabeto + alfabetoMinusculo;
        }
      } else {
        letrasCifradas = cifrar;
      }
      palavraCifrada += String.fromCharCode(letrasCifradas);
    }
    return palavraCifrada;
  },
  decode(offsetDec, mensagemDec) {
    let letrasDecifradas;
    let palavraDecifrada = "";
    let offsetNegativo = offsetDec % tamanhoAlfabeto;

    if (offsetDec == null || !mensagemDec) throw new TypeError("Por favor, verifique sua mensagem ou sua chave de criptografia!");

    for (let i = 0; i < mensagemDec.length; i++) {
      let decifrar = mensagemDec.charCodeAt(i);
      if (decifrar >= 65 && decifrar <= 90) {
        if (offsetNegativo > 0) {
          letrasDecifradas = ((decifrar + alfabetoMaiusculo) - offsetNegativo) % tamanhoAlfabeto + alfabetoMaiusculo;
        } else {
          letrasDecifradas = ((decifrar + alfabetoMaiusculo) - (tamanhoAlfabeto + offsetNegativo % tamanhoAlfabeto)) % tamanhoAlfabeto + alfabetoMaiusculo;
        }
      } else if (decifrar >= 97 && decifrar <= 122) {
        if (offsetNegativo > 0) {
          letrasDecifradas = ((decifrar + alfabetoMinusculo) - offsetNegativo - 12) % tamanhoAlfabeto + alfabetoMinusculo;
        } else {
          letrasDecifradas = ((decifrar + alfabetoMinusculo) - (tamanhoAlfabeto + offsetNegativo % tamanhoAlfabeto) - 12) % tamanhoAlfabeto + alfabetoMinusculo;
        }
      } else {
        letrasDecifradas = decifrar;
      }
      palavraDecifrada += String.fromCharCode(letrasDecifradas)
    }
    return palavraDecifrada;
  }
};

export default cipher;
