
document.addEventListener('DOMContentLoaded', function () {
  
    const reservesationsItem = document.querySelector('li a[href="#"]'); // Update this selector if needed
    const popularFlightsDropdown = reservesationsItem.nextElementSibling; // Find the .popularflights div

    reservesationsItem.addEventListener('mouseover', function () {
        popularFlightsDropdown.style.display = 'block'; // Show dropdown
    });

    reservesationsItem.addEventListener('mouseout', function () {
        popularFlightsDropdown.style.display = 'none'; // Hide dropdown
    });

    const anchors = document.querySelectorAll('a[href^="#"]'); // Select all anchor links starting with #

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
