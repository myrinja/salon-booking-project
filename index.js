
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginData = {
      email,
      password,
    };

    //login post
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        // if server returns a "success" property in the response
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
    
    //  validate the login credentials
    
    //if (email === "example@example.com" && password === "password") {
      redirectToBookAppointment();
    //} else {
     // alert("Invalid email or password. Please try again.");
    //}
  });
  //fetch data and display on landing page
  const style_url = "https://db-vercel-delta.vercel.app/hairstyles"

  function displayHairstyle(){
    fetch(style_url)
    .then(res => res.json())
    .then (data => {
      data.forEach(hairstyle => {
        const div = document.getElementById("listy")
        const ul = document.getElementById("mystyle")
        const li = document.createElement("li")
        ul.appendChild(li)
        li.id = "mylist"
        li.innerHTML = `
        <p>Hairstyle name:${hairstyle.name} </p>
        <p>Price:$${hairstyle.price}</p>
        <img src= '${hairstyle.image_url}'>
        
        `
        
      });
    })

  }
  displayHairstyle();
  //after successfully login redirect to appointment booking page
  function redirectToBookAppointment() {
    window.location.href = "/appointment.html";
  }
  
//admin login javascript code
const adminDetails ={
  username:"admin",
  password:"12345"
};
const adminForm = document.getElementById("loginForm");

adminForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

 if(username === "admin" && password=== "12345"){
      
  window.location.href = "displayappointment.html";
  }
  else{
      alert("Invalid Credentials")

  }
});
  






function redirectToIndex() {
  window.location.href = "index.html"; 
}



  
