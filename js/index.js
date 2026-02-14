const userNameElement = document.getElementById('log-username');
const passwordElement = document.getElementById('log-password');
const btnElement = document.getElementById('log-btn');
const signInElement = document.getElementById('sign-in');


function signIn() {
    const userName = userNameElement.value;
    const passWord = passwordElement.value;
    if (userName && passWord) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user.username === userName);
        if (userExists) {
            alert("Username already exists. Please choose another one.");
        } else {
            users.push({ username: userName, password: passWord });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Sign up successful! Please login.");
            window.location.href = "../../pages/home.html";
        } 
        }else {
            alert("Please fill in all fields.");
    }
}

function logIn() {
    const userName = userNameElement.value;
    const passWord = passwordElement.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = users.find(user => user.username === userName && user.password === passWord);

    if(userFound){
        localStorage.setItem('currentUser',JSON.stringify(userFound));
        alert("Login Successful!"); 
        window.location.href = "../../pages/home.html"; 
    } 
        else { alert("Invalid username or password."); 

        }
    }
 
const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", () => {

    localStorage.clear();
    sessionStorage.clear();

    alert("You have logged out successfully!");

    window.location.href = "./index.html";
  });

