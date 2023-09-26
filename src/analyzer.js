const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numPalabras = text.match(/[^\s]+/g)
    if(numPalabras === null) {
      return 0
    } else { 
      return numPalabras.length
    }
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const longitudCaracterSinEspacios = text.replace(/[^\w\s]| /g, '') 
    return longitudCaracterSinEspacios.length
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // const palabras = text.match(/\w+/g)
    const palabras = text.match(/[^\s]+/g)
    if(palabras === null) {
      return 0
    } else {
      const joinPalabras = palabras.join("")
      const longitudMediaPalabras = joinPalabras.length/palabras.length
      return parseFloat(longitudMediaPalabras.toFixed(2))
    } 
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const soloNumRegex = /\b((\d+[.,]\d+)|\d+)\b/g
    const conteoNum = text.match(soloNumRegex)
    if(conteoNum === null) {
      return 0
    } return conteoNum.length
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const soloNumRegex = /\b((\d+[.,]\d+)|\d+)\b/g
    const conteoNum = text.match(soloNumRegex)
    if(conteoNum === null) {
      return 0
    } else {
      let suma = 0
      for(let i = 0; i < conteoNum.length; i++) {
        const uniformarNum = parseFloat(conteoNum[i].replace(",","."))
        if (!isNaN(uniformarNum)) {
          suma += uniformarNum
        }
      } return suma
    } 
  },
};

export default analyzer;
