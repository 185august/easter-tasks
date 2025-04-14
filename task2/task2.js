const eggsFound = [
    { name: 'Anna', amount: 5 },
    { name: 'Jonas', amount: 8 },
    { name: 'Emil', amount: 3 }
]

function whoFoundTheMostEggs() {
    eggsFound.sort((a, b) => b.amount - a.amount)
    console.log(eggsFound[0])
}