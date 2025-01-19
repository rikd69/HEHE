
function moveButton(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    newX = Math.max(10, Math.min(newX, maxX - 10));
    newY = Math.max(10, Math.min(newY, maxY - 10));

    button.style.position = 'fixed';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    button.style.transition = 'all 0.3s ease';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.innerHTML = '🖤';
    document.querySelector('.hearts').appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 300);

function accepted() {
    const response = document.getElementById('response');
    const noButton = document.querySelector('.btn-no');
    const lyricsContainer = document.querySelector('.lyrics-container');

    noButton.style.display = 'none';
    response.style.display = 'block';
    response.innerHTML = "You've made me the happiest person! 🖤";

    const newLyric = document.createElement('p');
    newLyric.className = 'lyric';
    newLyric.style.color = '#ff0000';
    newLyric.style.fontSize = '1.4em';
    newLyric.textContent = "Our adventure begins now...";

    lyricsContainer.appendChild(newLyric);

    // Increase heart spawn rate
    setInterval(createHeart, 100);

    // Send email notification
    sendEmail();
}

function sendEmail() {
    // Note: Replace these variables with your actual email service credentials
    const emailParams = {
        SecureToken: "YOUR_SECURE_TOKEN",  // Replace with your secure token (if needed by your email provider)
        To: 'sujoymodak382004@gmail.com',  // Replace with the recipient's email address
        From: 'modaksujoy636@gmail.com',  // Replace with your email
        Subject: 'Message from Your Website',
        Body: 'You have a new message! 🖤 she said!!! ',
    };

    Email.send(emailParams)
        .then(response => {
            console.log("Email sent successfully", response);
        })
        .catch(error => {
            console.error("Error sending email", error);
        });
}

// Initialize
const noButton = document.querySelector('.btn-no');
noButton.addEventListener('mousemove', function (e) {
    moveButton(this);
});

setTimeout(() => moveButton(noButton), 1000);

    