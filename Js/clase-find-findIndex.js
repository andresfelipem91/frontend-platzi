const multipleof5=[5,10,15,20]
const firstNumberGreaterThan10 = multipleof5.find(number=>number > 10)

console.log(multipleof5)
console.log(firstNumberGreaterThan10)


const randomNumber=[6,14,27,56,40]
const indexNumber=randomNumber.findIndex(number=>number >50)

console.log(randomNumber)
console.log(indexNumber)


//exercise

const winningParticipants=[
    {id:1, name:'Jenifer',ticketNumber: 1},
    {id:15, name:'Maichel',ticketNumber:8},
    {id:18, name:'Emily',ticketNumber: 15},
    {id:12, name:'Charlie',ticketNumber: 47},
]

function findWinnerByName(name) {
    const winner =winningParticipants.find(participant=>participant.name === name)
    return winner || 'No winner found with that name.'
}

function FindIndexWinnerByticket (ticketNumber) {
    const index=winningParticipants.findIndex(participant=>participant.ticketNumber === ticketNumber)
    return index !== -1 ? index: 'No winner found  with ticket number.'
}

function displayWinnweInformation(winner){
    if(winner !== undefined && winner !== null && winner !== 'No winner found with that name.' )
    {
        console.log('Winner informetion:', winner)
    }else{
        console.log('no winner found.')
    }
}
const winnerByName=findWinnerByName('Emily')
const indexWinnerByTicket= FindIndexWinnerByticket(8)

displayWinnweInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)