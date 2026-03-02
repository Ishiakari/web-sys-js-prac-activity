const username = "admin";
const password = "admin123";

let inputUser = prompt("What's the username?");
let inputPass = prompt("What is the password?");

if (inputUser == username && inputPass == password){
    alert("Congratulations! You are Logged In");
}else if(inputUser != username) {
    alert("Mali ka dong sa imo user")
}else if(inputPass != password){
    alert("Mali ka dong sa imo pass")
}else{
    alert("MALI KA PERMI DONG!");
}



