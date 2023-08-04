
  const form = document.getElementById("appointmentForm");
  const appointmentList = document.getElementById("appointmentList");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const hairstyle = document.getElementById("hairstyle").value;
    const day = document.getElementById("day").value;
    const fileInput = document.getElementById("myfile");

    /*const selectedHairstyle = document.getElementById("hairstyle");
    const selectedHairstyleName = selectedHairstyle.options[selectedHairstyle.selectedIndex].value;
    const selectedHairstyleValue = selectedHairstyle.options[selectedHairstyle.selectedIndex].getAttribute("data-value");
*/



const selectedFile = fileInput.files[0];
const fileName = selectedFile.name;
    const appointment = {
      name,
      hairstyle,
      day,
      fileName
    };
   // const file = document.getElementById("myfile").files[0]
   
    saveAppointment(appointment);
    form.reset();
  });

  const base_url = "http://localhost:3000/appointments";

  function saveAppointment(appointment) {
    fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    }).then(() => {
      
    alert("Appointment made successful")
      redirectToIndex(); // Call the function to redirect to the login page
      
    });
  }
  const style_url = "http://localhost:3000/hairstyles"
  fetch(style_url)
  .then(res => res.json())
  .then(data => {

    data.forEach((hairstyle)=> {
        const hairstyleSelect = document.getElementById("hairstyle");
        const option = document.createElement("option");
        option.value = hairstyle.id;
        option.textContent = hairstyle.name;
        hairstyleSelect.appendChild(option);
  })
  })



  function redirectToIndex() {
    window.location.href = "index.html"; 
  }
  

  

    