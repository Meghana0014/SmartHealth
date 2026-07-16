const form = document.getElementById("appointmentForm");

const appointmentList = document.getElementById("appointmentList");



let appointments = JSON.parse(
localStorage.getItem("appointments")
) || [];




// Display appointments

function displayAppointments(){


appointmentList.innerHTML="";


appointments.forEach((appointment,index)=>{


let li=document.createElement("li");


li.className="appointment-item";


li.innerHTML=`

<div>

<strong>
👨‍⚕️ Dr. ${appointment.doctor}
</strong>

<br>

🏥 ${appointment.hospital}

<br>

📅 ${appointment.date}

<br>

⏰ ${appointment.time}

<br>

📝 ${appointment.notes}

</div>


<button 
class="delete"
onclick="deleteAppointment(${index})">

Delete

</button>

`;



appointmentList.appendChild(li);


});


}





// Add appointment

form.addEventListener("submit",function(e){


e.preventDefault();



let appointment={


doctor:
document.getElementById("doctor").value,


hospital:
document.getElementById("hospital").value,


date:
document.getElementById("date").value,


time:
document.getElementById("time").value,


notes:
document.getElementById("notes").value


};



appointments.push(appointment);



localStorage.setItem(

"appointments",

JSON.stringify(appointments)

);



form.reset();


displayAppointments();


});






// Delete appointment

function deleteAppointment(index){


appointments.splice(index,1);



localStorage.setItem(

"appointments",

JSON.stringify(appointments)

);



displayAppointments();


}





displayAppointments();