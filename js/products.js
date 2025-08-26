
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



async function handleSubmit(event) {
    event.preventDefault(); // prevent form from submitting/reloading

    // Get values from inputs
    const name = document.getElementById("order-name").value;
    const phone = document.getElementById("order-phone").value;
    const area = document.getElementById("order-area").value;
    const address = document.getElementById("order-address").value;
    const email = document.getElementById("order-email").value;
    const quantity = document.getElementById("quantity") ? document.getElementById("quantity").value : 1;

    // Combine into an object
    const formData = { name, phone, area, address, email, quantity };
    console.log(formData); // for debugging

    try {
        const response = await fetch("https://back-jfpl.onrender.com/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        await response.json();
        // Show confirmation message
        document.getElementById("show-msg").style.display = "block";

        // Optional: reset form
        document.getElementById("order-form").reset();

    } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting your order. Please try again.");
    }
}
