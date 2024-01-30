// Select elements from the HTML document
const dineeLogo = document.querySelector(".dine-logo");
const dropdown = document.querySelector(".dropdown");
const searchInput = document.querySelector("input[placeholder='Search']");
const cards = document.querySelectorAll(".card1, .card2, .card3, .card4");
const offersCards = document.querySelectorAll(".offr-card");
const personalCards = document.querySelectorAll(".offr-card");
const automotiveCards = document.querySelectorAll(".offr-card");
const personalCare = document.querySelector(".personal-care");
const automotiveCare = document.querySelector(".automotive-care");

// Add event listeners to the HTML elements
dineeLogo.addEventListener("click", () => {
    // Add your logic here
});

dropdown.addEventListener("change", () => {
    // Add your logic here
});

searchInput.addEventListener("input", () => {
    // Add your logic here
});

cards.forEach((card) => {
    card.addEventListener("click", () => {
        // Add your logic here
    });
});

offersCards.forEach((offerCard) => {
    offerCard.addEventListener("click", () => {
        // Add your logic here
    });
});

personalCards.forEach((personalCard) => {
    personalCard.addEventListener("click", () => {
        // Add your logic here
    });
});

automotiveCards.forEach((automotiveCard) => {
    automotiveCard.addEventListener("click", () => {
        // Add your logic here
    });
});

personalCare.addEventListener("click", () => {
    // Add your logic here
});

automotiveCare.addEventListener("click", () => {
    // Add your logic here
});
