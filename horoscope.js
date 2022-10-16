var button = document.querySelector("button");
var result = document.querySelectorAll(".result");
document.querySelector("video").playbackRate = 0.6;

button.addEventListener("click", calculate);

function calculate() {
    var dateInput = document.querySelector("#date").value;
    var dateInputMonth = dateInput.toString().split("-")[1];
    var dateInputDay = dateInput.toString().split("-")[2];

    if (isNaN(dateInputMonth + dateInputDay)) {
        alert("Please give the date of your birth!");
    } else {
        matcher(Math.abs(dateInputMonth + dateInputDay));
    }
}

function matcher(monthAndDay) {
    result.forEach((horoscope) => {
        horoscope.classList.add("d-none");
        switch (true) {
            case monthAndDay < 120:
                document.getElementById("Capricorn").classList.remove("d-none");
                break;
            case monthAndDay < 219:
                document.getElementById("Aquarius").classList.remove("d-none");
                break;
            case monthAndDay < 321:
                document.getElementById("Pisces").classList.remove("d-none");
                break;
            case monthAndDay < 420:
                document.getElementById("Aries").classList.remove("d-none");
                break;
            case monthAndDay < 521:
                document.getElementById("Taurus").classList.remove("d-none");
                break;
            case monthAndDay < 622:
                document.getElementById("Gemini").classList.remove("d-none");
                break;
            case monthAndDay < 723:
                document.getElementById("Cancer").classList.remove("d-none");
                break;
            case monthAndDay < 823:
                document.getElementById("Leo").classList.remove("d-none");
                break;
            case monthAndDay < 923:
                document.getElementById("Virgo").classList.remove("d-none");
                break;
            case monthAndDay < 1024:
                document.getElementById("Libra").classList.remove("d-none");
                break;
            case monthAndDay < 1122:
                document.getElementById("Scorpio").classList.remove("d-none");
                break;
            case monthAndDay < 1222:
                document
                    .getElementById("Sagittarius")
                    .classList.remove("d-none");
                break;
            default:
                document.getElementById("Capricorn").classList.remove("d-none");
        }
    });
}
