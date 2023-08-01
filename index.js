
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
  const style_url = "http://localhost:3000/hairstyles"

  function displayHairstyle(){
    fetch(style_url)
    .then(res => res.json())
    .then (data => {
      data.forEach(hairstyle => {
        const div = document.getElementById("listy")
        const ul = document.getElementById("mystyle")
        const li = document.createElement("li")
        ul.appendChild(li)
        li.innerHTML = `
        <p>Hairstyle name:${hairstyle.name} </p><br>
        <p>Price:${hairstyle.price}$</p><br>
        <img src= '${hairstyle.image_url}'>
        
        `
        
      });
    })

  }
  displayHairstyle();
  
  function redirectToBookAppointment() {
    window.location.href = "/appointment.html";
  }
  

  
