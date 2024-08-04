document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`شكراً لك، ${name}! لقد تلقينا رسالتك.`);
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});
