const morseCode1= ['....','---',]
const morseCode2= ['.-..','.-']

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage2)


function combineMorseMessage(morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessage(morseCode1, morseCode2)

const number=[1,2,3]
const string= 'string'

combineMorseMessage(number, string)

//join()
const morseCodeMessageString = morseCodeMessage.join('e')
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)
