
    const div = document.getElementById("appointmentList")
const url = "http://localhost:3000/appointments"
 


function displayappointment(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.map(appointment => {
            const ul = document.createElement("ul")
            div.appendChild(ul)
            const li = document.createElement("li")
            ul.appendChild(li)
            li.innerHTML = `
            <p><strong>Name:</strong> ${appointment.name}</p>
          <p><strong>Hair Style:</strong> ${appointment.hairstyle}</p>
          <p><strong>Day to Attend:</strong> ${appointment.day}</p>
          <hr>
            
            `
            
        })
        const btn = document.createElement("button")
        btn.innerText("Delete appointments")
        div.appendChild(btn)
    })
} 
displayappointment()