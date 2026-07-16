const form = document.getElementById("profileForm");

const display = document.getElementById("displayData");


// Load saved data

window.onload = function(){

let user = JSON.parse(localStorage.getItem("healthProfile"));


if(user){

display.innerHTML = `

<strong>Name:</strong> ${user.name}<br>

<strong>Age:</strong> ${user.age}<br>

<strong>Blood Group:</strong> ${user.blood}<br>

<strong>Height:</strong> ${user.height} cm<br>

<strong>Weight:</strong> ${user.weight} kg<br>

<strong>Allergies:</strong> ${user.allergy}<br>

<strong>Emergency Contact:</strong> ${user.contact}

`;

}

};



// Save profile

form.addEventListener("submit",function(e){

e.preventDefault();


let profile = {


name:
document.getElementById("name").value,


age:
document.getElementById("age").value,


blood:
document.getElementById("blood").value,


height:
document.getElementById("height").value,


weight:
document.getElementById("weight").value,


allergy:
document.getElementById("allergy").value,


contact:
document.getElementById("contact").value


};



localStorage.setItem(
"healthProfile",
JSON.stringify(profile)
);



alert("Profile Saved Successfully!");



location.reload();


});