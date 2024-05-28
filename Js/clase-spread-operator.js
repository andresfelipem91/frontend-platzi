const originalArray = [1,2,3,4,5]
const copyOfArray =[...originalArray]

console.log(originalArray)
console.log(copyOfArray)


const array1 = [1,2,3]
const array2 = [4,5,6]
const combinadArray = [...array1,...array2]

console.log(array1)
console.log(array2)
console.log(combinadArray)


const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray,4,5,6]
console.log(baseArray)
console.log(arrayWithAdditionalElements)


function sum(a,b,c){
    return a + b + c
}
const numbers = [1,2,3]
const result=sum(...numbers)

console.log(result)