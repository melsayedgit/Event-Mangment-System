let form = document.getElementById("login");
let username = form.childNodes.item(1);
let password = form.childNodes.item(3);

function Apilogin(){

fetch("http://localhost:9090/api/login",
{ body: new URLSearchParams({username:username.value,password:password.value}),method:"post"})
.then(respone => {
    if (respone.ok) {
    respone.json()  }
    else{
        console.log("Wrong Username Or Password");
    }
    })
.then(data => {
    localStorage.setItem("authToken",data.token)})
.catch(erro =>{
    console.log(erro);})
}

