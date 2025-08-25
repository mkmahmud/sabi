// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



// Carousel functionality
const carousel = document.getElementById('hero-carousel');
const images = carousel.querySelectorAll('img');
let current = 0;

function showSlide(idx) {
    images.forEach((img, i) => {
        img.classList.toggle('hidden', i !== idx);
    });
}
document.getElementById('prev-slide').onclick = () => {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
};
document.getElementById('next-slide').onclick = () => {
    current = (current + 1) % images.length;
    showSlide(current);
};
showSlide(current);


// Count down timer
// Set the sale end date (e.g., 7 days from now)
const saleEnd = new Date();
saleEnd.setDate(saleEnd.getDate() + 7);

function updateSaleTimer() {
    const now = new Date();
    const diff = saleEnd - now;
    if (diff <= 0) {
        document.getElementById('sale-timer').innerHTML = "Sale Ended!";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
setInterval(updateSaleTimer, 1000);
updateSaleTimer();

// Newsletter form interactivity
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('footer-newsletter-form');
    const msg = document.getElementById('footer-newsletter-msg');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            msg.textContent = "Thank you for subscribing!";
            setTimeout(() => { msg.textContent = ""; }, 4000);
            form.reset();
        });
    }
});


// 

// sabiha1fashon
// o0nuYkGjBIadDtgm

// mongodb+srv://sabiha1fashon:o0nuYkGjBIadDtgm@cluster0.hjr4gzg.mongodb.net/

