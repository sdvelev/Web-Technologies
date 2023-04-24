window.addEventListener('load', function() {
    var storedPosition = JSON.parse(sessionStorage.getItem('lastScrolledPosition'));
    if (storedPosition !== null) {
        window.scrollTo(storedPosition.x, storedPosition.y);
    } else {
        setTimeout(function() {
            document.getElementById('autofocused').focus();
            window.scrollTo(0,0);
        }, 0);
    }

    window.addEventListener('beforeunload', function() {
        var currentPosition = { x: window.scrollX, y: window.scrollY };
        sessionStorage.setItem('lastScrolledPosition', JSON.stringify(currentPosition));
    });
});

// Плавно пренасочване в меню
/*
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
}*/