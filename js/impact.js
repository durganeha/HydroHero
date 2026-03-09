document.addEventListener("DOMContentLoaded", function () {

const ctx = document.getElementById('impactWeeklyChart');

new Chart(ctx, {
type: 'line',
data: {
labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
datasets: [{
data: [320,450,280,520,390,610,480],
borderColor: '#1CA3EC',
backgroundColor: 'rgba(28,163,236,0.15)',
fill: true,
tension: 0.4
}]
},
options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}

});

});