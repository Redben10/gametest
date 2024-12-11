
if (!localStorage.getItem('access')) {
    window.location.href = 'password.html';
} else {
    console.log('Access granted. Welcome to the main page!');
}
