document.addEventListener("click", function (event) {
    // Check if button clicked
    if (!event.target.matches("#button")) return;

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then((Response) => Response.json())
        .then((data) => renderFact(data))
        .catch(() => renderError);
});

function renderFact(data) {
    const text = document.getElementById("fact");
    fact.innerHTML = data.text;
}

function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Whoops, something went wrong. Please try again later!"
}
