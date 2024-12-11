document.addEventListener('DOMContentLoaded', function() {
    var redirectButton = document.getElementById('redirectButton');
    if (redirectButton) {
        redirectButton.addEventListener('click', function() {
            var win = window.open('about:blank');
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = window.location.href;
            win.document.body.appendChild(iframe);
        });
    } else {
        console.error('Button with id "redirectButton" not found');
    }
});