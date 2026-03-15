let users = [];

function signup(){

let username = document.getElementById("signupUser").value;
let password = document.getElementById("signupPass").value;

users.push({username,password});

document.getElementById("authMessage").innerText =
"Account created successfully";

}

function login(){

let username = document.getElementById("loginUser").value;
let password = document.getElementById("loginPass").value;

let user = users.find(u => u.username === username && u.password === password);

if(user){
document.getElementById("authMessage").innerText =
"Login successful";
}else{
document.getElementById("authMessage").innerText =
"Invalid login";
}

  }
