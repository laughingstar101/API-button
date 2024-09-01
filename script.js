document.addEventListener("click", function (event) {
    // Check if button clicked
    if (!event.target.matches("#button")) return;

    const loading = document.getElementById("loading");
    loading.style.display = "block";

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then((Response) => Response.json())
        .then((data) => {
            loading.style.display = "none";
            renderFact(data);
        })
        .catch(() => {
            loading.style.display = "none";
            renderError();
        });
});

function renderFact(data) {
    const text = document.getElementById("fact");
    fact.innerHTML = data.text;
}

function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
}
