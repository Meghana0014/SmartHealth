// Profile
const profile = JSON.parse(localStorage.getItem("healthProfile"));

// Health Tracker
const healthData = JSON.parse(localStorage.getItem("healthData")) || [];

// Medicines
const medicines = JSON.parse(localStorage.getItem("medicines")) || [];

// Appointments
const appointments = JSON.parse(localStorage.getItem("appointments")) || [];


// Welcome message
if (profile && profile.name) {
    document.getElementById("welcomeMessage").textContent =
        `Good Morning, ${profile.name} 👋`;
}


// Latest health record
if (healthData.length > 0) {

    const latest = healthData[healthData.length - 1];

    document.getElementById("heartRate").textContent = latest.heart;
    document.getElementById("waterIntake").textContent = latest.water;
    document.getElementById("weightValue").textContent = latest.weight;
    document.getElementById("sleepHours").textContent = latest.sleep;
}


// Medicine summary
const medicineList = document.getElementById("medicineSummary");

if (medicines.length > 0) {

    medicineList.innerHTML = "";

    medicines.forEach(medicine => {

        const li = document.createElement("li");

        li.textContent = `${medicine.name} - ${medicine.time}`;

        medicineList.appendChild(li);

    });

}


// Appointment summary
const appointmentSummary =
document.getElementById("appointmentSummary");

if (appointments.length > 0) {

    const next = appointments[0];

    appointmentSummary.innerHTML = `
        👨‍⚕️ Dr. ${next.doctor}<br>
        🏥 ${next.hospital}<br>
        📅 ${next.date}<br>
        ⏰ ${next.time}
    `;
}

const themeButton = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

// Toggle theme
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeButton.textContent = "☀️";
    }else{
        localStorage.setItem("theme","light");
        themeButton.textContent = "🌙";
    }

});