const form = document.getElementById("medicineForm");

const medicineList = document.getElementById("medicineList");



let medicines = JSON.parse(localStorage.getItem("medicines")) || [];



// Display medicines

function displayMedicines(){


medicineList.innerHTML="";


medicines.forEach((medicine,index)=>{


let li=document.createElement("li");


li.className="medicine-item";


li.innerHTML=`

<div>

<strong>${medicine.name}</strong>

<br>

⏰ ${medicine.time}

</div>


<button class="delete" onclick="deleteMedicine(${index})">

Delete

</button>

`;



medicineList.appendChild(li);


});


}



form.addEventListener("submit",function(e){


e.preventDefault();



let medicine={


name:
document.getElementById("medicineName").value,


time:
document.getElementById("medicineTime").value


};



medicines.push(medicine);



localStorage.setItem(

"medicines",

JSON.stringify(medicines)

);



form.reset();



displayMedicines();


});





function deleteMedicine(index){


medicines.splice(index,1);



localStorage.setItem(

"medicines",

JSON.stringify(medicines)

);



displayMedicines();


}



displayMedicines();