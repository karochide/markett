document.addEventListener("DOMContentLoaded", function () {
    let row = document.querySelector(".row");
    let searchInput = document.querySelector("#search");
  
    // Predefined products
    const phones = [
      {
        id: 6,
        nomi: "Redmi Note 8",
        narxi: 200,
        brend: "Redmi",
        rasmi: [
          "https://olcha.uz/image/original/products/2021-06-12/xiaomi-redmi-note-8-464gb-2021-24077-1.jpeg",
          "https://olcha.uz/image/original/products/2021-06-12/xiaomi-redmi-note-8-464gb-2021-24077-1.jpeg",
          "https://olcha.uz/image/original/products/2021-06-12/xiaomi-redmi-note-8-464gb-2021-24077-1.jpeg",
        ],
      },
    ];
  
    // Fetch additional products from local storage
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const allPhones = [...phones, ...storedProducts]; // Combine predefined and stored products
  
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
    displayPhones(allPhones);
  
    // Adding the "Create" link to the navbar
    let navbar = document.querySelector("#navbarColor01");
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.innerHTML = `<a class="nav-link" href="create.html">Create</a>`;
    navbar.appendChild(li);
  
    // Search functionality
    searchInput.addEventListener("input", function (e) {
      let inpval = e.target.value.trim().toLowerCase();
      let filteredPhones = allPhones.filter((tel) =>
        tel.nomi.toLowerCase().includes(inpval)
      );
      displayPhones(filteredPhones);
    });
  });
  