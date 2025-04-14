function gameView() {
    let gameHtml = `
    <div class="game-container">
        <div onclick="selectOption('left')" class="path one"></div>
        <div onclick="selectOption('middle')" class="path two"></div>
        <div onclick="selectOption('right')" class="path three"></div>
    </div>    
    `
    return gameHtml;
}