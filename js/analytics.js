let healthData = JSON.parse(
localStorage.getItem("healthData")
) || [];



let dates = healthData.map(
data => data.date
);



let weights = healthData.map(
data => data.weight
);



let water = healthData.map(
data => data.water
);



let sleep = healthData.map(
data => data.sleep
);




// Weight Chart

new Chart(

document.getElementById("weightChart"),

{

type:"line",

data:{

labels:dates,

datasets:[{

label:"Weight (kg)",

data:weights,

borderColor:"#2563eb",

backgroundColor:"#93c5fd",

tension:0.4

}]

}

}

);





// Water Chart

new Chart(

document.getElementById("waterChart"),

{

type:"bar",

data:{

labels:dates,

datasets:[{

label:"Water Glasses",

data:water,

backgroundColor:"#06b6d4"

}]

}

}

);







// Sleep Chart


new Chart(

document.getElementById("sleepChart"),

{

type:"bar",

data:{

labels:dates,

datasets:[{

label:"Sleep Hours",

data:sleep,

backgroundColor:"#22c55e"

}]

}

}

);