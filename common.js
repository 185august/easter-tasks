function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

function setPage(path) {
    mainModel.app.currentPage = path;
    updateView();
}