function anniversaryCountdown() {
    const anniversaryDate = new Date ("August 08, 2024, 13:00")
    const now = new Date();
    const diff = anniversaryDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInDay);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinutes = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;

        if (diff <= 0) {
            document.querySelector(".days").textContent = 0;
            document.querySelector(".hours").textContent = 0;
            document.querySelector(".minutes").textContent = 0;
            document.querySelector(".seconds").textContent = 0;
            clearInterval(timerID);
            happyAnniversary();
        }
}

let timerID = setInterval(anniversaryCountdown, 1000);

function happyAnniversary() {
    const header = document.querySelector("h1");
    header.textContent = "HAPPY ANNIVERSARY, KRISTINA & MICHAL!";
    header.classList.add = ("red");
}

const button = document.querySelector(".playButton");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})

const stopButton = document.querySelector(".stopButton");
stopButton.addEventListener("click", function() {
    document.querySelector("#myAudio").pause();
})

