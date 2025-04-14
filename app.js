const mainModel = {
    app: {
        currentPage: 'main'
    }
}
function updateView() {
    let currentView;
    switch (mainModel.app.currentPage) {
        case 'main':
            currentView = mainView();
            break;
        case 'task1':
            eggSimulation();
            currentView = mainView();
            alert('look in console');
            break;
        case 'task2':
            whoFoundTheMostEggs();
            currentView = mainView();
            alert('look in console');
            break;
        case 'task3':
            howManyEggsDidTheEasterBunnyFind();
            currentView = mainView();
            alert('look in console');
            break;
        case 'task4':
            currentView = bunnyView();
            break;
        case 'task5':
            currentView = gameView();
            break;


    }
    document.getElementById('app').innerHTML = `
    ${currentView}

    `
}