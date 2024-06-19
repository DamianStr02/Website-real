// Skrypt do interaktywności (np. walidacja formularza kontaktowego)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        // Walidacja formularza
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Wszystkie pola są wymagane!");
            event.preventDefault();
        }
    });
});

// slider do strony about

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 3000); // Przełączanie co 3 sekundy


//zegar na stronie
function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById('clock').textContent = timeString;
        }

        // Aktualizacja co sekundę
        setInterval(updateClock, 1000);

        // Uruchomienie zegara przy załadowaniu strony
        updateClock();
		
		
// slider do recenzji
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach((slider, index) => {
        const slides = slider.querySelector('.slides');
        const slideItems = slider.querySelectorAll('.slide');
        const totalSlides = slideItems.length;
        let currentSlide = 0;

        function showSlide() {
            slides.style.transform = `translateX(${-currentSlide * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide();
        }

        slider.querySelector('.prev').addEventListener('click', prevSlide);
        slider.querySelector('.next').addEventListener('click', nextSlide);

        // Pokaż pierwszy slajd
        showSlide();
    });
});
