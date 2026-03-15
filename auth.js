let users = JSON.parse(localStorage.getItem("users")) || [];

function signup(){

let username = document.getElementById("signupUser").value;
let password = document.getElementById("signupPass").value;

if(!username || !password){
document.getElementById("authMessage").innerText =
"Enter username and password";
return;
}

let existingUser = users.find(u => u.username === username);

if(existingUser){
document.getElementById("authMessage").innerText =
"Username already exists";
return;
}

let newUser = {
username: username,
password: password,
balance: 10000
};

users.push(newUser);

localStorage.setItem("users", JSON.stringify(users));

document.getElementById("authMessage").innerText =
"Account created with ₦10,000 balance";

}

function login(){

let username = document.getElementById("loginUser").value;
let password = document.getElementById("loginPass").value;

let user = users.find(u => u.username === username && u.password === password);

if(user){

localStorage.setItem("loggedUser", username);

document.getElementById("authMessage").innerText =
"Login successful";

}else{

document.getElementById("authMessage").innerText =
"Invalid login";

}

}
