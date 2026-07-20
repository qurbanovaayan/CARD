const xhr = new XMLHttpRequest();

const BASE_URL = "https://rickandmortyapi.com/api";

const cards = document.getElementById("cards");

xhr.open("GET", `${BASE_URL}/character`);
xhr.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    data.results.forEach((element) => {
        const card = document.createElement("div");
        card.className = "card";
        const img = document.createElement("img");
        img.src = element.image;
        const content = document.createElement("div");
        content.className = "card-content";
        const name = document.createElement("h2");
        name.textContent = element.name;
        const status = document.createElement("p");
        status.className = "status";
        status.innerHTML = `
            <span>●</span>
            ${element.status} - ${element.species}
        `;
        const title1 = document.createElement("p");
        title1.className = "title";
        title1.textContent = "Last known location:";
        const location = document.createElement("p");
        location.className = "value";
        location.textContent = element.location.name;
        const title2 = document.createElement("p");
        title2.className = "title";
        title2.textContent = "First seen in:";
        const origin = document.createElement("p");
        origin.className = "value";
        origin.textContent = element.origin.name;
        content.append(
            name,
            status,
            title1,
            location,
            title2,
            origin
        );
        card.append(img, content);
        cards.append(card);

    });

});


xhr.send();