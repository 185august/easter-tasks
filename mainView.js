function mainView() {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<button onclick=showTask(${i})>Task: ${i}</button>`
    }
    return html;
}

function showTask(n) {
    mainModel.app.currentPage = `task${n}`
    updateView();
}