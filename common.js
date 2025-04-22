function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

function setPage(path) {
    mainModel.app.currentPage = path;
    if (path === 'main') {
        mainModel.app.isInitialized = false;
    }
    updateView();
}