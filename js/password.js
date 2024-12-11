document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('passwordInput');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const correctPassword = 'CHEESE';

        if (passwordInput.value === correctPassword) {
            localStorage.setItem('access', 'granted');
            
            window.location.href = './';
        } else {
            message.textContent = 'Incorrect password. Please try again.';
            passwordInput.value = '';
        }
    });
});
