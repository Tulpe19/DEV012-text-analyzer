import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const userInput = document.querySelector('textarea[name="user-input"]');
const wordCountElement = document.querySelector('li.metric:nth-child(1)');
const charCountElement = document.querySelector('li.metric:nth-child(2)');
const charCountNoSpacesElement = document.querySelector('li.metric:nth-child(3)');
const numberCountElement = document.querySelector('li.metric:nth-child(4)');
const totalNumberSumElement = document.querySelector('li.metric:nth-child(5)');
const wordLengthAverageElement = document.querySelector('li.metric:nth-child(6)');
const resetButton = document.querySelector('#reset-button');

userInput.addEventListener ('input', () => {
  const text = userInput.value

  const wordCount = analyzer.getWordCount(text)
  const charCount = analyzer.getCharacterCount(text)
  const numberCount = analyzer.getNumberCount(text)
  const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(text)
  const totalNumberSum = analyzer.getNumberCount(text)

  wordCountElement.textContent = `Recuento de palabras: ${wordCount}`
  charCountElement.textContent = `Recuento de caracteres: ${charCount}`
  numberCountElement.textContent = `Recuento de numeros: ${numberCount}`
  charCountNoSpacesElement.textContent = `Recuento caracteres sin espacios y signos de puntuación: ${charCountNoSpaces}`
  totalNumberSumElement.textContent = `Suma total de numeros: ${totalNumberSum}`
  wordLengthAverageElement.textContent = `Longitud media de las palabras: ${totalNumberSum}`

})


resetButton.addEventListener ('click', () => {
  wordCountElement.textContent = "Recuento de palabras:"
  charCountElement.textContent = "Recuento de caracteres:"
  numberCountElement.textContent = "Recuento de numeros:"
  charCountNoSpacesElement.textContent = "Recuento caracteres sin espacios y signos de puntuación:"
  userInput.textContent = ""
})

