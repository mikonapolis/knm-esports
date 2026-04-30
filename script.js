// Flip back cards when clicking outside
document.addEventListener("click", function (e) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        if (!card.contains(e.target)) {
            card.classList.remove("flipped");
        }
    });
});

// Section fade-in animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    sections.forEach(function (sec) {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});