document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.getElementById("signInForm");
    
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get values from the form
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Retrieve saved user details from localStorage
      const savedEmail = localStorage.getItem("email");
      const savedPassword = localStorage.getItem("password");
  
      // Check if the input matches the saved credentials
      if (email === savedEmail && password === savedPassword) {
        alert("Sign In Successful!");
        // Redirect to the home page or user dashboard
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  });
  