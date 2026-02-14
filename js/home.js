/*const hearderImage = document.getElementById("headerimg");
hearderImage.addEventListener("mouseover", function() {
    hearderImage.src = "./image/puzzle-angry.gif";
});

hearderImage.addEventListener("mouseout", function() {
    hearderImage.src = "./image/artificial-intelligence.png";
});*/

document.getElementById("logout-btn").addEventListener("click", () => {

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully!");

    window.location.href = "../index.html";
  });

const loginNameElement = document.getElementById('login-name');
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    loginNameElement.textContent = ` ${currentUser.username}`;
    loginNameElement.parentElement.setAttribute("href", "#");
} else {
    loginNameElement.textContent = "Log in";
}



