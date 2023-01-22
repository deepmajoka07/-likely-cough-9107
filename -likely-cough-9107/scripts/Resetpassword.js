let id="";
// let Email=document.getElementById("v-email").value;
let pass=document.getElementById("N-password").value
console.log(Email);
async function getId(){
    let res=await fetch("https://colambia-api.onrender.com/users")
   let data=await res.json();
     data.map((el)=>{
                if(el.email===email){
                    id=el.id;
                }
     })
}
getId()
async function updatePass(){
    let res=await fetch(`https://colambia-api.onrender.com/users/${id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
            
          },
          body:JSON.stringify({
              "password":pass
          })
    }).then((result)=>{
        result.json
    }).then(data=>{console.log(data);
        window.location.href = "./User_Admin.html";
    })

}