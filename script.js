document.addEventListener('DOMContentLoaded', function () {
    const inscriptionForm = document.getElementById('inscription-form');
    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', function (e) {
            e.preventDefault();
            inscriptionForm.style.display = "none";
            document.getElementById('confirmation-inscription').style.display = "block";
        });
    }
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            contactForm.style.display = "none";
            document.getElementById('confirmation-contact').style.display = "block";
        });
    }
});
