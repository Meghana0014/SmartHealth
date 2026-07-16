const form = document.getElementById("healthForm");

const result = document.getElementById("healthResult");

const historyList = document.getElementById("historyList");



let healthData = JSON.parse(
localStorage.getItem("healthData")
) || [];




// Display history

function displayHistory(){


historyList.innerHTML="";


healthData.forEach(data=>{


let li=document.createElement("li");


li.className="history-item";


li.innerHTML=`

📅 ${data.date}

<br>

⚖ Weight: ${data.weight} kg

<br>

📏 BMI: ${data.bmi}

<br>

💧 Water: ${data.water} glasses

<br>

😴 Sleep: ${data.sleep} hrs

<br>

❤️ Heart Rate: ${data.heart} BPM

`;



historyList.appendChild(li);



});


}





form.addEventListener("submit",function(e){


e.preventDefault();



let weight =
Number(document.getElementById("weight").value);



let height =
Number(document.getElementById("height").value);



let water =
document.getElementById("water").value;



let sleep =
document.getElementById("sleep").value;



let heart =
document.getElementById("heart").value;



// BMI calculation

let heightMeter = height / 100;


let bmi =
(weight / (heightMeter * heightMeter)).toFixed(2);



let record={


date:new Date().toLocaleDateString(),

weight,

bmi,

water,

sleep,

heart


};



healthData.push(record);



localStorage.setItem(

"healthData",

JSON.stringify(healthData)

);



result.innerHTML=`

<strong>Your BMI:</strong> ${bmi}

<br>

Health data saved successfully ✅

`;



form.reset();


displayHistory();


});



displayHistory();