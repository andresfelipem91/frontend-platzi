const ages=[21,25,30,19,22]

const allAreAdult= ages.every(age=>age > 18)
console.log(ages)
console.log(allAreAdult)

// some
const atLeastOneIsOver30=ages.some(age=>age > 29)
console.log(ages)
console.log(atLeastOneIsOver30)