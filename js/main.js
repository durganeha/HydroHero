const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if(navToggle){
navToggle.addEventListener("click", () => {
navMenu.classList.toggle("show");
});
}

let user = JSON.parse(localStorage.getItem("hydroUser"));

let currentPage = window.location.pathname.split("/").pop();

if(!user && currentPage !== "index.html" && currentPage !== "signup.html"){
window.location.href = "index.html";
}

function logout(){

localStorage.removeItem("hydroUser");

window.location.href = "index.html";

}