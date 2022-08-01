function redirect(page) {
    if (page == 'bedroom') {
        window.location = 'bedroom.html';
    }
    else if (page == 'bottles') {
        window.location = 'bottles.html';
    }
    else if (page == 'desk') {
        window.location = 'desk.html';
    }
    else if (page == 'fruitbasket') {
        window.location = 'fruitbasket.html';
    }
    else if (page == 'tv_ac') {
        window.location = 'tv_ac.html';
    }
    else {
        console.error('This page was not found');
    }
}
function goback() {
    window.location = 'index.html'
}