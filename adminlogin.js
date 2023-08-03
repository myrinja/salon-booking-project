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
