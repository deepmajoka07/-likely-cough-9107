let id="";
// let Email=document.getElementById("v-email").value;

console.log(Email);
async function getId(){
    let res=await fetch("https://colambia-api.onrender.com/users")
   let data=await res.json();
   console.log(data);
     data.map((el)=>{
        console.log(id);
                if(el.email=="jasveerkour31@gmail.com"){
                    id=el.id;
                    console.log(id);
                }
     })
}
getId()
document.getElementById("updatepassword").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(id);
    let pass=document.getElementById("N-password").value
    updatePass(pass)
})
async function updatePass(pass){
 
   
    let res=await fetch(`https://colambia-api.onrender.com/users/${id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
            
          },
          body:JSON.stringify({
              "Password":pass
          })
    }).then((result)=>{
        result.json
    }).then(data=>{console.log(data);
        window.location.href = "./Signup.html";
    })
 
}