function gameView() {
    let gameHtml = `
    <button onclick="setPage('main')">go back</button>
    <div onload="initGame()" class="game-container">
        <div onclick="selectOption('left')" class="path one"></div>
        <div onclick="selectOption('middle')" class="path two"></div>
        <div onclick="selectOption('right')" class="path three"></div>
    </div>
    <div class="game-text">${adventureModel.gameText ?? ''}</div>
    `
    return gameHtml;
}

function initGame() {
    adventureModel.canClickDoor = true;
    adventureModel.gameText = 'Pick a door';
    adventureModel.path = [];
    adventureModel.optionsAmmount.chocolate = 0
    adventureModel.optionsAmmount.eggchocolate = 0
    adventureModel.optionsAmmount.gravel = 0
    createChoices(10)
    mainModel.app.isInitialized = true;
    return gameView();
}