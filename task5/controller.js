function selectOption(path) {
    if (!adventureModel.canClickDoor) return;

    adventureModel.gameText = 'You picked ' + adventureModel.path[0][path]
    adventureModel.optionsAmmount[adventureModel.path[0][path]] += 1;
    const userStatus = hasUserWon()
    if (userStatus) {
        updateView();
        return
    }
    adventureModel.path.shift();
    adventureModel.canClickDoor = false;
    updateView();

    setTimeout(() => {
        adventureModel.gameText = 'Pick a door'
        adventureModel.canClickDoor = true;
        updateView();
    }, 2000);
}

function createChoices(numberOfOptions) {
    for (let i = 0; i < numberOfOptions; i++) {
        const options = randomizeOptions();
        adventureModel.path.push(options)
    }
}

function hasUserWon() {
    if (adventureModel.optionsAmmount.chocolate >= 3 || adventureModel.optionsAmmount.egg >= 3) {
        adventureModel.gameText = 'User has won';
        adventureModel.canClickDoor = false;
        return true
    } else if (adventureModel.optionsAmmount.gravel >= 3) {
        adventureModel.gameText = 'eat dirt';
        adventureModel.canClickDoor = false;
        return true
    }
    return false
}

function randomizeOptions() {
    let i = getRandomNumber(0, 99);
    if (i <= 33) {
        return { left: 'chocolate', middle: 'egg', right: 'gravel' }
    } else if (i <= 66) {
        return { left: 'egg', middle: 'gravel', right: 'chocolate' }
    } else {
        return { left: 'gravel', middle: 'chocolate', right: 'egg' }
    }
}