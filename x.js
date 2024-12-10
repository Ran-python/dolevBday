// JavaScript for Techno Party Invite

// Highlight Artist Lineup Loop
const artists = document.querySelectorAll(".artist-list li");
let artistIndex = 0;

function loopArtistHighlight() {
    // Reset all artist colors to default
    artists.forEach(artist => artist.style.color = "rgb(0, 255, 255)"); // Cyan default

    // Highlight the current artist
    artists[artistIndex].style.color = "rgb(255, 94, 0)"; // Bright Orange
    artists[artistIndex].style.textShadow = "0 0 15px rgb(255, 255, 0), 0 0 25px rgb(255, 94, 0)";

    // Move to the next artist
    artistIndex = (artistIndex + 1) % artists.length;

    // Loop every 1 second
    setTimeout(loopArtistHighlight, 1000);
}
loopArtistHighlight();

// Add Glowing Effect to Title
const title = document.querySelector(".party-title");

function glowTitle() {
    title.style.textShadow = `0 0 15px rgb(255, 20, 147), 0 0 30px rgb(0, 255, 255), 0 0 45px rgb(255, 255, 0)`;
    setTimeout(() => {
        title.style.textShadow = `2px 2px 5px rgb(0, 216, 255)`;
        setTimeout(glowTitle, 1000);
    }, 1000);
}
glowTitle();

// Button Interaction for Ticket Purchase
const buyTicketButton = document.getElementById("buy-ticket");

buyTicketButton.addEventListener("mouseenter", function () {
    buyTicketButton.style.backgroundColor = "rgb(255, 20, 147)"; // Vibrant Pink on Hover
    buyTicketButton.style.boxShadow = "0 0 20px rgb(255, 20, 147), 0 0 40px rgb(0, 255, 255)";
});

buyTicketButton.addEventListener("mouseleave", function () {
    buyTicketButton.style.backgroundColor = "rgb(0, 255, 255)"; // Back to Cyan
    buyTicketButton.style.boxShadow = "none";
});

buyTicketButton.addEventListener("click", function () {
    alert("🎫 Your ticket for Dolev Hertz's Birthday Party has been booked! Cost: 80 ILS");
    console.log("Ticket purchased!");

    // Social Media Sharing
    const shareText = encodeURIComponent(
        "🎉 Join me at Dolev Hertz's Birthday Party on Jan 18th, 2025! Amazing music lineup awaits! 🎧"
    );
    const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
    window.open(shareUrl, "_blank");

    // Temporary Color Effect on Button
    buyTicketButton.style.backgroundColor = "rgb(0, 255, 127)"; // Vibrant Green Confirmation
    setTimeout(() => {
        buyTicketButton.style.backgroundColor = "rgb(0, 255, 255)"; // Reset to Cyan
    }, 1000);
});

// Subtle Pulsating Effect on Artists
function artistPulse() {
    artists.forEach(artist => {
        artist.style.transition = "transform 0.5s ease";
        artist.style.transform = "scale(1.1)";
        setTimeout(() => {
            artist.style.transform = "scale(1)";
        }, 500);
    });

    setTimeout(artistPulse, 2000); // Repeat every 2 seconds
}
artistPulse();
