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
<script>
        function showTab(n) {
            var contents=document.querySelectorAll('.tab-content');
            var buttons=document.querySelectorAll('.tab-btn');
            for(let i=0;i<contents.length;i++){
                contents[i].classList.remove('active');
                buttons[i].classList.remove('active');
            }
            contents[n].classList.add('active');
            buttons[n].classList.add('active');
        }
        window.onload = function() { showTab(0); }
    </script>
