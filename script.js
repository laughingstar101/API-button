const apiListName = ["Useless Facts", "Funny Jokes", "Pickup Lines"];
const apiList = [
    "https://uselessfacts.jsph.pl/api/v2/facts/random",
    "https://official-joke-api.appspot.com/random_joke",
    "https://rizzapi.vercel.app/random",
];
const buttonNameList = ["GET FACT", "GET JOKE", "GET PICKUP LINE"];
let buttonNameIndex = 0;
let apiListIndex = 0;

const textCall = document.getElementById("textCall");
const textCall2 = document.getElementById("textCall2");
const headerThing = document.getElementById("header-thing");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const button = document.getElementById("button");

document.addEventListener("click", function (event) {
    // Check if button clicked
    if (event.target.matches("#button")) {
        loading.innerHTML = "Loading...";
        error.innerHTML = "";

        console.log("Button clicked!");
        console.log(apiListIndex);

        fetch(apiList[apiListIndex])
            .then((Response) => Response.json())
            .then((data) => {
                loading.innerHTML = "";
                console.log(data);

                if (apiListIndex === 0) {
                    renderText_Facts(data);
                } else if (apiListIndex === 1) {
                    renderText_Joke(data);
                } else if (apiListIndex === 2) {
                    renderText_PickupLine(data);
                }
            })
            .catch(() => {
                loading.innerHTML = "";
                renderError();
            });
    }
});

// Check if header-thing is clicked
headerThing.addEventListener("click", function () {
    apiListIndex = (apiListIndex + 1) % apiList.length;
    headerThing.innerHTML = apiListName[apiListIndex];
    buttonNameIndex = (buttonNameIndex + 1) % buttonNameList.length;
    button.innerHTML = buttonNameList[buttonNameIndex];
    textCall.innerHTML = "";
    textCall2.innerHTML = "";
    loading.innerHTML = "";
    error.innerHTML = "";
    // Change button width when buttonNameIndex === 2
    if (buttonNameIndex === 2) {
        button.classList.add("wide");
    } else {
        // Change back
        button.classList.remove("wide");
    }
});

function renderText_Facts(data) {
    textCall.innerHTML = data.text;
}

function renderText_Joke(data) {
    textCall.innerHTML = data.setup;
    textCall2.innerHTML = data.punchline;
}

function renderText_PickupLine(data) {
    textCall.innerHTML = data.text;
}

function renderError() {
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
}
