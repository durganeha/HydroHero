/* =========================
   HYDROHERO USER DATA
========================= */

let userData = {
waterSaved: 0,
points: 0,
challengesCompleted: 0,
streak: 0,
todayWater: 0,
weekWater: 0
};


/* =========================
   LOAD SAVED DATA
========================= */

function loadUserData(){

let saved = localStorage.getItem("hydroHeroData");

if(saved){
userData = JSON.parse(saved);
}

/* Ensure defaults exist */

userData.waterSaved = userData.waterSaved || 0;
userData.points = userData.points || 0;
userData.challengesCompleted = userData.challengesCompleted || 0;
userData.streak = userData.streak || 0;
userData.todayWater = userData.todayWater || 0;
userData.weekWater = userData.weekWater || 0;

}


/* =========================
   SAVE DATA
========================= */

function saveUserData(){

    localStorage.setItem("hydroHeroData", JSON.stringify(userData));

}


/* =========================
   UPDATE DASHBOARD UI
========================= */

function updateDashboard(){

let waterCounter = document.getElementById("waterCounter");
let todayWater = document.getElementById("todayWater");
let weekWater = document.getElementById("weekWater");
let streakCounter = document.getElementById("streakCounter");
let pointsCounter = document.getElementById("pointsCounter");

if(waterCounter){
waterCounter.innerText = (userData.waterSaved || 0)  + " L";
}

if(todayWater){
todayWater.innerText = (userData.todayWater || 0) + " L";
}

if(weekWater){
weekWater.innerText = (userData.weekWater || 0) + " L";
}

if(streakCounter){
streakCounter.innerText = (userData.streak || 0) + " Days";
}

if(pointsCounter){
pointsCounter.innerText = (userData.points || 0);
}

updateLevel();

}

/* =========================
   BADGE UNLOCKING SYSTEM
========================= */

function checkBadges(){

    /* FIRST CHALLENGE */

    if(userData.challengesCompleted >= 1){
        unlockBadge("firstDrop");
    }

    /* SAVE 50L */

    if(userData.waterSaved >= 50){
        unlockBadge("waterSaver");
    }

    /* COMPLETE 5 CHALLENGES */

    if(userData.challengesCompleted >= 5){
        unlockBadge("ecoHero");
    }

    /* 200 POINTS */

    if(userData.points >= 200){
        unlockBadge("champion");
    }

    /* SAVE 100L */

    if(userData.waterSaved >= 100){
        unlockBadge("centurion");
    }

    /* 500 POINTS */

    if(userData.points >= 500){
        unlockBadge("streakMaster");
    }

}


/* =========================
   UNLOCK BADGE FUNCTION
========================= */

function unlockBadge(id){

    let badge = document.getElementById(id);

    if(badge){
        badge.classList.remove("locked");
    }

}

/* =========================
   UPDATE LEVEL BASED ON POINTS
========================= */
function updateLevel(){

let level = 1;
let progress = 0;
let nextLevelPoints = 100;

if(userData.points >= 500){
level = 4;
progress = 100;
nextLevelPoints = 0;
}
else if(userData.points >= 250){
level = 3;
progress = ((userData.points - 250)/250)*100;
nextLevelPoints = 500 - userData.points;
}
else if(userData.points >= 100){
level = 2;
progress = ((userData.points - 100)/150)*100;
nextLevelPoints = 250 - userData.points;
}
else{
level = 1;
progress = (userData.points/100)*100;
nextLevelPoints = 100 - userData.points;
}

document.getElementById("levelNumber").innerText = "Level " + level;

progress = Math.min(progress,100);
document.getElementById("levelProgress").style.width =
progress + "%";

document.getElementById("nextLevelText").innerText =
nextLevelPoints + " pts to next level";

}


/* =========================
   CHALLENGE COMPLETION
   (CALLED FROM CHALLENGE PAGE)
========================= */

function completeChallenge(waterSaved, pointsEarned){

loadUserData();

userData.waterSaved += waterSaved;
userData.points += pointsEarned;
userData.challengesCompleted += 1;
userData.streak += 1;

userData.todayWater += waterSaved;
userData.weekWater += waterSaved;

saveUserData();

}

// WATER COUNTER ANIMATION

function animateWaterCounter(){

let counter = document.getElementById("waterCounter");

if(!counter) return;

let target = userData.waterSaved || 0;
let current = 0;

let step = Math.max(1, Math.ceil(target / 40));

let interval = setInterval(()=>{

current += step;

if(current >= target){
current = target;
clearInterval(interval);
}

counter.innerText = current + " L";

},20);

}   


// CHART.JS GRAPH

const ctx = document.getElementById('waterChart').getContext('2d');

new Chart(ctx,{
type:'line',

data:{
labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],

datasets:[{
label:'Water Saved (L)',

data:[5,8,6,10,12,9,14],

borderColor:'#1CA3EC',

backgroundColor:'rgba(28,163,236,0.2)',

tension:0.4,

fill:true

}]
},

options:{
plugins:{
legend:{display:false}
},

scales:{
y:{
beginAtZero:true
}
}
}

});



/* =========================
   DASHBOARD INITIALIZATION
========================= */
function initDashboard(){

loadUserData();

updateDashboard();

animateWaterCounter();

checkBadges();

}

/* =========================
   RUN WHEN PAGE LOADS
========================= */

document.addEventListener("DOMContentLoaded", initDashboard);
