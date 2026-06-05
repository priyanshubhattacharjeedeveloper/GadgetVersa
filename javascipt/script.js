// Mobile menu 
let menu = document.querySelector("#menu");
let wishList = document.querySelector("#wish-list");
let cart = document.querySelector("#cart");
let close = document.querySelector("#close");

let navList = document.querySelector(".nav-list");

menu.addEventListener("click", function(){
   wishList.style.display = "none";
   cart.style.display = "none";
   menu.style.display = "none";
   close.style.display = "block";
    // close.style.font-size = "var(--fs)";
    navList.classList.add("active");
    // navList.classList.remove("nav-list");

});

close.addEventListener("click", function(){
    close.style.display = "none";
    wishList.style.display = "block";
    cart.style.display = "block";
    menu.style.display = "block";

    // navList.classList.add("nav-list");
    navList.classList.remove("active");
});

// Price change as per contry 

// Currency selector
let currencySelector = document.querySelector("#currency-selector");

// Product prices
let prices = document.querySelectorAll(".price");

// Currency conversion rates
const rates = {
    INR: 83,
    USD: 1,
    EUR: 0.92,
    GBP: 0.78
};

// Currency symbols
const symbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£"
};

// Default currency = INR
updatePrices("INR");

// Dropdown change
currencySelector.addEventListener("change", function () {
    updatePrices(this.value);
});

// Function
function updatePrices(currency) {

    prices.forEach(function(price){

        let basePrice = price.getAttribute("data-price");

        let convertedPrice = (basePrice * rates[currency]).toFixed(0);

        price.innerText = symbols[currency] + convertedPrice;

    });

}



// Product image gallery 
let bigImage = document.querySelector(".big-image");
let smallImages = document.querySelectorAll(".small-image");


smallImages.forEach(function(img){
    img.addEventListener("click", function(){
        bigImage.src = img.src;
    });
})





// Form validation 

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required";
        isValid = false;
    }

    // Phone Validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid 10-digit mobile number";
        isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address";
        isValid = false;
    }

    // Message Validation
    if (message.length < 10) {
        document.getElementById("messageError").textContent =
            "Message must be at least 10 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});