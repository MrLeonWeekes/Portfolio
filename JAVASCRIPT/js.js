// ----------------------------------------------
// ---------------------------SCROLL PROGRESS BAR
// ----------------------------------------------

const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("#progress");
const animateProgressBar = () => {

    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth)
    progressBar.style.width = value + "%";
    if (value < 0) {

        progressBar.style.width = "0%";
    }
};
window.addEventListener("scroll", animateProgressBar);



// ----------------------------------------------
// --------------------------- MUSIC PAD PLAYER -
// ----------------------------------------------



window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    console.log(sounds);
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#4f62a1",
        "#d39c4a",
        "#b44242",
        "#c6e25f",
        "#d360cd"
    ];


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });


    const createBubbles = index => {

        const bubble = document.createElement("div");
        visual.appendChild(bubble);

        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});



// -------------------------------------------
// ------------------------------- FLAPPY BIRD
// -------------------------------------------

// var block = document.getElementById("block");
// var hole = document.getElementById("hole");
// var character = document.getElementById("character");
// var jumping = 0;
// var counter = 0;
// var highscore = [];
// hole.addEventListener('animationiteration', () => {
//     var random = -((Math.random() * 300) + 150);
//     hole.style.top = random + "px";
//     counter++;
// });

// ------------ 

// const btnStart = document.getElementById("character");

// btnStart.addEventListener("click", function () {

//     const sss = setInterval(function start() {
//         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if (jumping == 0) {
//             character.style.top = (characterTop + 3) + "px";
//         }
//         var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//         var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
//         var cTop = -(650 - characterTop);
//         if ((characterTop > 630) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 280)))) {
//             clearInterval(sss);
//             document.getElementById("high-score").innerHTML = counter;
//             character.style.top = 350 + "px";
//             counter = 0;
//         }
//     }, 10);
// });

// function jump() {
//     jumping = 1;
//     let jumpCount = 0;
//     var jumpInterval = setInterval(function () {
//         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if ((characterTop > 6) && (jumpCount < 15)) {
//             character.style.top = (characterTop - 5) + "px";
//         }
//         if (jumpCount > 20) {
//             clearInterval(jumpInterval);
//             jumping = 0;
//             jumpCount = 0;
//         }
//         jumpCount++;
//     }, 10);
// };



/* -------------------------------------------
 ------------------------------------- WEATHER
 ------------------------------------------- */

const api = {
    key: "ce91e66e91998fcf7792cf0927f15e20",
    base: "https://api.openweathermap.org/data/2.5/"
}


// SET UP AN EVENT LISTENER FOR WHEN THE ENTER KEY IS PRESSED 
// ONCE PRESSED IT WILL RUN THE "SETQUERY" FUNCTION
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

// THIS FUNCTION GETS THE ENTER DETAILS FRON THE INPUT BOX
function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value)
    }
}

// THIS FUNCTION RUNS A FETCH REQUEST AND BUILD UP THE URL THAT HAS ALL THE DETAILS TO OBTAIN THE CORRECT INFO FROM THE WEATHER WEBSITE
// THE BASE URL THEN THEN STANDARD TEXT ALONG WITH THE QUERY WHICH IS "LONDON" FOR EXAMPLE THEN MNORE STANDARD TEXT AND FINALLY THE API KEY
// "&units=metric" CONVERT TO CELCIUS
// .THEN DEALS WITH API CALLS
// CONVERTS IT TO WEATHER VARIABLE AND CONVERTS IT TO JSON THEN PASS THE JSON THROUGH "displayResults" NAMED AS WEATHER
function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `Low: ${Math.round(weather.main.temp_min)}°c / Hi: ${Math.round(weather.main.temp_max)}°c`;

    let temp_test = `${Math.round(weather.main.temp)}`
    console.log(temp_test)

    if (temp_test > 15) {
        document.querySelector('.game4').style.backgroundImage = "url(/IMAGES/weatherP2.jpg)";
        document.querySelector('.game4').style.color = "#fff";
        // document.querySelector('.text-color').style.color = "rgb(0, 128, 55)";
    } else if (temp_test > 10) {
        document.querySelector('.game4').style.backgroundImage = "url(/IMAGES/weatherP3.jpg)";
        document.querySelector('.game4').style.color = "#fff";
        // document.querySelector('.text-color').style.color = "rgb(0, 128, 55)";
    } else {
        document.querySelector('.game4').style.backgroundImage = "url(/IMAGES/weatherP3.jpg)";
        document.querySelector('.game4').style.color = "#fff";
        // document.querySelector('.text-color').style.color = "rgb(0, 128, 55)";
    }


}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}



/* -------------------------------------------
 ------------------------------------- WEBSITE
 ------------------------------------------- */




function getDetails() {
    var firstName1 = document.getElementById("first-name").value;
    var weight1 = Math.round(document.getElementById("weight").value);
    var height1 = (document.getElementById("height").value);
    var heightTotal = (height1 * height1);
    var heightCalulation = heightTotal.toFixed(2);
    var bmiTotal = (weight1 / heightCalulation);
    var bmiCalculation = bmiTotal.toFixed(2);
    document.getElementById("bmi-your-score").innerHTML = bmiCalculation;



    if (firstName1 == "" || weight1 <= 0 || height1 <= 0) {
        document.getElementById("bmi-your-score").innerHTML = "Please enter all your details for results";
        document.getElementById("bmi-your-type").innerHTML = "Please enter all your details for results";
        document.getElementById("bmi-your-details").innerHTML = "Please enter all your details for results";
    } else {



        if (bmiCalculation > 30) {
            document.getElementById("bmi-your-type").innerHTML = "Obese";
            document.getElementById("bmi-your-details").innerHTML = "Hi " + firstName1 + ", your BMI total is " + bmiCalculation + ". Being obese significantly increases your risk of developing heart disease and type 2 diabetes. If you fall into this category you should see a GP and ask their advice on bringing down your weight.";
        } else if (bmiCalculation >= 25) {
            document.getElementById("bmi-your-type").innerHTML = "Overweight";
            document.getElementById("bmi-your-details").innerHTML = "Hi " + firstName1 + ", your BMI total is " + bmiCalculation + ". A high proportion of adults fall into the overweight category. This is a good time to make an honest assessment of your lifestyle to see if you should reduce calories in your diet or increase the calories you burn with exercise. The higher you fall within this bracket the higher your risk of cardiovascular disease.";
        } else if (bmiCalculation >= 18.5) {
            document.getElementById("bmi-your-type").innerHTML = "Normal";
            document.getElementById("bmi-your-details").innerHTML = "Hi " + firstName1 + ", your BMI total is " + bmiCalculation + ". Adults in the normal range are considered to have a healthy weight. Maintain it with regular exercise and a healthy diet.";
        } else {
            document.getElementById("bmi-your-type").innerHTML = "Underweight";
            document.getElementById("bmi-your-details").innerHTML = "Hi " + firstName1 + ", your BMI total is " + bmiCalculation + ". You may not be eating enough or an underlying illness could be preventing you from gaining weight. Underweight adults are at increased risk of weakened immune system, fragile bones and may experience low energy levels. If you struggle to gain weight, see a GP.";
        }
    };
};





// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 100) {
//         nav.classList.add('bg-dark');
//     } else {
//         nav.classList.remove('bg-dark');
//     }
// });



