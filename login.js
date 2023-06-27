var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}
function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}

    let uid=document.getElementById("user");
    let pw=document.getElementById("password");
    let mail=document.getElementById("email"); 
    // let ps=document.querySelector("#pass").value;
    // let user=document.querySelector("#username").value;
    
    
    function save(){
        localStorage.setItem("uid",uid.value);
        localStorage.setItem("mail",mail.value);
        localStorage.setItem("pw",pw.value);
    }
    
    function traverse(){
         let ps=document.querySelector("#pass").value;
    let user=document.querySelector("#username").value;
        
        let uid1=localStorage.getItem("uid");
        let pass1=localStorage.getItem("pw");
  
       
        if(user===uid1 && ps===pass1){
            console.log(window.location.origin)
            window.location.replace('/')
            
        }
        else{
            // alert("Incorrect Information");
            // window.location.href= 'index.html' ; 
            // window.location.assign("http://127.0.0.1:5500/index.html/");
            window.location.replace("https://www.google.com/");
            console.log(ps,user);
        }

    }
