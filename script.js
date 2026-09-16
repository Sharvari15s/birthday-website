// ================= START SURPRISE =================

function startSurprise() {

    const welcome = document.getElementById("welcome");
    const mainContent = document.getElementById("mainContent");

    welcome.style.display = "none";

    mainContent.classList.remove("hidden");

    createConfetti();
}


// ================= SCROLL =================

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


// ================= MYSTERY BOX =================

function openBox(box) {

    const message = document.getElementById("boxMessage");

    const messages = [

        "You found a secret message! ❤️ You're amazing!",

        "Surprise! 🎉 Your friendship is one of my favorite things.",

        "Okay... you found it! 😂 Happy Birthday!"

    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    message.innerText = randomMessage;

    box.innerText = "💖";

}


// ================= LETTER =================

function openLetter() {

    const letter = document.getElementById("letter");

    letter.classList.remove("hidden");

}


// ================= CAKE =================

function blowCandle() {

    const flame = document.getElementById("flame");

    const finalMessage =
        document.getElementById("finalMessage");

    flame.innerText = "💨";

    setTimeout(() => {

        flame.innerText = "";

        finalMessage.classList.remove("hidden");

        createConfetti();

    }, 500);

}


// ================= CONFETTI =================

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerText = ["🎉", "✨", "❤️", "🎊", "⭐"]
            [Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const duration =
            Math.random() * 3 + 2;


        confetti.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`
                }
            ],

            {
                duration: duration * 1000,

                easing: "linear"
            }

        );


        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

}