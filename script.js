document.addEventListener("DOMContentLoaded", function () {
    let row = document.querySelector(".row");
    let searchInput = document.querySelector("#search");
  
    const phones = [
        {
            id: 6,
            nomi: "Redmi Note 8",
            narxi: 200,
            brend: "Redmi",
            rasmi: [
                "https://olcha.uz/image/original/products/2021-06-12/xiaomi-redmi-note-8-464gb-2021-24077-1.jpeg",
                "https://olcha.uz/image/original/products/2021-06-12/xiaomi-redmi-note-8-464gb-2021-24077-1.jpeg",
                "https://olcha.uz/image/original/products/2021-06-12/xiaomi-redmi-note-8-464gb-2021-24077-1.jpeg"
            ]
        },
        {
            id: 7,
            nomi: "Redmi Note 9",
            narxi: 220,
            brend: "Redmi",
            rasmi: [
                "https://s3p.kattabozor.uz/ri/6cc4ef4ed73b3b3cc9ccf37aef3ca5984ee9b4c5f1e5196a6a211d275af4d1be_rktPEo_640l.jpg",
                "https://s3p.kattabozor.uz/ri/6cc4ef4ed73b3b3cc9ccf37aef3ca5984ee9b4c5f1e5196a6a211d275af4d1be_rktPEo_640l.jpg",
                "https://s3p.kattabozor.uz/ri/6cc4ef4ed73b3b3cc9ccf37aef3ca5984ee9b4c5f1e5196a6a211d275af4d1be_rktPEo_640l.jpg"
            ]
        },
        {
            id: 8,
            nomi: "Redmi Note 10",
            narxi: 250,
            brend: "Redmi",
            rasmi: [
                "https://olcha.uz/image/700x700/products/2022-02-09/smartfon-xiaomi-redmi-note-10-5g-4-gb-64gb-chernyy-35701-0.jpeg",
                "https://olcha.uz/image/700x700/products/2022-02-09/smartfon-xiaomi-redmi-note-10-5g-4-gb-64gb-chernyy-35701-0.jpeg",
                "https://olcha.uz/image/700x700/products/2022-02-09/smartfon-xiaomi-redmi-note-10-5g-4-gb-64gb-chernyy-35701-0.jpeg"
            ]
        },
        {
            id: 9,
            nomi: "Redmi 9A",
            narxi: 150,
            brend: "Redmi",
            rasmi: [
                "https://meydan.uz/uploads/product/images/9ablue.png",
                "https://meydan.uz/uploads/product/images/9ablue.png",
                "https://meydan.uz/uploads/product/images/9ablue.png"
            ]
        },
        {
            id: 10,
            nomi: "Redmi 10C",
            narxi: 170,
            brend: "Redmi",
            rasmi: [
                "https://s3p.kattabozor.uz/ri/ded7fedf34c5c8df34a318b22b0d2600aa64534d245af19618d8d2084c8a4941_cP7KGY_480l.jpg",
                "https://s3p.kattabozor.uz/ri/ded7fedf34c5c8df34a318b22b0d2600aa64534d245af19618d8d2084c8a4941_cP7KGY_480l.jpg",
                "https://s3p.kattabozor.uz/ri/ded7fedf34c5c8df34a318b22b0d2600aa64534d245af19618d8d2084c8a4941_cP7KGY_480l.jpg"
            ]
        },
        {
            id: 11,
            nomi: "iPhone 11",
            narxi: 700,
            brend: "iPhone",
            rasmi: [
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/jfnqNIJZRbwykFYTyF5dxZgXc3ULQhGQwFCR0Hm0.jpeg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/jfnqNIJZRbwykFYTyF5dxZgXc3ULQhGQwFCR0Hm0.jpeg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/jfnqNIJZRbwykFYTyF5dxZgXc3ULQhGQwFCR0Hm0.jpeg"
            ]
        },
        {
            id: 12,
            nomi: "iPhone 12",
            narxi: 800,
            brend: "iPhone",
            rasmi: [
                "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-12-Mini-64GB-128GB-256GB-All-Colors-Factory-Unlocked-Cell-Phone-Refurbished-Good_72803c78-7209-4996-9644-9cff3048e292.aac9c9ca839fe1f6ae37d76e3b799661.jpeg",
                "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-12-Mini-64GB-128GB-256GB-All-Colors-Factory-Unlocked-Cell-Phone-Refurbished-Good_72803c78-7209-4996-9644-9cff3048e292.aac9c9ca839fe1f6ae37d76e3b799661.jpeg",
                "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-12-Mini-64GB-128GB-256GB-All-Colors-Factory-Unlocked-Cell-Phone-Refurbished-Good_72803c78-7209-4996-9644-9cff3048e292.aac9c9ca839fe1f6ae37d76e3b799661.jpeg"
            ]
        },
        {
            id: 13,
            nomi: "iPhone 13",
            narxi: 900,
            brend: "iPhone",
            rasmi: [
                "https://iplanet.one/cdn/shop/files/iPhone_13_Pink_PDP_Image_Position-1A__GBEN.jpg?v=1691169862&width=823",
                "https://iplanet.one/cdn/shop/files/iPhone_13_Pink_PDP_Image_Position-1A__GBEN.jpg?v=1691169862&width=823",
                "https://iplanet.one/cdn/shop/files/iPhone_13_Pink_PDP_Image_Position-1A__GBEN.jpg?v=1691169862&width=823"
            ]
        },
        {
            id: 14,
            nomi: "iPhone SE",
            narxi: 500,
            brend: "iPhone",
            rasmi: [
                "https://olcha.uz/image/700x700/products/2020-12-03/apple-iphone-se-2020-128gb-black-19794-0.jpeg",
                "https://olcha.uz/image/700x700/products/2020-12-03/apple-iphone-se-2020-128gb-black-19794-0.jpeg",
                "https://olcha.uz/image/700x700/products/2020-12-03/apple-iphone-se-2020-128gb-black-19794-0.jpeg"
            ]
        },
        {
            id: 15,
            nomi: "iPhone XR",
            narxi: 600,
            brend: "iPhone",
            rasmi: [
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/11Mg2PWts9T4lMtpqXXTkJDEkzXOsoeecpm51xd8.jpeg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/11Mg2PWts9T4lMtpqXXTkJDEkzXOsoeecpm51xd8.jpeg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/11Mg2PWts9T4lMtpqXXTkJDEkzXOsoeecpm51xd8.jpeg"
            ]
        },
        {
            id: 16,
            nomi: "Samsung Galaxy A12",
            narxi: 250,
            brend: "Samsung",
            rasmi: [
                "https://olcha.uz/image/700x700/products/2021-05-08/samsung-galaxy-a12-464-a125-23684-0.jpeg",
                "https://olcha.uz/image/700x700/products/2021-05-08/samsung-galaxy-a12-464-a125-23684-0.jpeg",
                "https://olcha.uz/image/700x700/products/2021-05-08/samsung-galaxy-a12-464-a125-23684-0.jpeg"
            ]
        },
        {
            id: 17,
            nomi: "Samsung Galaxy S21",
            narxi: 950,
            brend: "Samsung",
            rasmi: [
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/202204/apvhq50teTUY1Fq3IeTWbCzDusfscpFGCGNGuKzG.jpg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/202204/apvhq50teTUY1Fq3IeTWbCzDusfscpFGCGNGuKzG.jpg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/202204/apvhq50teTUY1Fq3IeTWbCzDusfscpFGCGNGuKzG.jpg"
            ]
        },
        {
            id: 18,
            nomi: "Samsung Galaxy M31",
            narxi: 300,
            brend: "Samsung",
            rasmi: [
                "https://assets.asaxiy.uz/product/items/desktop/bba6720d71cb5e39031f72a2efe1ff342021081910514117776Rg7O9K9ZRe.jpeg.webp",
                "https://assets.asaxiy.uz/product/items/desktop/bba6720d71cb5e39031f72a2efe1ff342021081910514117776Rg7O9K9ZRe.jpeg.webp",
                "https://assets.asaxiy.uz/product/items/desktop/bba6720d71cb5e39031f72a2efe1ff342021081910514117776Rg7O9K9ZRe.jpeg.webp"
            ]
        },
        {
            id: 19,
            nomi: "Samsung Galaxy Note 10",
            narxi: 850,
            brend: "Samsung",
            rasmi: [
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/05Y5VGOVPr9G3RceUKhbFRttOiMHVVDf.jpg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/05Y5VGOVPr9G3RceUKhbFRttOiMHVVDf.jpg",
                "https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/05Y5VGOVPr9G3RceUKhbFRttOiMHVVDf.jpg"
            ]
        },
        {
            id: 20,
            nomi: "Samsung Galaxy Z Flip",
            narxi: 1200,
            brend: "Samsung",
            rasmi: [
                "https://api.radius.uz/storage/products/July2024/nuZodXoNGti5iQNxzPJP.jpg",
                "https://api.radius.uz/storage/products/July2024/nuZodXoNGti5iQNxzPJP.jpg",
                "https://api.radius.uz/storage/products/July2024/nuZodXoNGti5iQNxzPJP.jpg"
            ]
            },
            {
                id: 1,
                nomi: "Poco X5 Pro",
                narxi: 350,
                brend: "Poco",
                rasmi: [
                    "https://avatars.mds.yandex.net/i?id=79ee30e2a81edc6531ee133fd13bfd7d_l-8187583-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=79ee30e2a81edc6531ee133fd13bfd7d_l-8187583-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=79ee30e2a81edc6531ee133fd13bfd7d_l-8187583-images-thumbs&n=13"
                ]
            },
            {
                id: 2,
                nomi: "Poco F5",
                narxi: 400,
                brend: "Poco",
                rasmi: [
                    "https://avatars.mds.yandex.net/i?id=7864e8efaeb4378f4fd32fe6f418707b56a1bc40-5592885-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=7864e8efaeb4378f4fd32fe6f418707b56a1bc40-5592885-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=7864e8efaeb4378f4fd32fe6f418707b56a1bc40-5592885-images-thumbs&n=13"
                ]
            },
            {
                id: 3,
                nomi: "Poco C55",
                narxi: 150,
                brend: "Poco",
                rasmi: [
                    "https://avatars.mds.yandex.net/i?id=59d6ca5bb6b8b43ddad56467ce7fc1eb_l-9989050-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=59d6ca5bb6b8b43ddad56467ce7fc1eb_l-9989050-images-thumbs&n=13",
                    "https://avatars.mds.yandex.net/i?id=59d6ca5bb6b8b43ddad56467ce7fc1eb_l-9989050-images-thumbs&n=13"
                ]
            },
            {
                id: 4,
                nomi: "Poco M5s",
                narxi: 280,
                brend: "Poco",
                rasmi: [
                    "https://avatars.mds.yandex.net/get-mpic/5163466/2a0000018a567ff2f95ed8cdbc110a36bbc6/orig",
                    "https://avatars.mds.yandex.net/get-mpic/5163466/2a0000018a567ff2f95ed8cdbc110a36bbc6/orig ",
                    "https://avatars.mds.yandex.net/get-mpic/5163466/2a0000018a567ff2f95ed8cdbc110a36bbc6/orig "
                ]
            },
            {
                id: 5,
                nomi: "Poco X4 GT",
                narxi: 320,
                brend: "Poco",
                rasmi: [
                    "https://cdn1.ozone.ru/s3/multimedia-m/6376279942.jpg",
                    "https://cdn1.ozone.ru/s3/multimedia-m/6376279942.jpg",
                    "https://cdn1.ozone.ru/s3/multimedia-m/6376279942.jpg"
                ]
            },
            {
                id: 34,
                nomi: "Nokia 3350",
                narxi: 45,
                brend: "Nokia",
                rasmi: [
                    "https://i.ebayimg.com/images/g/HqIAAOSw~TNbR30p/s-l400.jpg",
                    "https://i.ebayimg.com/images/g/HqIAAOSw~TNbR30p/s-l400.jpg",
                    "https://i.ebayimg.com/images/g/HqIAAOSw~TNbR30p/s-l400.jpg"
                ]
            },
            {
                id: 213,
                nomi: "Nokia 6600",
                narxi: 70,
                brend: "Nokia",
                rasmi: [
                    "https://upload.wikimedia.org/wikipedia/commons/4/45/Nokia6600.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/4/45/Nokia6600.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/4/45/Nokia6600.jpg"
                ]
            },
            {
                id: 1233,
                nomi: "Nokia Lumia 520",
                narxi: 90,
                brend: "Nokia",
                rasmi: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTQOlJSQfL7tbvozdfli5y52mHiwuVfMz7g&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTQOlJSQfL7tbvozdfli5y52mHiwuVfMz7g&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTQOlJSQfL7tbvozdfli5y52mHiwuVfMz7g&s"
                ]
            },
            {
                id: 12234567814,
                nomi: "Nokia 1100",
                narxi: 30,
                brend: "Nokia",
                rasmi: [
                    "https://i.ytimg.com/vi/1oIdOm9gjxQ/maxresdefault.jpg",
                    "https://i.ytimg.com/vi/1oIdOm9gjxQ/maxresdefault.jpg",
                    "https://i.ytimg.com/vi/1oIdOm9gjxQ/maxresdefault.jpg"
                ]
            },
            {
                id: 1214,
                nomi: "Nokia 8",
                narxi: 300,
                brend: "Nokia",
                rasmi: [
                    "https://images-na.ssl-images-amazon.com/images/I/61UXuct2ciL._SS400_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61UXuct2ciL._SS400_.jpg",
                    "https://images-na.ssl-images-amazon.com/images/I/61UXuct2ciL._SS400_.jpg"
                ]
            }
        
    ];
    
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
  