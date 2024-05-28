const number= [1,2,3,4,5,6,7,8,9,10]
const evenNumbers= number.filter(number => number % 2 === 0)

console.log(number)
console.log(evenNumbers)

const numbersReduce=[1,2,3,4,5,]
const sum = numbersReduce.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

const words=['apple', 'banana', 'Hello','bye','banana', 'bye']
const wordsFrecuenci = words.reduce((accumulator, currentValue)=>{
 if(accumulator[currentValue]){
    accumulator[currentValue]++

 }else{
    accumulator[currentValue]=1
 }
 return accumulator
},{})
console.log(wordsFrecuenci)

//exercise
const grades=[85,92,60,78,95,98,50,91]

const passingGrades = grades.filter(grade=>grade >= 70)

const avaragePassingGrade= passingGrades.reduce((sum,grade)=> sum + grade, 0) / passingGrades.length

console.log('Original Grades: ', grades)
console.log('Passing Grades: ',passingGrades)
console.log('Average Passing Grade: ', avaragePassingGrade)
