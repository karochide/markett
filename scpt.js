document.addEventListener("DOMContentLoaded", function () {
    let row = document.querySelector(".row");
    let searchInput = document.querySelector("#search");

    function displayPhones(phonesToDisplay) {
        row.innerHTML = ""; // Clear previous content
        phonesToDisplay.forEach((tel) => {
            let div = document.createElement("div");
            div.classList.add("col-3", "mt-2");
            div.innerHTML = `
                <div class="card">
                    <img src="${tel.rasmi[0]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tel.nomi}</h5>
                        <p class="card-text">${tel.narxi} $</p>
                        <a href="product.html?id=${tel.id}" class="btn btn-primary">Buy</a>
                    </div>
                </div>
            `;
            row.append(div);
        });
    }

    // Initial display of phones
    displayPhones(phones);

    // Adding the "Iphone" link to the navbar
    let navbar = document.querySelector("#navbarColor01");
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a class="nav-link" href="create.html">create</a>`;
    navbar.appendChild(li);


    searchInput.addEventListener("input", function (e) {
        let inpval = e.target.value.trim().toLowerCase();
        let filteredPhones = phones.filter((tel) => tel.nomi.toLowerCase().includes(inpval));
        displayPhones(filteredPhones);
    });
});
