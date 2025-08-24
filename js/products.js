
console.log("Script is working");
// Products  Page
// Range

const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
priceRange.addEventListener('input', function () {
    priceValue.textContent = '৳' + priceRange.value;
});

// Example pagination logic (static for demo)
let currentPage = 1;
const totalPages = 5;
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');

function updatePagination() {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
        // Load previous page products here
    }
});
nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        // Load next page products here
    }
});
updatePagination();

// Share
document.getElementById('copy-link-btn').onclick = function () {
    navigator.clipboard.writeText(window.location.href).then(function () {
        var msg = document.getElementById('copy-link-msg');
        msg.classList.remove('hidden');
        setTimeout(function () { msg.classList.add('hidden'); }, 1500);
    });
};
// Copy link functionality for mobile
document.getElementById('copy-link-btn-mobile').onclick = function () {
    navigator.clipboard.writeText(window.location.href);
};