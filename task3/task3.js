const easterBunny = {
    name: 'Hans',
    mood: null,
    eggsFound: 0
}

function howManyEggsDidTheEasterBunnyFind() {
    easterBunny.eggsFound = 0;
    for (let i = 0; i < 5; i++) {
        const numsOfEggs = getRandomNumber(0, 3)
        easterBunny.eggsFound += numsOfEggs

    }
    if (easterBunny.eggsFound <= 3) {
        easterBunny.mood = 'sad'
    } else if (easterBunny.eggsFound <= 6) {
        easterBunny.mood = 'happy'
    } else {
        easterBunny.mood = 'Very happy!'
    }
    console.log(`Bunny ${easterBunny.name} was ${easterBunny.mood} because he found ${easterBunny.eggsFound} eggs`)
}