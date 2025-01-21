document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from reloading the page
  
    // Get the input values
    const productName = document.getElementById("productName").value.trim();
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const productBrand = document.getElementById("productBrand").value.trim();
    const productImage = document.getElementById("productImage").value.trim();
  
    // Retrieve existing products from local storage or initialize an empty array
    const products = JSON.parse(localStorage.getItem("products")) || [];
  
    // Create a new product object
    const newProduct = {
      id: products.length + 1, // Incremental ID
      nomi: productName,
      narxi: productPrice,
      brend: productBrand,
      rasmi: [productImage, productImage, productImage], // Array of image URLs
    };
  
    // Add the new product to the array
    products.push(newProduct);
  
    // Save the updated array back to local storage
    localStorage.setItem("products", JSON.stringify(products));
  
    // Redirect to index.html
    window.location.href = "index.html";
  });
  