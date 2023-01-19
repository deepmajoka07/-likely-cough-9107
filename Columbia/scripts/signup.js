let S_btn=document.getElementById("signup_submit");
let f_name=document.getElementById("F_Name");
let l_name=document.getElementById("L_Name");
let gender=document.getElementsByName("gender");
  let phone=document.getElementById("Phone");

let User_Data=JSON.parse(localStorage.getItem("login"))||[];
let login_alert=document.getElementById("Login_password_alert")
let baseurl="https://colambia-api.onrender.com";

 S_btn.addEventListener("click",(e)=>{ 
  e.preventDefault();
  let g_value="";
  for(i = 0; i < gender.length; i++) {
    if(gender[i].checked){
  
            console.log("Gender: "+gender[i].value);
            g_value=gender[i].value;
    }
  }   
  console.log(g_value);
  if(email.value!="" && pass.value!=""){
         console.log("hii");
              fetch(`${baseurl}/users`,{
                  method:'POST',
                  headers: {
                      'Content-Type': 'application/json'
                      
                    },
                    body: JSON.stringify({
                        "email":email.value,
                        "password":pass.value,
                        "name":f_name.value+" "+l_name.value,
                        "gender":g_value ,
                        "Phone":phone.value
                      })
              }) .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
                getData();
                document.getElementById("success").style.display="block";
              })
              .catch((error) => {
                console.log('Error:', error);
              });

                  
      }
    }
    )
  
      

 
 async function getData() {
   let res=await fetch(`${baseurl}/users`) 
   let data=await res.json();
   // console.log(data);
    localStorage.setItem("login",JSON.stringify(data))
 }

 getData();
 function login(){
   let email=document.getElementById("L-email").value;
   let pass=document.getElementById("L-password").value;
   let is=false;
   console.log(User_Data,email,pass);
   User_Data.filter((el)=>{
     if(el.email===email && el.password===pass){
        is=true;
      localStorage.setItem("user_login",JSON.stringify(el));
     }
     
     
   })
   if(is){
  document.getElementById("para").innerText=`Welcome ${email}`
  document.getElementById("login_success").style.display="block"
  document.getElementById("Login_password_alert").style.display="none"
   }
   else
    document.getElementById("Login_password_alert").style.display="flex"
 }
 email.addEventListener("focusout",(e)=>{
      User_Data.filter((el)=>{
        if(el.email===email.value){
          document.getElementById(`${e.target.id}_warning`).innerText = `Already Login`;
        }
      })
 })