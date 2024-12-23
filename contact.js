document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-left');
    const submitButton = form.querySelector('button');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        if (name.value === '' || email.value === '' || message.value === '') {
            alert("Alle velden zijn verplicht!");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email.value)) {
            alert("Voer een geldig e-mailadres in.");
            return;
        }

        alert("Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.");
        form.reset();
    });

    submitButton.addEventListener('mouseover', function() {
        submitButton.style.backgroundColor = '#ff6f60';
    });

    submitButton.addEventListener('mouseout', function() {
        submitButton.style.backgroundColor = '';
    });
});
