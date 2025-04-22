function jump() {
    let bunnyPosX = getRandomNumber(0, model.jumpSpace.length - 1)
    let bunnyPosY = getRandomNumber(0, model.jumpSpace.length - 1)
    while (model.jumpSpace[bunnyPosX][bunnyPosY].bunny === true) {
        bunnyPosX = getRandomNumber(0, model.jumpSpace.length - 1);
        bunnyPosy = getRandomNumber(0, model.jumpSpace.length - 1);
    }
    model.jumpSpace[model.bunny.position.x][model.bunny.position.y].bunny = false;
    model.bunny.position.x = bunnyPosX;
    model.bunny.position.y = bunnyPosY;

    model.jumpSpace[model.bunny.position.x][model.bunny.position.y].bunny = true;
    foundAnEgg();
    updateView();
}

function foundAnEgg() {
    if (model.jumpSpace[model.bunny.position.x][model.bunny.position.y].egg === true) {
        console.log('you found an egg!')
        model.bunny.eggsFound++;
        model.jumpSpace[model.bunny.position.x][model.bunny.position.y].egg = false;
        eggSpawn(1);
    }
}

function eggSpawn(amount) {
    for (let index = 0; index < amount; index++) {
        let eggPosX = getRandomNumber(0, model.jumpSpace.length - 1);
        let eggPosY = getRandomNumber(0, model.jumpSpace.length - 1);
        while (model.jumpSpace[eggPosX][eggPosY].egg === true) {
            eggPosX = getRandomNumber(0, model.jumpSpace.length - 1);
            eggPosy = getRandomNumber(0, model.jumpSpace.length - 1);
        }
        model.jumpSpace[eggPosX][eggPosY].egg = true;
    }


}