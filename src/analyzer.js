const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numPalabras = text.trim().split(' ').filter(word => word !== '')
    return numPalabras.length
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const longitudCaracterSinEspacios = text.replace(/[^\w\s]/g, '') 
    return longitudCaracterSinEspacios.length
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let conteoNum = 0

    for(let i = 0; i < text.length; i++) {
      const caracter = text[i]
      const parseNum = parseInt(caracter)

      if(!isNaN(parseNum)) {
        conteoNum++
      }
    } return conteoNum
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  },
};

export default analyzer;
