let form = document.getElementById("login");
let username = form.childNodes.item(1);
let password = form.childNodes.item(3);

function Apilogin(){
console.log(username.value+ password.value);
fetch("http://localhost:9090/api/login",
{ body: new URLSearchParams({username:username.value,password:password.value}),method:"post"})
.then(respone=>  respone.json())
.then(data=> {
    localStorage.setItem("authToken",data.token)
})


}

