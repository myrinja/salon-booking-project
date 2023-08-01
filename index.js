
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginData = {
      email,
      password,
    };

    // Assuming the login API endpoint is "http://localhost:3000/login"
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assume the server returns a "success" property in the response
        if (data.success) {
          redirectToBookAppointment();
        } else {
          alert("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  });
  // login.js
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Add your logic here to validate the login credentials
    // For demonstration purposes, let's assume successful login:
    //if (email === "example@example.com" && password === "password") {
      redirectToBookAppointment();
    //} else {
     // alert("Invalid email or password. Please try again.");
    //}
  });
  
  function redirectToBookAppointment() {
    window.location.href = "/appointment.html";
  }
  

  
