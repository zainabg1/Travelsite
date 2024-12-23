document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let fullname = document.getElementById('fullname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let destination = document.getElementById('destination').value;
    let departure = document.getElementById('departure').value;
    let returnDate = document.getElementById('return').value;

    if (fullname && lastname && email && destination && departure && returnDate) {
        alert('Booking Successful');
    } else {
        alert('Please fill in all fields');
    }
});
