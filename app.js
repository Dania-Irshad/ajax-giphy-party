const form = document.getElementById('form');
const gifs = document.getElementById("gifs");
const remove = document.getElementById("removeBtn")
form.addEventListener('submit', getGif);

async function getGif(e) {
    e.preventDefault();
    const search = document.getElementById('search');
    let gif = search.value;
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            q: gif,
            api_key: "gKv67Z9I5ZFgLHUmswDNwMw8cqZsmmj6",
        }
    });
    let gifURL = res.data.data[Math.floor(Math.random() * 50)].images.original.url;
    appendGif(gifURL);
}

function appendGif(URL) {
    const newDiv = document.createElement("div");
    gifs.append(newDiv);
    const newGif = document.createElement('input');
    newGif.setAttribute("type", "image");
    newDiv.append(newGif);
    newGif.setAttribute("src", URL);
}

remove.addEventListener('click', function (e) {
    e.target.parentElement.nextElementSibling.innerHTML = "";
})