//

const numbers= [1,2,3,4,5]
const squaredNumbers= numbers.map(num => num*num);

console.log(numbers)
console.log(squaredNumbers)

//forEach()

const color=['red', 'green', 'blue']
const iterateColors= color.forEach(colors => console.log(colors))

console.log(color)
console.log(iterateColors)

//exercise: Farenheit to Celsius
const temperaturesInFahrenheit=[32,68,95,104,212]
const temperaturesInCelsius=temperaturesInFahrenheit.map(fahrenheit=>(5/9)* (fahrenheit-32))

console.log('Temperatures In Fahrenheit: ',temperaturesInFahrenheit)
console.log('Temperatures In Celsius: ',temperaturesInCelsius)


const newNumbers= [1,2,3,4,5]
let sum=0

newNumbers.forEach(number =>{
    sum+= number
})

console.log('Array of Number: ',newNumbers)
console.log('sum of Numbers: ',sum)