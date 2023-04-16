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
