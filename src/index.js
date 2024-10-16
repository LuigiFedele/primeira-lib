const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro , texto) => {
  quebraEmParagrafos(texto)
})

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos.map((paragrafos) => {
    return verificarPalavrasDuplicadas(paragrafos);
  })
  console.log(contagem);
}


function verificarPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};

  listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1
  });

  return resultado;
}


