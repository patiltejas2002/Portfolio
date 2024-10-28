document.addEventListener('DOMContentLoaded', () => {
    // Toggle the navigation menu when the hamburger icon is clicked
    document.getElementById('menu-icon').addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active'); // Toggle the active class to show/hide the menu
    });

    // Close the menu when a navigation link is clicked
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.getElementById('navbar');
            navbar.classList.remove('active'); // Close the menu on link click
        });
    });
});










let header = document.querySelector('header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust based on your header height
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
};





// dark mode
let darkModeIcon=document.querySelector('#darkMode-icon');

darkModeIcon.onclick=() =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    let header = document.querySelector('header');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3,.home-content p,.about-content', { origin: 'right' });

//read more
document.getElementById('readMoreBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const educationInfo = document.getElementById('educationInfo');
    if (educationInfo.style.display === "none") {
        educationInfo.style.display = "block"; // Show the education info
        this.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        educationInfo.style.display = "none"; // Hide the education info
        this.textContent = "Read More"; // Change button text back to "Read More"
    }
});

//date time

function updateDateTime() {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const dateTimeString = now.toLocaleString('en-US', options);
    document.getElementById('currentDateTime').innerText = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
// Initial call to display the date and time immediately
updateDateTime();

// loader
// Show loader when the page is loading
document.getElementById("loader").style.display = "block";

// Hide loader when the page is fully loaded
window.onload = function() {
    document.getElementById("loader").style.display = "none";
};