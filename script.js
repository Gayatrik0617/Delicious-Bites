// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
        // ✅ Show success message
        const msg = document.getElementById("successMsg");
        msg.style.display = "block";

        // ✅ Reset form fields
        form.reset();

        // ⏳ Hide message after 5 seconds
        setTimeout(() => {
            msg.style.display = "none";
        }, 4000);
    } else {
        alert("Oops! Something went wrong.");
    }
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
});


// Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-75');
    } else {
        navbar.classList.remove('bg-opacity-75');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
        });
    });

    // Fix body overflow-x on small screens
    document.body.style.overflowX = "hidden";
});


