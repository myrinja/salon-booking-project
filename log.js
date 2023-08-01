
  const form = document.getElementById("appointmentForm");
  const appointmentList = document.getElementById("appointmentList");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const hairstyle = document.getElementById("hairstyle").value;
    const day = document.getElementById("day").value;

    const appointment = {
      name,
      hairstyle,
      day,
    };

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
      //displayAppointments(); // Call displayAppointments after saving the new appointment
    //  alert("Appointment made successful")
      redirectToIndex(); // Call the function to redirect to the login page
      
    });
  }

  /*function displayAppointments() {
    fetch(base_url)
      .then((response) => response.json())
      .then((data) => {
        appointmentList.innerHTML = "";
        data.forEach((appointment) => {
          const appointmentDiv = document.createElement("div");
          appointmentDiv.classList.add("appointment-item");
          appointmentDiv.innerHTML = `
            <p><strong>Name:</strong> ${appointment.name}</p>
            <p><strong>Hair Style:</strong> ${appointment.hairstyle}</p>
            <p><strong>Day to Attend:</strong> ${appointment.day}</p>
            <hr>
          `;
          appointmentList.appendChild(appointmentDiv);
        });
      });
  }*/

  function redirectToIndex() {
    window.location.href = "/appointment.html"; // Replace with your login page URL
  }

  displayAppointments();

    