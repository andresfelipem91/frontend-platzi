//splice()
const vegetable=['carrot', 'broccoli','spinach', 'tomato']
const removedVegetable = vegetable.splice(2,1,'cucumber','onion')

console.log(vegetable)
console.log(removedVegetable)
//reverse()
const numbers= [1,2,3,4,5]
const reversedNumbers=numbers.reverse()

console.log(numbers)
console.log(reversedNumbers)

//sort()
const unsortedNumbers1=[4,18,1,62,34]
const unicodeSortedNumbers= unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

const unsortedNumbers2=[4,18,1,62,34]
const sortedNumbers= unsortedNumbers2.sort((a,b)=> a-b)
console.log(unsortedNumbers2)
console.log(sortedNumbers)

/// sort() with strings uyf-16
const cities=["New York", "Paris", "London", "Tokyo"]
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill()
const ages = [21,35,45,50]
console.log(ages.fill(0,2,4))
console.log(ages.fill(15,1))
console.log(ages.fill(0,2,4))