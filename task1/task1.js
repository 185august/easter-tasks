function eggSimulation() {
    let totalEggs = 0;
    for (let i = 0; i < 5; i++) {
        const numsOfEggs = getRandomNumber(1, 3)
        totalEggs += numsOfEggs
    }
    console.log(totalEggs + ' eggs were found')
}

