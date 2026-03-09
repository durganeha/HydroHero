async function loadLeaderboard() {

    const response = await fetch("data/leaderboard.json");
    const data = await response.json();

    renderHero(data.heroOfWeek);
    renderCommunities(data.communities);
    renderUsers(data.users);
}

function renderHero(hero){

    const heroCard = document.getElementById("heroCard");

    heroCard.innerHTML = `
        <h2>👑 Water Hero of the Week</h2>
        <h1>${hero.name}</h1>

        <div class="hero-stats">
            ⭐ ${hero.points} pts
            💧 ${hero.waterSaved}L
            ✅ ${hero.challenges}
        </div>
    `;
}


function renderCommunities(list){

    const container = document.getElementById("communitiesList");

    list.forEach((item, index)=>{

        const row = document.createElement("div");

        row.className="leaderboard-row";

        row.innerHTML = `
    <span class="leaderboard-rank">${index+1}</span>
    <span class="leaderboard-name">${item.name}</span>
    <span class="leaderboard-score">${item.water}L</span>
`;

        container.appendChild(row);

    });
}


function renderUsers(list){

    const container = document.getElementById("usersList");

    list.forEach((user,index)=>{

        const row=document.createElement("div");

        row.className="leaderboard-row";

        row.innerHTML = `
    <span class="leaderboard-rank">${index+1}</span>
    <span class="leaderboard-name">${user.name}</span>
    <span class="leaderboard-score">${user.points} pts</span>
`;

        container.appendChild(row);

    });
}


loadLeaderboard();