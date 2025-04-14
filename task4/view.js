function initBunny() {
    eggSpawn(10);
    while (model.jumpSpace[model.bunny.position.x][model.bunny.position.y].egg === true) {
        model.bunny.position.x = randomNumber(0, model.jumpSpace.length - 1);
        model.bunny.position.y = randomNumber(0, model.jumpSpace.length - 1);
    }
    let bunnyPosX = randomNumber(0, model.jumpSpace.length - 1)
    let bunnyPosY = randomNumber(0, model.jumpSpace.length - 1)
    while (model.jumpSpace[bunnyPosX][bunnyPosY].egg === true) {
        console.log('there is an egg here ')
        bunnyPosX = randomNumber(0, model.jumpSpace.length - 1);
        bunnyPosy = randomNumber(0, model.jumpSpace.length - 1);
    }
    model.jumpSpace[model.bunny.position.x][model.bunny.position.y].bunny = true;
    updateView();
}



function bunnyView() {
    let bunnyHtml = `<button onclick="setPage('main')">go back</button>`
    bunnyHtml += `<div> Egg count: ${model.bunny.eggsFound}</div>`
    bunnyHtml += `<div class="all-jump-squares">`;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            bunnyHtml += `
            <div class="${model.jumpSpace[row][col].bunny ? 'bunny' : `${model.jumpSpace[row][col].egg ? 'eggs' : 'open-space'}`}"></div>
            `
        }
    }

    bunnyHtml += `</div>`
    bunnyHtml += `<button onclick="jump()">Move bunny!</button>`
    return bunnyHtml
}