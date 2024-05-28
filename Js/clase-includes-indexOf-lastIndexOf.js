const numbers=[1,2,3,4,5]

const result1 = numbers.includes(3)
console.log(result1)


const result2 = numbers.includes(8)
console.log(result2)

// indexOf
const fruit= ['apple','cherry','orange','grape']
const index1= fruit.indexOf('grape')
console.log(index1)

//lastindexOf
const numbersAgain = [2,4,6,8,10,6]
const lastIndex1= numbersAgain.lastIndexOf(6)
console.log(lastIndex1)

//exercise
const stringArray= ['apple','banana','orange','grape','banana','kiwi']
const  target = 'banana'

function findStringIndicesInArray(array,target)
{
 const result={
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1
 }
 array.forEach((elemnt,index)=> {
    if(elemnt.includes(target)) {
        result.includesTargetString = true
        result.firstOccurrenceIndex = array.indexOf(target)
        result.lastOccurrenceIndex =array.lastIndexOf(target)

    }
 })
 return result
}
const result = findStringIndicesInArray(stringArray,target)
console.log(result)